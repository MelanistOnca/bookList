// console.log('listCollection reducer');
import axios from 'axios';

function listCollection(state=[], action) {
  switch(action.type){
    case 'UPDATE_LIST' : {
      // console.log(state, 'was state in UPDATE_LIST case in reducers/listCollection');
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
      // console.log(action, 'was action in UPDATE_LIST case in reducers/listCollection');


      let uniqueBookList = {};
      // console.log(uniqueBookList, 'was uniqueBookList in reducers/listCollection');
      // console.log(action.listInfo, 'was action.listInfo in SET_LIST case in reducers/listCollection');
      // console.log(action.listInfo.listContents, 'was action.listInfo.listContents in SET_LIST case in reducers/listCollection');
      action.listInfo.listContents.forEach( (el) => {
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
      })
      // console.log(uniqueBookList, 'was uniqueBookList after forEach');

      //NOTE NOTE TODO, much later
      // see if i can move the title portion of listCollection somewhere else so i can make the below work. if i can, i may be able to shave the 'list' key off, but will likely have to change to account for dominoes
      // console.log(action.listInfo.listName, 'was action.listInfo.listName before return in reducers/listCollection.js');
      // console.log(action.listInfo.uniqueBookList, 'was action.listInfo.uniqueBookList before return in reducers/listCollection.js');
      action.listInfo.uniqueBookList = uniqueBookList;
      // console.log(action.listInfo.uniqueBookList, 'was action.listInfo.uniqueBookList before return in reducers/listCollection.js');
      // return state;
      return {
        ...state,
        [action.listInfo.listName] : action.listInfo.uniqueBookList

      }
    }


    case 'REMOVE_FROM_LIST' :

      // console.log(state, 'was state in REMOVE_FROM_LIST case in reducers/listCollection');
      // //returns listCollection from store
      // console.log(action, 'was action in REMOVE_FROM_LIST case in reducers/listCollection')
      // console.log(action.removingBookInfo, 'was action.removingBookInfo in REMOVE_FROM_LIST case in reducers/listCollection');
      // returns object of format
      // {
      //   book_isbn13: "9780765309402",
      //   list: "toBeReadList",
      //   listTranlate, //object from store
      //   user, //object from store
      // }
      // NOTE NOTE unexplained state behavior here, and i'm getting frustrated. breaking for the day so as to not break anything.

      // let trimmedState = state;
      // console.log(trimmedState, 'was trimmedState in same');
      // delete state[action.removingBookInfo.list][action.removingBookInfo.book_isbn13] //NOTE i get the same results from this and the below statement. im not sure why using delete on trimmedState should affect state, but it seems to be. TODO understand wtf is actually goin on here, so that when a bug inevitably develops from this interaction, you'll have a shot at fixing it. //WAAAAIT. maybe when i did trimmedState = state, it was acting as a reference so any actions on trimmedState were applied to state. TODONE!: yup, what i thought in WAAAAIT
      let trimmedState = JSON.parse(JSON.stringify(state)); //stolen from http://stackoverflow.com/a/4591639
      // console.log(trimmedState, 'was trimmedState in same');
      delete trimmedState[action.removingBookInfo.list][action.removingBookInfo.book_isbn13] //this removes the deleted book from the trimmedState object, thereby trimming the state. i then return this so that i'm not mutating the state by accident. (i need to look into delete on an object to confirm if that's something i even need to be worried about)
      // console.log(trimmedState, 'was trimmedState after delete trimmedState[action.removingBookInfo.list].[action.removingBookInfo.book_isbn13]');

      // return state;
      return trimmedState;

    default:
      return state;
  }
}

export default listCollection;
