from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from Arva_SDE_App.models import demo_field
from Arva_SDE_App.serializers import demofieldSerializer

from django.core.files.storage import default_storage

# Create your views here.

@csrf_exempt
def demofieldApi(request,id=0):
    if request.method=='GET':
        dfield = demo_field.objects.all()
        demo_fieldSerializer=demofieldSerializer(dfield,many=True)
        return JsonResponse(demo_fieldSerializer.data,safe=False)
    elif request.method=='POST':
        demo_field_data=JSONParser().parse(request)
        demo_fieldSerializer=demofieldSerializer(data=demo_field_data)
        if demo_fieldSerializer.is_valid():
            demo_fieldSerializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        demo_field_data=JSONParser().parse(request)
        dfield=demo_field.objects.get(id=demo_field_data['id'])
        demo_fieldSerializer=demofieldSerializer(dfield,data=demo_field_data)
        if demo_fieldSerializer.is_valid():
            demo_fieldSerializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        demofield=demo_field.objects.get(id=id)
        demofield.delete()
        return JsonResponse("Deleted Successfully",safe=False)
    


@csrf_exempt
def SaveFile(request):
    file=request.FILES['file']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)