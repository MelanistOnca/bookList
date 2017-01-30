// console.log('currentlyReadingList reducer file');


function currentlyReadingList(state=[], action) {
  // console.log(state, 'was state in reducers/currentlyReadingList');
  // console.log(action, 'was action in reducers/currentlyReadingList');
  switch(action.type){
    case 'ADD_TO_HAVE_READ' :
      // console.log('adding book to have read list');
      return state;
    // case 'GET_HAVE_READ_FROM_DB' :
    // //set store.listCollection.currentlyReadingList.list to list from DB
    //   // console.log('getgetgetgetget');
    //   // console.log('getting list from DB and setting store list to it');
    //   // console.log('getgetgetgetget');
    //   // return {
    //   //   ...state,
    //   //
    //   // }
    //   return state;

    default:
      return state;
  }
}

export default currentlyReadingList;
