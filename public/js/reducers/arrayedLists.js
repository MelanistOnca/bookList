// console.log('arrayedLists reducer');

function arrayedLists(state=[], action) {
  switch(action.type){
    case 'THERE_SHOULD_BE_NO_ACTIONS' :
      console.log('THIS IS JUST A COLLECTION OF OTHER STATE COMPONENTS, PROBABLY WANT TO CHANGE THOSE INTO A SINGLE FILE?!?!? ');
      return state;

    default:
      return state;
  }
}

export default arrayedLists;
