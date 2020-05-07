const path = require('path');
const express = require('express');

const app = express();
app.use('/static', express.static(path.join(__dirname, 'build/static')));

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`PORT: ${port}`));
