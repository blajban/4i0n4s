const mqtt = require('mqtt');
const fetch = require('node-fetch');

const MQTT_BROKER = process.env.MQTT_BROKER || 'mqtt://mosquitto';
const client  = mqtt.connect(MQTT_BROKER);

client.on('connect', () => {
  console.log('Connected to broker:', MQTT_BROKER);
  client.subscribe('home/climate', (err) => {
    if (err) {
      console.error('Error subscribing to topic:', err);
    }
  });
});

client.on('message', async (topic, message) => {
  // do something with the message?
  const splitMsg = message.toString().split('/')
  const data = {
    temp: splitMsg[0],
    humidity: splitMsg[1]
  };

  try {
    const response = await fetch("http://backend:1337/climate", {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    });
    
    const result = await response.json()

    console.log("Sending data... ", result, "Original message: ", topic, message.toString());
  } catch (err) {
      console.error('Error:', err);
  }
});

client.on('error', (error) => {
    console.error('MQTT Client Error:', error);
});
