// console.log('selectList loaded');

function selectedListKey(state=[], action) {
  // console.log('selectedListKey called');
  console.log(state, 'state in selectedListKey reducer');
  console.log(action, 'action in selectedListKey reducer');
  // console.log(action.type, 'action.type in same');
  // console.log(action.choice, 'was action.choice in reducers/selectedListKey.js'); //returns the selected choice

  switch(action.type){
    case 'SELECT_LIST' :
      // console.log('Choosing List');
      // console.log('SELECT_LIST case in reducers/selectedListKey.js');

      //CHANGE THIS IN STORE FROM ARRAY TO STRING?!?!?!?!?!?!? TODO
      return [
        ...state.slice(0,0), //slice(0,0) gets rid of the 0 element
         action.choice //this is then added to the array, which is now empty, which makes this entry [0]

      ]

    default:
      return state;
  }

}

export default selectedListKey;
