var PORT = 5025;
var HOST = '131.243.171.207';

var dgram = require('dgram');

sendUDPMessage(HOST, PORT, Buffer("*IDN?"));

function sendUDPMessage(targetIP, targetPORT, message){

	var client = dgram.createSocket("udp4");

	client.on('error', function(e){
		throw e;
	});
	
	client.on("message", function (msg, rinfo) {
		console.log("received");
		console.log("got: \t" + msg + "\t from \t" +  rinfo.address + ":" + rinfo.port);
		client.close();
	});

	client.send(message, 0, message.length, targetPORT, targetIP, function(err, bytes) {
		if (err) throw err;
		console.log('UDP message sent to ' + HOST + ':' + PORT);		
	});

}
