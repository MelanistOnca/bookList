// console.log('listCollection reducer');
import axios from 'axios';
// import ReduxThunk from 'redux-thunk';

function listCollection(state=[], action) {
  switch(action.type){
    case 'THERE_SHOULD_BE_NO_ACTIONS' :
      console.log('THIS IS JUST A COLLECTION OF OTHER STATE COMPONENTS, PROBABLY WANT TO CHANGE THOSE INTO A SINGLE FILE?!?!? ');
      return state;
    case 'UPDATE_LIST' :
      // console.log('Is this where i want to update the store after calling the getListFn in components/basicList? this message from reducers/listCollection ');
      console.log(state, 'was state in UPDATE_LIST case in reducers/listCollection');
      // returns
      // {
      //   currentlyReadingList: {
      //     list: {
      //       bookID: {
      //         author,
      //         genre,
      //         title
      //       }
      //     },
      //     title: "Currently Reading List"
      //   },
      //   haveReadList: {
      //     ...same structure, different title,
      //     title: "Have Read List"
      //   },
      //   toBeReadList: {
      //     ...same structure, different title,
      //     title: "To Be Read List"
      //   }
      // }
      //////////////
      console.log(action, 'was action in UPDATE_LIST case in reducers/listCollection');
      // returns
      // {
      //   type: "UPDATE_LIST",
      //   listInfo: {
      //     listContents, //array of book objects
      //     user_id, // empty string when i was not logged in, number (NOT string) 3 when i was logged in as test/test
      //     listName, // "haveReadList" in my test
      //     listTitle // "Have Read List"
      //   }
      //
      // }

      // need a loop here to extract all the books in the listContents into unique entries for state.[listName].list.[listContents[i].isbn13]
      // {
      //   action.[listName].list.[listContents[i].isbn13]: {
      //     "Title": action.[listName].list.[listContents[i].title,
      //     "Author": action.[listName].list.[listContents[i].author
      //   }
      // }
      console.log('/////////////////');
      console.log('start of copy over from editOptions');
      // console.log(action.listInfo.user_id, 'was action.listInfo.user_id in SET_LIST case in reducers/listCollection');
      // console.log(action.listInfo.listNumber, 'was action.listInfo.listNumber in SET_LIST case in reducers/listCollection');
      // axios.get(`/api/users/${action.listInfo.user_id}/list/${action.listInfo.listNumber}`) //this route calls the getList backend function. //this route feels janky afffffffffff. so let's call it clever?
      //   .then( (list) => {
      //     console.log(list.data.data, 'was list.data.data in .then of axios.get(`/api/users/${fnArg.user.id}/list/${fnArg.listNumber}`)'); //this returns the listObj object from the getList backend function.
      //     // format as {
      //     //   list, //array, each element {user_id: NUM, book_id: NUM }
      //     //   listDB_name //object {front: STRING_using_frontend_naming, sql: STRING_using_sql_labels/names}
      //     // }
      //     axios.post(`/api/lists/${action.listInfo.listNumber}/users/${action.listInfo.user_id}/books/`, list.data.data)
      //       .then( (listWithBooks) => {
      //         console.log(listWithBooks, 'was listWithBooks in .then of axios.get(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`');
      //         ///////////
      //         // function to update store list data based on listWithBooks book info and list.listDB_name.front label
      //         // console.log(fnArg, 'was fnArg in same');
      //         console.log(action.listInfo.user_id, 'was action.listInfo.user_id in same'); // gives user id number from DB
      //         console.log(action.listInfo.listName, 'was action.listInfo.listName in same'); //gives list name that is compatible with listCollection store
      //
      //         //NOTE where i may need to copy to, including the catch below to the reducer so that i can call the reducer more easily from the basicList page
      //         action.listInfo.listContents = listWithBooks.data
      //         console.log(action.listInfo.listContents, 'was action.listInfo.listContents in .then of axios.post of SET_LIST case in reducers/listCollection');
      //         action.listInfo.listContents.forEach( (el) => {
      //         //   // console.log(el, 'was el in listConents.forEach in reducer/listCollection');
      //         //   // // returns
      //         //   // // {
      //         //   // //   author, //author name str
      //         //   // //   id, // book id int in my DB
      //         //   // //   isbn13, //isbn13 string
      //         //   // //   publisher, //publ str
      //         //   // //   title //title str
      //         //   // // }
      //           uniqueBookList[el.isbn13] = {
      //             "title": el.title,
      //             "author": el.author,
      //             "publisher": el.publisher
      //           }
      //           // console.log(uniqueBookList, 'was uniqueBookList inside forEach');
      //           console.log(action.listInfo.listName, 'was action.listInfo.listName before return in .then of axios.post in listCollection');
      //           console.log(uniqueBookList, 'was uniqueBookList in same');
                // return {
                //   ...state,
                //   [action.listInfo.listName] : uniqueBookList
                //
                // }
      //         })
      //       })
      //       .catch( (error) => {
      //         console.log(error,'was error in .catch of axios.get(`/api/lists/${fnArg.listNumber}/users/${fnArg.user.id}/books/`');
      //       })
      //     })
      //   .catch( (error) => {
      //     console.log(error, 'was error in .catch of axios.get(`/api/users/${action.listInfo.user_id}/list/${action.listInfo.listNumber}`)');
      //   })
      console.log('/////////////////');
      console.log('end of copy over from editOptions');
      let uniqueBookList = {};
      console.log(uniqueBookList, 'was uniqueBookList in reducers/listCollection');
      // let listContentsLength = listContents.length
      // for (i = 0; i < listContents.length, i++){
      //
      // }
      console.log(action.listInfo, 'was action.listInfo in SET_LIST case in reducers/listCollection');
      console.log(action.listInfo.listContents, 'was action.listInfo.listContents in SET_LIST case in reducers/listCollection');
      // action.listInfo.listContents.forEach( (el) => {
      // //   // console.log(el, 'was el in listConents.forEach in reducer/listCollection');
      // //   // // returns
      // //   // // {
      // //   // //   author, //author name str
      // //   // //   id, // book id int in my DB
      // //   // //   isbn13, //isbn13 string
      // //   // //   publisher, //publ str
      // //   // //   title //title str
      // //   // // }
      //   uniqueBookList[el.isbn13] = {
      //     "title": el.title,
      //     "author": el.author,
      //     "publisher": el.publisher
      //   }
      //   // console.log(uniqueBookList, 'was uniqueBookList inside forEach');
      // })
      console.log(uniqueBookList, 'was uniqueBookList after forEach');

      //NOTE NOTE
      // see if i can move the title portion of listCollection somewhere else so i can make the below work. if i can, i may be able to shave the 'list' key off, but will likely have to change to account for dominoes
      console.log(action.listInfo.listName, 'was action.listInfo.listName before return in reducers/listCollection.js');
      console.log(action.listInfo.uniqueBookList, 'was action.listInfo.uniqueBookList before return in reducers/listCollection.js');
      // return state;
      return {
        ...state,
        [action.listInfo.listName] : action.listInfo.uniqueBookList

      }
      // return {
      //   ...state,
      //   [action.listInfo.listName] : {
      //     "list": uniqueBookList
      //   }
      // }

    default:
      return state;
  }
}

export default listCollection;
