import React from 'react';
import { render } from 'react-dom';



export default class SignUp extends React.Component {
  submitInfo(signUpFn, e){
    console.log(e,'was e in submitInfo in components/user/signUp.js');
    console.log(signUpFn, 'was fn passed to submitInfo');
    e.preventDefault();
    signUpFn();
  }

  render(){
    //maybe make the inputs a component and pass props for labels? lot of copied code here
    console.log(this.props, 'this.props in components/user/signUp.js');
    let event = window.event; //needed for firefox //binding 'this' in the bind call seemed to work. investigate further, hopefully will bypass this let definition in FF? will test with clickSignUp to see if functionality differs
    return(
      <div
        id="signUpContainer"
        >
        will probably need to add value= SQUIGGLY_BRACKET thisDOTpropsDOTSOMETHING SQUIGGLY_BRACKET to the following components
        <ul>
          <li>
            <input
              id="firstNameInput"
              type="text"
              placeholder="first name here"
              >

            </input>
            <input
              id="middleNameInput"
              type="text"
              placeholder="middle name here"
              >

            </input>
            <input
              id="lastNameInput"
              type="text"
              placeholder="last name here"
              >

            </input>
          </li>
          <li>
            <ul>
              <li><input
                id="emailInput"
                type="text"
                placeholder="email here"
                ></input></li>
              <li><input
                id="emailVerification"
                type="text"
                placeholder="verify email here"
                ></input></li>
            </ul>
          </li>
          <li>
            <ul>
              <li><input
                id="usernameInput"
                type="text"
                placeholder="username here"
                ></input></li>
              <li><input
                id="usernameVerification"
                type="text"
                placeholder="verify username here"
                ></input></li>
            </ul>
          </li>
          <li>
            <ul>
              <li><input
                id="passwordInput"
                type="text"
                placeholder="password here"
                ></input></li>
              <li><input
                id="passwordVerification"
                type="text"
                placeholder="verify password here"
                ></input></li>
            </ul>
          </li>
        </ul>

        <button
          onClick={this.submitInfo.bind(event, this.props.signUpUser)}
          >
          Sign Up</button>

      </div>
    )
  }
}
