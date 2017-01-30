import React from 'react';
import { render } from 'react-dom';

import EditOptions from './editOptions';
import SearchButton from './searchButton';

const rp = require('request-promise');

//NOTE: this should probably be refactored to be substituted with a ListView TODO




export default class InnerResultList extends React.Component {

  componentWillReceiveProps(nextProps){
    // console.log(this.props, 'was this.props in innerResultList componentWillReceiveProps');
    // console.log(nextProps, 'was nextProps in innerResultList componentWillReceiveProps');
    // console.log(this.props.searchTerm[0], 'was this.props in innerResultList componentWillReceiveProps');
    // console.log(nextProps.searchTerm[0], 'was nextProps in innerResultList componentWillReceiveProps');
    if(
      this.props.searchTerm[0]!==nextProps.searchTerm[0]
    ) {
      nextProps.updateSearchTerm(nextProps.searchTerm[0].split('_').join(' '))
    }
    // console.log(nextProps.searchTerm[0], 'was nextProps in innerResultList componentWillReceiveProps');
  }

  render(){
    // console.log(this.props, 'was this.props in components/innerResultList in render()');
    // console.log(this.props.selectedListKey, 'was this.props.selectedListKey in same');
    // console.log(this.props.selectedListKey[0], 'was this.props.selectedListKey[0] in same');
    // console.log(this.props.startingPoint, 'was this.props.startingPoint in components/innerResultList');
    // console.log(this.props.addToList, 'was this.props.addToList in components/innerResultList in render()');
    let readableArray = [];
    let stamp = new Date().getTime();

    /////////matchedAuthor stuff/////////
    // console.log(this.props.matchedAuthor, 'was this.props.matchedAuthor in components/innerResultList'); //NOTE: no isbn13 in this data
    if(this.props.matchedAuthor){
      //start of matchedAuthor if statement
      // console.log(this.props.matchedAuthor, 'was this.props.matchedAuthor inside if(this.props.matchedAuthor) in components/innerResultList');
      let booksPerAuthor = this.props.matchedAuthor.book_ids ? this.props.matchedAuthor.book_ids.length : 0 ;
      // console.log(booksPerAuthor, 'was booksPerAuthor in components/innerResultList');

      let authorsBooksTitleArray = this.props.matchedAuthor ? this.props.matchedAuthor.book_ids : [''];
      // console.log(authorsBooksTitleArray, 'was authorsBooksTitleArray in components/innerResultList');
        for (let i = 0; i < booksPerAuthor ; i++) {
          // console.log(authorsBooksTitleArray[i], 'was booksPerAuthorTitleArray[i] in same');

          let uniqueStamp = `${i}${stamp}`;
          let bookId = authorsBooksTitleArray[i];
          // let isbn13 = this.returnISBN(bookId)
          let humanReadableTitle =
          authorsBooksTitleArray[i].split('_').join(' ');
          // console.log(humanReadableTitle, 'was humanReadableTitle in booksPerAuthor loop');
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
            <SearchButton
              {...this.props}
              forceSelectedSearchType={"Title"}


              newSearchTerm={humanReadableTitle}


              />
            <p>Select "Title" from the above dropdown before clicking this button</p>
            </div>
          )
          // newSearchTerm={authorsBooksTitleArray[i]}
        }

    } /////end of matchedAuthor stuff////

    ////////matchedISBN stuff////////////
    // console.log(this.props.matchedISBN, 'was this.props.matchedISBN in components/innerResultList');

    if(this.props.matchedISBN){
      //start of matchedISBN if statement
      // console.log(this.props.matchedISBN, 'this.props.matchedISBN inside if(this.props.matchedISBN) in components/innerResultList');
      let authorName = this.props.matchedISBN.author ? this.props.matchedISBN.author : 'No author creditted';

      //NOTE TODO: i can probably replace the book info below with a SingleBook component now, remove the EditOption element, and pass the SingleBook an addOrRemoveButton={'add'} prop
          readableArray.push(
            <div
              className={"bookFromISBN_Result"}
              key={stamp}
              id={stamp}
              style={{"border":"solid 1px"}}
              >
              <ul>
                <li>Title: {this.props.matchedISBN.title}</li>
                <li>Author: { authorName
                    }</li>
                  <li>Publisher: {this.props.matchedISBN.publisher_name||this.props.matchedISBN.publisher}</li>
                <li>ISBN: {this.props.matchedISBN.isbn13}</li>
              </ul>

              <EditOptions
                {...this.props}
                addOrRemoveButton={'add'}
                />


            </div>
          )

    } //end of matchedISBN if statement

    ////////end of matchedISBN stuff/////

    return(
      <div id="innerResult">

        {readableArray}
      </div>
    )
  }
}
