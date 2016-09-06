
function updateCurrentISBN(state=[],action) {
// function currentISBN(state=[],action) {


  switch(action.type) {
    case 'UPDATE_CURRENT_ISBN':

      return [
        ...state.slice(0,0),
        action.currentISBN
      ]

    default:
      return state;
  }
}

// export default currentISBN;
export default updateCurrentISBN;
