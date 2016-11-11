import React from 'react';
import { render } from 'react-dom';



export default class SignUp extends React.Component {
  submitInfo(signUpFn,/*probably need more passed to check all the fields are verified*/ e){
    console.log(e,'was e in submitInfo in components/user/signUp.js');
    console.log(signUpFn, 'was fn passed to submitInfo');
    e.preventDefault();
    signUpFn();
  }
  updateSignUpFormF_Name(updateF_NameField, e){
    let targetField = e.target.value;
    updateF_NameField(targetField);
  }
  updateSignUpFormM_Name(updateM_NameField, e){
    let targetField = e.target.value;
    updateM_NameField(targetField);
  }
  updateSignUpFormL_Name(updateL_NameField, e){
    let targetField = e.target.value;
    updateL_NameField(targetField);
  }
  updateSignUpFormEmail(updateSignUpMailField, e){
    let targetField = e.target.value;
    updateSignUpMailField(targetField);
  }
  updateSignUpFormEmailVer(updateSignUpMailVerField, e){
    let targetField = e.target.value;
    updateSignUpMailVerField(targetField);
  }
  updateSignUpFormUsername(updateSignUpUsernameField, e){
    let targetField = e.target.value;
    updateSignUpUsernameField(targetField);
  }
  updateSignUpFormUsernameVer(updateSignUpUsernameVerField, e){
    let targetField = e.target.value;
    updateSignUpUsernameVerField(targetField);
  }
  updateSignUpFormPassword(updateSignUpPasswordField, e){
    let targetField = e.target.value;
    updateSignUpPasswordField(targetField);
  }
  updateSignUpFormPasswordVer(updateSignUpPasswordVerField, e){
    let targetField = e.target.value;
    updateSignUpPasswordVerField(targetField);
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
              onChange={this.updateSignUpFormF_Name.bind(this, this.props.updateSignUpF_Name)}
              >

            </input>
            <input
              id="middleNameInput"
              type="text"
              placeholder="middle name here"
              onChange={this.updateSignUpFormM_Name.bind(this, this.props.updateSignUpM_Name)}
              >

            </input>
            <input
              id="lastNameInput"
              type="text"
              placeholder="last name here"
              onChange={this.updateSignUpFormL_Name.bind(this, this.props.updateSignUpL_Name)}
              >

            </input>
          </li>
          <li>
            <ul>
              <li><input
                id="emailInput"
                type="text"
                placeholder="email here"
                onChange={this.updateSignUpFormEmail.bind(this,this.props.updateSignUpEmail)}
                ></input></li>
              <li><input
                id="emailVerification"
                type="text"
                placeholder="verify email here"
                onChange={this.updateSignUpFormEmailVer.bind(this,this.props.updateSignUpEmailVer)}
                ></input></li>
            </ul>
          </li>
          <li>
            <ul>
              <li><input
                id="usernameInput"
                type="text"
                placeholder="username here"
                onChange={this.updateSignUpFormUsername.bind(this,this.props.updateSignUpUsername)}
                ></input></li>
              <li><input
                id="usernameVerification"
                type="text"
                placeholder="verify username here"
                onChange={this.updateSignUpFormUsernameVer.bind(this,this.props.updateSignUpUsernameVer)}
                ></input></li>
            </ul>
          </li>
          <li>
            <ul>
              <li><input
                id="passwordInput"
                type="text"
                placeholder="password here"
                onChange={this.updateSignUpFormPassword.bind(this,this.props.updateSignUpPassword)}
                ></input></li>
              <li><input
                id="passwordVerification"
                type="text"
                placeholder="verify password here"
                onChange={this.updateSignUpFormPasswordVer.bind(this,this.props.updateSignUpPasswordVer)}
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
