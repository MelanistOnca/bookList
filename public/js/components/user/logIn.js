import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';



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
  logIn(logInFn, e){
    console.log(e,'was e in submitInfo in components/user/logIn.js');
    console.log(logInFn, 'was fn passed to submitInfo');
    e.preventDefault();
    logInFn();
    $.ajax('/api/users')
      // .done(console.log('success at /api/users') )
      // .fail(console.log('fail at /api/users') )
      // .always(console.log('complete') )
      .done( () => {
        console.log('success at /api/users');
      })
      .fail( () => {
        console.log('failure at /api/users');
      })
      .always( () => {
        console.log('ajax complete at /api/users');
      })
  }
  render(){
    console.log(this.props, 'was this.props in components/login/logIn.js');
    let event = window.event; //needed for firefox //binding 'this' in the bind call seemed to work. investigate further, hopefully will bypass this let definition in FF? will test with clickSignUp to see if functionality differs

    return(
      <div
        id="logInContainer">
        Log in component here
        <ul>
          <li><input
            id="logInUsername"
            type="text"
            placeholder="username"
            >

          </input></li>
          <li><input
            id="logInPassword"
            type="text"
            placeholder="password"
            >

          </input></li>

        </ul>
        <button
          onClick={this.logIn.bind(event, this.props.logInUser)}
          >
          Log In
        </button>

      </div>
    )
  }
}
