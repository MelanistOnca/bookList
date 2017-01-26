function userFormData(state=[], action){
  // console.log(state, 'was state in reducers/userFormData_reducer');

  // returns {
  //   email:"a@b.com"
  //   emailVer:"a@b.com"
  //   firstName:"pat"
  //   lastName:"mcw"
  //   middleName:"j"
  //   password:"signuppassword"
  //   passwordVer:"signuppassword"
  //   username:"signupusername"
  //   usernameVer:"signupusername"
  // }
  // with test info

  // console.log(action, 'was action in reducers/userFormData_reducer');

  switch(action.type){ 

    case "UPDATE_USERFORM_F_NAME":
      return {
        ...state,
        'firstName': action.userFormF_Name
      }
    case "UPDATE_USERFORM_M_NAME":
      return {
        ...state,
        'middleName': action.userFormM_Name
      }
    case "UPDATE_USERFORM_L_NAME":
      return {
        ...state,
        'lastName': action.userFormL_Name
      }
    case "UPDATE_USERFORM_EMAIL":
      return {
        ...state,
        'email': action.userFormEmail
      }
    case "UPDATE_USERFORM_EMAIL_VER":
      return {
        ...state,
        'emailVer': action.userFormEmailVer
      }
    case "UPDATE_USERFORM_USERNAME":
      return {
        ...state,
        'username': action.userFormUsername
      }
    case "UPDATE_USERFORM_USERNAME_VER":
      return {
        ...state,
        'usernameVer': action.userFormUsernameVer
      }
    case "UPDATE_USERFORM_PASSWORD":
      return {
        ...state,
        'password': action.userFormPassword
      }
    case "UPDATE_USERFORM_PASSWORD_VER":
      return {
        ...state,
        'passwordVer': action.userFormPasswordVer
      }
    default:
      return state;
  }
}

export default userFormData;
