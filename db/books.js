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

// localGetBook = (param1) =>{
// module.exports.localGetBook = (param1) =>{
function localGetBook(book_id){

  db.one("SELECT * FROM books WHERE id = $1;", [book_id])
    .then( (bookData) => {
      console.log(bookData, 'was bookData in localGetBook .then'); //this only returns id, isbn13, title, publisher.
      // need to then query authorbookjoin to get the author_id associated with the book, then query the author db to get the author name
      localGetAuthorOfBook(bookData)
      // let authorData = localGetAuthorOfBook(bookData); //if all the relevant data needs to get to browser i can theoretically use this as a way of doing it? as in something like, allData = {bookData, authorData}; res.rows = allData;
    })
    .catch( (error) => {
      console.log(error, 'was error in localGetBook .catch');
    })

}

// find the author(s) of a given book
function localGetAuthorOfBook(bookData) {
  db.query("SELECT * from authorbookjoin WHERE book_id = $1;", [bookData.something/*presumably*/])
    .then( (authorID) => {
      console.log(authorID, 'was authorID in localGetAuthorOfBook in db/books.js');
      next()
    })
    .catch( (error) => {
      console.log(error, 'was error in localGetAuthorOfBook in db/books.js');
      next()
    })
}

function localGetAuthor(author_id) {
  db.one("SELECT * FROM authors WHERE id = $1;",[author_id])
    .then( (authorData) => {
      console.log(authorData, 'was authorData in localGetAuthor in db/books.js');
    })
    .catch( (error) => {
      console.log(error, 'was error in localGetAuthor in db/books.js');
    })
}




module.exports.bookDataFromList = (listObj/*, param2, etc*/) => {
  // console.log('bookDataFromList fired');
  // console.log(typeof listObj, 'typeof invocation check');
  console.log(listObj, 'listObj');

  console.log(listObj.list, 'listObj.list');
  listObj.list.forEach( (el) => {
    // console.log(el, 'was el in listObj.list.forEach');
    console.log(el.book_id, 'was el.book_id in listObj.list.forEach'); // returns DB book id
    //use db. sql query to get book data, specifically isbn13: {title, author, publisher}
    localGetBook(el.book_id)
  })
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
