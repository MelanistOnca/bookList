'use strict'
const bcrypt = require('bcrypt');
const salt   = bcrypt.genSaltSync(10);
const pgp    = require('pg-promise')({});

const session = require('express-session');

//user functions

module.exports.createSecure = (  ) => {

} //if this syntax for export does work (for whatever reason), use

//function createSecure(email, password, callback){ ...code block ... } then at end of file have module.exports.createSecure = createSecure

module.exports.createUser = (  ) => {

}

module.exports.logInUser = (  ) => {

}
