import RPi.GPIO as GPIO
import time as time
global GPIO
global time
# initialise pin numbers
GPIO.setmode(GPIO.BCM)

rtrigger = 14# yellow() 14 trigger(in)
recho = 15 # orange 15 echo(out)

# setup the GPIO channels - one input and one output

GPIO.setup(rtrigger, GPIO.OUT)
GPIO.setup(recho, GPIO.IN)

status = 0
i = 0
pulse_start = 0
pulse_end = 0 
pulse_duration = 0 
max_distance = 20

def scan_distance():
    global pulse_start
    global pulse_end
    global pulse_duration
    GPIO.setwarnings(False)
    print "Distance Measuring in Prog"
    GPIO.output(rtrigger, False)
    print "waiting for sensor to stablise"
    time.sleep(2)
    GPIO.output(rtrigger, GPIO.HIGH)

    GPIO.output(rtrigger, True)
    time.sleep(0.00001)
    GPIO.output(rtrigger, False)

    while GPIO.input(recho)==0:
        pulse_start = time.time()

    while GPIO.input(recho)==1:
        pulse_end = time.time()
    pulse_duration = pulse_end - pulse_start
    distance = pulse_duration * 17150
    distance = int(round(distance, 2))
    if distance < 2000:
        print "distance:", distance, "cm"
    else: 
        distance = 0
        print("Distance over: " + str(max_distance) + "cm" )
    return distance
scan_distance()
