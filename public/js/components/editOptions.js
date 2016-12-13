import React from 'react';
import { render } from 'react-dom';

import axios from 'axios';

export default class EditOptions extends React.Component {
  //props passed to this component include:
  // this.props.bookId //this should be a title with underscores for spaces

  //i can probably consolodate the add and remove functions into a single function since i'm passing in the appropriate function when this is called.
  addToList( list, bookId, addFn, e) {

    // console.log('addToList called');
    // console.log(event, 'was event');
    // console.log(e, 'was e in addToList components/editOptions.js');
    //
    // console.log(list[0], 'was list[0] in addToList components/editOptions.js');
    // console.log(bookId, 'was bookId in addToList components/editOptions.js');
    // console.log(addFn, 'was addFn in addToList components/editOptions.js');
    e.preventDefault();
    // console.log(e, 'was e after .preventDefault()');
    let fnArg = {
      list: list[0],
      book: bookId
    }

    // window.alert('test alert')
    if( (list[0]==="undefined")||!list[0] ) {
      window.alert('Please select a list from the "Edit List:" dropdown')
      //NOTE this doesn't seem to work if someone selects a list then changes back to the "select" dropdown.
      //NOTE the RE NOTE-ening: i had to make the list[0]=== check for a STRING of undefined. this seems shitty, but it works.
      return
    }
    console.log('log AFTER the winow.alert'); //this does fire, but not until after the alert is acknowledged.
    console.log(fnArg, 'was fnArg before addFn() call in addToList() components/editOptions.js');
    addFn(fnArg); //only registered first param. means i need to include list and bookId in a single object. //NOTE//this only updates on store-side, does not interact with DB. i guess i need to either add an axios.put here to update the list or have that happen in the reducer?
    axios.post('/api/users/list', fnArg)

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
    console.log(this.props, 'was this.props in components/editOptions.js render()');
    let listButton;
    let event = window.event;
    switch(this.props.addOrRemoveButton) {

      case 'add' :
      // console.log(event, 'was event',this.props.selectedListKey, 'was this.props.selectedListKey', this.props.isbn13, 'was this.props.isbn13', this.props.addToList, 'was this.props.addToList');
          listButton =
          <button
          onClick={this.addToList.bind(event, this.props.selectedListKey,this.props.matchedISBN,this.props.addToList)}
            >
            Add to list
          </button>;
          break;

      case 'remove' :

          listButton =
          <button
            onClick={this.removeFromList.bind(event, this.props.selectedListKey, this.props.matchedISBN )}
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
