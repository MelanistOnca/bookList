import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import axios from 'axios';

import { connect }  from 'react-redux';


class LogIn extends React.Component {

  logIn(logInFn, logInSuccessFn, logInFormData, e ){
    // console.log(e,'was e in submitInfo in components/user/logIn.js');
    // console.log(logInFn, 'was logInFn passed to submitInfo');
    // console.log(logInSuccessFn, 'was logInSuccessFn passed to submitInfo');
    // console.log(logInFormData, 'was form data passed to submitInfo');
    // TODO: call getList function to populate list data for each list once the user has logged in. this will allow the async portions some invisible load time while the user moves from the login button to whatever list link they choose in the nav bar
    e.preventDefault();
    const request = axios.post('api/users/login',logInFormData)
    //NOTE use axios from logInUser in actions/user.js to access the request .then data.data to update the user store

    request
      .catch( (error) => {
        console.error(error, 'error in request.catch in components/user/logIn.js');
      })
      .then( (data) => {
        //try logInFn here
        // logInFn(logInFormData) //if this isn't run, data still shows up ok below
        logInFn(logInFormData) //payload has been commented out of user.js return for this attempt
        // console.log(data, 'was data in first then in components/user/logIn.js'); //returns an object with keys config, data, headers, request, status, statusText.
        //data.data gives object with keys token and user
        // console.log(data.data.user, 'was data.data.user in first then in components/user/logIn.js');
        // console.log(logInFormData, 'was logInFormData in first then in components/user/logIn.js'); //returns object with keys username and password

          return new Promise ( (reso, rej) => {
            reso( logInSuccessFn(data.data.user) )
            // reso( logInSuccessFn(data.data.user) )
            //TODO NOTE can i just change this to reso( logInSuccessFn(data.data.user), getList(args) ) ???
          })
      })


  }
  updateUsername(updateUsernameField, e){
    // console.log('updateUsername in component/user/logIn.js fired');
    // console.log(updateUsernameField, 'was updateUsernameField');
    let usernameField = e.target.value;
    updateUsernameField(usernameField)

  }
  updatePassword(updatePasswordField, e){
    // console.log('updatePassword in component/user/logIn.js fired');
    let passwordField = e.target.value;
    updatePasswordField(passwordField)
  }
  //NOTE based on updateUserInfo approach, i can probably consolidate these into a single function with a switch/ifelse statement?
  render(){
    // console.log(this.props, 'was this.props in components/login/logIn.js');
    // console.log(this.props.logInForm, 'was this.props.logInForm in components/login/logIn.js');



    //NOTE: i should probably have more loading placeholders while components wait for async responses
    //conditional messages based on load/error status
    let statusVar = this.props.user.loading ? 'Loading Info' :  '' ;
    let loadStatusContainer =
      <div id="loadStatusContainer">

        <h1>
          {`${statusVar}`}

        </h1>

      </div>


    return(
      <div
        id="logInContainer">
        Log in component here
        <form>
          {loadStatusContainer}
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
            onClick={this.logIn.bind(this, this.props.logInUser,
            this.props.logInUserSuccess,  this.props.logInForm)}
            >
            Log In
          </button>
        </form>


      </div>
    )
  }
}

export default LogIn;
