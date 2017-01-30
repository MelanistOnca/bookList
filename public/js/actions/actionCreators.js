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
//the export _ from 'PLACEHOLDER' syntax allows you to skip the import to here. leaving above import commented for self-education/reminder purposes. the _ could be a single exportable good from the PLACHOLDER file


export function receiveResults(results) {

  return {
    type: 'RECEIVE_RESULTS',
    results
  }
}
