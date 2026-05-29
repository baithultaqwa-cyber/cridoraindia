from django.contrib.auth.models import User
from rest_framework import serializers

from apps.accounts.models import UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = (
            'role',
            'display_name',
            'phone',
            'city',
            'shop_name',
            'kyc_status',
        )


class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'profile')
