var Netcat = require('node-netcat');
var PORT = 5025;
var HOST = '131.243.171.207';

var client = Netcat.udpClient(PORT, HOST);
client.start();
sendMessage();

client.on('open', function () {
	console.log('open');
});
client.on('message', function (msg, info, family){
	console.log("received" + msg + "from" + info.address + ":" + info.port);

});

function sendMessage(){
	client.send('*IDN?');
	console.log("Message sent");
}


