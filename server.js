var express = require("express");
var candidate = require("./data.json");
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);

app.use(express.static('public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

  
app.get('/table',(req,res)=>{
	res.send(candidate);
});
 
app.post('/login',(req,res)=>{

	if(req.body.user == "Admin" && req.body.pass == "Admin@123")
		res.sendStatus(200);
});

app.post('/logout',(req,res)=>{
		res.sendStatus(200);
});

var server =http.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})