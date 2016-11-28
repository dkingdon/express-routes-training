// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
  app.get('/', function (req, res) {
    res.sendFile('views/index.html', { root : __dirname });
  });

  app.get('/art-gallery', function (req, res) {
    res.sendFile('views/art-gallery.html', { root : __dirname});
  });

    // pick a number guess
  var targetNumber = 14;

  app.get('/pick-a-number', function (req, res) {
    var num = parseInt(req.query.number);
    if (num === targetNumber) {
      res.send("Nailed It!");
    }
    else if (num > targetNumber) {
      res.send('Too high');
    }
    else if (num < targetNumber){
      res.send('Too low');
    }
    else {
      console.log('severside GET error ', targetNumber);
      res.send('error on server side');
    }
  })

  // pick a number change target number
  app.post('/pick-a-number', function(req, res){
    targetNumber = parseInt(req.body.number);
    res.status(200).send('Number updated successfully!');
  });


// Gallery View Route

  var artworks = [];

  app.get('/artworks', function(req, res) {
    res.json(artworks);
  });

  app.post('/artworks', function(req, res) {
    var newArtwork = {
      name: req.body.title,
      description: req.body.description,
      artist: req.body.artist,
    };
    artworks.push(newArtwork);
    res.json(artworks);
  })


// The Number Guessing Game


// Gallery


// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
