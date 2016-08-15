// console.log('currentlyReadingList reducer file');

function currentlyReadingList(state=[], action) {
  switch(action.type){
    case 'ADD_TO_HAVE_READ' :
      console.log('adding book to have read list');
      return state;

    default:
      return state;
  }
}

export default currentlyReadingList;
