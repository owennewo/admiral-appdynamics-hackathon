import json
import requests
import time

url = "http://3.8.162.130:8080/medio/action"

s = requests.Session()
print(time.time())
s.post(url, data = {'Created':time.time()})

#print(type(schedule))
#jo = json.loads(schedule)
#print(type(jo))
#print(jo['drug_name'])
#["drug_name"]
print(r.status_code)
# check if got through = what page did we get
print(r.text)