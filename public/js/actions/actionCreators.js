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
  console.log(searchType, 'was searchType in actions/actionCreators');
  return {
    type: 'UPDATE_TYPE',
    searchType
  }
}
