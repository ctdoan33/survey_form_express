var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(session({secret: 'codingdojorocks'}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response) {
	response.render("index");
})

app.post('/result', function(request, response) {
	response.render("result", {name: request.body.name, location: request.body.location, language: request.body.language, comment: request.body.comment});
})

app.listen(5000, function() {
	console.log("listening on port 5000");
})