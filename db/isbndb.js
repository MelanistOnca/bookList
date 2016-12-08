'use strict'

const pgp    = require('pg-promise')({});// don't need this since i'm not talking to my db? or maybe i do, but the connection object here points to the ISBNdb DB? this sounds correct?
const rp = require('request-promise');


// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object
const connectionObject = {

}

const ISBNdb = pgp(connectionObject);

let apiKey = '0SBOHNU4'; //this switch in naming convention is going to fuck you.
// let apiKey = process.env.API_KEY; //this switch in naming convention is going to fuck you.
//need to see if i can add in a .something so that if a search fails (author?q=scalzi) it tries a more general search, i.e. authorS?q=scalzi
//NOTE transpose this into a function below
// rp(options[searchType]) //there is going to be a problem here since apiKey will be undefined where the options object is defined
//WAIT. NOTE make the options object simpler (i.e. searchType and searchTerm), and then have a fuller options object defined here, with spaces for those key terms, AND the apiKey.
// pgp(connectionObject)
  // .then( (res) => {
  //   console.log(res,'was res in components/searchButton.js');
  //
  //   // console.log(options[searchType], 'was options[searchType] in .then in componenets/searchFor.js ');
  //   props.receiveResults(res);
  // })
  // .catch( (err) => {
  //   console.log(err, 'was err in components/searchButton.js');//my impression is this will usually be a low-info response. may be confusing this err with CORS errors.
  //   // console.log(options[searchType], 'was options[searchType] in .catch in componenets/searchFor.js');
  // })

//NOTE end of section regarding the above note


// i believe im confusing where the searchType needs to go?
// on further review, i think i have it correct. i need to pass the options[searchType] object from components/searchButton.js into the outer function, so that i can call it in the inner function that is actually making the request
// module.exports.getResultsByISBN = (searchType) => { //searchType here will likely be the options[searchType] object from components/searchButton.js
//   reqCB ( req, res, next ) => {
//     // db.___()
//     // whatever ISBNdb wants me to do to get a result by ISBN
//     pgp(connectionObject)
//   }
// }

//  reqCB  ( req, res, next ) => {
// function reqCB  ( req, res, next ) {
//   // db.___()
//   // whatever ISBNdb wants me to do to get a result by ISBN
//   // pgp(searchType). //this should be subsituting for the db. in, for example, users.
//   pgp(parameterSearchType)
//     .then( (data) => {
//       console.log(data, 'was data in db/isbndb getResultsFromSearch fn');
//       console.log(typeof data, 'was typeof data in db/isbndb getResultsFromSearch fn');
//     })
// }

module.exports.testFn = (req,res,next) => {
  console.log('testFn in db/isbndb.js ran');
}
// module.exports.getResultsFromSearch = (searchOptions) => { //searchType here will likely be the options[searchType] object from components/searchButton.js
//   return new Promise ( (reso, rej) => {
//     reso(console.log('log inside new Promise in getResultsFromSearch in db/isbndb.js');)
//   })
// }
// module.exports.getResultsFromSearch = (searchOptions) => { //searchType here will likely be the options[searchType] object from components/searchButton.js
module.exports.getResultsFromSearch = (req, res, next) => { //searchType here will likely be the options[searchType] object from components/searchButton.js
// exports.getResultsFromSearch = (req, res, next) => { //searchType here will likely be the options[searchType] object from components/searchButton.js
  console.log(req.body, 'was req.body in searchOptions in db/isbndb.js');
  let searchOptions = req.body
  console.log(searchOptions, 'was searchOptions in db/isbndb.js');
  console.log(typeof searchOptions, 'was typeof searchOptions in db/isbndb.js');

  //possibly need CORS/Access-Control-Allow-Origin  related something in the header here?
  let templateString = `template string`
  let authorUri = `http://isbndb.com/api/v2/json/${apiKey}/${searchOptions.searchType}`
  let options = {
    "authors" : {
      uri: `http://isbndb.com/api/v2/json/${apiKey}/${searchOptions.searchType}`,
      qs: {
        'q': `${searchOptions.searchTerm}`
      },
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true
    },
    "book": {
      uri : `http://isbndb.com/api/v2/json/${apiKey}/book/${searchOptions.searchTerm}`,
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true
    }
  }
  // reqCB()
  //  reqCB  ( req, res, next ) => {
  //  function reqCB  ( req, res, next ) {
    // db.___()
    // whatever ISBNdb wants me to do to get a result by ISBN
    // pgp(searchType). //this should be subsituting for the db. in, for example, users.
    // pgp(options[searchOptions.searchType])
    console.log(next, 'was next in reqCB in db/isbndb.js');
    rp(options[searchOptions.searchType])
      .catch( (err) => {
        console.log(err, 'was err in db/isbndb getResultsFromSearch fn');
        console.log(options, 'was options in .catch in same');
        next()
      })
      .then( (data) => {
        console.log(data, 'was data in db/isbndb getResultsFromSearch fn');
        // console.log(typeof data, 'was typeof data in db/isbndb getResultsFromSearch fn');
        res.rows = data;
        // console.log(res.rows, 'was res.rows in same');
        next()
      })
  // }
  // reqCB()

}




//other module.exports.FUNCTIONnAMES to match the options on the components/searchButton.js function
