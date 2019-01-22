const express = require('express')
const app = express()
const port = process.env.PORT;
console.log(`Your port is ${port}`);

app.get('/Hello', function (req, res) {
  res.send('Hello World')
})
app.get('/chat', function (req, res) {
  res.send('UN CHAT')
})
app.post('/chat', function (req, res) {
  res.send('Got a POST request');
})

app.listen(port, function () {
  console.log('Hello World')
})


