

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

export function updateSignUpF_Name(signUpF_Name) {
  return {
    type: 'UPDATE_SIGNUP_F_NAME',
    signUpF_Name
  }
}
export function updateSignUpM_Name(signUpM_Name) {
  return {
    type: 'UPDATE_SIGNUP_M_NAME',
    signUpM_Name
  }
}
export function updateSignUpL_Name(signUpL_Name) {
  return {
    type: 'UPDATE_SIGNUP_L_NAME',
    signUpL_Name
  }
}
export function updateSignUpEmail(signUpEmail) {
  return {
    type: 'UPDATE_SIGNUP_EMAIL',
    signUpEmail
  }
}
export function updateSignUpEmailVer(signUpEmailVer) {
  return {
    type: 'UPDATE_SIGNUP_EMAIL_VER',
    signUpEmailVer
  }
}
export function updateSignUpUsername(signUpUsername) {
  return {
    type: 'UPDATE_SIGNUP_USERNAME',
    signUpUsername
  }
}
export function updateSignUpUsernameVer(signUpUsernameVer) {
  return {
    type: 'UPDATE_SIGNUP_USERNAME_VER',
    signUpUsernameVer
  }
}
export function updateSignUpPassword(signUpPassword) {
  return {
    type: 'UPDATE_SIGNUP_PASSWORD',
    signUpPassword
  }
}
export function updateSignUpPasswordVer(signUpPasswordVer) {
  return {
    type: 'UPDATE_SIGNUP_PASSWORD_VER',
    signUpPasswordVer
  }
}
