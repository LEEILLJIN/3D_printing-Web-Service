from django.contrib import admin
from django.urls import include, path
from tookdak import views

urlpatterns = [
    path('tookdak/', include('tookdak.urls')),
    path('', include('tookdak.urls')),
    path('admin/', admin.site.urls),
    path('',views.home)
]