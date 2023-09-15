const mqtt = require('mqtt');

const MQTT_BROKER = process.env.MQTT_BROKER || 'mqtt://mosquitto';
const client  = mqtt.connect(MQTT_BROKER);

client.on('connect', () => {
    console.log('Connected to broker:', MQTT_BROKER);
    client.subscribe('home/livingroom/temperature', (err) => {
        if (err) {
            console.error('Error subscribing to topic:', err);
        }
    });
});

client.on('message', (topic, message) => {
    console.log(topic, message.toString());
});

client.on('error', (error) => {
    console.error('MQTT Client Error:', error);
});
