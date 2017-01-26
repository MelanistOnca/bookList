function deletedBook(state=[], action) {
  switch(action.type){
    case 'BUFFER_FOR_DELETED_BOOK' : {
      console.log(state, 'was state in BUFFER_FOR_DELETED_BOOK case in deletedBook in reducers/deletedBook_reducer');//returns object of format:
      // {
      //   book: {
      //     author: "sadg",
      //     publisher: "",
      //     title: ""
      //   }, // i updated initial value to include id and isbn13 keys
      //   bookInDeletedBuffer: false
      // }
      console.log(action, 'was action in BUFFER_FOR_DELETED_BOOK case in deletedBook in reducers/deletedBook_reducer');
      console.log(action.deletedBook, 'was action.deletedBook in BUFFER_FOR_DELETED_BOOK case in deletedBook in reducers/deletedBook_reducer'); //returns object of format
      // {
      //   author: "Leckie, Ann",
      //   id: 2,
      //   isbn13: "9780316246620",
      //   publisher: "Orbit",
      //   title: "Ancillary justice"
      // }
      // return state;
      return {
        ...state,
       // set bookInDeletedBuffer to false
       bookInDeletedBuffer: true,
       // fill in book info
       book: action.deletedBook
      }
    }
    case 'CLEAR_BOOK_BUFFER' : {
      console.log(state, 'was state in CLEAR_BOOK_BUFFER case in deletedBook in reducers/deletedBook_reducer');
      console.log(action, 'was action in CLEAR_BOOK_BUFFER case in deletedBook in reducers/deletedBook_reducer');
      // return state;
      return {
        ...state,
       // set bookInDeletedBuffer to false
       bookInDeletedBuffer : false,
       // clear book info
       book: {
         "title":"log in",
         "author":"to get",
         "publisher":"this list",
         "id": 0,
         "isbn13": ""
       }
      }
    }
    default:
      return state;
  }
}

export default deletedBook;
