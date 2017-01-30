import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';



import NavLink from '../navLink'

export default class UserSection extends React.Component {

  logOut(logOutUser, user, e){
    // console.log(logOutUser, 'was logOutUser fn passed to logOut fn in components/user/userSection');
    // console.log(user, 'was user passed to logOut fn in components/user/userSection');
    e.preventDefault()
    logOutUser(user)

  }
  render(){
    // console.log(this.props, 'was this.props in components/user/userSection');

    let userStatusCheck;
    if(this.props.user.status==='authenticated'){
      userStatusCheck =
      <ul>
        <li>
          <button
            id="logOutUser"
            to="#"
            onClick={this.logOut.bind(this, this.props.logOutUser, this.props.user)}>
            Log Out
          </button>

        </li>
      </ul>

    } else {
      userStatusCheck =
      <ul>
        <li><NavLink
          id="logInUser"
          to="logIn"
          >
            Log In
        </NavLink></li>
        <li><NavLink
          id="signUpUser"
          to="signUp"
          >
            Sign Up
        </NavLink></li>
      </ul>

    }

    return(
      <div
        id="userSectionContainer">

        {userStatusCheck}


      </div>
    )
  }

}
