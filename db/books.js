'use strict'
const bcrypt = require('bcrypt');
// const salt   = bcrypt.genSaltSync(10);
const pgp    = require('pg-promise')({
  //initialization options
});
const async = require('async'); // asynchronous map function


// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object

const connectionObject = {
    host: process.env.DB_HOST,
    port: process.env.PGDB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER, //may need to check capitalization of name in env file?
    password: process.env.DB_PASS
}
console.log(connectionObject, 'was connectionObject');
// console.log(process.env.host, 'was process.env.host');
// console.log(process.env.Host, 'was process.env.Host');
// console.log(process.env.port, 'was process.env.port');
// console.log(process.env.Port, 'was process.env.Port');
// console.log(process.env, 'was process.env');
console.log(process.env.DB_NAME, 'was process.env.DB_NAME');

const db = pgp(connectionObject);
// console.log(db, 'was db');


// module.exports.getBook  = ( req, res, next ) => {
//
// }


function localGetBook(book_id, res, next){ //start of chain to get book/author info from my DB to send back to client/browser
  // console.log(book_id, 'was book_id before db. call in localGetBook in db/books.js');
  console.log("localGetBook fired in books.js");

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
  console.log("bookDataFromList fired in books.js");
  // console.log('bookDataFromList fired');
  // console.log(req.body, 'was req.body in bookDataFromList db/books.js');
  // console.log(req.body.list, 'was req.body.list in bookDataFromList db/books.js'); //this gives the array of objects that forms the list. each object is as follows: {user_id: #, book_id: #}
  // NOTE // console.log(req.body.list[i].book_id, 'was req.body.list in bookDataFromList db/books.js'); // this would return the book_id for the i-th element in the array

  let responseDataPlaceholder = {
    body: req.body,
    params: req.params
  }
  let listBookData = [];

  // http://caolan.github.io/async/
  async.map( req.body.list, (el, callback, res) => {
    console.log('async.map middle arg/fn fired');
    // console.log(el.book_id, 'was el.book_id in map of bookDataFromList in db/books.js');
    // console.log(el, 'was el in forEach of bookDataFromList in db/books.js');
    // console.log(listBookData, 'was listBookDatain forEach of bookDataFromList in db/books.js before db.query');
    db.one("SELECT * FROM books WHERE id = $1;", [el.book_id])
      .then( (bookData) => {
        // console.log(bookData, 'was bookData in db.query.then in async.map of bookDataFromList in db/books.js');
        // console.log(el, 'was el in same');



        callback(null, bookData)
      })
      .catch( (error) => {
        console.log(error, 'was error in db.query.then in forEach of bookDataFromList in db/books.js');
      })
  },
  (err, results) => {
    console.log('async.map third arg/fn fired');
    // console.log(res, 'was res in async.map');
    console.log(err, 'was err in async.map');
    // console.log(results, 'was results in async.map');


    res.rows = results;
    // console.log(res.rows, 'was res.rows in async.map');
    // console.log(res.rows[1], 'was res.rows[1] in async.map');
    next()
  } )



}



// dont think users will be doing this, but will want to import book info from isbnDB so i dont have to make calls to it constantly to look up book info
module.exports.addBook  = ( req, res, next ) => {
  // this is currently done as part of the 'addToList' function in list.js, i believe?
  // TODO: confirm above
}

//don't think these will be necessary as i dont plan to allow users to alter or remove books
module.exports.updateBook  = ( req, res, next ) => {

}

// don't plan to remove book entries once they're added for now
module.exports.removeBook  = ( req, res, next ) => {

}
