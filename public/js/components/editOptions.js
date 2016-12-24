import React from 'react';
import { render } from 'react-dom';

import axios from 'axios';

export default class EditOptions extends React.Component {
  //props passed to this component include:
  // this.props.bookId //this should be a title with underscores for spaces

  //i can probably consolodate the add and remove functions into a single function since i'm passing in the appropriate function when this is called.
  addToList( list, bookId, user, addFn, e) {

    // console.log('addToList called');
    // console.log(event, 'was event');
    // console.log(e, 'was e in addToList components/editOptions.js');
    //
    // console.log(list[0], 'was list[0] in addToList components/editOptions.js');
    // console.log(bookId, 'was bookId in addToList components/editOptions.js');
    // console.log(user, 'was user in addToList components/editOptions.js');
    // console.log(user.user, 'was user.user in addToList components/editOptions.js');
    // console.log('//////////////////////');
    // console.log(addFn, 'was addFn in addToList components/editOptions.js');
    e.preventDefault();
    // console.log(e, 'was e after .preventDefault()');
    let listNumber;
    switch (list[0]) {
      case "Select": {
        listNumber = 0;
        // console.log('Select case, listNumber=0');
      }
      break;
      case "toBeReadList": {
        listNumber = 1;
        // console.log('toBeReadList case, listNumber=1');
      }
      break;
      case "currentlyReadingList": {
        listNumber = 2;
        // console.log('currentlyReadingList case, listNumber=2');
      }
      break;
      case "haveReadList": {
        listNumber = 3;
        // console.log('haveReadList case, listNumber=3');
      }
      break;
      default:  console.log(list[0],' was list[0], and did not match any switch case');
    }

    let fnArg = {
      list: list[0],
      listNumber,
      book: bookId,
      user: user.user
    }
    // console.log('%%%%%%%%%%');
    // console.log(fnArg.listNumber, 'was fnArg.listNumber');
    // console.log('%%%%%%%%%%');

    // window.alert('test alert')
    if( (list[0]==="undefined")||!list[0] ) {
      window.alert('Please select a list from the "Edit List:" dropdown')
      //NOTE this doesn't seem to work if someone selects a list then changes back to the "select" dropdown.
      //NOTE the RE NOTE-ening: i had to make the list[0]=== check for a STRING of undefined. this seems shitty, but it works.
      return
    }
    //NOTE NOTE re-enable this after testing
    if( (user.user.id==='') ) {
      window.alert('Please log in before adding a book to a list')
      return
    }
    //NOTE the above should be enabled for live
    // console.log('log AFTER the winow.alert'); //this does fire, but not until after the alert is acknowledged.
    console.log(fnArg, 'was fnArg before addFn() call in addToList() components/editOptions.js');
    addFn(fnArg); //only registered first param. means i need to include list and bookId in a single object. //NOTE//this only updates on store-side, does not interact with DB. i guess i need to either add an axios.put here to update the list or have that happen in the reducer?
    // console.log('.....before axios.post in addToList in components/editOptions .....');
    axios.post('/api/users/list', fnArg)//post since i'm adding an entry to a join table
      .then( (data)=>{
        // console.log(data, 'was data in the axios.post in addToList in components/editOptions');
        // console.log(fnArg.user, 'was fnArg.user');
        axios.get(`/api/users/${fnArg.user.id}/list/${fnArg.listNumber}`) //this route calls the getList backend function. //this route feels janky afffffffffff. so let's call it clever?
          .then( (list) => {
            console.log(list.data.data, 'was list.data.data in .then of axios.get(`/api/users/${fnArg.user.id}/list/${fnArg.listNumber}`)'); //this returns the listObj object from the getList backend function.
            // format as {
            //   list, //array, each element {user_id: NUM, book_id: NUM }
            //   listDB_name //object {front: STRING_using_frontend_naming, sql: STRING_using_sql_labels/names}
            // }
            //NOTE create route to use for getBookDataFromList, then do an axios here to run it
            axios.get(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`) // i don't need the list info to get book data, i can just get the book data
            // console.log(list.data, 'was list.data in .then of axios.get(`/api/users/${fnArg.user.id}/list/${fnArg.listNumber}`)');
            // console.log(list, 'was list in .then of axios.get(`/api/users/${fnArg.user.id}/list/${fnArg.listNumber}`)');
            //need to have store update to this list
            // let fnArg = {
            //   list: list[0],
            //   listNumber,
            //   book: bookId,
            //   user: user.user
            // }
            console.log(user, 'was user in same');
          })
          .catch( (error) => {
            console.log(error, 'was error in .catch of axios.get(`/api/users/${fnArg.user.id}/list/${fnArg.listNumber}`)');
          })

      })
      .catch( (error)=>{
        console.log(error, 'was error in the axios.post in addToList in components/editOptions');
      })
    console.log('///// after axios.post in addToList in components/editOptions /////');
    // NOTE need function here to update store from DB to show new list entry there. could i put this in the list component? will it update appropriately? in order to do so, it would probably have to update when the list component loads/receives props

  }
  removeFromList(list, bookId, rmvFn, e) {
    e.preventDefault();
    // console.log('removeFromList called');
    console.log(e, 'was e in removeFromList components/editOptions.js');
    console.log(list, 'was list in removeFromList components/editOptions.js');
    console.log(bookId, 'was bookId in removeFromList components/editOptions.js');
    console.log(rmvFn, 'was rmvFn in addToList components/editOptions.js');
  }

  render(){
    // console.log(this.props, 'was this.props in components/editOptions.js render()');
    let listButton;
    let event = window.event;
    switch(this.props.addOrRemoveButton) {

      case 'add' :
      // console.log(event, 'was event',this.props.selectedListKey, 'was this.props.selectedListKey', this.props.isbn13, 'was this.props.isbn13', this.props.addToList, 'was this.props.addToList');
          listButton =
          <button
          onClick={this.addToList.bind(event, this.props.selectedListKey, this.props.matchedISBN, this.props.user, this.props.addToList)}
            >
            Add to list
          </button>;
          break;

      case 'remove' :

          listButton =
          <button
            onClick={this.removeFromList.bind(event, this.props.selectedListKey, this.props.matchedISBN, this.props.user )}
            >
            Remove from list
          </button>
          break;

      default :
          listButton = <div>button type was not declared</div>

    }



    return(
      <div id="editOptionsContainer">
        {listButton}


      </div>
    )
  }
}
