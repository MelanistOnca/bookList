require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

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


app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Your bookList server is running on port ${port}`);
})
