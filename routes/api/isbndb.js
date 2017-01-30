const express = require('express');
const router = express.Router();

//isbndb functions
const  isbndb_fns = require('../../db/isbndb');//do these actually need to be in the /db directory??

const notImplement = (req,res) => {
  res.send( req.method + ' this method is not yet implemented for user routes' )
}

// :3003/api/isbndb


router
  .get('/', /* pull user info from DB, */ notImplement)
  // .post('/', /* pull user info from DB, */ notImplement)
  .post( '/',
    isbndb_fns.getResultsFromSearch,
    (req,res) => {
      res.json( {result: res.rows})
    }
  )


// :3003/api/isbndb
//                 /author
//                 /title
//                 /isbn
          /// etc based on whatever i had as ways to search for books/authors in the modify list page
router
  .get('/author', /* ?? , */ notImplement)



module.exports = router;
