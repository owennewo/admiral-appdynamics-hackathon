import json
import requests
import time

url = "http://3.8.162.130:8080/medio/action"

# read file
#fjson = (open('data.json').read())
#jo = json.loads(schedule)
#["drug_name"]
# read file

def Await_for_op(url):
    r = requests.get(url)
    wcontent = r.content
    schedule = json.loads(wcontent)
    #print(type(schedule))
    #jo = json.loads(schedule)
    while schedule['action'] == "noop":
        r = requests.get(url)
        wcontent = r.content
        wcontent = json.loads(wcontent)
        print("Awaiting Operation")
        time.sleep(2)
    print(wcontent)
    #print(schedule['action'],schedule['arg1'],schedule['arg2'])
    #print(type(jo))
    #print(jo['drug_name'])
    #["drug_name"]
    return wcontent()
Await_for_op(url)