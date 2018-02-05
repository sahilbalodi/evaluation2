const api1Data = require('./api1.js');
const getRating = require('./api2.js');

const dataAboutAllBooks = [];

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
      Promise.all(dataAboutAllBooks).then((values) => { response(values); });
    });
  },
},
];
