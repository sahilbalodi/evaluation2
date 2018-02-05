const https = require('https');
const BufferList = require('bl');

let dataAboutBooks = '';
const url = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
https.get(url, (response) => {
  response.pipe(BufferList((error, data) => {
    if (error) { console.log(error); } else {
      dataAboutBooks = data.toString();
    }
  }));
});
module.exports = dataAboutBooks;
