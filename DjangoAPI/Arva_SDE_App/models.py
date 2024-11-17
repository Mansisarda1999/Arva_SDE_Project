from django.db import models

# Create your models here.

class demo_field(models.Model):
    id = models.AutoField(primary_key=True)
    field_name = models.CharField(max_length=255)
    acreage = models.FloatField()
    owner_name = models.CharField(max_length=255, blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    crop_type = models.CharField(max_length=255, blank=True, null=True)
    soil_type = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    # def __str__(self):
    #     return self.field_name