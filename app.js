const express = require('express')
const app = express()
app.set('view engine', 'hbs');
var hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT
// Servir contenido estático
app.use(express.static('public'))

// handlebars
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) =>{
  // renderizar
  res.render('home', {
    nombre:'Nodejs - Express',
    titulo:'site website semi-dinámica'

  });
  
})
app.get('/generic', (req, res) =>{
  // renderizar
  res.render('generic', {
    nombre:'Nodejs - Express',
    titulo:'Generic'

  });
  
})
app.get('/elements', (req, res) =>{
  // renderizar
  res.render('elements', {
    nombre:'Nodejs - Express',
    titulo:'Elements'

  });
  
})


app.get('*', (req, res) =>{
  res.sendFile(__dirname + '/public/404.html')
  
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
