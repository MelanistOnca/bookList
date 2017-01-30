
function newToList(state=[], action) {
  // console.log('reducers/newToList.js is where  addToList is defined. yes, the naming convention could be better');
  // console.log(state, 'was state in reducers/newToList');
  // console.log(action,'was action in same');
  switch(action.type){
    case 'ADD_TO_LIST' : //may need to make cases for each list?
    //i THINK the info i want will com in as action.list and action.isbn or action.book. may be state.___ instead? will need to see
      console.log(state, 'was state in ADD_TO_LIST case in reducers/newToList'); //this shows the list keys. //as empty objects??
      console.log(action, 'was action in ADD_TO_LIST case in reducers/newToList'); //this shows the list object, which has keys 'list' and 'book'. //i am not sure where the list object wrap over list/book is coming from.
      // let selectedListKey = action.list.list;
      // console.log(selectedListKey, 'was selectedListKey in ADD_TO_LIST case in reducers/newToList');
      // console.log(action.list.list, 'was action.list.list in same');
      // console.log(action.list.book.isbn13, 'was action.list.book.isbn13 in same');
      // console.log(action.list.book.author_data[0].name, 'was action.list.book.author_data[0].name in same');
      // console.log(action.list.book.title, 'was action.list.book.title in same');
      // console.log(action.list.book.publisher_name, 'was action.list.book.publisher_name in same');

      // return {
      //   ...state,
      //   [action.list.list]:{
      //     "author": [action.list.book.author_data[0].name],
      //     "title": [action.list.book.title],
      //     "publisher": [action.list.book.publisher_name]
      //   }
      //
      // }
      // let authorName = this.props.matchedISBN.author_data ? (this.props.matchedISBN.author_data[0] ? this.props.matchedISBN.author_data[0].name : 'No author creditted') : 'No author creditted'; //this and its use below feels like a violation of state and/or the functional paradigm? i should probably have this check on when we receive data from isbndb query? maybe?
      /**/
      // return state;
      return {
        ...state,

          [action.list.list]/*frontend list name*/: {
            [action.list.book.isbn13]/*book's isbn13*/: {
                "author": action.list.book.author,
                "title": action.list.book.title,
                "publisher": action.list.book.publisher_name
            }
          }
      } //this allows a single book to be added to each of the lists, but does not allow for new .isbn13 values to create new keys

    default:
      return state;
  }
}

export default newToList;
