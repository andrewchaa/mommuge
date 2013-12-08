
/**
 * Module dependencies.
 */

var express = require('express');
var engine = require('ejs-locals');
var app = express();

var routes = require('./routes');
var index = require('./routes/index');
var review = require('./routes/review');

var http = require('http');
var path = require('path');


// all environments
app.engine('ejs', engine);
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.get);
app.post('/', index.submit());
app.get('/review', review.get)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
