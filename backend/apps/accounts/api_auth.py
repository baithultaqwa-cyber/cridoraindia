from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.accounts.models import UserProfile, UserRole
from apps.accounts.serializers import UserSerializer


def _resolve_user(identifier: str) -> User | None:
    key = (identifier or '').strip()
    if not key:
        return None
    if '@' in key:
        return User.objects.filter(email__iexact=key).first()
    return User.objects.filter(username__iexact=key).first() or User.objects.filter(email__iexact=key).first()


class LoginAPIView(APIView):
    """JSON login: email (or username) + password; optional expected_role must match profile.role."""

    authentication_classes = []
    permission_classes = [AllowAny]

    def post(self, request):
        email = (request.data.get('email') or request.data.get('username') or '').strip()
        password = request.data.get('password') or ''
        expected_role = request.data.get('expected_role')

        user = _resolve_user(email)
        if not user or not user.check_password(password):
            return Response({'detail': 'Invalid email or password.'}, status=status.HTTP_400_BAD_REQUEST)

        profile = getattr(user, 'profile', None)
        if not profile:
            UserProfile.objects.create(
                user=user,
                display_name=user.get_full_name() or user.username,
                role=UserRole.ADMIN if user.is_superuser else UserRole.CONSUMER,
            )
            profile = user.profile

        if expected_role and profile.role != expected_role:
            return Response(
                {
                    'detail': 'This account type does not match the role you selected.',
                    'actual_role': profile.role,
                },
                status=status.HTTP_403_FORBIDDEN,
            )

        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user': UserSerializer(user).data})


class RegisterAPIView(APIView):
    authentication_classes = []
    permission_classes = [AllowAny]

    def post(self, request):
        email = (request.data.get('email') or '').strip().lower()
        password = request.data.get('password') or ''
        display_name = (request.data.get('display_name') or '').strip()
        phone = (request.data.get('phone') or '').strip()
        city = (request.data.get('city') or '').strip()
        account_kind = (request.data.get('account_kind') or 'consumer').strip()

        if not email or '@' not in email:
            return Response({'detail': 'Valid email required.'}, status=status.HTTP_400_BAD_REQUEST)
        if len(password) < 8:
            return Response({'detail': 'Password must be at least 8 characters.'}, status=status.HTTP_400_BAD_REQUEST)
        if not display_name:
            return Response({'detail': 'Display name required.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username__iexact=email).exists() or User.objects.filter(email__iexact=email).exists():
            return Response({'detail': 'An account with this email already exists.'}, status=status.HTTP_400_BAD_REQUEST)

        parts = display_name.split(maxsplit=1)
        first_name = parts[0]
        last_name = parts[1] if len(parts) > 1 else ''

        if account_kind == 'merchant':
            shop_name = (request.data.get('shop_name') or '').strip()
            if not shop_name:
                return Response({'detail': 'Shop name is required for jeweller accounts.'}, status=status.HTTP_400_BAD_REQUEST)
            as_admin = bool(request.data.get('as_admin', True))
            role = UserRole.MERCHANT_ADMIN if as_admin else UserRole.MERCHANT_STAFF
            if not city:
                city = ''
        else:
            shop_name = ''
            role = UserRole.CONSUMER
            digits = ''.join(c for c in phone if c.isdigit())
            if len(digits) < 10:
                return Response({'detail': 'Valid 10-digit phone required.'}, status=status.HTTP_400_BAD_REQUEST)
            if not city:
                return Response({'detail': 'City required.'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(
            username=email,
            email=email,
            password=password,
            first_name=first_name[:150],
            last_name=last_name[:150],
        )
        profile = user.profile
        profile.display_name = display_name
        profile.phone = phone
        profile.city = city
        profile.shop_name = shop_name
        profile.role = role
        profile.kyc_status = 'pending'
        profile.save()

        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user': UserSerializer(user).data}, status=status.HTTP_201_CREATED)


class LogoutAPIView(APIView):
    """Invalidate the current API token (server-side logout)."""

    permission_classes = [IsAuthenticated]

    def post(self, request):
        Token.objects.filter(user=request.user).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
