import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
// import getList from '../../../../db/lists'; //pgp seems to be spawning an error message related to pg-native

//temp to check things
import axios from 'axios';


//end of temp check


import { Field, reduxForm, formValueSelector } from 'redux-form';
// get this redux-form ified
import { connect }  from 'react-redux';


class LogIn extends React.Component {
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
  logIn(logInFn, logInSuccessFn, logInFormData, e ){
    // console.log(e,'was e in submitInfo in components/user/logIn.js');
    // console.log(logInFn, 'was logInFn passed to submitInfo');
    // console.log(logInSuccessFn, 'was logInSuccessFn passed to submitInfo');
    // console.log(logInFormData, 'was form data passed to submitInfo');
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
        //may need to return new Promise
        //here
          // .then( (data) => {
          //   console.log(data, 'was data in chained then in components/user/logIn.js');
          // }) //this fails, 'logInFn(...).then is not a function'
          return new Promise ( (reso, rej) => {
            reso( logInSuccessFn(data.data.user) )
            // reso( logInSuccessFn(data.data.user) )
          })
      })

    //try a console log of the below
    // logInFn(logInFormData);
    // console.log(logInFn(logInFormData), 'was logInFn call');
    // let calledLogIn = logInFn(logInFormData);
    // console.log(calledLogIn, 'was calledLogIn');
    // console.log(calledLogIn.payload, 'was calledLogIn.payload');
    // console.log(calledLogIn.payload.PromiseValue, 'was calledLogIn.payload.PromiseValue');

    // console.log(logInSuccessFn(logInFn(logInFormData)), 'was logInSuccessFn(logInFn(logInFormData))');

    // logInSuccessFn(logInFn(logInFormData));
    // let gummy = new Promise (
    //   (resolve, reject) => {
    //
    //   }
    // )

    // logInFn(logInFormData)
      // .then( (data) => {
      //   console.log(data, 'was data in .then of logInFn call in logIn in components/user/login.js');
      //   next()
      // })
      // .catch( (error) =>{
      //   console.error(error, 'error in logInFn call in logIn in components/user/login.js');
      // })


    // if(calledLogIn) {
    //   console.log('calledLogIn true');
    //   logInSuccessFn(logInFormData.username)
    // } else {
    //   console.log('calledLogIn false');
    // }




    //to see what it returns


    // $.ajax('/api/users')
    //   .done( () => {
    //     console.log('success at /api/users');
    //   })
    //   .fail( () => {
    //     console.log('failure at /api/users');
    //   })
    //   .always( () => {
    //     console.log('ajax complete at /api/users');
    //   })
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
  render(){
    // console.log(this.props, 'was this.props in components/login/logIn.js');
    // console.log(this.props.logInForm, 'was this.props.logInForm in components/login/logIn.js');

    let event = window.event; //needed for firefox //binding 'this' in the bind call seemed to work. investigate further, hopefully will bypass this let definition in FF? will test with clickSignUp to see if functionality differs
    // console.log(this.getList, 'was this.getList in logIn.js');
    // const logInReduxForm = (props) => {
    //   const { handleSubmit, handleChange } = props;
    //   // const { handleSubmit, handleChange, this.logIn, this.updateUsername, this.updatePassword } = props;
    //
    // }
    // console.log(this.props, 'this.props in components/user/login.js');
    // console.log(this.props.logInUserSuccess, 'this.props.logInUserSuccess in components/user/login.js');
    // return(
    //   <div
    //     id="logInContainer">
    //     Log in component here
    //     <form>
    //       <ul>
    //         <li><Field
    //           id="logInUsername"
    //           name="reduxFormLogIn"
    //           component="input"
    //           type="text"
    //           placeholder="username"
    //           name="logInUsername"
    //           onChange={this.updateUsername.bind(this, this.props.updateFormUsername)}
    //           />
    //
    //         </li>
    //         <li><input
    //           id="logInPassword"
    //           type="text"
    //           placeholder="password"
    //           name="logInPassword"
    //           onChange={this.updatePassword.bind(this, this.props.updateFormPassword)}
    //           >
    //
    //         </input></li>
    //
    //       </ul>
    //       <button
    //         onClick={this.logIn.bind(event, this.props.logInUser, this.props.logInForm)}
    //         >
    //         Log In
    //       </button>
    //     </form>
    //
    //
    //   </div>
    // )
    ////////////

    //conditional messages based on load/error status
    let statusVar = this.props.user.loading ? 'Loading Info' :  '' ; //this may be unnecessary?
    // console.log(statusVar, 'was statusVar');
    let loadStatusContainer =
      <div id="loadStatusContainer">
        testy test
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
            onClick={this.logIn.bind(event, this.props.logInUser,
            this.props.logInUserSuccess,  this.props.logInForm)}
            >
            Log In
          </button>
        </form>


      </div>
    )
  }
}

// LogIn = reduxForm({
//   form: 'login'
// })(LogIn);
//
// const selector = formValueSelector('reduxFormLogIn');
//
// LogIn = connect(
//   state => {
//     const updateFormUsernameReduxForm = selector(state, 'updateFormUsername')
//     return {
//       updateFormUsernameReduxForm
//     }
//   }
// )(LogIn)


export default LogIn;
