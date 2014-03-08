
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var handler_one = require('./routes/handler_one');
var handler_two = require('./routes/handler_two');
var handler_three = require('./routes/handler_three');
var handler_four = require('./routes/handler_four');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/restone',handler_one.rest_one ); //route for string and int request
app.get('/runejsloop',handler_two.run_ejs_loop);
app.get('/mysql',handler_three.mysqlGet);
app.post('/mysql',handler_three.mysqlPost);
app.get('/mongodb',handler_four.mongodb);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
