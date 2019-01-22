const express = require('express')
const app = express()
const port = process.env.PORT;
console.log(`Your port is ${port}`);

app.get('/Hello', function (req, res) {
  res.send('Hello World')
})

app.post('/chat', function (req, res) {
  res.send('Got a POST request');
})

app.listen(3000, function () {
  console.log('Hello World')
})


