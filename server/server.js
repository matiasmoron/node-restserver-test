require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.json('Hello World')
})

app.post('/usuario', function (req, res) {

  let body = req.body;

  if (body.nombre !== undefined) {
    res.json({persona:body})
  } else {
    res.status(400).json({ status: false, message: ' El nombre es requerido' });
  }
  
})



app.put('/usuario/:id', function (req, res) {
  res.json({ id: req.params.id });
})
 
app.listen(process.env.PORT, () => {
  console.log('Escuchando el puerto: ', process.env.PORT);
})