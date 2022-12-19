from django.urls import path

from . import views

urlpatterns = [
     # path('', views.index, name='index'),
    path('', views.home),
    path('printstart', views.index, name='printstart'),
    path('', views.index, name='index'),
    path('hello/',views.HelloAPI, name='HelloAPI' ),
    path('slicing/<str:filename>/',views.Slicing),
    path('getprinttime/<str:filename>/',views.GetPrintTime ),
    path('startprint/<int:printer_num>&<str:filename>/',views.StartPrint ),
]