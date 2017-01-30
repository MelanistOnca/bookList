'use strict';

const express = require('express');
const router = express.Router();

// const db = require('../db'); //may need to make/specify api functions?


const notImplement = (req,res) => {
  console.log('notImplement was triggered');
  res.send( req.method + ' this method is not yet implemented for api routes')
}

// :3003:/api/
router
  .get('/', /* get API ,*/ notImplement)



// router
//   .get('/user', /* pull user info from DB, */ notImplement)
//   .post('/user', /* add user to DB, */ notImplement)
//   .put('/user', /* modify user info in DB, */ notImplement)
//   .delete('/user', /* remove user info from DB, */ notImplement) //probably not going to use, instead make user info non-accessible?




module.exports = router;
