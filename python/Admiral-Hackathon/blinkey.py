import RPi.GPIO as GPIO
import time as time
# initialise pin numbers
#GPIO.setmode(GPIO.BCM)
global GPIO
global time

total_rotations = 200 # 400 at 0.0125s
segment_count = 8 # segments of pod
rotate = (total_rotations / segment_count) # rotate segment

#Read IO

#input_value = GPIO.input()

#;55
GPIO.setmode(GPIO.BCM)
GPIO.setup(4, GPIO.OUT)

status = 0
i = 0
GPIO.output(4, GPIO.HIGH)
time.sleep(1)
GPIO.cleanup()