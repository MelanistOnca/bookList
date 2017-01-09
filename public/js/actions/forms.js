

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

export function updateUserFormF_Name(userFormF_Name) {
  return {
    type: 'UPDATE_USERFORM_F_NAME',
    userFormF_Name
  }
}
export function updateUserFormM_Name(userFormM_Name) {
  return {
    type: 'UPDATE_USERFORM_M_NAME',
    userFormM_Name
  }
}
export function updateUserFormL_Name(userFormL_Name) {
  return {
    type: 'UPDATE_USERFORM_L_NAME',
    userFormL_Name
  }
}
export function updateUserFormEmail(userFormEmail) {
  return {
    type: 'UPDATE_USERFORM_EMAIL',
    userFormEmail
  }
}
export function updateUserFormEmailVer(userFormEmailVer) {
  return {
    type: 'UPDATE_USERFORM_EMAIL_VER',
    userFormEmailVer
  }
}
export function updateUserFormUsername(userFormUsername) {
  return {
    type: 'UPDATE_USERFORM_USERNAME',
    userFormUsername
  }
}
export function updateUserFormUsernameVer(userFormUsernameVer) {
  return {
    type: 'UPDATE_USERFORM_USERNAME_VER',
    userFormUsernameVer
  }
}
export function updateUserFormPassword(userFormPassword) {
  return {
    type: 'UPDATE_USERFORM_PASSWORD',
    userFormPassword
  }
}
export function updateUserFormPasswordVer(userFormPasswordVer) {
  return {
    type: 'UPDATE_USERFORM_PASSWORD_VER',
    userFormPasswordVer
  }
}
