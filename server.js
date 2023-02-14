'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const notFound = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', logger, (req,res,next) => {
  res.status(200).send(req.log);
});

app.get('/bad', (req,res,next) => {
  next('this is Errortown. population you');

});

app.use('*',notFound);
app.use(errorHandler);

const start = () =>{
  app.listen(PORT,()=>console.log('congrats youve got thumbs aka an active server'));
};

module.exports ={start, app};