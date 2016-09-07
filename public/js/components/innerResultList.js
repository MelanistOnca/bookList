import React from 'react';
import { render } from 'react-dom';

import EditOptions from './editOptions';
import SearchButton from './searchButton';

const rp = require('request-promise');

//NOTE: this should probably be refactored to be substituted with a ListView



export default class InnerResultList extends React.Component {
  // returnISBN(bookId){
  //   console.log('returnISBN was called');
  //   // return 'returnISBN was called'
  //   let apiKey = '0SBOHNU4';
  //
  //
  //   let options = {
  //     uri: `http://isbndb.com/api/v2/json/${apiKey}/book`,
  //     qs: {
  //       'q': `${bookId}`
  //     },
  //     headers: {
  //       'User-Agent': 'Request-Promise'
  //     },
  //     json: true
  //   }
  //
  //   rp(options)
  //     .then( (res) => {
  //       console.log(res, 'was res in returnISBN() components/innerResultList.js');
  //     })
  //     .catch( (err) => {
  //       console.log(err, 'was err in returnISBN() components/innerResultList.js');
  //     })
  // } //decided against pinging ISBNdb for each book of a given author. user can ping for title if they're interested in adding.

  render(){
    //NOTE: the startingPoint and i PROPS are non-stateful and passed from result.js. FIX THISSSS
    console.log(this.props, 'was this.props in components/innerResultList');
    // console.log(this.props.startingPoint, 'was this.props.startingPoint in components/innerResultList');
    let readableArray = [];
    let stamp = new Date().getTime();

    /////////matchedAuthor stuff/////////
    console.log(this.props.matchedAuthor, 'was this.props.matchedAuthor in components/innerResultList'); //NOTE: no isbn13 in this data
    if(this.props.matchedAuthor){
      //start of matchedAuthor if statement
      let booksPerAuthor = this.props.matchedAuthor.book_ids ? this.props.matchedAuthor.book_ids.length : 0 ;
      console.log(booksPerAuthor, 'was booksPerAuthor in components/innerResultList');

      let authorsBooksTitleArray = this.props.matchedAuthor ? this.props.matchedAuthor.book_ids : [''];

      // (booksPerAuthor>0) ? () => {
        for (let i = 0; i < booksPerAuthor ; i++) {
          // console.log(authorsBooksTitleArray[i], 'was booksPerAuthorTitleArray[i] in same');

          let uniqueStamp = `${i}${stamp}`;
          let bookId = authorsBooksTitleArray[i];
          // let isbn13 = this.returnISBN(bookId)
          let humanReadableTitle =
          authorsBooksTitleArray[i].split('_').join(' ');
          console.log(humanReadableTitle, 'was humanReadableTitle in booksPerAuthor loop');
          readableArray.push(
            <div
            className={"bookFromSearchedAuthor"}
            key={uniqueStamp}
            id={uniqueStamp}
            style={{"border":"solid 1px"}}
            >

            <ul>
              <li>Title: {humanReadableTitle}</li>
            </ul>
            <button>this button should search for this book's info</button>
            <div>and return that info here</div>
            </div>
          )


        }


        // : console.log('booksPerAuthor did not exist');
    } //end of matchedAuthor if statement



    ///////end of matchedAuthor stuff////

    /////////////////////////////////////

    ////////matchedISBN stuff////////////
    console.log(this.props.matchedISBN, 'was this.props.matchedISBN in components/innerResultList');

    if(this.props.matchedISBN){
      //start of matchedISBN if statement
      // (
      //   (this.props.matchedISBN !== 'p' )
      //   &&
      //   (this.props.matchedISBN !== undefined)
      // )
      //   ? (
          readableArray.push(
            <div
              className={"bookFromISBN_Result"}
              key={stamp}
              id={stamp}
              style={{"border":"solid 1px"}}
              >
              <ul>
                <li>Title: {this.props.matchedISBN.title}</li>
                <li>Author: {this.props.matchedISBN.author_data[0].name}</li>
                <li>Publisher: {this.props.matchedISBN.publisher_name}</li>
                <li>ISBN: {this.props.matchedISBN.isbn13}</li>
              </ul>
              <SearchButton
                selectedSearchProps={}
                searchTerm={}
                receiveResults={}
                />

            </div>
          )
      // )
      // : console.log('matchedISBN did not exist');
    } //end of matchedISBN if statement



    ////////end of matchedISBN stuff/////

    // console.log(this.props.startingPoint[this.props.i], 'was this.props.startingPoint[this.props.i] in components/innerResultList');
    // console.log(this.props.startingPoint[this.props.i].book_ids, 'was this.props.startingPoint[this.props.i].book_ids in components/innerResultList');
    // let booksPerAuthor = this.props.startingPoint[this.props.i] ? this.props.startingPoint[this.props.i].length : 0 ; //this may be valid when i get this component stateful again
    // let booksPerAuthor = this.props.startingPoint[this.props.i].book_ids ? this.props.startingPoint[this.props.i].book_ids.length : 0 ;
    //NOTE: all code after this needs to be reviewed to make it compatible with a matchedISBN being passed.
    //END NOTE //



    // console.log(this.props.matchedISBN, 'was this.props.matchedISBN');

    // let authorsBooksTitleArray = this.props.startingPoint[this.props.i] ? this.props.startingPoint[this.props.i].book_ids : [];



    // console.log(readableArray, 'was readableArray before loop');





    // console.log(readableArray, 'was readableArray after booksPerAuthor loop');




    return(
      <div id="innerResult">

        {readableArray}
      </div>
    )
  }
}
