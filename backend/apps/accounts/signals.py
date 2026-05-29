from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

from apps.accounts.models import UserProfile, UserRole


@receiver(post_save, sender=User)
def ensure_profile(sender, instance, **kwargs):
    if UserProfile.objects.filter(user=instance).exists():
        return
    UserProfile.objects.create(
        user=instance,
        display_name=instance.get_full_name() or instance.username,
        role=UserRole.ADMIN if instance.is_superuser else UserRole.CONSUMER,
    )
