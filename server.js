var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static('public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
  res.render('index.html')
});

app.get('/game', function(req, res){
  res.render('game.html')
});

app.get('/api/questions/:actor', function(req, res){
  var actor = req.params.actor
  fs.readFile('data.json', 'utf8', function(err, data){
    var dataSet = JSON.parse(data).filter(function(val){ return val["actor"] == actor })
    res.json(dataSet)
  });
});

var server = app.listen(process.env.PORT || 3000, function(){

  var host = server.address().address
  var port = server.address().port

  console.log("hello 🌎  I'm listening on", host, port)
})
