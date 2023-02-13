'use strict';

const express = require('express');

const notFound = require('./handlers/404');
const errorHandler = require('./handlers/500');

const PORT = process.env.PORT || 3002;

const app = express();

app.get('/', (req,res,next) => {
  req.statusCode(200).send(req.log);
});

app.get('/bad', (req,res,next) => {
  next('this is Errortown. population you');

});

app.use('*',notFound);
app.use(errorHandler);

const start = () =>{
  app.listen(PORT,()=>console.log('congrats youve got thumbs aka an active server'));
};

module.exports ={start,app};