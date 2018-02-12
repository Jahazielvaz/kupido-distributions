const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();
const urlEncoded = bodyParser.urlencoded({extended: false});

app.use(urlEncoded);
app.use('/', express.static('statics'))

app.set('template-engine', 'ejs');

app.get('/', function(req, res){
  res.render('main.ejs', {yum: req.query});
})

app.get('/signup', function(req, res){
  res.render('registration.ejs')
})

app.get('/login', function(req, res){
  res.render('login.ejs')
})

app.listen(3000, function(){
  console.log('Now listening to port 3000');
})
