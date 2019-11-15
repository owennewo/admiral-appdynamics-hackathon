#!/usr/bin/python
# import RPi.GPIO as GPIO
# import time as time
# global GPIO
# global time
#main vars
url = "http://3.8.162.130:8080/medio/action"
rrotation = 200
rsleep = 4 # yellow(sleep)
rstep = 3  # green(step)
rdir = 2   # blue (direction)

#from echo import scan_distance

# setup the GPIO channels - one input and one output
from read_json import *
print("Setting up for listen")
Await_for_op(url)

#scan_distance()
