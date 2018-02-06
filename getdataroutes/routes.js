const api1Data = require('./api1.js');
const getRating = require('./api2.js');
const db = require('../models');

const dataAboutAllBooks1 = [];
const dataAboutAllBooks2 = [];
let contents = '';
module.exports = [{
  path: '/getAllBooksDatas',
  method: 'GET',
  handler: (request, response) => {
    api1Data().then((data) => {
      let allBooks = JSON.parse(data);
      allBooks = allBooks.books;
      for (let i = 0; i < allBooks.length; i += 1) {
        dataAboutAllBooks1.push(getRating(allBooks[i]));
      }
      Promise.all(dataAboutAllBooks1).then((values) => {
        contents = values;
        response(values);
      });
    });
  },
}, {
  path: '/savedata',
  method: 'POST',
  handler: (request, response) => {
    api1Data().then((data) => {
      let allBooks = JSON.parse(data);
      allBooks = allBooks.books;
      for (let i = 0; i < allBooks.length; i += 1) {
        dataAboutAllBooks2.push(getRating(allBooks[i]));
      }
      Promise.all(dataAboutAllBooks2).then((values) => {
        contents = values;
        for (let i = 0; i < values.length; i += 1) {
          db.users.create({
            author: contents[i].Author,
            bookid: contents[i].id,
            name: contents[i].Name,
            rating: contents[i].rating,
          }).catch((error) => {
          });
        }
        response('data added to database');
      });
    });
  },
},
];
