'use strict'
const bcrypt = require('bcrypt');
// const salt   = bcrypt.genSaltSync(10);
const pgp    = require('pg-promise')({
  //initialization options
});

// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object
const connectionObject = {
    host: 'localhost',
    port: 5432,
    database: 'booklist',
    user: 'Cthulu', //may need to check capitalization?
    password: 'testpassword'
}



const db = pgp(connectionObject);
// console.log(db, 'was db');

module.exports.getBook  = ( req, res, next ) => {

}

// NOTE // this is temporarily useless as authors don't have their own table in current implementation
// // localGetBook = (param1) =>{
// // module.exports.localGetBook = (param1) =>{
function localGetBook(book_id, res, next){ //start of chain to get book/author info from my DB to send back to client/browser
  console.log(book_id, 'was book_id before db. call in localGetBook in db/books.js');

  db.one("SELECT * FROM books WHERE id = $1;", [book_id])
    .then( (bookData) => {
      // console.log(bookData, 'was bookData in localGetBook .then'); //this only returns id, isbn13, title, publisher.
      // need to then query authorbookjoin to get the author_id associated with the book, then query the author db to get the author name
      // localGetAuthorOfBook(bookData)
      // let authorData = localGetAuthorOfBook(bookData); //if all the relevant data needs to get to browser i can theoretically use this as a way of doing it? as in something like, allData = {bookData, authorData}; res.rows = allData;

      //NOTE above code is for when authors was going to be an independent model.
      console.log(bookData, 'was bookData in localGetBook .then');
      // res.rows = bookData
      return bookData
      next()
    })
    .catch( (error) => {
      console.log(error, 'was error in localGetBook .catch');
      next()
    })

}

//
// // find the author(s) id(s) of a given book
// function localGetAuthorOfBook(bookData) {
//   db.query("SELECT * from authorbookjoin WHERE book_id = $1;", [bookData.something/*presumably*/])
//     .then( (authorID) => {
//       console.log(authorID, 'was authorID in localGetAuthorOfBook in db/books.js');
//       next()
//     })
//     .catch( (error) => {
//       console.log(error, 'was error in localGetAuthorOfBook in db/books.js');
//       next()
//     })
// }
//
// // get author info using author id from my DB
// function localGetAuthor(author_id) {
//   db.one("SELECT * FROM authors WHERE id = $1;",[author_id])
//     .then( (authorData) => {
//       console.log(authorData, 'was authorData in localGetAuthor in db/books.js');
//     })
//     .catch( (error) => {
//       console.log(error, 'was error in localGetAuthor in db/books.js');
//     })
// }



module.exports.bookDataFromList = (req, res, next) => {
  // console.log('bookDataFromList fired');
  // uID === 3 is test account, lID === 3 is haveread. lID === 1 is toberead, but has more entries
  console.log(req.body, 'was req.body'); //empty, as expected of typing this
  console.log(req.params, 'was req.params'); // {"lID": "3","uID": "3"}, as expected of typing this

  let responseDataPlaceholder = {
    body: req.body,
    params: req.params
  }

  // db.
  // .then( (data) => {
  //   console.log(data, 'was data in bookDataFromList in scratch.js');
  // })
  // .catch( (error) => {
  //   console.log(error, 'was error in same');
  // })
  res.rows = responseDataPlaceholder

  // })
  next()

}

// dont think users will be doing this, but will want to import book info from isbnDB so i dont have to make calls to it constantly to look up book info
module.exports.addBook  = ( req, res, next ) => {

}

//don't think these will be necessary as i dont plan to allow users to alter or remove books
module.exports.updateBook  = ( req, res, next ) => {

}
module.exports.removeBook  = ( req, res, next ) => {

}

//
