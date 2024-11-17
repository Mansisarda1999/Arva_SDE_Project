from django.urls import path, re_path
from Arva_SDE_App import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    # Endpoint to handle all demofield requests
    path('demo_field', views.demofieldApi),  # Matches /demofield
    re_path(r'^demo_field/([a-z A-Z0-9]+)$', views.demofieldApi),  # Matches /demofield/<id>
] 
# + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
