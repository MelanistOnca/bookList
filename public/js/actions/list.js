import axios from 'axios';
import ReduxThunk from 'redux-thunk';

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
  // console.log('before thunk return in updateList in actions/list.js');
  console.log('be careful when calling this function "passively". since it updates props, it can loop easily if there is not a conditional check of some kind before call');
  return (dispatch, getState) => {
    dispatch({
      type: 'UPDATE_LIST_STARTED'
    })
    // console.log('###################');
    // console.log(fnArg.user_id, 'was fnArg.user_id');
    // console.log(fnArg.listNumber, 'was fnArg.listNumber');
    // console.log(`/api/users/${fnArg.user_id}/list/${fnArg.listNumber}`, 'was the address used by the axios.get in actions/list');
    // console.log('###################');
    //NOTE need a placeholder value for fnArg.user_id in case user is not logged in. gives bad routes otherwise, 'api/users//list/...' should be something like 'api/users/PLACEHOLDER/list/...'
    axios.get(`/api/users/${fnArg.user_id}/list/${fnArg.listNumber}`) //this route calls the getList backend function. //this route feels janky afffffffffff. so let's call it clever?
      .then( (list) => {
        console.log('before dispatch in the .then of the axios.get(`/api/users/${fnArg.user_id}/list/${fnArg.listNumber}`) in updateList in actions/list.js');
        dispatch({
          type: 'UPDATE_LIST_STEP1_SUCCEEDED'
        })
        // console.log(list.data.data, 'was list.data.data in .then of axios.get(`/api/users/${fnArg.user.id}/list/${fnArg.listNumber}`)'); //this returns the listObj object from the getList backend function.
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
            // console.log(fnArg.user_id, 'was fnArg.user_id in same'); // gives user id number from DB
            // console.log(fnArg.listName, 'was fnArg.listName in same'); //gives list name that is compatible with listCollection store

            //NOTE where i may need to copy to, including the catch below to the reducer so that i can call the reducer more easily from the basicList page
            fnArg.listContents = listWithBooks.data
            // console.log(fnArg.listContents, 'was fnArg.listContents in .then of axios.post of SET_LIST case in actions/list.js');
            // console.log(fnArg.listContents.length, 'was fnArg.listContents.length in .then of axios.post of SET_LIST case in actions/list.js');
            let uniqueBookList={}
            fnArg.listContents.forEach( (el) => {
              // console.log(el, 'was el in listConents.forEach in actions/list.js');

              uniqueBookList[el.isbn13] = {
                "title": el.title,
                "author": el.author,
                "publisher": el.publisher
              }
              // console.log(uniqueBookList, 'was uniqueBookList inside forEach');
              // console.log(fnArg.listName, 'was fnArg.listName before return in .then of axios.post in listCollection');
              // console.log(uniqueBookList, 'was uniqueBookList in same');
              // fnArg.uniqueBookList = uniqueBookList;
              // dispatch({
              //   type: 'UPDATE_LIST_SUCCEEDED',
              //   listInfo: fnArg
              // })

            })
            // console.log(uniqueBookList, 'was uniqueBookList just before dispatch');
            // console.log(fnArg, 'was fnArg in same');
            // fnArg.uniqueBookList = uniqueBookList;
            // console.log(fnArg, 'was fnArg after adding uniqueBookList key to it');
            console.log('$$$$$$$$&&&&&&&$$$$$$$');
            console.log('just before return in actions/list.js for updateList function');
            console.log('$$$$$$$$&&&&&&&$$$$$$$');
            // return{
            //   type: 'UPDATE_LIST',
            //   listInfo: fnArg
            // }
            // dispatch({
            //   type: 'UPDATE_LIST_SUCCEEDED',
            //   listInfo: fnArg
            // })
            dispatch({
              type: 'UPDATE_LIST',
              listInfo: fnArg
            })
            // next()
          })
          .catch( (error) => {
            // dispatch({
            //   type: 'UPDATE_LIST_FAILED',
            //   error: error
            // })
            console.log(error,'was error in .catch of axios.get(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`');
          })
        })
      .catch( (error) => {
        // dispatch({
        //   type: 'UPDATE_LIST_STEP1_FAILED',
        //   error: error
        // })
        console.log(error, 'was error in .catch of axios.get(`/api/users/${fnArg.user_id}/list/${fnArg.listNumber}`)');
      })
  }
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

export function removeFromList(fnArg) {
  console.log(fnArg, 'was fnArg in removeFromList in actions/list.js');
  // console.log(list, 'was list in removeFromList in actions/list.js');
  console.log(fnArg.list, 'was fnArg.list in actions/list'); //returned toBeReadList in test
  console.log(fnArg.book_isbn13, 'was fnArg.book_isbn13 in actions/list');
  console.log(fnArg.user, 'was fnArg.user in actions/list');
  console.log(fnArg.listTranslate, 'was fnArg.listTranslate in actions/list');
  console.log(fnArg.listTranslate[fnArg.list].listNumber, 'was fnArg.listTranslate[fnArg.list].listNumber');
  console.log(fnArg.listTranslate[fnArg.list].listNumber, `was ${fnArg.listTranslate[fnArg.list].listNumber}`);
  // axios.delete(`/api/lists/:lID/users/:uID/books/:bID`)
  // axios.delete(`/api/lists/:lID/users/:uID/books/:bID`)
  // axios.delete(`/api/lists/${fnArg.listTranslate[fnArg.list].listNumber}/users/${fnArg.user.user.id}/books/${fnArg.book_isbn13}`, fnArg)//delete's second param is config, not data, so this won't work, try request with config instead
  // .request({
  // url: '/Storage/Delete',
  // method: 'delete',
  // data: { storage: storage }
  // })
  axios.request({
    url: `/api/lists/${fnArg.listTranslate[fnArg.list].listNumber}/users/${fnArg.user.user.id}/books/${fnArg.book_isbn13}`,
    method: 'delete',
    data: { payload: fnArg }
  })
  // axios.post(`/api/lists/${fnArg.listTranslate[fnArg.list].listNumber}/users/${fnArg.user.user.id}/books/${fnArg.book_isbn13}`, fnArg)
    .then( (data) => {
      console.log(data, 'was data in axios.delete(`/api/lists/${fnArg.listTranslate[fnArg.list].listNumber}/users/${fnArg.user.user.id}/books/${fnArg.book_isbn13}`) in actions/list');
    })
    .catch( (error) => {
      console.log(error, 'was error in axios.delete(`/api/lists/${fnArg.listTranslate[fnArg.list].listNumber}/users/${fnArg.user.user.id}/books/${fnArg.book_isbn13}`) in actions/list');
    })
  return {
    type: 'REMOVE_FROM_LIST',
    // list,
    // bookId //returning book id so there can be an "undo" button that calls addToList. wonder if i'll need more than bookId to properly feed info to addToList
    removingBookInfo: fnArg

  }
}
