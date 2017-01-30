import React from 'react';
import { render } from 'react-dom';

// import { Field, reduxForm } from 'redux-form';

import userFormData from '../../data/userFormData.js';

class SignUp extends React.Component {
  submitInfo(signUpFn, userFormDataInfo, /*probably need more passed to check all the fields are verified*/ e){
    // console.log(e,'was e in submitInfo in components/user/signUp.js');
    // console.log(signUpFn, 'was fn passed to submitInfo');
    // console.log(userFormDataInfo, 'was userFormDataInfo passed to submitInfo');
    e.preventDefault();
    //using signupusername and signuppassword for testing. email is a@b.com, pat j mcw

    //NOTE: still want to do field verification?
    signUpFn(userFormDataInfo);
  }
  handleChange(e) {
    this.props.onChange(e)
  }
  updateUserFormFormF_Name(updateF_NameField, e){
    let targetField = e.target.value;
    // console.log('updateUserFormFormF_Name got called');
    updateF_NameField(targetField);
  } //there should be a way to dynamically check which field is being updated so that i can only have one function call that will update the appropriate field only? if F_NameField, updateF_Name. probably some kind of switch statement? might need to change the update reducers?
  updateUserFormFormM_Name(updateM_NameField, e){
    let targetField = e.target.value;
    updateM_NameField(targetField);
  }
  updateUserFormFormL_Name(updateL_NameField, e){
    let targetField = e.target.value;
    updateL_NameField(targetField);
  }
  updateUserFormFormEmail(updateUserFormMailField, e){
    let targetField = e.target.value;
    updateUserFormMailField(targetField);
  }
  updateUserFormFormEmailVer(updateUserFormMailVerField, e){
    let targetField = e.target.value;
    updateUserFormMailVerField(targetField);
  }
  updateUserFormFormUsername(updateUserFormUsernameField, e){
    let targetField = e.target.value;
    updateUserFormUsernameField(targetField);
  }
  updateUserFormFormUsernameVer(updateUserFormUsernameVerField, e){
    let targetField = e.target.value;
    updateUserFormUsernameVerField(targetField);
  }
  updateUserFormFormPassword(updateUserFormPasswordField, e){
    let targetField = e.target.value;
    updateUserFormPasswordField(targetField);
  }
  updateUserFormFormPasswordVer(updateUserFormPasswordVerField, e){
    let targetField = e.target.value;
    updateUserFormPasswordVerField(targetField);
  }

  render(){
    //maybe make the inputs a component and pass props for labels? lot of copied code here
    // console.log(this.props, 'this.props in components/user/signUp.js');
    // let event = window.event; //needed for firefox //binding 'this' in the bind call seemed to work. investigate further, hopefully will bypass this let definition in FF? will test with clickSignUp to see if functionality differs
    let blockStyle = {
      border: '1px solid black',
      display: 'flex'
    }
    //NOTE: remove the "value={...}" lines once done with testing
    console.log(this.props, 'was this.props before render return in components/user/signUp.js');

    return(
      <div
        id="signUpContainer"
        >

        <ul >
          <li>

            <ul style={blockStyle}>
              <li>
                <label>First Name
                  <input
                  id="firstNameInput"
                  type="text"
                  placeholder="first name here"
                  onChange={this.updateUserFormFormF_Name.bind(this, this.props.updateUserFormF_Name)}
                  value={this.props.userFormData.firstName}
                  >
                  </input>
                </label>
              </li>
              <li>
                <label>Middle Name
                  <input
                  id="middleNameInput"
                  type="text"
                  placeholder="middle name here"
                  onChange={this.updateUserFormFormM_Name.bind(this, this.props.updateUserFormM_Name)}
                  value={this.props.userFormData.middleName}
                  >
                  </input>
                </label>
              </li>
              <li>
                <label>Last Name
                  <input
                    id="lastNameInput"
                    type="text"
                    placeholder="last name here"
                    onChange={this.updateUserFormFormL_Name.bind(this, this.props.updateUserFormL_Name)}
                    value={this.props.userFormData.lastName}
                    >
                  </input>
                </label>
              </li>
            </ul>
          </li>

          <li>
            <ul style={blockStyle}>
              <li>
                <label>Email <input
                id="emailInput"
                type="text"
                placeholder="email here"
                onChange={this.updateUserFormFormEmail.bind(this,this.props.updateUserFormEmail)}
                value={this.props.userFormData.email}
                ></input></label>
              </li>
              <li>
                <label>Verify Email <input
                id="emailVerification"
                type="text"
                placeholder="verify email here"
                onChange={this.updateUserFormFormEmailVer.bind(this,this.props.updateUserFormEmailVer)}
                value={this.props.userFormData.emailVer}
                ></input></label>
              </li>
            </ul>
          </li>

          <li>
            <ul style={blockStyle}>
              <li>
                <label>Username<input
                id="usernameInput"
                type="text"
                placeholder="username here"
                onChange={this.updateUserFormFormUsername.bind(this,this.props.updateUserFormUsername)}
                value={this.props.userFormData.username}
                ></input></label>
              </li>
              <li>
                <label>Verify Username <input
                id="usernameVerification"
                type="text"
                placeholder="verify username here"
                onChange={this.updateUserFormFormUsernameVer.bind(this,this.props.updateUserFormUsernameVer)}
                value={this.props.userFormData.usernameVer}
                ></input></label>
              </li>
            </ul>
          </li>

          <li>
            <ul style={blockStyle}>
              <li>
                <label>Password <input
                id="passwordInput"
                type="text"
                placeholder="password here"
                onChange={this.updateUserFormFormPassword.bind(this,this.props.updateUserFormPassword)}
                value={this.props.userFormData.password}
                ></input></label>
              </li>
              <li>
                <label>Verify Password <input
                id="passwordVerification"
                type="text"
                placeholder="verify password here"
                onChange={this.updateUserFormFormPasswordVer.bind(this,this.props.updateUserFormPasswordVer)}
                value={this.props.userFormData.passwordVer}
                ></input></label>
              </li>
            </ul>
          </li>
          <button
            onClick={this.submitInfo.bind(this, this.props.signUpUser, this.props.userFormData)}

            >
            Sign Up</button>
        </ul>



      </div>
    )
  }
}



export default SignUp;
