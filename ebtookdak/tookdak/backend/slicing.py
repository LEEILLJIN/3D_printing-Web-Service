import os
import subprocess
import time
from octorest import OctoRest, WorkflowAppKeyRequestResult
from urllib import parse as urlparse
from contextlib import contextmanager
import shlex


##########################
### SELF MADE FUNCTION ###
##########################

def ReturnPrintTime(file_name):
    profile_num=0
    slicer_profiles=['mk3s+_infill15percent_normal.ini','mk3s+_infill15percent_ultradetail.ini']
    slicer_profile_path = '/var/app/current/tookdak/slicer_profiles/'
    source_file_path = '/var/app/current/tookdak/source_files/'
    gcode_file_path = '/var/app/current/tookdak/gcode_files/'
    prusa_slicer_path = '/var/lib/snapd/snap/bin/'
    
    tmp = subprocess.getoutput('grep -r \"silent mode\" '+gcode_file_path+file_name+'*'+'.gcode')
    front,back = tmp.split("=")
    back = back.replace(" ","_")
    args5 = shlex.split('mv '+gcode_file_path+file_name+'.gcode'+' '+gcode_file_path+file_name+back+'.gcode')
    result5 = subprocess.run(args= args5, check = True, capture_output= True)
    
    return str(back)

    # sub process is sync function (동기적인 함수이다 = 끝날때까지 다음으로 안넘어간다.)
    args = shlex.split('cp '+source_file_path+file_name+'.stl '+prusa_slicer_path)
    result1 = subprocess.run(args= args, check = True, capture_output= True, encoding='utf-8')     # 0 = success / error = 반환코드
    
    args1_2 = shlex.split('cp '+slicer_profile_path+slicer_profiles[profile_num]+' '+prusa_slicer_path)
    result1_2 = subprocess.run(args= args1_2, check = True, capture_output= True, encoding='utf-8')
    
    args2 = shlex.split(prusa_slicer_path+'prusa-slicer -g '+prusa_slicer_path+file_name+'.stl --load '+prusa_slicer_path+slicer_profiles[profile_num]+' -o '+prusa_slicer_path+file_name+'.gcode')
    result2 = subprocess.run(args= args2, check = True, capture_output= True, encoding='utf-8')
    
    args3 = shlex.split('mv '+prusa_slicer_path+file_name+'.gcode '+gcode_file_path)
    result3 = subprocess.run(args= args3, check = True, capture_output= True, encoding='utf-8')
    
    args4 = shlex.split('rm '+prusa_slicer_path+file_name+'.stl')
    result4 = subprocess.run(args= args4, check = True, capture_output= True, encoding='utf-8')

def slicing_test(file_name):
    profile_num=0
    slicer_profiles=['mk3s+_infill15percent_normal.ini','mk3s+_infill15percent_ultradetail.ini']
    slicer_profile_path = '/var/app/current/tookdak/slicer_profiles/'
    source_file_path = '/var/app/current/tookdak/source_files/'
    gcode_file_path = '/var/app/current/tookdak/gcode_files/'
    prusa_slicer_path = '/var/lib/snapd/snap/bin/'

    # sub process is sync function (동기적인 함수이다 = 끝날때까지 다음으로 안넘어간다.)
    args = shlex.split('cp '+source_file_path+file_name+'.stl '+prusa_slicer_path)
    result1 = subprocess.run(args= args, check = True, capture_output= True)     # 0 = success / error = 반환코드
    
    args1_2 = shlex.split('cp '+slicer_profile_path+slicer_profiles[profile_num]+' '+prusa_slicer_path)
    result1_2 = subprocess.run(args= args1_2, check = True, capture_output= True)
    
    args2 = shlex.split(prusa_slicer_path+'prusa-slicer -g '+prusa_slicer_path+file_name+'.stl --load '+prusa_slicer_path+slicer_profiles[profile_num]+' -o '+prusa_slicer_path+file_name+'.gcode')
    result2 = subprocess.run(args= args2, check = True, capture_output= True)
    
    args3 = shlex.split('mv '+prusa_slicer_path+file_name+'.gcode '+gcode_file_path)
    result3 = subprocess.run(args= args3, check = True, capture_output= True)
    
    args4 = shlex.split('rm '+prusa_slicer_path+file_name+'.stl')
    result4 = subprocess.run(args= args4, check = True, capture_output= True)

    args4_2 = shlex.split('rm '+prusa_slicer_path+slicer_profiles[profile_num])
    result4_2 = subprocess.run(args= args4_2, check = True, capture_output= True)

    args4_3 = shlex.split('rm '+gcode_file_path+file_name+'.gcode')
    result4_3 = subprocess.run(args= args4_3, check = True, capture_output= True)

    
    

################
### OCTOREST ###
################




def slice(self, location, slicer='slic3r', gcode=None, position=None, printer_profile=None, 
            profile=None, select=False, print=False):
    """Issue a file command
    http://docs.octoprint.org/en/master/api/files.html#issue-a-file-command
    Slices an STL file into GCODE. 
    Note that this is an asynchronous operation that 
    will take place in the background after the response 
    has been sent back to the client.
    TODO: ADD PROFILE.*
    """
    location = self._prepend_local(location)
    data = {
        'command': 'slice',
        'slicer': slicer,
        'select': select,
        'print': print,
    }
    if gcode is not None:
        data['gcode'] = gcode
    if position is not None:
        data['position'] = position
    if printer_profile is not None:
        data['printerProfile'] = printer_profile
    if profile is not None:
        data['profile'] = profile
    # return self._post('/api/files/{}'.format(location), json=data, ret=False)
    return self._post('{}'.format(location), json=data, ret=False)

###############
### SLICING ###
###############

def slicers(self):
    """List All Slicers and Slicing Profiles
    http://docs.octoprint.org/en/master/api/slicing.html#list-all-slicers-and-slicing-profiles
    Returns a list of all available slicing profiles for all 
    registered slicers in the system.
    Returns a 200 OK response with a Slicer list as the body
    upon successful completion.
    """
    return self._get('/api/slicing')

def slicer_profiles(self, slicer):
    """List Slicing Profiles of a Specific Slicer
    http://docs.octoprint.org/en/master/api/slicing.html#list-slicing-profiles-of-a-specific-slicer
    Returns a list of all available slicing profiles for
    the requested slicer. Returns a 200 OK response with
    a Profile list as the body upon successful completion.
    """
    return self._get('/api/slicing/{}/profiles'.format(slicer))

def slicer_profile(self, slicer, key):
    """Retrieve Specific Profile
    http://docs.octoprint.org/en/master/api/slicing.html#retrieve-specific-profile
    Retrieves the specified profile from the system.
    Returns a 200 OK response with a full Profile as 
    the body upon successful completion.
    """
    return self._get('/api/slicing/{}/profiles/{}'.format(slicer, key))

def add_slicer_profile(self, slicer, key, profile):
    """Add Slicing Profile
    http://docs.octoprint.org/en/master/api/slicing.html#add-slicing-profile
    Adds a new slicing profile for the given slicer to the system.
    If the profile identified by key already exists, it will be overwritten.
    Expects a Profile as body.
    Returns a 201 Created and an abridged Profile in the body 
    upon successful completion.
    Requires admin rights.
    TODO: Create a profile body to send
    """
    return self._put('/api/slicing/{}/profiles/{}'.format(slicer, key), json=profile)

def delete_slicer_profile(self, slicer, key):
    """Delete Slicing Profile
    http://docs.octoprint.org/en/master/api/slicing.html#delete-slicing-profile
    
    Delete the slicing profile identified by key for the slicer slicer. 
    If the profile doesn’t exist, the request will succeed anyway.
    Requires admin rights.
    """
    return self._delete('/api/slicing/{}/profiles/{}'.format(slicer, key))
