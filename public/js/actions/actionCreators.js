//

//select list
export function selectList(choice) {
  // console.log(choice, 'was choice in actionCreators');
  return {
    type: 'SELECT_LIST',
    choice
  }
}

//i'm going to need something here for searchTerm aren't i?

export function updateSearchTerm(searchTerm) {
  // console.log(searchTerm, 'was searchTerm in actions/actionCreators');
  return {
    type: 'UPDATE_TERM',
    searchTerm
  }
}

export function updateSearchType(searchType) {
  // console.log(searchType, 'was searchType in actions/actionCreators');
  return {
    type: 'UPDATE_TYPE',
    searchType
  }
}

export function receiveResults(results) {

  return {
    type: 'RECEIVE_RESULTS',
    results
  }
}

export function addToList(list, bookId) {
  return {
    type: 'ADD_TO_LIST',
    list
    //don't think i need to return bookId since this should be added to the list
  }
}
