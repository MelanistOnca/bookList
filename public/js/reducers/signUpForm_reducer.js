function signUpForm(state=[], action){
  console.log(state, 'was state in reducers/signUpForm_reducer');

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

  console.log(action, 'was action in reducers/signUpForm_reducer');

  switch(action.type){

    case "UPDATE_SIGNUP_F_NAME":
      return {
        ...state,
        'firstName': action.signUpF_Name
      }
    case "UPDATE_SIGNUP_M_NAME":
      return {
        ...state,
        'middleName': action.signUpM_Name
      }
    case "UPDATE_SIGNUP_L_NAME":
      return {
        ...state,
        'lastName': action.signUpL_Name
      }
    case "UPDATE_SIGNUP_EMAIL":
      return {
        ...state,
        'email': action.signUpEmail
      }
    case "UPDATE_SIGNUP_EMAIL_VER":
      return {
        ...state,
        'emailVer': action.signUpEmailVer
      }
    case "UPDATE_SIGNUP_USERNAME":
      return {
        ...state,
        'username': action.signUpUsername
      }
    case "UPDATE_SIGNUP_USERNAME_VER":
      return {
        ...state,
        'usernameVer': action.signUpUsernameVer
      }
    case "UPDATE_SIGNUP_PASSWORD":
      return {
        ...state,
        'password': action.signUpPassword
      }
    case "UPDATE_SIGNUP_PASSWORD_VER":
      return {
        ...state,
        'passwordVer': action.signUpPasswordVer
      }
    default:
      return state;
  }
}

export default signUpForm;
