const path = require('path');
const express = require('express');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`PORT: ${port}`));
