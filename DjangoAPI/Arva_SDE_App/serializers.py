from rest_framework import serializers
from Arva_SDE_App.models import demo_field

class demofieldSerializer(serializers.ModelSerializer):
    class Meta:
        model = demo_field
        fields = ('id',
            'field_name', 
                'acreage', 
                'owner_name', 
                'location', 
                'description', 
                'crop_type', 
                'soil_type', 
                'created_at', 
                'updated_at')
        