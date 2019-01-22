const express = require('express')
const app = express()

app.get('/Hello', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, function () {
  console.log('Hello World')
})