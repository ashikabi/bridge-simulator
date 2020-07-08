const http = require("http");
const YML = require('config-yml');
const ls = require('./localStorage');

let server = http.createServer((req, res) => {
	let body = "";
	
	req.on("data", chunk => {
		body += chunk;
	});
	
	req.on("end", async () => {
		try{
			let post = JSON.parse(body);
			console.log(`::: MESSAGE ::: ${JSON.stringify(post, null, 4)} :::`)
			if(post)
				res.send({status: 200});

		}catch(e){
			console.error(`[MainListener][Request On End] With Error ${e}`);
		}
	});

	res.end();

});
server.listen(YML.PORT, console.log("Server listening on port:", YML.PORT));