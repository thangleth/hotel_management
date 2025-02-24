# Generated by Django 5.1.6 on 2025-02-24 15:27

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='EventType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('detail', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='KNICK_Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_detail', models.TextField()),
                ('booking_date', models.DateTimeField(auto_now_add=True)),
                ('total_guest', models.IntegerField()),
                ('event_date', models.DateField()),
                ('booking_amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('booking_detail', models.JSONField(blank=True, null=True)),
                ('event_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.eventtype')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
