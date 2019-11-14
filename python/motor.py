import RPi.GPIO as GPIO
import time as time

# initialise pin numbers
GPIO.setmode(GPIO.BCM)

rrotation = 100
rsleep = 4 # yellow(sleep)
rstep = 3  # green(step)
rdir = 2   # blue (direction)



# setup the GPIO channels - one input and one output

GPIO.setup(rsleep, GPIO.OUT)
GPIO.setup(rstep, GPIO.OUT)
GPIO.setup(rdir, GPIO.OUT)

#Read IO

#input_value = GPIO.input()

#;55

status = 0
i = 0
GPIO.setwarnings(False)
GPIO.output(rsleep, GPIO.HIGH)

while i < 200:
    i += 1
    if status == 1:
        GPIO.output(rstep, GPIO.HIGH)
        status = 0
    else:
        GPIO.output(rstep, GPIO.LOW)
        status = 1
    time.sleep(0.05)

GPIO.output(rsleep, GPIO.LOW)