'use strict'
const bcrypt = require('bcrypt');
// const salt   = bcrypt.genSaltSync(10);
const pgp    = require('pg-promise')({});

module.exports.getBook  = ( req, res, next ) => {

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
