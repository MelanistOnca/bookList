'use strict'

const pgp    = require('pg-promise')({});// don't need this since i'm not talking to my db? or maybe i do, but the connection object here points to the ISBNdb DB? this sounds correct?
const rp = require('request-promise');

// let apiKey = '0SBOHNU4';
let apiKey = process.env.API_KEY;

module.exports.testFn = (req,res,next) => {
  console.log('testFn in db/isbndb.js ran');
}

module.exports.getResultsFromSearch = (req, res, next) => {
  console.log(req.body, 'was req.body in searchOptions in db/isbndb.js');
  let searchOptions = req.body
  console.log(searchOptions, 'was searchOptions in db/isbndb.js');
  console.log(typeof searchOptions, 'was typeof searchOptions in db/isbndb.js');

  if(searchOptions.searchType==='book'){
    console.log(searchOptions.searchTerm[0].split(' ').join('_').split("'").join(''), 'was searchTermField.split().join().split().join() in searchTermChange in searchFor.js');
    searchOptions.searchTerm[0] = searchOptions.searchTerm[0].split(' ').join('_').split("'").join('')
    // let parsedSearchTerm = searchTermField.split(' ').join('_').split("'").join('')
    // console.log(parsedSearchTerm, 'was parsedSearchTerm in searchTermChange in searchFor.js');
  }


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

  rp(options[searchOptions.searchType])
    .catch( (err) => {
      console.log(err, 'was err in db/isbndb getResultsFromSearch fn');
      console.log(options, 'was options in .catch in same');
      next()
    })
    .then( (data) => {

      console.log(data, 'was data in db/isbndb getResultsFromSearch fn');
      console.log(typeof data, 'was typeof data in same'); //NOTE i feel like this should be returning more than one book for most searches. there is probably a query option to get more than one result?
      if (data.index_searched==='book_id') {
        res.rows = {
          isbn13: data.data[0].isbn13,
          title: data.data[0].title,
          publisher: data.data[0].publisher_name,
          author: data.data[0].author_data[0].name,
          index_searched: data.index_searched
        };
        if (data.data[0].author_data[0]===undefined){
          // res.rows = data;
          // console.log(res.rows, 'was res.rows before author_data shennanigans');
          console.log('///////////////////////////////');

          console.log(data.data[0].author_data[0], 'was data.data[0].author_data[0] in data.data[0].author_data[0]===undefined in getResultsFromSearch in db/isbndb.js');
          console.log(data.data[0].author_data[0].name, 'was data.data[0].author_data[0].name in data.data[0].author_data[0]===undefined in getResultsFromSearch in db/isbndb.js');
          console.log(data.data[0], 'was data.data[0] in data.data[0].author_data[0]===undefined in getResultsFromSearch in db/isbndb.js');
          res.rows.author =
            {
              "name": 'No author creditted - notice courtesy of bookList team'
            }
          console.log('///////////////////////////////');
          // console.log(res.rows, 'was res.rows after shennanigans');
        } /*else {
          res.rows = data;
        }*/
      } else if (data.index_searched==='author_name') {
        console.log(data.data[0], 'was data[0] in author_name index_searched');
        console.log(data.data[0].book_ids, 'was data[0].book_ids in author_name index_searched');
        res.rows = {
          name: data.data[0].name,
          book_count: data.data[0].book_count,
          book_ids: data.data[0].book_ids,
          index_searched: data.index_searched
        }
      } else if (data.index_searched==='isbn') {
        console.log(data.data[0], 'was data[0] in isbn index_searched');
        console.log(data.data[0].author_data[0], 'was data.data[0].author_data[0] in data.index_searched==="isbn" in getResultsFromSearch in db/isbndb.js');
        // console.log(data.data[0].author_data, 'was data.data[0].author_data in data.index_searched==="isbn" in getResultsFromSearch in db/isbndb.js');
        // console.log(data.data[0].author_data[0].name, 'was data.data[0].author_data[0].name in data.index_searched==="isbn" in getResultsFromSearch in db/isbndb.js');
        res.rows = {
          isbn13: data.data[0].isbn13,
          title: data.data[0].title,
          publisher: data.data[0].publisher_name,
          // author: data.data[0].author_data[0].name,
          index_searched: data.index_searched
        };
        if(data.data[0].author_data[0]===undefined){
          res.rows.author =
             'No author creditted - notice courtesy of bookList team'

        } else {
          res.rows.author = data.data[0].author_data[0].name
        }
      }

      // console.log(res.rows, 'was res.rows in db/isbndb getResultsFromSearch fn');


      console.log(res.rows, 'was res.rows in same');
      // console.log(res.rows.data, 'was res.rows.data in same');
      next()
    })


}
