
const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression());
app.use(express.static(__dirname + '/dist/frontend-assessment'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

app.get('/*', function (req, res, next) {
  if(req.xhr || req.headers.accept.indexOf('json') > -1 || req.url.indexOf('file-upload') > -1){
    next();
  }else{
    res.sendFile('index.html', {root: __dirname +'/dist/frontend-assessment'});
}});
