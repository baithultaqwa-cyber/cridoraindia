import os

from django.contrib.auth.models import User
from django.core.management.base import BaseCommand

from apps.accounts.models import UserProfile, UserRole

ACCOUNTS = [
    {
        'email': 'django_admin@cridora.test',
        'name': 'Django Superuser',
        'role': UserRole.ADMIN,
        'is_staff': True,
        'is_superuser': True,
        'shop_name': '',
        'phone': '',
        'city': 'Mumbai',
        'kyc': 'verified',
    },
    {
        'email': 'ops@cridora.test',
        'name': 'Ops Admin',
        'role': UserRole.ADMIN,
        'is_staff': False,
        'is_superuser': False,
        'shop_name': '',
        'phone': '',
        'city': 'Mumbai',
        'kyc': 'verified',
    },
    {
        'email': 'saver@cridora.test',
        'name': 'Test Saver',
        'role': UserRole.CONSUMER,
        'is_staff': False,
        'is_superuser': False,
        'shop_name': '',
        'phone': '9999900001',
        'city': 'Bengaluru',
        'kyc': 'pending',
    },
    {
        'email': 'jeweller@cridora.test',
        'name': 'Jeweller Owner',
        'role': UserRole.MERCHANT_ADMIN,
        'is_staff': False,
        'is_superuser': False,
        'shop_name': 'Demo Gold — Hyderabad',
        'phone': '9999900002',
        'city': 'Hyderabad',
        'kyc': 'verified',
    },
    {
        'email': 'counter@cridora.test',
        'name': 'Counter Staff',
        'role': UserRole.MERCHANT_STAFF,
        'is_staff': False,
        'is_superuser': False,
        'shop_name': 'Demo Gold — Hyderabad',
        'phone': '9999900003',
        'city': 'Hyderabad',
        'kyc': 'verified',
    },
]


class Command(BaseCommand):
    help = 'Create or update demo users for Cridora dashboards and Django admin (idempotent).'

    def add_arguments(self, parser) -> None:
        parser.add_argument(
            '--password',
            default=os.environ.get('CRIDORA_SEED_PASSWORD', 'CridoraDemo2026!'),
            help='Password for all seeded accounts (default: env CRIDORA_SEED_PASSWORD or CridoraDemo2026!)',
        )

    def handle(self, *args, **options) -> None:
        password = options['password']
        for row in ACCOUNTS:
            email = row['email']
            name_parts = row['name'].split(maxsplit=1)
            first = name_parts[0]
            last = name_parts[1] if len(name_parts) > 1 else ''

            user, _created = User.objects.update_or_create(
                username=email,
                defaults={
                    'email': email,
                    'first_name': first[:150],
                    'last_name': last[:150],
                    'is_staff': row['is_staff'],
                    'is_superuser': row['is_superuser'],
                    'is_active': True,
                },
            )
            user.set_password(password)
            user.save()

            profile, _ = UserProfile.objects.get_or_create(
                user=user,
                defaults={
                    'display_name': row['name'],
                    'role': row['role'],
                    'phone': row['phone'],
                    'city': row['city'],
                    'shop_name': row['shop_name'],
                    'kyc_status': row['kyc'],
                },
            )
            profile.display_name = row['name']
            profile.role = row['role']
            profile.phone = row['phone']
            profile.city = row['city']
            profile.shop_name = row['shop_name']
            profile.kyc_status = row['kyc']
            profile.save()

            self.stdout.write(self.style.SUCCESS(f'Seeded {email} ({row["role"]})'))

        self.stdout.write(self.style.SUCCESS('Done. Match the role tab on /auth/login to each account.'))
        self.stdout.write(
            'Django admin /admin/: sign in as django_admin@cridora.test (username = full email).'
        )
