from django.urls import path
from . import views

urlpatterns = [
    path('room-types/', views.RoomTypeListView.as_view()),
    path('room-types/<int:pk>', views.RoomTypeDetailView.as_view())
]