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
},
];
