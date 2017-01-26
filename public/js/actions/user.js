// heavily inspired by tutorial
// https://github.com/rajaraodv/react-redux-blog
// look into axios
import axios from 'axios';

export function currentUserFromToken(tokenInStorage) {
  // check if token is valid, if yes, get user from server
  //review axios to figure out wtf is going on here
  // const request = axios.get(`${ROOT_URL}/me/from/token?token=${tokenFromStorage}`);
  //HAVE YOU REVIEWED AXIOS YET!???!!?!?!?!?!?!?!!?!
  console.log('currentUserFromToken in actions/user.js called');
  return {
    type: 'CURRENT_USER_FROM_TOKEN',
    // payload: request
  }
}

export function currentUserFromTokenSuccess(user) {
  console.log('currentUserFromTokenSuccess in actions/user.js called');
  return {
    type: 'CURRENT_USER_FROM_TOKEN_SUCCESS',
    payload: user
  }
}

export function currentUserFromTokenFailure(error) {
  console.log('currentUserFromTokenFailure in actions/user.js called');
  return {
    type: 'CURRENT_USER_FROM_TOKEN_FAILURE',
    payload: error
  }
}

export function resetToken() {
  // to reset token on logout
  console.log('resetToken in actions/user.js called');
  return {
    type: 'RESET_TOKEN'
  }
}

export function signUpUser(formData) {
  // more axios
  const request = axios.post(`api/users/signup`, formData);
  // WELL?!??! HAVE YOU LOOKED INTO IT YET?
  console.log('signUpUser in actions/user.js called');
  console.log(formData, 'was formData in actions/user.js');
  return {
    type: 'SIGN_UP_USER',
    payload: request
  }
}

export function signUpUserSuccess(user) {
  console.log('signUpUserSuccess in actions/user.js called');
  return {
    type: 'SIGN_UP_USER_SUCCESS',
    payload: user
  }
}

export function signUpUserFailure(error) {
  console.log('signUpUserFailure in actions/user.js called');
  return {
    type: 'SIGN_UP_USER_FAILURE',
    payload: error
  }
}

export function resetUser() {
  // i'm guessing this is for once signup is complete and maybe to force them to login after signup?
  console.log('resetUser in actions/user.js called');
  return {
    type: 'RESET_USER'
  }
}

export function logInUser(formData) {
  // this shit again
  // const request = axios.post(`${ROOT_URL}/users/signin`, formValues);
  const request = axios.post('api/users/login',formData)


  console.log('logInUser in actions/user.js called');
  //
  // console.log(formData, 'was formData in actions/user.js');
  // console.log(formData.username, 'was formData.username in actions/user.js');
  // console.log(formData.password, 'was formData.password in actions/user.js');
  // console.log(request, 'was request in same');
  // request
  //   .then( (data)=>{
  //     // console.log(data, 'was data in request.then in logInUser in actions/user.js');
  //     // console.log(data.data, 'was data.data in request.then in logInUser in actions/user.js');//returns the data from the query
  //     //the below line would set the session token to the token return from above data
  //     // sessionStorage.setItem('jwtToken', data.data.token); //this probably needs to be in the component rather than here
  //     // logInUserSuccess(data.data.user);
  //   })
  return {
    type: 'LOG_IN_USER',
    // payload: request //will this have the response?
    // differences in design from tutorial means i think i don't need the payload here
  }
}

export function logInUserSuccess(user) {
  console.log('logInUserSuccess in actions/user.js called');
  console.log(user, 'was user in logInUserSuccess in actions/user.js');
  //how do i call this function from the response?
  return {
    type: 'LOG_IN_USER_SUCCESS',
    payload: user
  }
}

export function logInUserFailure(error) {
  console.log('logInUserFailure in actions/user.js called');
  return {
    type: 'LOG_IN_USER_FAILURE',
    payload: error
  }
}

export function logOutUser() {
  // ha! tutorial switched over to log vs sign. victory is mine, 6 gold stars!
  console.log('logoutUser in actions/user.js called');
  return {
    type: 'LOGOUT_USER'
  }
}

export function updateUserInfo(userInfo) {

  console.log('updateUserInfo in actions/user.js called');
  console.log(userInfo, 'was userInfo in same');
  axios.post('api/users/update', userInfo)
  return {
    type: 'UPDATE_USER_INFO',
    payload: userInfo
  }
}
export function updateUserPassword(userPassword) {

  console.log('updateUserPassword in actions/user.js called');

  return {
    type: 'UPDATE_USER_PASSWORD',
    payload: userPassword
  }
}
export function updateUserEmail(userEmail) {

  console.log('updateUserEmail in actions/user.js called');
  return {
    type: 'UPDATE_USER_EMAIL',
    payload: userEmail
  }
}

export function userInfoToFormData(userInfo) {
  console.log('userInfoToFormData in actions/user.js called');
  console.log(userInfo, 'was userInfo in same');
  return {
    type: "LOGGED_IN_USER_DATA",
    payload: userInfo
  }
}
