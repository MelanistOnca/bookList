// require('dotenv').config(); //this needs to be commented out for deploy

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');



// example structure
// var booksRoute = require( path.join( __dirname, 'routes/books') );

//api routes
// const apiRoute = require( path.join ( __dirname, 'routes/api'))
const apiUsersRoute = require( path.join ( __dirname, 'routes/api/users'))
const apiBooksRoute = require( path.join ( __dirname, 'routes/api/books'))
const apiListsRoute = require( path.join ( __dirname, 'routes/api/lists'))
// const apiISBNDBRoute = require( path.join ( __dirname, 'routes/api/ISBNDB'))
const apiISBNDBRoute = require( path.join ( __dirname, 'routes/api/isbndb'))

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//adds ACAO header
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.get('/bookQuery', (req,res) => {
//   res.redirect('http://isbndb.com/api/v2/xml/0SBOHNU4/authors?q=jemisin')
// })



app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// api test
// app.use('/api', apiRoute)
// app.get('/api', apiRoute)

// api for user actions
app.use('/api/users', apiUsersRoute)
app.get('/api/users', apiUsersRoute)

// api for book actions
app.use('/api/books', apiBooksRoute)
app.get('/api/books', apiBooksRoute)

// api for list actions
app.use('/api/lists', apiListsRoute)
app.get('/api/lists', apiListsRoute)

// api for ISBNDB actions
app.use('/api/isbndb', apiISBNDBRoute)
app.get('/api/isbndb', apiISBNDBRoute)

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})




const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Your bookList server is running on port ${port}`);
})
