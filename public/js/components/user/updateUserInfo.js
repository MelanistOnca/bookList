import React from 'react';
import { render } from 'react-dom';




export default class UpdateUserInfo extends React.Component {
//i should probably get this and the signup form to use the same component, with a few props or something flagged for which to display

//TODO: change field IDs. change store from signup_data to userform_data or something. enable onChange to update store of userform_data object. repeat for password function below. create getUserInfo function to get the non-password info from the server, if the user is logged in and use that to update the userform_data in the store. then create the submitUpdatedInfo function to update the user info in the DB. then do the same for submitUpdatedPassword function.

//TODONE NOTE: decided against changing field IDs since they should be functionally exclusive/use-same-info -- once signed up, will never need to sign up again and if freshly signed up, that information should match.

//user will need to be logged in.
  userInfoToFormData(userDataFn, userData) {
    console.log('called userInfoToFormData in components/user/updateUserInfo.js');
    //get user info, fill in fields
    // if user is logged in, can just take info from store.user.user.___ and fill in the respective userFormData fields. if user is not logged in, they should not even be able to access this page(really)
    //NOTE: possibly reference the updateField functions here? no. i should probably just have the login data fill out the userFormData
    console.log(userDataFn, 'was userDataFn in same');
    console.log(userData, 'was userData in same');
    userDataFn(userData)
  }
  updateUserFieldInfo(props, e) {
    console.log('be the dream of a single function you want to see in the world.');
    console.log('updateUserFieldInfo called in components/user/updateUserInfo.js');
    console.log(e.target, 'was e.target');
    console.log(e.target.id, 'was e.target.id'); //this returns the id of the target field. I should update these fields to be different IDs from the signup form components, but good otherwise. can create a switch case based around this.
    //e.target.id possibilities:
    // firstNameInput,
    // middleNameInput,
    // lastNameInput,
    // emailInput,
    // usernameInput,
    console.log(props, 'was props in components/user/updateUserInfo.js');
    switch(e.target.id) {
      case 'firstNameInput':
        props.updateUserFormF_Name(e.target.value)
      break;
      case 'middleNameInput':
        props.updateUserFormM_Name(e.target.value);
      break;
      case 'lastNameInput':
        props.updateUserFormL_Name(e.target.value);
      break;
      case 'emailInput':
        props.updateUserFormEmail(e.target.value);
      break;
      case 'usernameInput':
        props.updateUserFormUsername(e.target.value);
      break;
      default:
        console.log('no cases matched in switch in updateUserFieldInfo in components/user/updateUserInfo.js');
    }


  }
  updatePasswordFieldInfo(props, e){
    console.log('updatePasswordFieldInfo called in components/user/updateUserInfo.js');
    console.log(e.target, 'was e.target');
    console.log(e.target.id, 'was e.target.id'); //provides the element ID of the field being updated. change these to differ from signup form ids
    //e.target.id possibilities:
    // currentPasswordInput,
    // passwordInput,
    // passwordVerification
    switch(e.target.id) {
      case 'currentPasswordInput':
        props.updateUserFormCurrentPassword(e.target.value)
      break;
      case 'passwordInput':
        props.updateUserFormPassword(e.target.value);
      break;
      case 'passwordVerification':
        props.updateUserFormPasswordVer(e.target.value);
      break;
      default:
        console.log('no cases matched in switch in updatePasswordFieldInfo in components/user/updateUserInfo.js');
    }
  }
  submitUpdatedInfo(updateFn,userFormData,e) {
    console.log('submitUpdatedInfo in components/user/updateUserInfo.js called');
    // console.log(e, 'was e in in components/user/updateUserInfo.js called');
    // console.log(updateFn, 'was updateFn in in components/user/updateUserInfo.js called');
    // console.log(userFormData, 'was userFormData in in components/user/updateUserInfo.js called');
    //relevant userFormData keys:
      // email,
      // firstName,
      // lastName,
      // middleName,
      // username //do i want to allow users to change username? there's got to be a reason this isn't a common option in username services?
    // console.log(userFormData.email, 'was userFormData.email in in components/user/updateUserInfo.js called');
    // console.log(userFormData.firstName, 'was userFormData.firstName in in components/user/updateUserInfo.js called');
    // console.log(userFormData.middleName, 'was userFormData.middleName in in components/user/updateUserInfo.js called');
    // console.log(userFormData.lastName, 'was userFormData.lastName in in components/user/updateUserInfo.js called');
    // console.log(userFormData.username, 'was userFormData.username in in components/user/updateUserInfo.js called');
    updateFn(userFormData) //need to add user_id to userFormData and update this.userInfoToFormData and its passed function to move that info over so that i have it when passing formdata here. for use in SQL command

  }
  submitUpdatedPassword(updateFn, userFormData, e) {
    console.log('submitUpdatedPassword in components/user/updateUserInfo.js called');

  }
  componentWillMount(){
    console.log('componentWillMount in components/user/updateUserInfo.js ran');
    if(this.props.user.status==="authenticated"){
      this.userInfoToFormData(this.props.userInfoToFormData, this.props.user.user)
    }
    // this.getUserInfo()

    // <button
    //   onClick={this.userInfoToFormData.bind(this, this.props.userInfoToFormData, this.props.user.user)}
    //   >Click to call userInfoToFormData</button>
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps in components/user/updateUserInfo.js ran');
    // this.getUserInfo()
    // this.userInfoToFormData()
    // this.userInfoToFormData(this.props.userInfoToFormData, this.props.user.user)
  }

  render() {
    console.log(this.props, 'was this.props in components/user/updateUserInfo.js');
    console.log(this.props.user.user.id, 'was this.props.user.user.id in components/user/updateUserInfo.js');
    console.log(typeof this.props.user.user.id, 'was typeof of same');

    let blockStyle = {
      border: '1px solid black',
      display: 'flex'
    }
    let greyBorder = {
      border: '6px solid grey'
    }


    return (
      <div
        id="updateUserInfoContainer">
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
                  onChange={this.updateUserFieldInfo.bind(this, this.props)}
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
                  onChange={this.updateUserFieldInfo.bind(this, this.props)}
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
                    onChange={this.updateUserFieldInfo.bind(this, this.props)}
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
                onChange={this.updateUserFieldInfo.bind(this, this.props)}
                value={this.props.userFormData.email}
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
                onChange={this.updateUserFieldInfo.bind(this, this.props)}
                value={this.props.userFormData.username}
                ></input></label>
              </li>

            </ul>
          </li>


          <button
            onClick={this.submitUpdatedInfo.bind(this,this.props.updateUserInfo, this.props.userFormData) }

            >
            Update Info</button>
        </ul>
        <ul>
          Update Password (not yet implemented)
          <li>
            <ul style={blockStyle}>
              <li>
                <label>Current Password <input
                id="currentPasswordInput"
                type="text"
                placeholder="enter current password"
                onChange={this.updatePasswordFieldInfo.bind(this, this.props)}
                value={this.props.userFormData.currentPassword}
                ></input></label>
              </li>
              <li>
                <label>New Password <input
                id="passwordInput"
                type="text"
                placeholder="password here"
                onChange={this.updatePasswordFieldInfo.bind(this, this.props)}
                value={this.props.userFormData.password}
                ></input></label>
              </li>
              <li>
                <label>Verify New Password <input
                id="passwordVerification"
                type="text"
                placeholder="verify password here"
                onChange={this.updatePasswordFieldInfo.bind(this, this.props)}
                value={this.props.userFormData.passwordVer}
                ></input></label>
              </li>
            </ul>
          </li>
          <button
            onClick={this.submitUpdatedPassword.bind(this. this.updateUserPassword, this.props.userFormData)}

            >
            Set New Password</button>
        </ul>

      </div>
    )
  }
}
