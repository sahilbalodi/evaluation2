module.exports = [{
  path: '/',
  method: 'GET',
  handler: (request, response) => {
    response('hey');
  },
},
{
  path: '/getAllBooksDatas',
  method: 'GET',
  handler: (request, response) => {
    response('true');
  },
},
];
