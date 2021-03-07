var express = require('express');
var router = express.Router();

let albumModel = require('../models/albumModel.js')
let albumsArray = albumModel.albumsArray

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('albums.ejs', {
    albumsArray: albumModel.albumsArray
  });
});

router.get('/:id', function(req, res, next) {
  console.log('/albums/1')
  req.params.id
  console.log(req.params.id)

  for (let a of albumsArray) {
    if (a.id === req.params.id) {
      res.render('show.ejs', {a: a})
    } 
  }
  });

  module.exports = router;


