const express = require('express')
const app = express()
const port = process.env.PORT;
console.log(`Your port is ${port}`);

app.get('/Hello', function (req, res) {
  res.send('Hello World')
})

app.listen(port, function () {
  console.log('Hello World')
})

app.METHOD(PATH, HANDLER)

app.post('/chat', function (req, res) {
  res.send('Got a POST request');
});
