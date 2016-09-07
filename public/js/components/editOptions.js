import React from 'react';
import { render } from 'react-dom';



export default class EditOptions extends React.Component {
  //props passed to this component include:
  // this.props.bookId //this should be a title with underscores for spaces
  addToList(list, bookId, e) {
    e.preventDefault();
    // console.log('addToList called');
    console.log(e, 'was e in addToList components/editOptions.js');
    console.log(list, 'was list in addToList components/editOptions.js');
    console.log(bookId, 'was bookId in addToList components/editOptions.js');
    // window.alert('test alert')
    if( (list[0]==="undefined")||!list[0] ) {
      window.alert('Please select a list from the "Edit List: dropdown"')
      //NOTE this doesn't seem to work if someone selects a list then changes back to the "select" dropdown.
      //NOTE the RE NOTE-ening: i had to make the list[0]=== check for a STRING of undefined. this seems shitty, but it works.
    }
    console.log('log AFTER the winow.alert'); //this does fire, but not until after the alert is acknowledged.

  }
  removeFromList(list, bookId, e) {
    e.preventDefault();
    // console.log('removeFromList called');
    console.log(e, 'was e in removeFromList components/editOptions.js');
    console.log(list, 'was list in removeFromList components/editOptions.js');
    console.log(bookId, 'was bookId in removeFromList components/editOptions.js');
  }

  render(){

    let listButton;
    switch(this.props.addOrRemoveButton) {

      case 'add' :
          listButton =
          <button
          onClick={this.addToList.bind(event, this.props.selectedListKey,this.props.isbn13)}
            >
            Add to list
          </button>;
          break;

      case 'remove' :
          listButton =
          <button
            onClick={this.removeFromList.bind(event, this.props.selectedListKey, this.props.isbn13)}
            >
            Remove from list
          </button>
          break;

      default :
          listButton = <div>button type was not declared</div>

    }


    let event = window.event;
    return(
      <div id="editOptionsContainer">
        {listButton}


      </div>
    )
  }
}
