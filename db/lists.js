'use strict'
const bcrypt = require('bcrypt');
// const salt   = bcrypt.genSaltSync(10);
const pgp    = require('pg-promise');
// const pgp    = require('pg-promise')({
//   // initialization options
// });

// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object
const connectionObject = {
    host: 'localhost',
    port: 5433,
    database: 'booklist',
    user: 'cthulu', //may need to check capitalization?
    password: 'testpassword'
}

const db = pgp(connectionObject);



module.exports.getList = ( req, res, next ) /* how do i add params to this request so that i can specify the list im trying to get? */=> {
  //get list of books based on the particular list type and user
  // params of user and list type
}
//get list should return the list
db.one(getList) //promise for list
    .then(list => {
      //list found
    })
    .catch(error => {
      //error found
      console.log(error, 'was error in db.one(getList) in /db/lists.js');
    })

module.exports.addToList = ( req, res, next ) => {

}

modules.exports.removeFromList = ( req, res, next ) => {

}
