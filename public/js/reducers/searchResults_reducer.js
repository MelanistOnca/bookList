
function searchResults(state=[],action) {
  // console.log(state, 'was state in reducers/searchResults');
  // console.log(action, 'was action in reducers/searchResults');
  switch(action.type){
    case 'RECEIVE_RESULTS':

      // console.log(action, 'was action in RECEIVE_RESULTS of reducers/searchResults');
      return {
        ...state,
        results: action.results //this works when using the "authors" api call, may need to adjust depending on other call results

      }
      //TODO later, see if the above format is why multiple books dont return/showup when querying by title // i think its probably something else

    default:
      return state;
  }
}

export default searchResults;
