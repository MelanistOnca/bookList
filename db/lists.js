// 'use strict'

const bcrypt = require('bcrypt');
// const salt   = bcrypt.genSaltSync(10);
// const pgp  = require('pg-promise');
const pgp    = require('pg-promise')({
  // initialization options
});
const axios = require('axios') ; //why didn't import axios from 'axios' work here?!? i have es2015 in the babel script/post-install babel preset in package.json

const book_fns = require('./books') ;
// console.log(books, 'was books');
// console.log(books.bookDataFromList, 'was books.bookDataFromList');



// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object
const connectionObject = {
    host: 'localhost',
    port: 5432,
    database: 'booklist',
    user: 'Cthulu', //may need to check capitalization?
    password: 'testpassword'
}



const db = pgp(connectionObject);



module.exports.getList = ( req, res, next ) => {
  // /* how do i add params to this request so that i can specify the list im trying to get? */ ===> this should be in the req.body

  //get list of books based on the particular list type and user
  // params of user and list type
  console.log(req.body, 'was req.body');
  console.log(req.params, 'was req.params');
  // console.log(req.params.uid, 'was req.params.uid');
  console.log(req.params.uID, 'was req.params.uID');
  console.log(req.params.lID, 'was req.params.lID');
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
        console.log(joinList, 'was joinList in db.any(/*find list SQL expression*/) in db/lists getList fn');
        // console.log(list[0], 'was list[0] in db.any(/*find list SQL expression*/) in db/lists getList fn');
        // list.push(listDB_name);
        // NOTE look at your user encapsulation to see if you can figure out why the res.rows.listName thing isn't working below
        let listObj = {
          list: joinList,
          listDB_name
        }
        // res.rows.listName = listDB_name;
        // console.log(res.rows, 'was res.rows in db.one(/*find list SQL expression*/) in db/lists getList fn');
        //i think i need another sql query here to get the book info, and then return THAT as a list.
        // this.bookDataFromList({'listObj': 'blabla'}) //this is actually a function that belongs in the db/books.js file
        ///////////NOTE////////////////
        // console.log('just before book_fns.bookDataFromList() called in db/lists.js');
        // book_fns.bookDataFromList(listObj, res, next)
        // console.log('just after book_fns.bookDataFromList() called in db/lists.js'); //this is actually a function that belongs in the db/books.js file
        ///////////NOTE/////////////////
        //should i have this as a axios.SOMETHING instead? and then call the bookDataFromList fn from there? yes? NOTE this may be a good idea or not? my brain feels fried atm.
        // res.rows = listObj;

        // //NOTE does a .then here solve my problems?
        // .then( (thingy) => {
        //   //do stuff with thingy
        // })
        // .catch( (error) => {
        //   //report error
        // })
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
  console.log(book, 'was book in insertToJoin()', typeof book, 'was typeof for same');
  console.log(list, 'was list in insertToJoin()', typeof list, 'was typeof for same');
  console.log(user, 'was user in insertToJoin()', typeof user, 'was typeof for same');
  // if( (user.id==='') ) {
  //   return 'this is probably where i should throw an error' //or maybe require a user value on the front end before running the function?
  // } //added a check on front end, would probably want one somewhere on backend too for safety.
  let lowerCaseList = list.slice(0,-4).toLowerCase();
  console.log(lowerCaseList, 'was lowerCaseList');

  db.any("INSERT INTO $1~ (user_id, book_id) VALUES ($2, $3);", [lowerCaseList, user.id, book.id])
    .then( () => {
      console.log('added user and book to list');
    })

}
function checkForBook( user, book, list, next ) {
  console.log(book.isbnString, 'was book.isbnString in checkForBook()');
  db.one("SELECT * FROM books WHERE isbn13=$1", [book.isbnString])
    .catch( (err) => { //this means book was NOT found
      console.log(err, 'was err from checkForBook() in db/lists');
      //since book not found, need to add to book list
      addBookToLibrary(book)
      //can i do a .then() in here to add the book to the list?
        .then( (data) => {
          console.log(data, 'was data in the interior .then() inside checkForBook() in db/lists');
          insertToJoin(user, book, list)
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
      next()
    })
    .then( (bookData) => { // this means book was found
      console.log(bookData, 'was bookData in checkForBook'); //bookData picks up the bookId here
      // res.rows = data;
      insertToJoin(user, bookData, list)
      next()
    })
}

function addBookToLibrary (book, next) {
  console.log(book, 'was book in addBookToLibrary fn in db/lists');
  db.one("INSERT INTO books (isbn13, title, publisher, author) VALUES ($1, $2, $3, $4)", [book.isbnString, book.title, book.publisher, book.authorName])
    .then( (data) => {
      console.log(data, 'was data in addBookToLibrary in db/lists.js');//probably want to include a log that i've inserted a row into book table, and with what data, here

    })
    .catch( (err) => {
      console.log(err, 'was err in addBookToLibrary in db/lists.js');
    })
}

module.exports.addToList = ( req, res, next ) => {
  //need to write several functions outside of this one, then invoke them here
  //check that book is in book db.
  // if no, add to book db
  // console.log(req.body, 'was req.body');
  console.log(req.body.book.author_data, 'was req.body.author_data'); //returns [ { name: 'Leckie, Ann', id: 'leckie_ann' } ]
  // console.log(req.body.book.author_data[0], 'was req.body.author_data[0]'); //returns
  console.log(req.body.book.author_data[0].name, 'was req.body.author_data[0].name'); //returns Leckie, Ann
  // NOTE need to add user.id at LEAST to the data sent here, and pass it along to the insertToJoin function
  //NOTE NOTE NOTE NOTE NOTE NOTE
  // req.body.book.isbn13 is book's isbn13 from isbndb
  // let isbn = req.body.book.isbn13
  // console.log(isbn, 'was isbn'); // logs 9780765309402 was isbn
  let isbnString = req.body.book.isbn13.toString()
  console.log(isbnString, 'was isbnString'); // logs 9780765309402 was isbn
  let title = req.body.book.title
  console.log(title, 'was title'); //logs Old man's war was title
  let publisher = req.body.book.publisher_name
  console.log(publisher, 'was publisher'); //logs Tor was publisher
  let user = req.body.user
  console.log(user, 'was user');
  // let authorName= req.body.author_data[0].name
  let authorName= req.body.book.author_data[0].name
  console.log(authorName, 'was authorName');
  let book = {
    isbnString,
    title,
    publisher,
    authorName
  }
  console.log(book, 'was book');
  let list = req.body.list
  console.log(list, 'was list'); //logs toBeReadList was list

  checkForBook(user, book, list, next);

  // next()
  // if yes, proceed

  //add entry to join table based on user_id and book isbn13. will need to structure the sql query so that it returns the book_id of the book with the isbn13.

  //maybe something like INSERT INTO $2 (user_id, book_id) values ($3, (SELECT * FROM books WHERE isbn13=$1) )
}

module.exports.removeFromList = ( req, res, next ) => {

}
