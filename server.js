var express = require('express'),
app = express();
app
.use(express.static('./bower_components'))  
	.get('*',function (req, res) {  
 		res.sendfile('bower_components/main.html');
	}).listen(3000);