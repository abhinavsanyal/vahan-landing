'use strict';

const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(compression());
app.use(helmet());
app.use(express.static(path.join(__dirname,'public')));

app.listen(port,(err)=>{
    if(err) return console.log('error',err);
    console.log(`connect to //localhost${port}`);
});