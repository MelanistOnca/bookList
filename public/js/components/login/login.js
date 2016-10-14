import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';



export default class Login extends React.Component {
  clickLogin(){
    console.log('login was clicked');
  }
  clickSignUp(){
    console.log('signup was clicked');
  }

  render(){


    return(
      <div
        id="loginContainer">
        <button
          id="loginButton">
          Log In
        </button>
        <button
          id="signUpButton">
          SignUp
        </button>

      </div>
    )
  }
}
