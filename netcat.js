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
var myCallBack = function (data){
	if (err) throw err;
	console.log(data.toString('ascii'));
}

function sendMessage(){
	client.send('*IDN?', false, myCallBack);
	console.log("Message sent");
}
client.start()

