#!/bin/bash
while :
do
    TEMP=$(shuf -i 20-25 -n 1)
    HUMIDITY=$(shuf -i 50-80 -n 1)
    mosquitto_pub -h mosquitto -t "home/climate" -m "$TEMP/$HUMIDITY"
    sleep 10
done

