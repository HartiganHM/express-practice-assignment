const express = require('express');
const app = express();
const path = require('path');

app
  .get('/', (request, response) => {
    
  })
  .use(express.static(path.join(_dirname, 'public')))
  .listen(3001, () => {
    console.log('Express intro running on localhost:3000');
  });
