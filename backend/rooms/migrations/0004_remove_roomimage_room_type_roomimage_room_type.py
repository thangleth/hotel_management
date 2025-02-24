# Generated by Django 5.1.6 on 2025-02-24 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0003_gallery_roomimage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='roomimage',
            name='room_type',
        ),
        migrations.AddField(
            model_name='roomimage',
            name='room_type',
            field=models.ManyToManyField(to='rooms.roomtype'),
        ),
    ]
