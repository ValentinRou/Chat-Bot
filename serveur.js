const express = require('express') 
const app = express()
const port = process.env.PORT;
console.log(`Your port is ${port}`);


app.use(express.json());

app.get('/Hello', function (req, res) {
  res.send('Hello World')
})

app.post('/chat', function (req, res) {
  if (req.body.msg === "ville"){
    res.send("Nous sommes à Paris");
  }else if (req.body.msg === "meteo"){
    res.send("Il fait beau");
  }else if (req.body.msg === "demain"){
    res.send("Je ne connais pas demain…");
  }else if (req.body.msg === "demain = Mercredi"){
    res.send("Merci pour cette information !");
  }
  else {
    res.send("commande inconnue");
  }
})


app.listen(process.env.PORT || 3000, function () {
  console.log('Hello World')
})


