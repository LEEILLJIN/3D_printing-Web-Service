import os
import subprocess
from octorest import OctoRest, WorkflowAppKeyRequestResult
from urllib import parse as urlparse
from contextlib import contextmanager
import sys
sys.path.append('tookdak/')   # this line intend to call backend folder.
import backend.slicing as slicing
import threading, time
import concurrent.futures



##########################
### SELF MADE FUNCTION ###
##########################

def leetest():
    client  = make_client("http://114.70.21.171:5000/","08E4BE03835A4951B89DC40696B8153D") # 잘 연결된다
    client2  = make_client("http://114.70.21.171:5050/","08E4BE03835A4951B89DC40696B8153D") # 잘 연결된다
    file = "One_Hand_Book_Holder_0.2mm_PETG_MK3S_29m.gcode"
    example_upload_and_start(client,file)
    time.sleep(10)
    example_cancel_and_delete(client,file)

def LeeSlicingTest(filename):
    # x = threading.Thread(target=slicing.slicing_test, args=(filename))
    # x.start()
    with concurrent.futures.ThreadPoolExecutor(max_workers = 1) as executor:
        executor.submit(slicing.slicing_test, filename)

def LeeGetPrintTime(filename):
    # x = threading.Thread(target=slicing.slicing_test, args=(filename))
    # x.start()
    with concurrent.futures.ThreadPoolExecutor(max_workers = 1) as executor:
        result = executor.submit(slicing.ReturnPrintTime, filename)
    
    return str(result)

def LeePrintStartTest(store_number,printer_number,filename):
    # printer_number : 1 - jo's / 2 - lee's
    if store_number == 0 and printer_number == 0:
        client  = make_client("http://114.70.21.171:5000/","08E4BE03835A4951B89DC40696B8153D") # 잘 연결된다
    elif store_number == 1 and printer_number == 0:
        client  = make_client("http://114.70.21.171:5050/","08E4BE03835A4951B89DC40696B8153D") # 잘 연결된다
    x = threading.Thread(target=example_upload_and_start, args=(client,filename))
    x.start()

def GetPrintTime(file_name) :
    print_time = slicing.ReturnPrintTime(file_name)
    return str(print_time)



def testcode():

    pwd = os.getcwd()
    pwd2 = os.getcwd()
    slicer_profile_path = 'tookdak/slicer_profiles/'
    source_file_path = 'tookdak/source_files/'
    gcode_file_path = 'tookdak/gcode_files/'
    prusa_slicer_path = '/var/lib/snapd/snap/bin/'
    # prusa_slicer_execute_path = 'sudo /var/lib/snapd/snap/bin/prusa-slicer '
    # data = subprocess.getoutput(prusa_slicer_execute_path+'--help')
    check1 = subprocess.getoutput('whoami')
    check2= subprocess.getoutput('id')
    # x = threading.Thread(target=slicing.slicing_test, args=('a'))
    # x.start()
    result = slicing.slicing_test('a')
    client  = make_client("http://114.70.21.171:5000/","08E4BE03835A4951B89DC40696B8153D") # 잘 연결된다
    client2  = make_client("http://114.70.21.171:5050/","08E4BE03835A4951B89DC40696B8153D") # 잘 연결된다
    file = "One_Hand_Book_Holder_0.2mm_PETG_MK3S_29m.gcode"
    stl_file = "One_Hand_Book_Holder_0.2mm_PETG_MK3S_29m.stl"
    # example_upload(client,stl_file)
    # jjy_result = slicing.slicing_test(client,stl_file)


    # return str(jjy_result)+"     ewqewq"
    return "     ewqewq"
    


def example_upload_and_start(client,file_name):
    
    tookdak_path = "tookdak/gcode_files/"+file_name+".gcode"
    octo_path = "local/"+file_name+".gcode"
    client.upload(tookdak_path)
    # client.select(octo_path)
    # client.start()

def example_upload(client,file_name):
    
    tookdak_path = "tookdak/gcode_files/"+file_name+".gcode"
    octo_path = "local/"+file_name+".gcode"
    client.upload(tookdak_path)

def GetPrinterStatus(store_number,printer_number):
    if store_number == 0 and printer_number == 0:
        client  = make_client("http://114.70.21.171:5000/","08E4BE03835A4951B89DC40696B8153D") # 잘 연결된다
    elif store_number == 1 and printer_number == 0:
        client  = make_client("http://114.70.21.171:5050/","08E4BE03835A4951B89DC40696B8153D") # 잘 연결된다
    
    status = client.printer()

    # how to use

    #flags
    # flag_error = bool(status['state']['flags']['error'])
    # flag_cancelling = bool(status['state']['flags']['cancelling'])
    # flag_finishing = bool(status['state']['flags']['finishing'])
    # flag_operational = bool(status['state']['flags']['operational'])
    # flag_paused = bool(status['state']['flags']['paused'])
    # flag_pausing = bool(status['state']['flags']['pausing'])
    # flag_printing = bool(status['state']['flags']['printing'])
    # flag_ready = bool(status['state']['flags']['ready'])
    # flag_resuming = bool(status['state']['flags']['resuming'])
    # flag_sdReady = bool(status['state']['flags']['sdReady'])

    #text
    # text_state = str(status['state']['text'])

    #temp_status
    # temp_actual_bed = float(status['temperature']['bed']['actual'])
    # temp_target_bed = float(status['temperature']['bed']['target'])
    # temp_actual_nozzle = float(status['temperature']['tool0']['actual'])
    # temp_target_nozzle = float(status['temperature']['tool0']['target'])


    return status

def example_cancel_and_delete(client,file_name):
    client.cancel()
    x = threading.Thread(target=wait_and_delete, args=(client,file_name))
    x.start()

def wait_and_delete(client,file_name):
    status = printer_status(client)
    while bool(status['state']['flags']['cancelling']) :
        time.sleep(20)
        status = printer_status(client)
    time.sleep(5)
    client.delete("local/"+file_name)
    time.sleep(5)
    move_axis_for_demonstration(client)

def move_axis_for_demonstration(client):
    client.jog(150,150,50)


###############
### OCTOREST ###
###############


def delete(self, location):
    """Delete file
    http://docs.octoprint.org/en/master/api/files.html#delete-file
    Delete the selected filename on the selected target
    Location is target/filename, defaults to local/filename
    """
    location = self._prepend_local(location)
    self._delete('/api/files/{}'.format(location))


def cancel(self):
    """Issue a job command
    http://docs.octoprint.org/en/master/api/job.html#issue-a-job-command
    Cancels the current print job
    There must be an active print job for this to work
    """
    data = {'command': 'cancel'}
    self._post('/api/job', json=data, ret=False)

def restart(self):
    """Issue a job command
    http://docs.octoprint.org/en/master/api/job.html#issue-a-job-command
    Restart the print of the currently selected file from the beginning
    There must be an active print job for this to work and the print job
    must currently be paused
    """
    data = {'command': 'restart'}
    self._post('/api/job', json=data, ret=False)


def make_client(url, apikey):
    """Creates and returns an instance of the OctoRest client.

    Args:
        url - the url to the OctoPrint server
        apikey - the apikey from the OctoPrint server found in settings
    """

    try:
        client = OctoRest(url=url, apikey=apikey)
        return client
    except ConnectionError as ex:
        # Handle exception as you wish
        print(ex)


def file_names(client):
    """Retrieves the G-code file names from the
    OctoPrint server and returns a string message listing the
    file names.

    Args:
        client - the OctoRest client
    """
    message = "The GCODE files currently on the printer are:\n\n"
    for k in client.files()['files']:
        message += k['name'] + "\n"
    return message




def slicing_stl_file(client,file_name):
    """Slicing the stl file to Gcode file
    OctoPrint server and returns a string message

    Args:
        client - the OctoRest client
        file_name - target stl file name
    """

    message = "The GCODE files currently on the printer are:\n\n"
    for k in client.files()['files']:
        message += k['name'] + "\n"
    return message






def upload(self, file, *, location='local', select=False, print=False, userdata=None, path=None):
    """Upload file or create folder
    http://docs.octoprint.org/en/master/api/files.html#upload-file-or-create-folder
    Upload a given file
    It can be a path or a tuple with a filename and a file-like object
    """
    with self._file_tuple(file) as file_tuple:
        files = {'file': file_tuple, 'select': (None, select), 'print': (None, print)}
        if userdata:
            files['userdata'] = (None, userdata)
        if path:
            files['path'] = (None, path)

        return self._post('/api/files/{}'.format(location),files=files)

@contextmanager
def _file_tuple(self, file):
    """
    Yields a tuple with filename and file object
    Expects the same thing or a path as input
    """
    mime = 'application/octet-stream'

    try:
        exists = os.path.exists(file)
    except:
        exists = False

    if exists:
        filename = os.path.basename(file)
        with open(file, 'rb') as f:
            yield (filename, f, mime)
    else:
        yield file + (mime,)


def start(self):
    """Issue a job command
    http://docs.octoprint.org/en/master/api/job.html#issue-a-job-command
    Starts the print of the currently selected file
    Use select() to select a file
    """
    data = {'command': 'start'}
    self._post('/api/job', json=data, ret=False)


def restart(self):
    """Issue a job command
    http://docs.octoprint.org/en/master/api/job.html#issue-a-job-command
    Restart the print of the currently selected file from the beginning
    There must be an active print job for this to work and the print job
    must currently be paused
    """
    data = {'command': 'restart'}
    self._post('/api/job', json=data, ret=False)


def _post(self, path, data=None, files=None, json=None, ret=True):
    """
    Perform HTTP POST on given path with the auth header
    Path shall be the ending part of the URL,
    i.e. it should not be full URL
    Raises a RuntimeError when not 20x OK-ish
    Returns JSON decoded data
    """
    url = urlparse.urljoin(self.url, path)
    response = self.session.post(url, data=data, files=files, json=json)
    self._check_response(response)

    if ret:
        return response.json()

def select(self, location, *, print=False):
    """Issue a file command
    http://docs.octoprint.org/en/master/api/files.html#issue-a-file-command
    Selects a file for printing
    Location is target/filename, defaults to local/filename
    If print is True, the selected file starts to print immediately
    """
    location = self._prepend_local(location)
    data = {
        'command': 'select',
        'print': print,
    }
    self._post('/api/files/{}'.format(location), json=data, ret=False)
