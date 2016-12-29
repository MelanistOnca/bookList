// console.log('listCollection reducer');

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
      console.log(action, 'was action in SET_LIST case in reducers/listCollection');
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
      let uniqueBookList = {};
      console.log(uniqueBookList, 'was uniqueBookList in reducers/listCollection');
      // let listContentsLength = listContents.length
      // for (i = 0; i < listContents.length, i++){
      //
      // }
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
      console.log(uniqueBookList, 'was uniqueBookList after forEach');

      //NOTE NOTE
      // see if i can move the title portion of listCollection somewhere else so i can make the below work. if i can, i may be able to shave the 'list' key off, but will likely have to change to account for dominoes
      // console.log(action.listInfo.listName, 'was action.listInfo.listName before return in reducers/listCollection.js');
      // return state;
      return {
        ...state,
        [action.listInfo.listName] : uniqueBookList

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
