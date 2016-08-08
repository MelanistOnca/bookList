console.log('haveReadList reducer file');

function haveReadList(state=[], action) {
  switch(action.type){
    case 'REMOVE_FROM_HAVE_READ' :
      console.log('removing book from have read list');
      return state;

    default:
      return state;
  }
}

export default haveReadList;
