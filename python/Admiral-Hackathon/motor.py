import RPi.GPIO as GPIO
import time as time
# initialise pin numbers
#GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
rrotation = 200
rsleep = 4 # yellow(sleep)
rstep = 3  # green(step)
rdir = 2   # blue (direction)

total_rotations = 200 # 400 at 0.0125s
segment_count = 8 # segments of pod
rotate = (total_rotations / segment_count) # rotate segment

#Read IO

#input_value = GPIO.input()

#;55
GPIO.setmode(GPIO.BCM)
rrotation = 200
rsleep = 4 # yellow(sleep)
rstep = 3  # green(step)
rdir = 2   # blue (direction)
GPIO.setup(rsleep, GPIO.OUT)
GPIO.setup(rstep, GPIO.OUT)
GPIO.setup(rdir, GPIO.OUT)

def move(direction, speed):
    #direction = 'Backa' # moves anti-clockwise
    #speed = 4 # 1 is 100% speed with accuracy, reason for 4 is then per 8th of a 360 turn is 1second
# 0.005 is 100% with accuracy
    if direction == 'ccw':
        GPIO.output(rdir, GPIO.HIGH)
    else: GPIO.output(rdir, GPIO.LOW)
    interval = (0.005*speed)
    i = 0
    while i < 25:
        
        GPIO.output(rstep, GPIO.HIGH)
        time.sleep(interval)
        GPIO.output(rstep, GPIO.LOW)
        time.sleep(interval)
        i += 1
        # print i    

GPIO.output(rsleep, GPIO.HIGH)
i = 0     
while i < 1:
    move('Back', 4)
    i += 1
GPIO.output(rsleep, GPIO.LOW)