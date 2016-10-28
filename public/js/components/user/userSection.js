import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';



import NavLink from '../navLink'

export default class UserSection extends React.Component {


  render(){

    return(
      <div
        id="userSectionContainer">
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

      </div>
    )
  }

}
