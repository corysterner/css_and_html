var Netcat = require('node-netcat');
var PORT = 5025;
var HOST = '131.243.171.207';

var client = Netcat.client(PORT, HOST);

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

client.on('data', myCallBack {
});

var myCallBack = function (err, data){
	if (err) throw err;
	console.log("data: " + data);
	console.log(err);
}

function sendMessage(){
	client.send('*IDN?', false, myCallBack);
	console.log("Message sent");
}
client.start()

