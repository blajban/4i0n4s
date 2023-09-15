#!/bin/bash
while :
do
    TEMP=$(shuf -i 20-25 -n 1)
    mosquitto_pub -h mosquitto -t "home/livingroom/temperature" -m "$TEMP"
    sleep 10
done

