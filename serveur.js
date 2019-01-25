const express = require('express')
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); 
const app = express()
const port = process.env.PORT;
console.log(`Your port is ${port}`);


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/Hello', function (req, res) {
  res.send('Hello World')
})

app.post('/chat', function (req, res) {
  console.log(req.body);
  res.json(req.body);
  if( req.json ==="ville" ){
      return "Nous sommes à Paris"
  }
  if( req.json === "méteo"){
    return "Il fait beau"
  }-
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Hello World')
})


