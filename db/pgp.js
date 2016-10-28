'use strict'
const bcrypt = require('bcrypt');
const salt   = bcrypt.genSaltSync(10);
const pgp    = require('pg-promise')({});

//export from other files here

if( process.env.DATA_ENV === 'production' ) {
  let DB_config = process.env.DATABASE_URL;
} else if( process.env.DATA_ENV === 'development' ){
  let DB_config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
};
} else {
  console.log('DB_config is messed up');
}
