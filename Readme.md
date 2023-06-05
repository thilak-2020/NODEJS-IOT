In this program, we're using the mqtt library to establish a connection with an MQTT server. Replace mqtt.example.com with the URL of your MQTT server. You can also provide a username and password if your MQTT server requires authentication.

The program connects to the MQTT server using the provided options. Upon successful connection, it subscribes to the desired topic(s) using the client.subscribe() method. Replace 'sensor/data' with the topic you want to subscribe to.

When a message is received on the subscribed topic, the program logs the message content. You can then process the message or perform any required actions within the event listener.

To use this program, save it to a file with a .js extension (e.g., mqttSubscriber.js), and run it using Node.js by executing node mqttSubscriber.js in the terminal. Make sure to modify the MQTT server URL, topic, and authentication credentials (if needed) according to your specific setup.