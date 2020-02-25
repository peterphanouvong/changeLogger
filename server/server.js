const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, build, 'index.html'));
  });
}


