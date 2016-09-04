
function listTranslate(state=[],action) {

  switch(action.type) {
    case 'TRANSLATE_TO_HUMAN_READABLE' :
      console.log(state, 'state in reducers/listTranslate.js for action.type "TRANSLATE_TO_HUMAN_READABLE"');
      console.log(action, 'action in reducers/listTranslate.js for action.type "TRANSLATE_TO_HUMAN_READABLE"');

      //NOTE
      //this is where i want to access the human-readable value for the key label
      return [
        state
      ]

    default:
      return state;
  }
}

export default listTranslate;
