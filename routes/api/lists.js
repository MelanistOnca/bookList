'use strict';

const express = require('express');
const router = express.Router();

// const db = require('../db'); //may need to make/specify api functions?

const list_fns = require('../../db/lists');
const book_fns = require('../../db/books');
// console.log(list_fns.getBookDataFromList, 'was list_fns.getBookDataFromList');

const notImplement = (req,res) => {
  console.log('notImplement was triggered');

  res.send( req.method + ' this method is not yet implemented for book routes')
}

// :3003/api/lists

router
  .get('/', /* pull book info from DB, */ notImplement)
  .post('/', /* add book to DB, */ notImplement)
  .put('/', /* modify book info in DB, */ notImplement)
  .delete('/', /* remove book info from DB, */ notImplement)

// list id (1,2,3:toberead,currentlyreading,haveread)
// lists. id numbers and the associated label: {
//   1: 'toberead',
//   2: 'currentlyreading',
//   3: 'haveread'
// }


// :3003/api/lists/:lID/users/:uID/books/
// for a list with lID, find all entries associated with a user with uID, return info on all books associated with that user
router
  .get('/:lID/users/:uID/books/',
  // notImplement
  book_fns.bookDataFromList,
  // for the list id (1,2,3:toberead,currentlyreading,haveread), return all books on that list
  (req,res) => {
    console.log('list_fns.bookDataFromList fired from ... api/lists/:lID/users/:uID/books/ route');
    // res.send('list_fns.bookDataFromList fired from ... api/lists/:lID/users/:uID/books/ route. this is the res.send placeholder')
    res.json( res.rows )
  }
) // so part of my problem here is i want to send a list object with the results of the join table search. do i requery and then work wth that result? that seems silly. otherwise, do i use this as a post route? let's try it as a post route.
  .post('/:lID/users/:uID/books/',
  // notImplement
  book_fns.bookDataFromList,
  // for the list id (1,2,3:toberead,currentlyreading,haveread), return all books on that list
  (req,res) => {
    console.log('list_fns.bookDataFromList fired from ... api/lists/:lID/users/:uID/books/ route');
    // res.send('list_fns.bookDataFromList fired from ... api/lists/:lID/users/:uID/books/ route. this is the res.send placeholder')
    res.json( res.rows )
  }
)





module.exports = router;
