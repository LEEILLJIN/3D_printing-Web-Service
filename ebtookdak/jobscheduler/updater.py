from datetime import datetime
from apscheduler.schedulers.background import BackgroundScheduler
from .jobscheduler import ScheduleApi
from collections import deque
from tookdak import tests

# 세마포어에 쓰일 deque 만듦
job_queue = deque()

# 지점 개수(RPI 개수) job_queue[지점번호][작업 큐 인덱스] = 작업파일명
store_cnt = 2

#각 지점별(RPI)당 프린터가 몇대인가(store_cnt 값이 idx)
printer_cnt = [1,1]

# 세마포어 작업 큐 초기화
for i in range(store_cnt):
    job_queue.append(deque())

# self made func

def JobAdd(store_number, file_name) :
    job_queue[store_number].append(file_name)

def IsPossibleToStart(store_number, printer_number) :
    if len(job_queue[store_number]) != 0:
        from tookdak.backend.tests import GetPrinterStatus
        flag_ready = bool(GetPrinterStatus(store_number,printer_number)['state']['flags']['ready'])
        flag_operational = bool(GetPrinterStatus(store_number,printer_number)['state']['flags']['operational'])
        if flag_ready or flag_operational:
            return True
        else :
            return False

def JobStart(store_num,print_num) :
    file_name = job_queue[store_num][0]
    job_queue[store_num].popleft()
    from tookdak.backend.tests import LeePrintStartTest
    LeePrintStartTest(store_num,print_num,file_name)

# 이 과정이 자원소모가 심할 것 같다.
def QueueSearchAndStart():
    for i in range(store_cnt):
        for j in range(printer_cnt[i]):
            if IsPossibleToStart(i,j)  :
                JobStart(i,j)



def Start():
    scheduler = BackgroundScheduler()
    scheduler.add_job(ScheduleApi, 'interval', seconds=5, id = 'test')
    scheduler.start()
    




