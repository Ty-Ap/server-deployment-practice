'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3002;

const { start } = require('./src/server.js');
const {sequelizeDatabase} = require('./src/models');

sequelizeDatabase.sync()
  .then(()=>{
    console.log('connected sqlizedb ');
    start();
  })
  .catch(e => console.error(e));

