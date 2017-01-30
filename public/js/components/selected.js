import React from 'react';
import { render } from 'react-dom';

// import SingleBook from './singleBook';
import ListView from './listView';
import SearchFor from './searchFor';
import SingleBook from './singleBook';

export default class Selected extends React.Component {

  componentWillReceiveProps(nextProps){
    // console.log(this.props, 'was this.props in componentWillReceiveProps in selected');
    // console.log(nextProps, 'was nextProps in componentWillReceiveProps in selected');
    // console.log(this.props.selectedListKey[0], 'was this.props.selectedListKey[0] in same');
    if( nextProps.user.status === "authenticated" ){
      if( this.props.listCollection !== nextProps.listCollection ) {
        let fnArg = {
          listKey: this.props.selectedListKey[0],
          user_id: this.props.user.user.id
        }
        nextProps.getList( fnArg )
      }
    }
    // console.log(Object.keys(nextProps.newToList.currentlyReadingList), 'was Object.keys(nextProps.newToList.currentlyReadingList) in componentWillReceiveProps in selected');
    // console.log(Object.keys(nextProps.newToList.toBeReadList), 'was Object.keys(nextProps.newToList.currentlyReadingList) in componentWillReceiveProps in selected');
    // console.log(Object.keys(nextProps.newToList.toBeReadList)[0], 'was Object.keys(nextProps.newToList.currentlyReadingList)[0] in componentWillReceiveProps in selected'); //logs the isbn13
    // console.log(this.props.deletedBook.book.isbn13, 'was this.props.deletedBook.book.isbn13 in same');
    if(
      Object.keys(nextProps.newToList.currentlyReadingList)[0]
      ===
      this.props.deletedBook.book.isbn13
    ) {
      nextProps.clearDeletedBook()
    } else if(
      Object.keys(nextProps.newToList.haveReadList)[0]
      ===
      this.props.deletedBook.book.isbn13
    ) {
      nextProps.clearDeletedBook()
    } else if(
      Object.keys(nextProps.newToList.toBeReadList)[0]
      ===
      this.props.deletedBook.book.isbn13
    ) {
      nextProps.clearDeletedBook()
    } else {
      // console.log('i really feel like this should be a switch statement.'); TODO: see how complex the switch (______) and case _____ expressions can be
    }

  }
  render(){


    let key = this.props.selectedListKey; //it looks like im doing this to make the expressions shorter/more-readable below

    let listTitle= this.props.listCollection[key] ? this.props.listTranslate[key].listFrontTitle : undefined;

    // console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in componenets/selected.js');
    // i should probably turn the deletedBookHolder into a separate component, shouldn't i? TODO: <== that.
    let deletedBookHolder;
    let deletedComponent_id = `deletedBookISBN${this.props.deletedBook.book.isbn13}`
    // console.log(this.props.deletedBook, 'was this.props.deletedBook in componenets/selected.js');
    let deletedMatchedISBN = {
      author: this.props.deletedBook.book.author,
      isbn13: this.props.deletedBook.book.isbn13,
      pubisher: this.props.deletedBook.book.publisher,
      title: this.props.deletedBook.book.title,
      index_searched: 'can i get away with bullshit or will i have to force isbn or something'
    }
    if(this.props.deletedBook.bookInDeletedBuffer){
      //TODO: pass a prop to make sure there is a call to clear the deleted book buffer to this specific instance of SingleBook NOTE: maybe check the this.props.isbn13 matches the this.props.deletedBook.book.isbn13 and do something based off of that? //NOTE: i think i've done this, TODO review.
      deletedBookHolder =
      <div
        id="filledDeletedBookHolder">
        <p>Here is the last book deleted from a list.</p>
        <SingleBook
          id={deletedComponent_id}
          key={deletedComponent_id}
          {...this.props}
          title={this.props.deletedBook.book.title}
          author={this.props.deletedBook.book.author}
          publisher={this.props.deletedBook.book.publisher}
          isbn13={this.props.deletedBook.book.isbn13}
          matchedISBN={deletedMatchedISBN}
          addOrRemoveButton={'add'}
          />
      </div>
    } else {
      deletedBookHolder =
      <div
        id="emptyDeletedBookHolder"></div>
    }
    return(
      <div id = "selectedListKeyContainer">
        {deletedBookHolder}
        <SearchFor
          {...this.props}
          />

        <p>{listTitle}</p>
        <ListView
          {...this.props}
          />

      </div>
    )

  }
}
