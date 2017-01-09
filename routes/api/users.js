
'use strict';


const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secret = process.env.ENV_SECRET;

// const db = require('../db'); //may need to make/specify api functions?
const user_fns = require('../../db/users');
// const list_fns = require('../../db/lists');
const list_fns = require('../../db/lists');

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

// :3003/api/users

router
  .get('/', /* pull user info from DB, */ notImplement)
  .post('/', /* add user to DB, */ notImplement)
  .put('/', /* modify user info in DB, */ notImplement)
  .delete('/', /* remove user info from DB, */ notImplement) //probably not going to use, instead make user info non-accessible?

// :3003/api/users/signup
router
.get('/signup', /* ?? , */ notImplement)
// .post('/signup', /* ?? , */ notImplement)
.post('/signup', user_fns.createUser) //generates a 404 somewhere along the way, even when successfully making an entry in user table //you should probably figure out why, but it works for now.


// :3003/api/users/login
router
  .get('/login', /* ?? , */ notImplement)

  //example doesn't have an equivalent of user_fns.logInUser invoked here. looks like the mojo happens inside the (req,res) => {} function
  .post('/login', user_fns.logInUser, (req, res) => {
    let token = jwt.sign( res.rows, secret );

    res.json( { user: res.rows, token: token } )

  })

// :3003/api/users/update
router
  // .put('/update', notImplement)
  // .post('/update', notImplement)
  // .post('/update', user_fns.updateUser,
  //   (req,res) => {
  //     res.json( {payload: res.rows})
  //   }
  // )
  .put('/update', user_fns.updateUser,
    (req,res) => {
      res.json( {payload: res.rows})
    }
  )

// :3003/api/users/list
router
  .get('/list', notImplement)
  // .post('/list', notImplement)
  .post('/list', list_fns.addToList, (req,res) => {
    res.json( { data: res.rows})
  }) //this is not a put since we are adding an entry to a join table

// janky route used for list retrieval shennanigans
router
  .get('/:uID/list/:lID', list_fns.getList, (req,res) => { //this route may be obsoleted by the lists/lid/users/uid/books route i'm working on
    //tbr list = 1, cr list = 2, hr list =3
    console.log('list_fns.getList fired');
    res.json( { data: res.rows}) //the data: key here may be responsible for some of the data.data stuff i see in the front, consider reformating this response and the effected areas to deal with res.json( res.rows), instead? need to check specs if this is possible
  })

module.exports = router;
