const express = require('express')
const app = express()
const port = process.env.PORT;
console.log(`Your port is ${port}`);

app.get('/Hello', function (req, res) {
  res.send('Hello World')
})

app.post('/chat', function (req, res) {
  console.log(req.body);
  res.json(req.body);
  if( req.json ==="ville" ){
      return "Nous sommes à Paris"
  }







})

app.listen(process.env.PORT || 3000, function () {
  console.log('Hello World')
})


