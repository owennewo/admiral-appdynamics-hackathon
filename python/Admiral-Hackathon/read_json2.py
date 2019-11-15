import json
import requests
import time

url = "http://3.8.162.130:8080/medio/action"

# read file
#fjson = (open('data.json').read())
#jo = json.loads(schedule)
#["drug_name"]
# read file
r = requests.get(url)
wcontent = r.content
psleep = 2
afile = ""
#def write_out(afile, content)
#f = open(afile, "a")
#f.write("Now the file has more content!")
#f.close()

def Poll_web(url, psleep):
    r = requests.get(url)
    wcontent = r.content
    time.sleep(psleep)
    print("content",wcontent)
    return(wcontent)
def Await_for_op(url):
    # r = requests.get(url)
    # wcontent = r.content
    Poll_web(url, psleep)
    schedule = json.loads(wcontent)
    #print(type(schedule))
    #jo = json.loads(schedule)
    while schedule['action'] == "noop":
        schedule = Poll_web(url, psleep)
        #print("Awaiting Operation: " + schedule['action'])
        print("Awaiting Operation: " + schedule['action'])
    print("Action Recieved: " + schedule['action'])
    #print(schedule['action'],schedule['arg1'],schedule['arg2'])
    #print(type(jo))
    #print(jo['drug_name'])
    #["drug_name"]
    return(wcontent)
Poll_web(url, psleep)
Await_for_op(url)
print(wcontent)
