'use strict';

const express = require('express');
const router = express.Router();

// const db = require('../db'); //may need to make/specify api functions?
const user_fns = require('../../db/users');

//res.send() is apparently deprecated, look into new version, which is apparently res.status(status).send(body)
const notImplement = (req,res) => {
  //these logs are shown on server, not client
  // console.log('notImplement was triggered');
  // console.log(req, 'was req in notImplement');
  // console.log(res, 'was res in notImplement');

  res.send( req.method + ' this method is not yet implemented for user routes' )
  // res.send( 'notImplement was triggered' )
  // res.send( req, 'was req in notImplement' )
  // res.send( res, 'was res in notImplement' )
}

// :3003/api/user

router
  .get('/', /* pull user info from DB, */ notImplement)
  .post('/', /* add user to DB, */ notImplement)
  .put('/', /* modify user info in DB, */ notImplement)
  .delete('/', /* remove user info from DB, */ notImplement) //probably not going to use, instead make user info non-accessible?

// :3003/api/user/signin
router
  .get('/login', /* ?? , */ notImplement)
  .post('/login', user_fns.logInUser,  notImplement)


module.exports = router;