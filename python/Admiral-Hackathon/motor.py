import RPi.GPIO as GPIO
import time as time

total_rotations = 200 # 400 at 0.0125s
segment_count = 8 # segments of pod
rotate = (total_rotations / segment_count) # rotate segment
rrotation = 200
rsleep = 4 # yellow(sleep)
rstep = 3  # green(step)
rdir = 2   # blue (direction)
segment = 25

def init_motor():
    GPIO.setwarnings(False)
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(rsleep, GPIO.OUT)
    GPIO.setup(rstep, GPIO.OUT)
    GPIO.setup(rdir, GPIO.OUT)
#init_motor()

def move(direction, speed, steps):
    #direction = 'Backa' # moves anti-clockwise
    #speed = 4 # 1 is 100% speed with accuracy, reason for 4 is then per 8th of a 360 turn is 1second
    # 0.005 is 100% with accuracy
    print(direction,speed,segment)
    if direction == "cw":
        GPIO.output(rdir, GPIO.LOW)
    else:
        GPIO.output(rdir, GPIO.HIGH)
    interval = (0.005*speed)
    i = 0
    GPIO.output(rsleep, GPIO.HIGH)
    while i < steps:
        
        GPIO.output(rstep, GPIO.HIGH)
        time.sleep(interval)
        GPIO.output(rstep, GPIO.LOW)
        time.sleep(interval)
        i += 1
        # print i    
 #   init_motor()
 #   i = 0    
#    while i < 1:
#        move('cacw', 4, steps)
#        i += 1
    GPIO.output(rsleep, GPIO.LOW)
