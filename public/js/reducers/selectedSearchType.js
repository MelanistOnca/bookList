
function selectSearchType(state=[],action) {
  // console.log(state, 'was state in selectedSearchType reducer');
  // console.log(action, 'was action in selectedSearchType reducer');
  switch(action.type){
    case 'UPDATE_TYPE':
      return [
        ...state.slice(0,0),
        action.searchType //careful with naming here, may need to update
      ]
    default:
      return state;
  }
}

export default selectSearchType;
