from rest_framework.generics import ListAPIView,RetrieveAPIView
from . import serializers
from . import models

class RoomTypeListView(ListAPIView):
    serializer_class=serializers.RoomTypeSerializer
    queryset=models.RoomType.objects.all()

class RoomTypeDetailView(RetrieveAPIView):
    queryset=models.RoomType.objects.all()
    serializer_class=serializers.RoomTypeSerializer