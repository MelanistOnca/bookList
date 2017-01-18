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
        // console.log(joinList, 'was joinList in db.any(/*find list SQL expression*/) in db/lists getList fn');
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

// module.exports.removeFromList = ( req, res, next ) => {
//   console.log('removeFromList in db/lists.js was called');
//   console.log(req.params,'was req.params in removeFromList in db/lists.js ');
//   //returns
//   // {
//   //   lID: '2',
//   //   uID: '3',
//   //   bISBN13: '9780765309402'
//   // } //these were the list number, user id, and isbn13 values used in test case
//   console.log(req.body, 'was req.body in same');
//   console.log(req.body.payload.list, 'was req.body.payload.list in same');
//   console.log(req.body.payload.listTranslate[req.body.payload.list].listSQLname, 'was req.body.payload.listTranslate[req.body.payload.list].listSQLname in same');
//   let listSQLname = req.body.payload.listTranslate[req.body.payload.list].listSQLname; //so that the SQL query below is readable
//
//   // let selectBookISBN;
//   // let deleteBook;
//   // let selectBook_id = db.one('SELECT * FROM books WHERE id = $1;', [book_id])
//   function selectBook_id(book_id) {
//     db.one('SELECT * FROM books WHERE id = $1;', [book_id])
//       .then( (data) =>{
//         console.log(data, 'was data in selectBook_id .then of removeFromList in db/lists.js');
//         // removedInfo = data;
//         // console.log(removedInfo, 'was removedInfo in third .then of removeFromList in db/lists.js');
//         res.rows = data;
//         // console.log(res.rows, 'was res.rows in third .then of removeFromList in db/lists.js');
//         // return data
//         next();
//       })
//       .catch( (error) =>{
//         console.log(error, 'was error in third .then of removeFromList in db/lists.js');
//         next();
//       })
//     next();
//   }
//
//   function deleteBookFromList(listSQLname, book_id, user_id) {
//     db.any('DELETE FROM $1~ WHERE book_id = $2 AND user_id = $3 ;', [listSQLname, book_id, user_id])//i think RETURNING only is able to return data from the table that has the deletion? using below select statement instead
//       .then( (data) => {
//         console.log(data, 'was data in deleteBook .then of removeFromList in db/lists.js');
//         return new Promise( (resolve, reject) => {
//           selectBook_id(book_id)
//         }  )
//
//       })
//       .catch( (error) => {
//         console.log(error, 'was error in second .then of removeFromList in db/lists.js');
//         next();
//       })
//
//       next();
//   }
//
//   // console.log(req.data, 'was req.data in same');
//   function selectBookISBN(isbn13) {
//     db.one('SELECT * FROM books WHERE isbn13 = $1', [isbn13])
//       .then( (data) =>{
//         console.log(data, 'data in selectBookISBN .then of removeFromList in db/lists.js'); //returns
//         // {
//         //   id: 1,
//         //   isbn13: '9780765309402',
//         //   title: 'Old man\'s war',
//         //   publisher: 'Tor',
//         //   author: 'No author creditted - notice courtesy of bookList team'
//         // }
//         // let book_id = data.id;
//         // let removedInfo;
//         return new Promise( (resolve, reject) => {
//           deleteBookFromList(listSQLname, data.id, req.params.uID)
//         })
//       })
//       .catch( (error) =>{
//         console.log(error, 'error in first .catch of removeFromList in db/lists.js');
//         next();
//       })
//
//     next();
//   }
//   // db.one('SELECT * FROM books WHERE isbn13 = $1', [req.params.bISBN13])
//   //   .then( (data) =>{
//   //     console.log(data, 'data in first .then of removeFromList in db/lists.js'); //returns
//   //     // {
//   //     //   id: 1,
//   //     //   isbn13: '9780765309402',
//   //     //   title: 'Old man\'s war',
//   //     //   publisher: 'Tor',
//   //     //   author: 'No author creditted - notice courtesy of bookList team'
//   //     // }
//   //     let book_id = data.id;
//   //     let removedInfo;
//   //     // select * from haveread where user_id = 3 AND book_id = 2; //selects
//   //     // db.any('DELETE FROM $1~ WHERE book_id = $2 AND user_id = $3 ;', [listSQLname, book_id, req.params.uID])//i think RETURNING only is able to return data from the table that has the deletion? using below select statement instead
//   //     //   .then( (data) => {
//   //     //     console.log(data, 'was data in second .then of removeFromList in db/lists.js');
//   //     //     // db.one('SELECT * FROM books WHERE id = $1;', [book_id])
//   //     //     //   .then( (data) =>{
//   //     //     //     console.log(data, 'was data in third .then of removeFromList in db/lists.js');
//   //     //     //     // removedInfo = data;
//   //     //     //     // console.log(removedInfo, 'was removedInfo in third .then of removeFromList in db/lists.js');
//   //     //     //     res.rows = data;
//   //     //     //     console.log(res.rows, 'was res.rows in third .then of removeFromList in db/lists.js');
//   //     //     //     next();
//   //     //     //   })
//   //     //     //   .catch( (error) =>{
//   //     //     //     console.log(error, 'was error in third .then of removeFromList in db/lists.js');
//   //     //     //     next();
//   //     //     //   })
//   //     //     // next();
//   //     //   })
//   //     //   .catch( (error) => {
//   //     //     console.log(error, 'was error in second .then of removeFromList in db/lists.js');
//   //     //     next();
//   //     //   })
//   //     //   console.log(removedInfo, 'was removedInfo before second to last next() in then of removeFromList in db/lists.js'); //returns undefined, does not work like i want it to, unsurprisingly
//   //     //   // res.rows = removedInfo
//   //     //   next();
//   //   })
//   //   .catch( (error) =>{
//   //     console.log(error, 'error in first .catch of removeFromList in db/lists.js');
//   //     next();
//   //   })
//   // // db.any('') //don't forget to formulate a RETURNING phrase
//   // next();
//   selectBookISBN(req.params.bISBN13)
// }
//
// ;

//promise chaining/resolving solution based on guidelines found at http://solutionoptimist.com/2013/12/27/javascript-promise-chains-2/
module.exports.removeFromList = ( req, res, next ) => {
  let payload = {};
  let listSQLname = req.body.payload.listTranslate[req.body.payload.list].listSQLname; //so that the SQL query below is readable
  console.log(req.params, 'was req.params');
  let loadBookBy_id = function (book_id) {
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
  let deleteBookFromList = function (listSQLname, book_id, user_id) {
    console.log(listSQLname, 'was listSQLname before db. of removeFromList in db/lists.js ');
    console.log(book_id, 'was book_id before db. of removeFromList in db/lists.js ');
    console.log(user_id, 'was user_id before db. of removeFromList in db/lists.js ');
    return db.any('DELETE FROM $1~ WHERE book_id = $2 AND user_id = $3 RETURNING *;', [listSQLname, book_id, user_id])//i think RETURNING only is able to return data from the table that has the deletion? using below select statement instead
      .then( (removedListInfo) => {
        console.log(removedListInfo, 'was removedListInfo in deleteBook .then of removeFromList in db/lists.js');
        // return new Promise( (resolve, reject) => {
        //   selectBook_id(book_id)
        // }  )
        // payload.removedListInfo = data
        console.log('the above seems like it should be returning info, but is not. deletion IS taking place though');
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
  let selectBookISBN = function (isbn13) {
    return db.one('SELECT * FROM books WHERE isbn13 = $1', [isbn13])
      .then( (bookInfoByISBN) =>{
        console.log(bookInfoByISBN, 'bookInfoByISBN in selectBookISBN .then of removeFromList in db/lists.js'); //returns
        // {
        //   id: 1,
        //   isbn13: '9780765309402',
        //   title: 'Old man\'s war',
        //   publisher: 'Tor',
        //   author: 'No author creditted - notice courtesy of bookList team'
        // }
        // let book_id = data.id;
        // let removedInfo;
        // return deleteBookFromList(listSQLname, data.id, req.params.uID)
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
      console.log(data, 'was data after the selectBookISBN(req.params.bISBN13) call');
      console.log(payload, 'was payload after the selectBookISBN(req.params.bISBN13) call');
      deleteBookFromList(listSQLname, payload.bookInfoByISBN.id, req.params.uID)
        .then( (removedListInfo)=>{
          console.log(removedListInfo, 'was removedListInfo in .then of deleteBookFromList(listSQLname, payload.bookInfoByISBN.id, req.params.uID) in the selectBookISBN(req.params.bISBN13) call');
          console.log(payload, 'was payload in .then of deleteBookFromList(listSQLname, payload.bookInfoByISBN.id, req.params.uID) in the selectBookISBN(req.params.bISBN13) call');

        } )
      next()
    })
  res.rows = payload;
}
