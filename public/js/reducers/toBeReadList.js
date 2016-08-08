console.log('toBeReadList reducer file');

function toBeReadList(state=[], action) {
  switch(action.type){
    case 'ADD_TO_TO_BE_READ' :
      console.log('adding book to to be read list');
      return state;

    default:
      return state;
  }
}

export default toBeReadList;
