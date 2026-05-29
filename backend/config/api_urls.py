from django.urls import include, path

from apps.core.views import HealthView

urlpatterns = [
    path('health/', HealthView.as_view(), name='api-health'),
    path('auth/', include('apps.accounts.urls')),
]
