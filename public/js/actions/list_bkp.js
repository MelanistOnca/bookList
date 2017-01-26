import axios from 'axios';
import Redux-Thunk from 'redux-thunk';

//select a list
export function selectList(choice) {
  console.log(choice, 'was choice in actionCreators');
  return {
    type: 'SELECT_LIST',
    choice
  }
}
export function getList(fnArg) { //using arg so that when i get the console logs, it's giving me the used arg. since this is definition, it's a parameter labelled fnArg
  console.log(fnArg, 'was fnArg in getList in actionCreators');
  console.log(fnArg.listKey, 'was fnArg.listKey in getList in actionCreators');
  console.log(fnArg.user_id, 'was fnArg.user_id in getList in actionCreators');
  return {
    type: 'GET_LIST',
    listKey : fnArg.listKey, //dunno if i need this?
    user_id: fnArg.user_id
  }
}
// export function getHaveReadList(/* param */) { //probably going to generalize this to be a getList() function. not sure that i need a parameter?
//
//   return {
//     type: 'GET_HAVE_READ_FROM_DB',
//     choice
//   }
// }

//update a list
export function updateList(/*listName, user, listBooks, listInfo*/ fnArg) {
  //have a single object passed as the arg that has  listName, user, and the books in the list in it.
  // fnArg as passed from EditOptions is defined as
  // let updateFnArg = {
  //     user_id: fnArg.user.id,
    // listName: fnArg.list,
    // listTitle: fnArg.listFrontTitle, //i may not need listTitle here?
    // listContents: listWithBooks.data,
    // listNumber: fnArg.listNumber
    // // ,uniqueBookList
  // }
  console.log('updateList in action/list.js was called');
  console.log(fnArg, 'was fnArg in same');
  //NOTE need async here, so that reducer can be async free
  console.log('>>>>>>>>>>>>>>>>>>');
  console.log('start of copy of async chain from listCollection');
  console.log(fnArg.user_id, 'was fnArg.user_id in SET_LIST case in reducers/listCollection');
  console.log(fnArg.listNumber, 'was fnArg.listNumber in SET_LIST case in reducers/listCollection');
  axios.get(`/api/users/${fnArg.user_id}/list/${fnArg.listNumber}`) //this route calls the getList backend function. //this route feels janky afffffffffff. so let's call it clever?
    .then( (list) => {
      console.log(list.data.data, 'was list.data.data in .then of axios.get(`/api/users/${fnArg.user.id}/list/${fnArg.listNumber}`)'); //this returns the listObj object from the getList backend function.
      // format as {
      //   list, //array, each element {user_id: NUM, book_id: NUM }
      //   listDB_name //object {front: STRING_using_frontend_naming, sql: STRING_using_sql_labels/names}
      // }
      axios.post(`/api/lists/${fnArg.listNumber}/users/${fnArg.user_id}/books/`, list.data.data)
        .then( (listWithBooks) => {
          console.log(listWithBooks, 'was listWithBooks in .then of axios.get(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`');
          ///////////
          // function to update store list data based on listWithBooks book info and list.listDB_name.front label
          // console.log(fnArg, 'was fnArg in same');
          console.log(fnArg.user_id, 'was fnArg.user_id in same'); // gives user id number from DB
          console.log(fnArg.listName, 'was fnArg.listName in same'); //gives list name that is compatible with listCollection store

          //NOTE where i may need to copy to, including the catch below to the reducer so that i can call the reducer more easily from the basicList page
          fnArg.listContents = listWithBooks.data
          console.log(fnArg.listContents, 'was fnArg.listContents in .then of axios.post of SET_LIST case in reducers/listCollection');
          fnArg.listContents.forEach( (el) => {
          //   // console.log(el, 'was el in listConents.forEach in reducer/listCollection');
          //   // // returns
          //   // // {
          //   // //   author, //author name str
          //   // //   id, // book id int in my DB
          //   // //   isbn13, //isbn13 string
          //   // //   publisher, //publ str
          //   // //   title //title str
          //   // // }
            uniqueBookList[el.isbn13] = {
              "title": el.title,
              "author": el.author,
              "publisher": el.publisher
            }
            // console.log(uniqueBookList, 'was uniqueBookList inside forEach');
            console.log(fnArg.listName, 'was fnArg.listName before return in .then of axios.post in listCollection');
            console.log(uniqueBookList, 'was uniqueBookList in same');

          })
          fnArg.uniqueBookList = uniqueBookList;
          console.log('$$$$$$$$&&&&&&&$$$$$$$');
          console.log('just before return in actions/list.js for updateList function');
          console.log('$$$$$$$$&&&&&&&$$$$$$$');
          // return{
          //   type: 'UPDATE_LIST',
          //   listInfo: fnArg
          // }
        })
        .catch( (error) => {
          console.log(error,'was error in .catch of axios.get(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`');
        })
      })
    .catch( (error) => {
      console.log(error, 'was error in .catch of axios.get(`/api/users/${fnArg.user_id}/list/${fnArg.listNumber}`)');
    })

  console.log('end of copy of async chain from listCollection');
  console.log('<<<<<<<<<<<<<<<<<<');

  // return{
  //   type: 'UPDATE_LIST',
  //   listInfo: fnArg
  // }
}

// i have 3 reducer files, one for each list. do i need to make three functions, or do i want to streamline one function. i think i want to streamline, but im not sure how that interacts wit the multiple reducers/lists model
// on one hand, i want 3 functions to "separate" the concerns, on the other hand, DRY.
export function addToList(list, bookId) {
  return {
    type: 'ADD_TO_LIST',
    list
    //don't think i need to return bookId since this should be added to the list
  }
}

export function removeFromList(list, bookId) {
  return {
    type: 'REMOVE_FROM_LIST',
    list,
    bookId //returning book id so there can be an "undo" button that calls addToList. wonder if i'll need more than bookId to properly feed info to addToList
  }
}
