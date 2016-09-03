function searchType(state=[],action) {

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
