'use strict';


const logger = (req, res, next) => {
  req.log = 'req log';
  res.log = 'res log';
  console.log(`this is a log from ${req.log} and ${res.log} `);
  next();
};

module.exports = logger;