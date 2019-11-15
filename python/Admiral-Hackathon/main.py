#!/usr/bin/python
import RPi.GPIO as GPIO
import time as time
global GPIO
global time
#main vars
url = "http://3.8.162.130:8080/medio/action"
rrotation = 200
rsleep = 4 # yellow(sleep)
rstep = 3  # green(step)
rdir = 2   # blue (direction)

GPIO.setmode(GPIO.BCM)

#from echo import scan_distance
from motor import move
from read_json import Awaiting_for_op
# setup the GPIO channels - one input and one output

GPIO.setup(rsleep, GPIO.OUT)
GPIO.setup(rstep, GPIO.OUT)
GPIO.setup(rdir, GPIO.OUT)
Await_for_op(url)
print(type(op))
if OP == 'move':
    time.sleep(2)
#move()
#scan_distance()