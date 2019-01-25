const express = require('express')
const app = express()
const port = process.env.PORT;
console.log(`Your port is ${port}`);

app.get('/Hello', function (req, res) {
  res.send('Hello World')
})

app.get('/chat', function (req, res) {
  res.send('ville');
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Hello World')
})


