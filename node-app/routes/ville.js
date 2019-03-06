var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/', function(req, res) {
  var urlRequest = 'https://geocode.xyz/' + req.body.nom_ville + '?json=1&auth=697645224950108707877x1874';
  request(urlRequest, function (error, response, body) {
    var jsonObject = JSON.parse(body);
  if ((jsonObject.latt != 0) && (jsonObject.longt != 0)) {
    res.render('ville', { ville: req.body.nom_ville, description: req.body.description, latt: jsonObject.latt, longt: jsonObject.longt });
  } else {
    res.render('erreur');
  }
  });
});

module.exports = router;