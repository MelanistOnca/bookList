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
export * from './list'
export * from './forms'
export * from './deletedBook'
//there is probably a way to mass export the above, but im not sure of it ATM. //i am now // ALSO, the export _ from 'PLACEHOLDER' syntax allows you to skip the import to here. leaving above import commented for self-education/reminder purposes


// console.log(currentUserFromTokenSuccess, 'was currentUserFromTokenSuccess in actions/actionCreators.js');





export function receiveResults(results) {

  return {
    type: 'RECEIVE_RESULTS',
    results
  }
}
