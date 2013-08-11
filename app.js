var express = require('express'),
	consolidate = require('consolidate');

var article = require('./app/routers/article.js');
var principal = require('./app/routers/principal.js'),
	repository = require('./repository');

var app = express();
var tareaRepository = repository.tareaRepository;

//----------------------------------------------------------------------

app.configure(function(){
	app.engine('html', consolidate.underscore);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/app/views');
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/public'));
});

//----------------------------------------------------------------------

app.get('/', principal.index);

//----------------------------------------------------------------------

app.get('/articles', article.findAll);
app.get('/article/:id', article.find);
app.post('/article', article.create);
app.put('/article/:id', article.update);
app.delete('/article/:id', article.delete);

//----------------------------------------------------------------------

app.listen(3000,function(){
	console.log('Bonito : escuchando en el puerto 3000');	
});