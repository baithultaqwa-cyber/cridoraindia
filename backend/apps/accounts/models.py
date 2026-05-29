from django.conf import settings
from django.contrib.auth.models import User
from django.db import models


class UserRole(models.TextChoices):
    CONSUMER = 'consumer', 'Consumer'
    MERCHANT_STAFF = 'merchant_staff', 'Merchant staff'
    MERCHANT_ADMIN = 'merchant_admin', 'Merchant admin'
    ADMIN = 'admin', 'Cridora admin'


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    role = models.CharField(max_length=32, choices=UserRole.choices, default=UserRole.CONSUMER)
    display_name = models.CharField(max_length=120, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    city = models.CharField(max_length=80, blank=True)
    shop_name = models.CharField(max_length=160, blank=True)
    kyc_status = models.CharField(max_length=32, blank=True, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self) -> str:
        return f'{self.user.username} ({self.role})'
