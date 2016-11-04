'use strict';

const express = require('express');
const router = express.Router();

// const db = require('../db'); //may need to make/specify api functions?


const notImplement = (req,res) => {
  console.log('notImplement was triggered');
  res.send( req.method + ' this method is not yet implemented for book routes')
}

// :3003:/api/book

router
  .get('/', /* pull book info from DB, */ notImplement)
  .post('/', /* add book to DB, */ notImplement)
  .put('/', /* modify book info in DB, */ notImplement)
  .delete('/', /* remove book info from DB, */ notImplement)




module.exports = router;
