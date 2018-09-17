const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers/helpers');

//Heroku Global
const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public' ) );

// Express HBS engine
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {    
  res.render('home', {
    name: 'gorge smith',
    // thisYear: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {    
  res.render('about', {
    // name: 'L4wL3sS', 
    // thisYear: new Date().getFullYear()
  });
});
// app.get('/', (req, res) => {
//   //res.send('Hello World');
//   let out = {
//     name: 'Gorge',
//     age: 21,
//     url: req.url
//   }
//   res.send(out);
// })
 
// app.get('/data', (req, res) => {
//   res.send('Hello Data');
// })

app.listen(port, () => {
  console.log(`Listening port: ${ port }`);
});