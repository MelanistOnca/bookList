// import {
//   currentUserFromToken,
//   currentUserFromTokenSuccess,
//   currentUserFromTokenFailure,
//   resetToken,
//   signUpUser,
//   signUpUserSuccess,
//   signUpUserFailure,
//   resetUser,
//   logInUser,
//   logInUserSuccess,
//   logInUserFailure,
//   logoutUser,
//   updateUserEmail
// } from './user';

export * from './user'
//there is probably a way to mass export the above, but im not sure of it ATM. //i am now // ALSO, the export _ from 'PLACEHOLDER' syntax allows you to skip the import to here. leaving above import commented for self-education/reminder purposes


// console.log(currentUserFromTokenSuccess, 'was currentUserFromTokenSuccess in actions/actionCreators.js');

//select list
export function selectList(choice) {
  console.log(choice, 'was choice in actionCreators');
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

export function removeFromList(list, bookId) {
  return {
    type: 'REMOVE_FROM_LIST',
    list
  }
}

export function updateFormUsername(formUsername) {
  return {
    type: 'UPDATE_FORM_USERNAME',
    formUsername
  }
}
export function updateFormPassword(formPassword) {
  return {
    type: 'UPDATE_FORM_PASSWORD',
    formPassword
  }
}
