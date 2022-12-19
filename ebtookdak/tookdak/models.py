from django.db import models

# Create your models here.
class Tookdak(models.Model):
    file_name = models.CharField(max_length=200)
    hour = models.IntegerField(null = True, default=0)
    min = models.IntegerField(null = True, default=0)
    sec = models.IntegerField(null = True, default=0)



