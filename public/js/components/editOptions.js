import React from 'react';
import { render } from 'react-dom';

import axios from 'axios';

export default class EditOptions extends React.Component {
  //props passed to this component include:
  // this.props.bookId //this should be a title with underscores for spaces

  //i can probably consolodate the add and remove functions into a single function since i'm passing in the appropriate function when this is called.
  addToList( list, bookId, user, addFn, updateListFn, e) {

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
    let listNumber,listFrontTitle;
    switch (list[0]) {
      case "Select": {
        listNumber = 0;
        // console.log('Select case, listNumber=0');
      }
      break;
      case "toBeReadList": {
        listNumber = 1;
        listFrontTitle = "To Be Read List";
        // console.log('toBeReadList case, listNumber=1');
      }
      break;
      case "currentlyReadingList": {
        listNumber = 2;
        listFrontTitle = "Currently Reading List";
        // console.log('currentlyReadingList case, listNumber=2');
      }
      break;
      case "haveReadList": {
        listNumber = 3;
        listFrontTitle = "Have Read List";
        // console.log('haveReadList case, listNumber=3');
      }
      break;
      default:  console.log(list[0],' was list[0], and did not match any switch case');
    }

    let fnArg = {
      list: list[0],
      listNumber,
      listFrontTitle,
      book: bookId,
      user: user.user
    }
    console.log(fnArg, 'was fnArg in in addToList components/editOptions.js');
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
        //NOTE i may need to copy the below through to the updateList function into basicList to get the list to load when that component does. i will need to see if i need to change the formulation or add these gets to the reducer? adding them to the reducer sounds like a good idea?
        axios.get(`/api/users/${fnArg.user.id}/list/${fnArg.listNumber}`) //this route calls the getList backend function. //this route feels janky afffffffffff. so let's call it clever?
          .then( (list) => {
            console.log(list.data.data, 'was list.data.data in .then of axios.get(`/api/users/${fnArg.user.id}/list/${fnArg.listNumber}`)'); //this returns the listObj object from the getList backend function.
            // format as {
            //   list, //array, each element {user_id: NUM, book_id: NUM }
            //   listDB_name //object {front: STRING_using_frontend_naming, sql: STRING_using_sql_labels/names}
            // }
            console.log(user, 'was user in same');
            axios.post(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`, list.data.data)
              .then( (listWithBooks) => {
                console.log(listWithBooks, 'was listWithBooks in .then of axios.get(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`');
                ///////////
                // function to update store list data based on listWithBooks book info and list.listDB_name.front label
                // console.log(fnArg, 'was fnArg in same');
                console.log(fnArg.user.id, 'was fnArg.user.id in same'); // gives user id number from DB
                console.log(fnArg.list, 'was fnArg.user.id in same'); //gives list name that is compatible with listCollection store
                // getList(fnArg) //don't need this here, need to set the state based on the data in listWithBooks.
                // let uniqueBookList = {};
                // console.log(el, 'was el in listConents.forEach in reducer/listCollection');
                // // returns
                // // {
                // //   author, //author name str
                // //   id, // book id int in my DB
                // //   isbn13, //isbn13 string
                // //   publisher, //publ str
                // //   title //title str
                // // }
                // listWithBooks.data.forEach( (el) => {
                //   // console.log(el.isbn13, 'was el.isbn13 in listWithBooks.data.forEach in components/editOptions.js'); //returns the isbn13 of the book
                //   uniqueBookList.[el.isbn13] = {
                //     "Title": [el.title],
                //     "Author": [el.author],
                //     "Publisher": [el.publisher]
                //   }
                //
                //   // console.log(uniqueBookList, 'was uniqueBookList inside forEach');
                // })
                // console.log(uniqueBookList, 'was uniqueBookList after forEach');

                let updateFnArg = {
                  user_id: fnArg.user.id,
                  listName: fnArg.list,
                  listTitle: fnArg.listFrontTitle, //i may not need listTitle here?
                  listContents: listWithBooks.data,
                  listNumber: fnArg.listNumber
                  // ,uniqueBookList
                }
                updateListFn(updateFnArg)
                //NOTE where i may need to copy to, including the catch below to the reducer so that i can call the reducer more easily from the basicList page
              })
              .catch( (error) => {
                console.log(error,'was error in .catch of axios.get(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`');
              })
              //NOTE full end of note since i really should have the catch included in the reducer with the .then that invokes updateListFn above
          })
          .catch( (error) => {
            console.log(error, 'was error in .catch of axios.get(`/api/users/${fnArg.user.id}/list/${fnArg.listNumber}`)');
          })
        // is the above get
        // console.log('just before axios.get(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`)');
        // axios.get(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`) // NOTE trying this as a post, below
        //   .then( (listWithBooks) => {
        //     console.log(listWithBooks, 'was listWithBooks in .then of axios.get(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`');
        //   })
        //   .catch( (error) => {
        //     console.log(error,'was error in .catch of axios.get(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`');
        //   }) //gonna try this as a post. end of NOTE
        // let temp = {'something':'filler body'}
        // let listRouteArg = {
        //   list: list[0],
        //   listNumber,
        //   user: user.user
        // };
        //could do something like let listRouteArg = delete fnArg.book, but im not sure if that would leave fnArg alone in case i need to use it again. i suspect it changes fnArg
        // axios.post(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`, listRouteArg)
        //   .then( (listWithBooks) => {
        //     console.log(listWithBooks, 'was listWithBooks in .then of axios.get(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`');
        //   })
        //   .catch( (error) => {
        //     console.log(error,'was error in .catch of axios.get(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`');
        //   })
      })
      .catch( (error)=>{
        console.log(error, 'was error in the axios.post in addToList in components/editOptions');
      })
    console.log('///// after axios.post in addToList in components/editOptions /////');
    // NOTE need function here to update store from DB to show new list entry there. could i put this in the list component? will it update appropriately? in order to do so, it would probably have to update when the list component loads/receives props

  }
  removeFromList(list, book_isbn13, rmvFn, user, listTranslate, bufferDeletedBook, e) {
    e.preventDefault();
    if( (user.user.id==='') ) {
      window.alert('Please log in before removing a book from a list')
      return
    }
    // console.log('removeFromList called');
    console.log(e, 'was e in removeFromList components/editOptions.js');
    console.log(list, 'was list in removeFromList components/editOptions.js');
    console.log(book_isbn13, 'was book_isbn13 in removeFromList components/editOptions.js');
    console.log(rmvFn, 'was rmvFn in removeFromList components/editOptions.js');
    console.log(user, 'was user in removeFromList components/editOptions.js');
    console.log(listTranslate, 'was listTranslate in removeFromList components/editOptions.js');
    console.log(bufferDeletedBook, 'was bufferDeletedBook in removeFromList components/editOptions.js');
    let fnArg = {
      list,
      book_isbn13,
      user,
      listTranslate,
      bufferDeletedBook
    }
    console.log(fnArg, 'was fnArg in removeFromList components/editOptions.js');
    // bufferDeletedBook('test')
    rmvFn(fnArg)
    //pass more functions here? to split up promise chain?

    //NOTE:need to call getList once this has completed. maybe do a "will receive props " and put a check in there to prevent looping?
  }

  componentWillReceiveProps(nextProps){
    console.log(this.props, 'was this.props in componentWillReceiveProps in editOptions');
    console.log(nextProps, 'was nextProps in componentWillReceiveProps in editOptions');
    // if( this.props.listCollection !== nextProps.listCollection ) {
    //   nextProps.
    // }
  }
  componentWillMount(){
    console.log(this.props, 'was this.props in componentWillMount in editOptions');
  }


  render(){
    // console.log(this.props, 'was this.props in components/editOptions.js render()');
    let listButton;
    // let event = window.event; //using 'this' rather than 'event' in the bind seems to work everywhere
    switch(this.props.addOrRemoveButton) {

      case 'add' :
      // console.log(event, 'was event',this.props.selectedListKey, 'was this.props.selectedListKey', this.props.isbn13, 'was this.props.isbn13', this.props.addToList, 'was this.props.addToList');
          listButton =
          <button
          onClick={this.addToList.bind(this, this.props.selectedListKey, this.props.matchedISBN, this.props.user, this.props.addToList, this.props.updateList)}
            >
            Add to list
          </button>;
          break;

      case 'remove' :

          listButton =
          <button
            onClick={this.removeFromList.bind(this, this.props.selectedListKey[0], this.props.isbn13, this.props.removeFromList, this.props.user,
            this.props.listTranslate,
            this.props.bufferDeletedBook)}
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
