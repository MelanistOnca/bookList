
function searchTerm(state=[], action) {
  console.log(state, 'was state in reducers/searchTerm.js');
  console.log(action, 'was action in reducers/searchTerm.js');
  switch(action.type){
    case 'UPDATE_TERM':
      return [
        ...state.slice(0,0),
        action.searchTerm //careful with naming here, may need to update
      ]
    default:
      return state;
  }
}

export default searchTerm;
