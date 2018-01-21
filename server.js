'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Result = require('./model/results');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

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
    (req.body.time) ? result.time = req.body.time : null;
    (req.body.uid) ? result.uid = req.body.uid : null;
    (req.body.tid) ? result.tid = req.body["_id"] : null;

    result.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Result successfully added!' });
    });
  });

app.use('/api', router);

app.listen(port, function() {
 console.log('Api running on port ' + port);
});
