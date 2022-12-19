from rest_framework import serializers
from .models import Tookdak

class TookdakSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tookdak
        fields = ('file_name', 'hour', 'min', 'sec')