var Netcat = require('node-netcat');
var PORT = 5025;
var HOST = '131.243.171.207';

new Netcat.client(PORT, HOST)

// client init connection


client.on('open', function () {
	console.log('open');
	sendMessage();
});

client.on('error', function (err) {
  console.log(err);
}); 

client.on('close', function () {
  console.log('close');
});

function sendMessage(){
	client.send('DISP:TEXT "Working"');
	console.log("Message sent");
}
client.start()

