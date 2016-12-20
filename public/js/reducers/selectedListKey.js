// console.log('selectList loaded');

function selectedListKey(state=[], action) {
  // console.log('selectedListKey called');
  // console.log(action, 'action in selectedListKey reducer'); //this is giving me "gibberish" when i should be expecting the return from the actionCreators for "SELECT_LIST"
  // console.log(action.type, 'action.type in same');
  // console.log(state, 'state before switch');
  // console.log(state.choice, 'was state.choice in reducers/selectedListKey.js');

  // console.log(action.choice, 'was action.choice in reducers/selectedListKey.js'); //returns the selected choice

  switch(action.type){
    case 'SELECT_LIST' :
      // console.log('Choosing List');

      //CHANGE THIS IN STORE FROM ARRAY TO STRING?!?!?!?!?!?!?
      // console.log(state,'state in reducers/selectedListKey'); //returns ["PLACEHOLDER SELECTED LIST"]
      // console.log(state[0],'state[0] in same');

      // console.log(state.selectedListKey, 'state.selectedListKey in selectedListKey');
      // const i = 0; //since we only have one element in the list array, and only WANT one element.

      //NOTE
      //i may want to change data/selectedListKey.js to be an array with the 3 valid possile choices, change the values on the drop down to the appropriate index, then use that to select the appropriate item? this may require mutation, think on it further.
      //may be an overcomplication
      return [
        ...state.slice(0,0), //slice(0,0) gets rid of the 0 element
         action.choice //this is then added to the array, which is now empty, which makes this entry [0]


        // ...state,
        // list: "SELECTION MADE"
      ]
      // return {
      //   ...state,
      //   action.choice
      // } // does this work for a string?

      // return action.choice //maybe this works for a string?


    default:
      return state;
  }

}

export default selectedListKey;
