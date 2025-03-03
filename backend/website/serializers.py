from rest_framework import serializers
from . import models

class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Banners
        fields=['id','title','image']