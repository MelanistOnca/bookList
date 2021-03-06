'use strict'
const bcrypt = require('bcrypt');
const salt   = bcrypt.genSaltSync(10);

const pgp    = require('pg-promise')({
  // initialization options
});

const session = require('express-session');

// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object

const connectionObject = {
    host: process.env.DB_HOST,
    port: process.env.PGDB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER, //may need to check capitalization of name in env file?
    password: process.env.DB_PASS
}
// console.log(connectionObject, 'was connectionObject in users.js');


// //these two log different values
// console.log(process.env.HOST, 'was process.env.HOST in same');
// console.log(process.env.DB_HOST, 'was process.env.DB_HOST in same');
//
// //these two log the same values
// console.log(process.env.DB_USER, 'was process.env.DB_USER in same');
// console.log(process.env.USER, 'was process.env.USER in same');
//
// //these two also log different values
// console.log(process.env.DB_PASS, 'was process.env.DB_PASS in same');
// console.log(process.env.PASS, 'was process.env.PASS in same');

const db = pgp(connectionObject);

//user functions

function createSecure ( username, password, callback ) {
  console.log('createSecure in users.js fired');
  // console.log(username, 'was username in createSecure in db/users.js');
  // console.log(password, 'was password in createSecure in db/users.js');
  // console.log(callback, 'was callback in createSecure in db/users.js');
  bcrypt.genSalt( (err,salt) => {
    bcrypt.hash(password, salt, (err,hash) => {
      //this callback saves the user to DB with hash'd pw
      callback(username, hash);
    });
  });
}
//have a similar function at a different route to create admins // ahahahahah you are cute past me
module.exports.createUser = ( req, res, next ) => {
  console.log('createUser fired in users.js');
  createSecure(req.body.username, req.body.password, saveUser);
  function saveUser (username, hash) {
    console.log('saveUser fired in createUser in users.js');
    // console.log(req.body, 'req.body in saveUser in db/users.js');
    db.none( "INSERT INTO users ( f_name, m_name , l_name, email, username, password_digest) VALUES ($1, $2, $3, $4, $5, $6);", [ req.body.firstName, req.body.middleName, req.body.lastName, req.body.email, username, hash] )
      .then( (/*data*/) => {
        //success
        console.log('saveUser success');
        // console.log(res.statuscode, 'was res.statuscode in saveUser success');
        // console.log(data, 'was data in saveUser success');
        next();
      })
      .catch( (err) => {
        //error
        console.log('error in save user.');
        console.log(err, 'err');
      })


  }
}

// module.exports.createAdmin = ( req, res, next ) => {
//
// }

module.exports.logInUser = ( req, res, next ) => {
  console.log('logInUser fired in users.js');
  // console.log(req.body, 'was req.body in logInUser');
  let username = req.body.username;
  let password = req.body.password;
  // console.log(username, 'that was username');
  // console.log(password, 'that was password');

  db.one("SELECT * FROM users WHERE username like $1;", [username])
      .then( (data) => {
        if (bcrypt.compareSync(password, data.password_digest)) {
          console.log('bcrypt.compareSync(password, data.password_digest) was true');
          res.rows = data
          // console.log(data, 'was data in logInUser query');
          // res.rows.password_digest = null;
          delete res.rows.password_digest;
          // console.log(data.payload, 'was data.payload');
          // console.log(res.rows, 'was res.rows in logInUser query');
          // res.json({
          //   user: data
          // })
          // console.log('res.json happened');
          // dispatch(logInUserSuccess(data))
          // logInUserSuccess(data)
          next()
        } else {
          console.log('bcrypt.compareSync(password, data.password_digest) was false, bad login info');
          res.status(401).json( {
            data: "shit broke when trying to log in"
          })
          next()
        }
      })
      .catch( (error) => {
        console.error(error, "error finding user")
      })
}

// module.exports.getUserInfo = ( req,res,next ) => {
//   db.one("SELECT * FROM users WHERE ")
// }

module.exports.updateUser = ( req,res,next ) => {
  console.log('updateUser in db/users.js fired');
  // console.log(req.body, 'was req.body in updateUser in db/users.js');
  // console.log(req.params, 'was req.params in updateUser in db/users.js');
  db.any("UPDATE users SET f_name = $1, m_name = $2, l_name = $3, email = $4, username = $5 WHERE id = $6 ;", [req.body.firstName, req.body.middleName, req.body.lastName, rq.body.email, req.body.username]) //see the pgp docs mentioning a format for protecting against injection //i dont think that applies here, but TODO: check that shit out
    .then( (data) => {
      // console.log(data, 'was data in .then of updateUser in db/users.js');
      res.rows = data;
      //this presumes that i get return info i want. I believe i will need "RETURNING f_name, m_name, l_name, email, username" added to the update statement above
      next()
    })
    .catch( (error) => {
      console.log(error, 'was error in .then of updateUser in db/users.js');
      next()
    })
  next()
}

// module.exports.createSecure = createSecure;
