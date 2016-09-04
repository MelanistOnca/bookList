
function searchResults(state=[],action) {

  switch(action.type){
    case 'PLACEHOLDER_ACTION': //not sure what i need to do here yet. build more and figure it out.
      return [
        state
      ]

    default:
      return state;
  }
}

export default searchResults;
