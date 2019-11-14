#!/usr/bin/python
import RPi.GPIO as GPIO
import time as time
global GPIO
global time
#main vars
rrotation = 200
rsleep = 4 # yellow(sleep)
rstep = 3  # green(step)
rdir = 2   # blue (direction)

GPIO.setmode(GPIO.BCM)

#from echo import scan_distance
from motor import move

# setup the GPIO channels - one input and one output

GPIO.setup(rsleep, GPIO.OUT)
GPIO.setup(rstep, GPIO.OUT)
GPIO.setup(rdir, GPIO.OUT)

time.sleep()
move()
#scan_distance()