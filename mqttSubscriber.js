const mqtt = require('mqtt');

// MQTT server configurations
const brokerUrl = 'mqtt://mqtt.example.com'; // Replace with your MQTT server URL
const options = {
  clientId: 'mqtt-subscriber', // Client ID for the subscriber
  username: 'your-username', // MQTT server username (if required)
  password: 'your-password', // MQTT server password (if required)
  // Other MQTT options if needed
};

// Connect to the MQTT server
const client = mqtt.connect(brokerUrl, options);

// Event listener for MQTT client connection
client.on('connect', () => {
  console.log('Connected to MQTT server.');

  // Subscribe to the desired topic(s)
  const topic = 'sensor/data'; // Replace with your desired topic
  client.subscribe(topic, (err) => {
    if (err) {
      console.error('Error while subscribing:', err);
    } else {
      console.log('Subscribed to topic:', topic);
    }
  });
});

// Event listener for receiving messages
client.on('message', (topic, message) => {
  console.log('Received message:', message.toString());

  // Process the received message or perform any required actions
  // ...
});

// Event listener for MQTT client disconnection
client.on('close', () => {
  console.log('Disconnected from MQTT server.');
});

// Event listener for MQTT client error
client.on('error', (err) => {
  console.error('MQTT error:', err);
});
