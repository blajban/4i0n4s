import paho.mqtt.client as mqtt
import os

MQTT_BROKER = os.environ.get("MQTT_BROKER", "mosquitto")

# Callback when a message is received
def on_message(client, userdata, message):
    print(f"Received message '{message.payload}' on topic '{message.topic}'")

# Setup MQTT client
client = mqtt.Client()
client.on_message = on_message
client.connect(MQTT_BROKER, 1883, 60)

# Subscribe to the desired topic
client.subscribe("home/livingroom/temperature")

# Start the client loop
client.loop_forever()
