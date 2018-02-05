const api1Data = require('./api1.js');
const getRating = require('./api2.js');
const db = require('../models');

const dataAboutAllBooks = [];
let contents = '';
module.exports = [{
  path: '/getAllBooksDatas',
  method: 'GET',
  handler: (request, response) => {
    api1Data().then((data) => {
      let allBooks = JSON.parse(data);
      allBooks = allBooks.books;
      for (let i = 0; i < allBooks.length; i += 1) {
        dataAboutAllBooks.push(getRating(allBooks[i]));
      }
      Promise.all(dataAboutAllBooks).then((values) => {
        contents = values;
        response(values);
      });
    });
  },
},
{
  path: '/savedata',
  method: 'POST',
  handler: (request, response) => {
    api1Data().then((data) => {
      let allBooks = JSON.parse(data);
      allBooks = allBooks.books;
      for (let i = 0; i < allBooks.length; i += 1) {
        dataAboutAllBooks.push(getRating(allBooks[i]));
      }
      Promise.all(dataAboutAllBooks).then((values) => {
        contents = values;
        for (let i = 0; i < contents.length; i += 1) {
          db.users.create({
            author: contents.author,
            id: contents.id,
            name: contents.name,
            rating: contents.rating,
          });
        }
      });
    });
    response('data saved to database');
  },
},
];
