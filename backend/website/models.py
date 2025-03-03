from django.db import models
from django.contrib.auth.models import User
from rooms.models import Booking
from event.models import EventBooking
from django.db.models.signals import post_save
from django.dispatch import receiver


class Review(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    review_text=models.TextField(null=True)
    rating=models.IntegerField(default=1)
    room_booking=models.ForeignKey(Booking,on_delete=models.SET_NULL,null=True)
    event_booking=models.ForeignKey(EventBooking,on_delete=models.SET_NULL,null=True)
    add_time=models.DateTimeField(auto_now_add=True)

class Contact(models.Model):
    full_name=models.CharField(max_length=200,null=True)
    email=models.CharField(max_length=200,null=True)
    mobile=models.CharField(null=True)
    message=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)

class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    profile_image=models.ImageField(upload_to='profile_imgs/')
    mobile=models.CharField(max_length=12)

@receiver(post_save, sender=models)
def create_user_profile(sender, instance, create, **kwargs):
    if create:
        Profile.objects.create(user=instance)
class Career(models.Model):
    full_name=models.CharField(max_length=200,null=True)
    email=models.CharField(max_length=200,null=True)
    mobile=models.CharField(null=True)
    message=models.TextField()
    update_cv=models.FileField(upload_to='cv_files/')
    add_time=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_clean

class Banners(models.Model):
    title=models.CharField(max_length=200,null=True)
    image=models.ImageField(upload_to='banner_imgs/')

    def __str__(self):
        return self.title
    
    class Meta:
        db_table='banners'

class ControlPanel(models.Model):
    logo=models.ImageField(upload_to='logo_imgs/')