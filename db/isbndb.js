const pgp    = require('pg-promise')({});// don't need this since i'm not talking to my db? or maybe i do, but the connection object here points to the ISBNdb DB? this sounds correct?

// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object
const connectionObject = {

}

const ISBNdb = pgp(connectionObject);


module.exports.getResultsByISBN = ( req, res, next ) => {
  // db.___()
  // whatever ISBNdb wants me to do to get a result by ISBN
}


//other module.exports.FUNCTIONnAMES to match the options on the components/searchButton.js function
