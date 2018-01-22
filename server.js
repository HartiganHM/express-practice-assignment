const express = require('express');
const app = express();
const path = require('path');

const urlLogger (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

app
  .use(express.static(path.join(__dirname, 'public')))
  .get('/json', urlLogger, (request, response) => {
    response.status(200).json({ name: 'Hugh' });
  })
  .listen(3001, () => {
    console.log('Express intro running on localhost:3000');
  });
