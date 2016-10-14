// heavily inspired by tutorial https://github.com/rajaraodv/react-redux-blog
// look into axios


export function currentUserFromToken(tokenInStorage) {
  // check if token is valid, if yes, get user from server
  //review axios to figure out wtf is going on here
  // const request = axios.get(`${ROOT_URL}/me/from/token?token=${tokenFromStorage}`);
  //HAVE YOU REVIEWED AXIOS YET!???!!?!?!?!?!?!?!!?!

  return {
    type: 'CURRENT_USER_FROM_TOKEN',
    // payload: request
  }
}

export function currentUserFromTokenSuccess(user) {
  return {
    type: 'CURRENT_USER_FROM_TOKEN_SUCCESS',
    payload: user
  }
}

export function currentUserFromTokenFailure(error) {
  return {
    type: 'CURRENT_USER_FROM_TOKEN_FAILURE',
    payload: error
  }
}

export function resetToken() {
  // to reset token on logout
  return {
    type: 'RESET_TOKEN'
  }
}

export function signUpUser(formData) {
  // more axios
  // const request = axios.post(`${ROOT_URL}/users/signup`, formValues);
  // WELL?!??! HAVE YOU LOOKED INTO IT YET?

  return {
    type: 'SIGN_UP_USER',
    // payload: request
  }
}

export function signUpUserSuccess(user) {
  return {
    type: 'SIGN_UP_USER_SUCCESS',
    payload: user
  }
}

export function signUpUserFailure(error) {
  return {
    type: 'SIGN_UP_USER_Failer',
    payload error
  }
}

export function resetUser() {
  // i'm guessing this is for once signup is complete and maybe to force them to login after signup?
  return {
    type: 'RESET_USER'
  }
}

export function logInUser(formData) {
  // this shit again
  // const request = axios.post(`${ROOT_URL}/users/signin`, formValues);
  // yelling at yourself isn't funny anymore

  return {
    type: 'LOG_IN_USER',
    // payload: request
  }
}

export function logInUserSuccess(user) {
  return {
    type: 'LOG_IN_USER_SUCCESS',
    payload: user
  }
}

export function logInUserFailure(error) {
  return {
    type: 'LOG_IN_USER_FAILURE',
    payload: error
  }
}

export function logoutUser() {
  // ha! tutorial switched over to log vs sign. victory is mine, 6 gold stars!

  return {
    type: 'LOGOUT_USER'
  }
}

export function updateUserEmail(email) {
  // not sure im going to use this? probably good idea to use it. we'll see
  return {
    type: 'UPDATE_USER_EMAIL',
    payload: email
  }
}
