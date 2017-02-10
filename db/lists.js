// 'use strict'

const bcrypt = require('bcrypt');
// const salt   = bcrypt.genSaltSync(10);
// const pgp  = require('pg-promise');
const pgp    = require('pg-promise')({
  // initialization options
});
const axios = require('axios') ; //why didn't
// import axios from 'axios'
// work here?!? i have es2015 in the babel script/post-install babel preset in package.json

const book_fns = require('./books') ;




// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object

const connectionObject = {
    host: process.env.DB_HOST,
    port: process.env.PGDB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER, //may need to check capitalization of name in env file?
    password: process.env.DB_PASS
}




const db = pgp(connectionObject);



module.exports.getList = ( req, res, next ) => {
  console.log('getList in lists.js fired');

  //get list of books based on the particular list type and user
  // params of user and list type
  // console.log(req.body, 'was req.body');
  // console.log(req.params, 'was req.params');
  // console.log(req.params.uid, 'was req.params.uid');
  // console.log(req.params.uID, 'was req.params.uID');
  // console.log(req.params.lID, 'was req.params.lID');
  //tbr=1, cr=2, hr=3
  let user_id = parseInt(req.params.uID);
  let listDB_name;
  switch (req.params.lID) {
    case '1':
      listDB_name = {
        "sql": "toberead",
        "front": "toBeReadList",
        "lID": "1"
      }

    break;
    case '2':
      listDB_name = {
        "sql": "currentlyreading",
        "front": "currentlyReadingList",
        "lID": "2"
      }

    break;
    case '3':
      listDB_name = {
        "sql": "haveread",
        "front": "haveReadList",
        "lID": "3"
      }

    break;
    default:
      console.log(req.params.lID, 'was req.params.lID and did not match switch cases. probably "Select"');

  }
  console.log(listDB_name, 'was listDB_name');
//get list should return the list

  db.any("SELECT * FROM $1~ WHERE user_id = $2;", [listDB_name.sql, user_id]) //promise for list
      .then( (joinList) => {
        //list found
        // console.log(joinList, 'was joinList in db.any(/*find list SQL expression*/) in db/lists getList fn');
        // console.log(list[0], 'was list[0] in db.any(/*find list SQL expression*/) in db/lists getList fn');

        let listObj = {
          list: joinList,
          listDB_name
        }


        ///////////NOTE////////////////
        // console.log('just before book_fns.bookDataFromList() called in db/lists.js');
        // book_fns.bookDataFromList(listObj, res, next)
        // console.log('just after book_fns.bookDataFromList() called in db/lists.js'); //this is actually a function that belongs in the db/books.js file
        ///////////NOTE/////////////////
        //should i have this as a axios.SOMETHING instead? and then call the bookDataFromList fn from there? yes? NOTE this may be a good idea or not? my brain feels fried atm.
        //TODO: make the above less indecipherable nonsense


        res.rows = listObj;
        next();
      })
      .catch( (error) => {
        //error found
        console.log(error, 'was error in db.one(/*find list SQL expression*/) in /db/lists.js getList fn');
        console.log(listDB_name, user_id, 'was listDB_name, user_id');
        next();
      })
}

// bookDataFromList = (param1, param2, etc) => {
//   console.log('bookDataFromList fired');
// } //this function should come from db/books.js file
//may need to export this at some point? if so, will need to add this.bookDataFromList to getList() invocation
// module.exports.bookDataFromList = (param1, param2, etc) => {
//   console.log('bookDataFromList fired');
// }
function insertToJoin(user, book, list ) {
  console.log('insertToJoin fired in getList() in  lists.js');
  // console.log(book, 'was book in insertToJoin()', typeof book, 'was typeof for same');
  // console.log(list, 'was list in insertToJoin()', typeof list, 'was typeof for same');
  // console.log(user, 'was user in insertToJoin()', typeof user, 'was typeof for same');

  // TODO: add existing user validation
  // if( (user.id==='') ) {
  //   return 'this is probably where i should throw an error' //or maybe require a user value on the front end before running the function?
  // } //added a check on front end, would probably want one somewhere on backend too for safety.
  let lowerCaseList = list.slice(0,-4).toLowerCase();
  // console.log(lowerCaseList, 'was lowerCaseList');

  db.any("INSERT INTO $1~ (user_id, book_id) VALUES ($2, $3);", [lowerCaseList, user.id, book.id])
    .then( () => {
      console.log('added user and book to list through insertToJoin() in getList()');
    })

}
function checkForBook( user, book, list, next ) {
  console.log('checkForBook fired in getList() in  lists.js');
  let payload = {}; //may need to define functions in here so that they can access this payload var so that i can then set payload.SOMETHING in those defined functions to a thing so that i can access it at this level?
  // console.log(book.isbnString, 'was book.isbnString in checkForBook()');
  return  db.one("SELECT * FROM books WHERE isbn13=$1", [book.isbnString])
    .catch( (err) => { //this means book was NOT found
      console.log(err, 'was err from checkForBook() in db/lists');
      //since book not found, need to add to book list/library
      addBookToLibrary(book, next)
      //can i do a .then() in here to add the book to the list? //need to make addBookToLibrary
        // .then( (data) => {
        .then( () => {
          // console.log(data, 'was data in the addBookToLibrary .then() inside checkForBook() in db/lists');
          console.log('was the addBookToLibrary .then() inside checkForBook() in db/lists');
          // insertToJoin(user, book, list) //this should be in a .then of the checkForBook() call

          next()
        })
        .catch( (error) => {
          console.log(error, 'was error inside the chained functions. most recent function was addBookToLibrary() call');
          next()
        })
      //i get the following message about unhandled exceptions from the db server:
      // (node:32117) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 2): TypeError: Cannot read property 'then' of undefined
      // (node:32117) DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
      //NOTE figure out what exactly it wants me to do, or maybe see if there's better syntax for a query you're OK with failing?
      // TODO: reinvestigate the above error/warning. maybe has to to with db.___ type?
      next()
    })
    .then( (bookData) => { // this means book was found
      // console.log(bookData, 'was bookData in checkForBook'); //bookData picks up the bookId here
      // res.rows = data;
      insertToJoin(user, bookData, list) //this inserts to join, but gets no return. TODO:need to look in to/review-my returning promises to get this to work how i want, i think
      next()
    })
}

function addBookToLibrary (book, next) {
  console.log('addBookToLibrary was called from list.js');
  // console.log(book, 'was book in addBookToLibrary fn in db/lists');
  return db.any("INSERT INTO books (isbn13, title, publisher, author) VALUES ($1, $2, $3, $4)", [book.isbnString, book.title, book.publisher, book.authorName]) //TODO: want to add a RETURNING value of some kind here
    .then(
      // (data) => {
      () => {
      // console.log(data, 'was data in addBookToLibrary in db/lists.js');//probably want to include a log that i've inserted a row into book table, and with what data, here
      console.log('.then of sql in addBookToLibrary');
      return new Promise ( (resolve, reject) => {
        // resolve( (data) => { console.log(data, 'was data in new Promise resolve in addBookToLibrary');} )
        console.log(`${book.isbnString} was added to books table`);
        resolve( book.isbnString )
        reject( (error) =>{ console.log(error, 'was error in new Promise reject in addBookToLibrary');})
      })
      // .catch((err)=>{console.log(err,'was err in .catch of new Promise in addBookToLibrary');})
      next()

    })
    .catch( (err) => {
      console.log(err, 'was err in addBookToLibrary in db/lists.js');
      next()
    })
}

module.exports.addToList = ( req, res, next ) => {
  console.log('addToList fired in list.js');
  //need to write several functions outside of this one, then invoke them here

  // console.log(req.body, 'was req.body');
  // console.log(req.body.book.author, 'was req.body.author'); //returns [ { name: 'Leckie, Ann', id: 'leckie_ann' } ]
  // console.log(req.body.book.author_data[0], 'was req.body.author_data[0]'); //returns
  // console.log(req.body.book.author_data[0].name, 'was req.body.author_data[0].name'); //returns Leckie, Ann
  // console.log(req.body.book.author, 'was req.body.author'); //returns Leckie, Ann when searching for ancillary justice book
  //NOTE NOTE NOTE NOTE NOTE NOTE
  // req.body.book.isbn13 is book's isbn13 from isbndb
  // let isbn = req.body.book.isbn13
  // console.log(isbn, 'was isbn'); // logs 9780765309402 was isbn

  // TODO: declaring these as variables here so that the book {} declaration has less text
  let isbnString = req.body.book.isbn13.toString()
  // console.log(isbnString, 'was isbnString'); // logs 9780765309402 was isbn
  let title = req.body.book.title
  // console.log(title, 'was title'); //logs Old man's war was title
  let publisher = req.body.book.publisher;
  // console.log(publisher, 'was publisher'); //logs Tor was publisher
  let user = req.body.user
  // console.log(user, 'was user');
  // let authorName= req.body.author_data[0].name
  let authorName= req.body.book.author
  // console.log(authorName, 'was authorName');
  let book = {
    isbnString,
    title,
    publisher,
    authorName
  }
  // console.log(book, 'was book');
  let list = req.body.list
  // console.log(list, 'was list'); //logs toBeReadList was list

  checkForBook(user, book, list, next);
  // should have .then( (data) =>{ addToJoin}) and .catch( (err)=> { addBookToLibrary}.then((data)=>{addToJoin}))



  //add entry to join table based on user_id and book isbn13. will need to structure the sql query so that it returns the book_id of the book with the isbn13.
  //TODO: possibly call addToList here ? i may need to tinker with having the checkForBook return a promise so that i could do a .then here? would it be a .catch if the book did not exist?


}

//promise chaining/resolving solution based on guidelines found at http://solutionoptimist.com/2013/12/27/javascript-promise-chains-2/
module.exports.removeFromList = ( req, res, next ) => {
  console.log('removeFromList fired in lists.js');
  let payload = {};
  let listSQLname = req.body.payload.listTranslate[req.body.payload.list].listSQLname; //so that the SQL query below is readable
  // console.log(req.params, 'was req.params');
  let loadBookBy_id = function (book_id) { //why am i using the old function declaration structure here? update.
  // function loadBookBy_id (book_id) { //this should work? TODO: update this after cleanup
    console.log('loadBookBy_id fired in removeFromList in lists.js');
    return db.one('SELECT * FROM books WHERE id = $1;', [book_id])
      .then( (bookInfoBy_id) =>{
        console.log(bookInfoBy_id, 'was bookInfoBy_id in selectBook_id .then of removeFromList in db/lists.js');
        // removedInfo = data;
        // console.log(removedInfo, 'was removedInfo in third .then of removeFromList in db/lists.js');
        // res.rows = data;
        // console.log(res.rows, 'was res.rows in third .then of removeFromList in db/lists.js');
        payload.bookInfoBy_id = bookInfoBy_id;
        return bookInfoBy_id
        next();
      })
      .catch( (error) =>{
        console.log(error, 'was error in third .then of removeFromList in db/lists.js');
        next();
      })
    next();
  }
  let deleteBookFromList = function (listSQLname, book_id, user_id) {//why am i using the old function declaration structure here? update.
  // function deleteBookFromList (listSQLname, book_id, user_id) { //this should work? TODO: update this after cleanup
    console.log('deleteBookFromList fired in removeFromList in lists.js');
    // console.log(listSQLname, 'was listSQLname before db. of removeFromList in db/lists.js ');
    // console.log(book_id, 'was book_id before db. of removeFromList in db/lists.js ');
    // console.log(user_id, 'was user_id before db. of removeFromList in db/lists.js ');
    return db.any('DELETE FROM $1~ WHERE book_id = $2 AND user_id = $3 RETURNING *;', [listSQLname, book_id, user_id])//i think RETURNING only is able to return data from the table that has the deletion? using below select statement instead
      .then( (removedListInfo) => {
        console.log(removedListInfo, 'was removedListInfo in deleteBook .then of removeFromList in db/lists.js');
        // return new Promise( (resolve, reject) => {
        //   selectBook_id(book_id)
        // }  )
        // payload.removedListInfo = data
        console.log('the above seems like it should be returning info, but is not. deletion IS taking place though');
        // TODO: figure out what's going on with the lack of above info
        payload.removedListInfo = removedListInfo;
        return removedListInfo
        next()

      })
      .catch( (error) => {
        console.log(error, 'was error in second .then of removeFromList in db/lists.js');
        next();
      })

      next();
  }
  let selectBookISBN = function (isbn13) {//why am i using the old function declaration structure here? update.
  // function selectBookISBN (isbn13) { //this should work? TODO: update this after cleanup
    return db.one('SELECT * FROM books WHERE isbn13 = $1', [isbn13])
      .then( (bookInfoByISBN) =>{
        console.log(bookInfoByISBN, 'bookInfoByISBN in selectBookISBN .then of removeFromList in db/lists.js'); //returns
        // {
        //   id: 1,
        //   isbn13: '9780765309402',
        //   title: 'Old man\'s war',
        //   publisher: 'Tor',
        //   author: 'No author creditted ()- notice courtesy of bookList team'
        // }
        payload.bookInfoByISBN = bookInfoByISBN;
        return bookInfoByISBN
        next() //this is probably not needed when return statement is non-commented
      })
      .catch( (error) =>{
        console.log(error, 'error in first .catch of removeFromList in db/lists.js');
        next();
      })

    next();
  }
  selectBookISBN(req.params.bISBN13)
    // .then(deleteBookFromList(listSQLname, payload.bookInfoByISBN.id, req.params.uID))
    .then( (data) => {
      // console.log(data, 'was data after the selectBookISBN(req.params.bISBN13) call');
      // console.log(payload, 'was payload after the selectBookISBN(req.params.bISBN13) call');
      deleteBookFromList(listSQLname, payload.bookInfoByISBN.id, req.params.uID)
        .then( (removedListInfo)=>{
          // console.log(removedListInfo, 'was removedListInfo in .then of deleteBookFromList(listSQLname, payload.bookInfoByISBN.id, req.params.uID) in the selectBookISBN(req.params.bISBN13) call');
          // console.log(payload, 'was payload in .then of deleteBookFromList(listSQLname, payload.bookInfoByISBN.id, req.params.uID) in the selectBookISBN(req.params.bISBN13) call');

        } )
      next()
    })
  res.rows = payload;
}
