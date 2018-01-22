const express = require('express');
const app = express();
const path = require('path');

app
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (request, response) => {})
  .listen(3001, () => {
    console.log('Express intro running on localhost:3000');
  });
