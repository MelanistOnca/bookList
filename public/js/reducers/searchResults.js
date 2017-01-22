
function searchResults(state=[],action) {
  // console.log(state, 'was state in reducers/searchResults');
  // console.log(action, 'was action in reducers/searchResults');
  switch(action.type){
    case 'RECEIVE_RESULTS':

      // return [
      //   ...state.slice(0,0),
      //   action.results //this works when using the "authors" api call, may need to adjust depending on other call results
      //
      // ]
      // return {
      //   ...state,
      //   data: action.results //this works when using the "authors" api call, may need to adjust depending on other call results
      //
      // }
      return {
        ...state,
        results: action.results //this works when using the "authors" api call, may need to adjust depending on other call results

      }

    default:
      return state;
  }
}

export default searchResults;
