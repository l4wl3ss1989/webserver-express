const hbs = require('hbs');

// Helpers
hbs.registerHelper('getThisYear', () =>{
  return new Date().getFullYear() 
});
hbs.registerHelper('getAuthor', () =>{
  return 'L4wL3sS'
});
hbs.registerHelper('capitalize', (text) =>{

  let words = text.split(' ');
  words.forEach( (word, indx) =>{
    words[indx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  })
  return words.join(' ');
});