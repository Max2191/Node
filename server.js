const fs = require('fs')


fs.readFile('./hello.txt', (err, data) => {
	console.time('funchallenge')
	if (err) {
		console.log('errooor')
	}
	console.log(data.toString());
	console.timeEnd('funchallenge')
})


const file = fs.readFileSync('./hello.txt');
console.log(file.toString());