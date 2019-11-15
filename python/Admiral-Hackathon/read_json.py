import json
import requests
import time
from motor import *

url = "http://3.8.162.130:8080/medio/action"

# read file
#fjson = (open('data.json').read())
#jo = json.loads(schedule)
#["drug_name"]
# read file
r = requests.get(url)
wcontent = r.content
psleep = 2
afile = "appd_controller.txt"

def write_out(afile, acontent):
    f = open(afile, "w+")
    f.write(acontent)
    f.close()

def Poll_web(url, psleep):
    r = requests.get(url)
    wcontent = r.content
    time.sleep(psleep)
    print("inside",wcontent)
    write_out(afile, wcontent)
    return(wcontent)

def Await_for_op(url):
    init_motor()
    # r = requests.get(url)
    # wcontent = r.content
    Poll_web(url, psleep)
    schedule = json.loads(wcontent)
    #print(type(schedule))
    #jo = json.loads(schedule)
    print(schedule['action'])
    while schedule['action'] == 'noop':
        ta = Poll_web(url, psleep)
        ta = json.loads(ta);
        print(ta)
        if ta['action']=='move':
            print("*****************MOVE ****")
            move(ta['arg1'],4, int(ta['arg2']))
        print("Awaiting Operation: " + schedule['action'])
    print("Action Recieved: " + schedule['action'])
    #print(schedule['action'],schedule['arg1'],schedule['arg2'])
    #print(type(jo))
    #print(jo['drug_name'])
    #["drug_name"]
    return(wcontent)
#Await_for_op(url)
