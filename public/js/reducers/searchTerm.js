
function searchTerm(state=[], action) {
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
