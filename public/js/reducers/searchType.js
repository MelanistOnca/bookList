function searchType(state=[],action) {
  // console.log(state, 'was state in reducers/searchTerm.js');
  // console.log(action, 'was action in reducers/searchTerm.js');
  switch(action.type){
    case 'NO_CASES':
      console.log('nothing should be triggering reducers/searchType.js');
      return [
        state
      ]
    default:
      return state;
  }
}

export default searchType;
