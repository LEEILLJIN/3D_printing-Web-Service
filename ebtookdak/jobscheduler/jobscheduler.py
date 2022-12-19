from django.conf import settings
import requests
import json
import random
from collections import deque
from jobscheduler import updater



def ScheduleApi() :
    updater.QueueSearchAndStart()
    # print(updater.job_queue)
    # print(len(updater.job_queue[0]))