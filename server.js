'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Result = require('./model/results');
var io = require('socket.io')();

//Socket Server
io.on('connection', (client) => {
  client.on('subscribeToResults', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

const socketPort = 8000;
io.listen(socketPort);
console.log('socket listening on port ', socketPort);

//RESTful API
var app = express();
var router = express.Router();

var restPort = process.env.API_PORT || 3001;

mongoose.connect('mongodb://Albert:dragonflie@ds111138.mlab.com:11138/swamphacks2018')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

router.route('/results')
  .get(function(req, res) {
    Result.find(function(err, results) {
      if (err)
        res.send(err);
      res.json(results)
    });
  })
  .post(function(req, res) {
    var result = new Result();
    (req.body.avgTime) ? result.avgTime = req.body.avgTime : null;
    (req.body.avgTime) ? result.time = Date.now() : null;
    (req.body.uid) ? result.uid = req.body.uid : null;
    (req.body.age) ? result.age = req.body.age : null;

    result.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Result successfully added!' });
    });
  });

app.use('/api', router);

app.listen(restPort, function() {
 console.log('rest api running on port ', restPort);
});
