
//select a list
export function selectList(choice) {
  console.log(choice, 'was choice in actionCreators');
  return {
    type: 'SELECT_LIST',
    choice
  }
}

//update a list
export function updateList(/*listName, user, listBooks*/ listInfo) {
  //have a single object passed as the arg that has  listName, user, and the books in the list in it.
  console.log('updateList in action/list.js was called');
  console.log(listInfo, 'was listInfo in same');
  console.log(typeof listInfo, 'was typeof listInfo in same');
  return{
    type: 'UPDATE_LIST',
    payload: listInfo
  }
}

// i have 3 reducer files, one for each list. do i need to make three functions, or do i want to streamline one function. i think i want to streamline, but im not sure how that interacts wit the multiple reducers/lists model
// on one hand, i want 3 functions to "separate" the concerns, on the other hand, DRY.
export function addToList(list, bookId) {
  return {
    type: 'ADD_TO_LIST',
    list
    //don't think i need to return bookId since this should be added to the list
  }
}

export function removeFromList(list, bookId) {
  return {
    type: 'REMOVE_FROM_LIST',
    list
  }
}
