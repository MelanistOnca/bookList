'use strict'
const bcrypt = require('bcrypt');
const salt   = bcrypt.genSaltSync(10);
// const pgp    = require('pg-promise');
// const pgp    = require('pg-promise')({});
const pgp    = require('pg-promise')({
  // initialization options
});

const session = require('express-session');

// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object
const connectionObject = {
    host: 'localhost',
    port: 5432,
    database: 'booklist',
    user: 'Cthulu', //may need to check capitalization?
    password: 'testpassword'
}

const db = pgp(connectionObject);

//user functions

module.exports.createSecure = ( username, password, callback ) => {

  bcrypt.genSalt( (err,salt) => {
    bcrypt.hash(password, salt, (err,hash) => {
      //this callback saves the user to DB with hash'd pw
      callback(username, hash);
    });
  });
} //if this syntax for export does work (for whatever reason), use

//function createSecure(email, password, callback){ ...code block ... } then at end of file have module.exports.createSecure = createSecure

module.exports.createUser = ( req, res, next ) => {
  createSecure(req.body.username, req.body.password, saveUser);
  saveUser = (username, hash) => {
    db.none( "INSERT INTO users (admin, f_name, m_name , l_name, email, username, password_digest) VALUES ($1, $2, $3, $4, $5, $6, $7);", [req.body.admin, req.body.f_name, req.body.m_name, req.body.l_name, req.body.email, username, hash] )
      .then( (data) => {
        //success
        console.log('saveUser success');
        next();
      })
      .catch( () => {
        //error
        console.log('error in save user.');
      })


  }
}

module.exports.logInUser = ( req, res, next ) => {
  console.log(req.body, 'was req.body');
  // let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;
  // let password_digest = req.body.password;
  // console.log(email, 'that was email');
  console.log(username, 'that was username');
  console.log(password, 'that was password');
  //here need to do the pgp equiv of pg.connect(connString, () => {
  // if (err)...
  // let query = client.query(select ... )
  // bla bla
  // res.rows = results.rows[0]
// })

// this is from the group project that used pgp
// db.one("SELECT * FROM users WHERE email LIKE $1;", [email])
//     .then((data) => {
//       if (bcrypt.compareSync(password, data.password_digest)) {
//         res.rows = data
//         next()
//       } else {
//         res.status(401).json({data:"Fool this no workie"})
//         next()
//       }
//     })
//     .catch((error) => {
//       console.error(error,'error finding users')
//     })
  db.one("SELECT * FROM users WHERE username like $1;", [username])
      .then( (data) => {
        if (bcrypt.compareSync(password, data.password_digest)) {
          res.rows = data
          next()
        } else {
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
