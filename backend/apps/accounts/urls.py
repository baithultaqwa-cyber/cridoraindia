from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from apps.accounts.api_auth import LoginAPIView, LogoutAPIView, RegisterAPIView
from apps.accounts.views import MeView

urlpatterns = [
    path('login/', LoginAPIView.as_view(), name='api-login'),
    path('register/', RegisterAPIView.as_view(), name='api-register'),
    path('logout/', LogoutAPIView.as_view(), name='api-logout'),
    path('token/', obtain_auth_token, name='api-token'),
    path('me/', MeView.as_view(), name='api-me'),
]
