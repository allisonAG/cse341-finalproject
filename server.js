const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT || 8080;
const app = express();
app
    .use(bodyParser.json())
    .use('/', require('./routes/index.js'));


