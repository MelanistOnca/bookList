// console.log('selectList loaded');
// import { update } from 'react'; //this is supposedly from react-addons-update
function selectedList(state=[], action) {
  console.log('selectedList called');
  // console.log(action, 'action in selectedList reducer');
  // console.log(state, 'state before switch');

  switch(action.type){
    case 'SELECT_LIST' :
      console.log('Choosing List');

      //CHANGE THIS IN STORE FROM ARRAY TO STRING?!?!?!?!?!?!?
      console.log(state,'state in selectedList'); //returns ["PLACEHOLDER SELECTED LIST"]
      // console.log(state[0],'state[0] in same');

      // console.log(state.selectedList, 'state.selectedList in selectedList');
      const i = 0; //since we only have one element in the list array, and only WANT one element.

      //NOTE
      //i may want to change data/selectedList.js to be an array with the 3 valid possile choices, change the values on the drop down to the appropriate index, then use that to select the appropriate item? this may require mutation, think on it further.
      //may be an overcomplication
      return [
        ...state.slice(0,0), //slice(0,0) gets rid of the 0 element
         "SELECTION MADE" //this is then added to the array, which is now empty, which makes this entry [0]


        // ...state,
        // list: "SELECTION MADE"
      ]


    default:
      return state;
  }
  console.log(state, 'state after return, probably never reached');
}

export default selectedList;
