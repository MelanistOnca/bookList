
function searchTerm(state=[], action) {
  // console.log(state, 'was state in reducers/searchTerm.js');
  // console.log(action, 'was action in reducers/searchTerm.js');
  switch(action.type){
    case 'UPDATE_TERM': {
      // console.log(action.searchTerm, 'was action.searchTerm in UPDATE_TERM of reducers/searchTerm.js');
      // let parsedSearchTerm = action.searchTerm.split(' ').join('_').split("'").join('')
      // console.log(parsedSearchTerm, 'was parsedSearchTerm in UPDATE_TERM of reducers/searchTerm.js');
      let humanReadableSearchTerm = action.searchTerm.split('_').join(' ');
      return [
        ...state.slice(0,0),
        humanReadableSearchTerm //careful with naming here, may need to update
      ]
    }

    default:
      return state;
  }
}

export default searchTerm;
