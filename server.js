const express = require('express');
const app = express();
const path = require('path');
const dataObject = require('./data');

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());;
  next()
};

app
  .use(timeLogger, urlLogger)
  .use(express.static(path.join(__dirname, 'public')))
  .get('/json', (request, response) => {
    response.status(200).json(data);
  })
  .use((request, response, next) => {
    response.status(404).send('There ain\'t no body home!')
  })
  .listen(3001, () => {
    console.log('Express intro running on localhost:3000');
  });
