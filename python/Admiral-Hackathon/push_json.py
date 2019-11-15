import json
import requests
import time

url = "http://3.8.162.130:8080/medio/action"
dtype = 'dispense'
ddata = "{'sender': 'Alice', 'receiver': 'Bob', 'message': 'We did it!'}"
s = requests.Session()
header = {'Content-type': 'application/json', 'Accept': 'text/plain'}
print(time.time())
result = s.post(url, data = {'timestamp':time.time(),'type':dtype}, headers=header)

#print(type(schedule))
#jo = json.loads(schedule)
#print(type(jo))
#print(jo['drug_name'])
#["drug_name"]
print(dtype)
print(result)
print(result.status_code)
# check if got through = what page did we get
print(result.text)