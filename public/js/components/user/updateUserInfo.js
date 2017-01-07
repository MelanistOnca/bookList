import React from 'react';
import { render } from 'react-dom';




export default class UpdateUserInfo extends React.Component {
//i should probably get this and the signup form to use the same component, with a few props or something flagged for which to display

//TODO: change field IDs. change store from signup_data to userform_data or something. enable onChange to update store of userform_data object. repeat for password function below. create getUserInfo function to get the non-password info from the server, if the user is logged in and use that to update the userform_data in the store. then create the submitUpdatedInfo function to update the user info in the DB. then do the same for submitUpdatedPassword function.

//user will need to be logged in.
  getUserInfo() {
    console.log('called getUserInfo in components/user/updateUserInfo.js');
    //get user info, fill in fields
  }
  updateUserFieldInfo(e) {
    console.log('be the dream of a single function you want to see in the world.');
    console.log('updateUserFieldInfo called in components/user/updateUserInfo.js');
    console.log(e.target, 'was e.target');
    console.log(e.target.id, 'was e.target.id'); //this returns the id of the target field. I should update these fields to be different IDs from the signup form components, but good otherwise. can create a switch case based around this.

  }
  updatePasswordFieldInfo(e){
    console.log('updatePasswordFieldInfo called in components/user/updateUserInfo.js');
    console.log(e.target, 'was e.target');
    console.log(e.target.id, 'was e.target.id'); //provides the element ID of the field being updated. change these to differ from signup form ids
  }
  submitUpdatedInfo() {

  }
  submitUpdatedPassword() {

  }
  componentWillMount(){
    console.log('componentWillMount in components/user/updateUserInfo.js ran');
    this.getUserInfo()
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps in components/user/updateUserInfo.js ran');
    this.getUserInfo()
  }

  render() {
    console.log(this.props, 'was this.props in components/user/updateUserInfo.js');
    console.log(this.props.user.user.id, 'was this.props.user.user.id in components/user/updateUserInfo.js');
    console.log(typeof this.props.user.user.id, 'was typeof of same');

    let blockStyle = {
      border: '1px solid black',
      display: 'flex'
    }


    return (
      <div
        id="updateUserInfoContainer">

        Update user info here
        <p>{this.props.user.user.username}</p>
        <p>{this.props.user.user.email}</p>
        <p>{this.props.user.user.f_name}</p>
        <p>{this.props.user.user.m_name}</p>
        <p>{this.props.user.user.l_name}</p>
        above should be username, email, first name, last name
        <p>probably want to differentiate the signupform data from the updateuser data? maybe not?</p>
        <p style={ { border: '6px solid grey'} }> Need to rename the signupform data files to "user info forms" or something, and adjust reducers and anything else accordingly so that this area can use the same data/functions without being completely wacky named</p>
        <ul >
          Update User Information
          <li>

            <ul style={blockStyle}>
              <li>
                <label>First Name
                  <input
                  id="firstNameInput"
                  type="text"
                  placeholder="first name here"
                  onChange={this.updateUserFieldInfo.bind(this)}
                  value={this.props.signUpForm.firstName}
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
                  onChange={this.updateUserFieldInfo.bind(this)}
                  value={this.props.signUpForm.middleName}
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
                    onChange={this.updateUserFieldInfo.bind(this)}
                    value={this.props.signUpForm.lastName}
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
                onChange={this.updateUserFieldInfo.bind(this)}
                value={this.props.signUpForm.email}
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
                onChange={this.updateUserFieldInfo.bind(this)}
                value={this.props.signUpForm.username}
                ></input></label>
              </li>

            </ul>
          </li>


          <button
            onClick={''}

            >
            Update Info</button>
        </ul>
        <ul>
          Update Password
          <li>
            <ul style={blockStyle}>
              <li>
                <label>Password <input
                id="passwordInput"
                type="text"
                placeholder="password here"
                onChange={this.updatePasswordFieldInfo.bind(this)}
                value={this.props.signUpForm.password}
                ></input></label>
              </li>
              <li>
                <label>Verify Password <input
                id="passwordVerification"
                type="text"
                placeholder="verify password here"
                onChange={this.updatePasswordFieldInfo.bind(this)}
                value={this.props.signUpForm.passwordVer}
                ></input></label>
              </li>
            </ul>
          </li>
          <button
            onClick={''}

            >
            Set New Password</button>
        </ul>

      </div>
    )
  }
}
