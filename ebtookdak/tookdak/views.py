# from django.shortcuts import render
import time
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Tookdak
from .serializers import TookdakSerializer
from django.http import HttpResponse
from django.shortcuts import render
import sys
sys.path.append('tookdak/')   # this line intend to call backend folder.
import backend.tests as test
from jobscheduler import updater

    

def home(request):
    return render(request, "index.html")
# Create your views here.

################
### FRONTEND ###
################



def index(request):

    # filename = 'a'
    # filename = test.LeeSlicingTest(filename) # 파일이름 gcode 파일명으로 갱신
    # time.sleep(10)
    # test.LeePrintStartTest(1,filename)
    updater.JobAdd(0,'a')
    return HttpResponse(str(request)+"  success!")




################
### BACKEND ###
################


@api_view(['GET'])
def HelloAPI(request):
    updater.job_queue[0].popleft()
    return Response("Hello world!")

@api_view(['GET'])
def Slicing(request,filename):
    # test.LeeSlicingTest(filename)
    return Response("Slicing Success!")

@api_view(['GET'])
def GetPrintTime(request, filename):
    # result = test.LeeGetPrintTime(filename)
    # time_info = Tookdak.objects.get(file_name = filename)
    time_info = test.GetPrintTime(filename)
    # result = TookdakSerializer(time_info)
    return Response(str(time_info))

@api_view(['GET'])
def StartPrint(request, store_number,printer_number ,filename):
    # 결제가 되었을때(gocode파일은 이미 있음)를 가정 (점포 넘버, 파일이름)
    # 파일이름은 유니크해야됨
    updater.JobAdd(0,filename) 
    # test.LeePrintStartTest(store_number,printer_number,filename)
    return Response(str(store_number)+"번 점포 "+str(printer_number)+"번 printer에서 "+str(filename)+"파일 Printing stared")
