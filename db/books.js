'use strict'
const bcrypt = require('bcrypt');
// const salt   = bcrypt.genSaltSync(10);
const pgp    = require('pg-promise')({
  //initialization options
});
const async = require('async'); // asynchronous map function


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
  // console.log(req.body, 'was req.body in bookDataFromList db/books.js');
  // console.log(req.body.list, 'was req.body.list in bookDataFromList db/books.js'); //this gives the array of objects that forms the list. each object is as follows: {user_id: #, book_id: #}
  // NOTE // console.log(req.body.list[i].book_id, 'was req.body.list in bookDataFromList db/books.js'); // this would return the book_id for the i-th element in the array
  // console.log(req.params, 'was req.params in same');

  let responseDataPlaceholder = {
    body: req.body,
    params: req.params
  }
  // let listBookData = [];
  // console.log(listBookData, 'was listBookData');
  let listBookData = [];
  async.map( req.body.list, (el, callback, res) => {
    console.log(el.book_id, 'was el.book_id in map of bookDataFromList in db/books.js');
    // console.log(el, 'was el in forEach of bookDataFromList in db/books.js');
    // console.log(listBookData, 'was listBookDatain forEach of bookDataFromList in db/books.js before db.query');
    db.one("SELECT * FROM books WHERE id = $1;", [el.book_id])
      .then( (bookData) => {
        // console.log(el);
        // listBookData[el] = bookData; //i don't know that an array is the BEST way to store this info, but it seems "simplest" for now
        // res.rows = bookData; //i don't know that an array is the BEST way to store this info, but it seems "simplest" for now
        // console.log(bookData, 'was bookData in db.query.then in forEach of bookDataFromList in db/books.js');
        // console.log(listBookData, 'was listBookData in same');
        // return bookData
        // listBookData.push(bookData);
        // console.log(listBookData[el], 'was listBookData[el] .then in map of bookDataFromList in db/books.js');
        // console.log(el, 'was el in same');
        // console.log(listBookData, 'was listBookData');
        callback(null, bookData)
      })
      .catch( (error) => {
        console.log(error, 'was error in db.query.then in forEach of bookDataFromList in db/books.js');
      })
  },
  (err, results) => {
    // console.log(res, 'was res in async.map');
    console.log(err, 'was err in async.map');
    // console.log(results, 'was results in async.map');
    console.log(results[0], 'was results[0] in async.map');
    // console.log(listBookData, 'was listBookData after results in async.map');
    // console.log(listBookData[0], 'was listBookData[0] after results in async.map');
    // console.log(listBookData[50], 'was listBookData[0] after results in async.map');
    // listBookData = results;
    res.rows = results;
    console.log(res.rows[1], 'was res.rows[1] in async.map');
    next()
  } )



}

// function iteratee (el) {
//   console.log(el.book_id, 'was el.book_id in forEach of bookDataFromList in db/books.js');
//   // console.log(listBookData, 'was listBookDatain forEach of bookDataFromList in db/books.js before db.query');
//   db.one("SELECT * FROM books WHERE id = $1;", [el.book_id])
//     .then( (bookData) => {
//       // console.log(el);
//       // listBookData[el] = bookData; //i don't know that an array is the BEST way to store this info, but it seems "simplest" for now
//       res.rows = bookData; //i don't know that an array is the BEST way to store this info, but it seems "simplest" for now
//       console.log(bookData, 'was bookData in db.query.then in forEach of bookDataFromList in db/books.js');
//       // console.log(listBookData, 'was listBookData in same');
//     })
//     .catch( (error) => {
//       console.log(error, 'was error in db.query.then in forEach of bookDataFromList in db/books.js');
//     })
// })
// }//)

// dont think users will be doing this, but will want to import book info from isbnDB so i dont have to make calls to it constantly to look up book info
module.exports.addBook  = ( req, res, next ) => {

}

//don't think these will be necessary as i dont plan to allow users to alter or remove books
module.exports.updateBook  = ( req, res, next ) => {

}
module.exports.removeBook  = ( req, res, next ) => {

}

//
