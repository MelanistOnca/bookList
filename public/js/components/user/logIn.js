import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
// import getList from '../../../../db/lists'; //pgp seems to be spawning an error message related to pg-native

//temp to check things
// import axios from 'axios';


//end of temp check


export default class LogIn extends React.Component {
  // clickLogin(logInUser, e){
  //   console.log('login was clicked');
  //   console.log(e, 'was e in clickLogin');
  //   console.log(logInUser, 'was logInUser in clickLogin');
  //   logInUser()
  // }
  // clickSignUp(signUpUser, e){
  //   console.log('signup was clicked');
  //   console.log(e, 'was e in clickSignUp');
  //   console.log(signUpUser, 'was signUpUser in clickSignUp');
  //   signUpUser()
  //
  //
  // }
  logIn(logInFn, logInFormData, e /* username and password will need to be passed here as well */){
    console.log(e,'was e in submitInfo in components/user/logIn.js');
    console.log(logInFn, 'was fn passed to submitInfo');
    console.log(logInFormData, 'was form data passed to submitInfo');
    e.preventDefault();
    // let testFormData = {
    //   'email': 'bla@bla.com',
    //   'password': 'gobbityguk'
    // }
    // console.log(body, 'was body in logIn in components/user/login.js');
    logInFn(logInFormData);
    // $.ajax('/api/users')
    //   .done( () => {
    //     console.log('success at /api/users');
    //   })
    //   .fail( () => {
    //     console.log('failure at /api/users');
    //   })
    //   .always( () => {
    //     console.log('ajax complete at /api/users');
    //   })
  }
  updateUsername(updateUsernameField, e){
    // console.log('updateUsername in component/user/logIn.js fired');
    let usernameField = e.target.value;
    updateUsernameField(usernameField)

  }
  updatePassword(updatePasswordField, e){
    // console.log('updatePassword in component/user/logIn.js fired');
    let passwordField = e.target.value;
    updatePasswordField(passwordField)
  }
  render(){
    console.log(this.props, 'was this.props in components/login/logIn.js');
    console.log(this.props.logInForm, 'was this.props.logInForm in components/login/logIn.js');

    let event = window.event; //needed for firefox //binding 'this' in the bind call seemed to work. investigate further, hopefully will bypass this let definition in FF? will test with clickSignUp to see if functionality differs
    // console.log(this.getList, 'was this.getList in logIn.js');
    return(
      <div
        id="logInContainer">
        Log in component here
        <form>
          <ul>
            <li><input
              id="logInUsername"
              type="text"
              placeholder="username"
              name="logInUsername"
              onChange={this.updateUsername.bind(this, this.props.updateFormUsername)}
              >

            </input></li>
            <li><input
              id="logInPassword"
              type="text"
              placeholder="password"
              name="logInPassword"
              onChange={this.updatePassword.bind(this, this.props.updateFormPassword)}
              >

            </input></li>

          </ul>
          <button
            onClick={this.logIn.bind(event, this.props.logInUser, this.props.logInForm)}
            >
            Log In
          </button>
        </form>


      </div>
    )
  }
}
