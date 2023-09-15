#!/bin/bash

while true; do
    mosquitto_pub -h localhost -t "test/topic" -m "Hello, MQTT!"
    sleep 2
done
