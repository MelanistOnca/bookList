import React from 'react';
import { render } from 'react-dom';

// import { Field, reduxForm } from 'redux-form';

import signUpForm from '../../data/signUpForm.js'

class SignUp extends React.Component {
  submitInfo(signUpFn, signUpFormInfo, /*probably need more passed to check all the fields are verified*/ e){
    // console.log(e,'was e in submitInfo in components/user/signUp.js');
    // console.log(signUpFn, 'was fn passed to submitInfo');
    // console.log(signUpFormInfo, 'was signUpFormInfo passed to submitInfo');
    e.preventDefault();
    //using signupusername and signuppassword for testing. email is a@b.com, pat j mcw

    //NOTE: still want to do field verification?
    signUpFn(signUpFormInfo);
  }
  handleChange(e) {
    this.props.onChange(e)
  }
  updateSignUpFormF_Name(updateF_NameField, e){
    let targetField = e.target.value;
    console.log('updateSignUpFormF_Name got called');
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
    // console.log(this.props, 'this.props in components/user/signUp.js');
    let event = window.event; //needed for firefox //binding 'this' in the bind call seemed to work. investigate further, hopefully will bypass this let definition in FF? will test with clickSignUp to see if functionality differs
    let blockStyle = {
      border: '1px solid black',
      display: 'flex'
    }
    //NOTE: remove the "value={...}" lines once done with testing
    console.log(this.props, 'was this.props before render return in components/user/signUp.js');
    // onChange={this.updateSignUpFormF_Name.bind(this, this.props.updateSignUpF_Name)}
    //    attempt at redux-form
    // return(
    //   <form onSubmit={this.submitInfo}>
    //     <div
    //       id="signUpContainer"
    //       >
    //       <ul >
    //         <li>
    //
    //           <ul style={blockStyle}>
    //             <li>
    //               <label>First Name
    //                 <Field
    //                 id="firstNameInput"
    //                 name="firstNameFieldReduxForm"
    //                 component="input"
    //                 type="text"
    //                 placeholder="first name here"
    //                 onChange={this.updateSignUpFormF_Name.bind(this, this.props.updateSignUpF_Name)}
    //                 value={this.props.signUpForm.firstName}
    //                 />
    //               </label>
    //             </li>
    //             <li>
    //               <label>Middle Name
    //                 <input
    //                 id="middleNameInput"
    //                 type="text"
    //                 placeholder="middle name here"
    //                 onChange={this.updateSignUpFormM_Name.bind(this, this.props.updateSignUpM_Name)}
    //                 value={this.props.signUpForm.middleName}
    //                 >
    //                 </input>
    //               </label>
    //             </li>
    //             <li>
    //               <label>Last Name
    //                 <input
    //                   id="lastNameInput"
    //                   type="text"
    //                   placeholder="last name here"
    //                   onChange={this.updateSignUpFormL_Name.bind(this, this.props.updateSignUpL_Name)}
    //                   value={this.props.signUpForm.lastName}
    //                   >
    //                 </input>
    //               </label>
    //             </li>
    //           </ul>
    //         </li>
    //
    //         <li>
    //           <ul style={blockStyle}>
    //             <li>
    //               <label>Email <input
    //               id="emailInput"
    //               type="text"
    //               placeholder="email here"
    //               onChange={this.updateSignUpFormEmail.bind(this,this.props.updateSignUpEmail)}
    //               value={this.props.signUpForm.email}
    //               ></input></label>
    //             </li>
    //             <li>
    //               <label>Verify Email <input
    //               id="emailVerification"
    //               type="text"
    //               placeholder="verify email here"
    //               onChange={this.updateSignUpFormEmailVer.bind(this,this.props.updateSignUpEmailVer)}
    //               value={this.props.signUpForm.emailVer}
    //               ></input></label>
    //             </li>
    //           </ul>
    //         </li>
    //
    //         <li>
    //           <ul style={blockStyle}>
    //             <li>
    //               <label>Username<input
    //               id="usernameInput"
    //               type="text"
    //               placeholder="username here"
    //               onChange={this.updateSignUpFormUsername.bind(this,this.props.updateSignUpUsername)}
    //               value={this.props.signUpForm.username}
    //               ></input></label>
    //             </li>
    //             <li>
    //               <label>Verify Username <input
    //               id="usernameVerification"
    //               type="text"
    //               placeholder="verify username here"
    //               onChange={this.updateSignUpFormUsernameVer.bind(this,this.props.updateSignUpUsernameVer)}
    //               value={this.props.signUpForm.usernameVer}
    //               ></input></label>
    //             </li>
    //           </ul>
    //         </li>
    //
    //         <li>
    //           <ul style={blockStyle}>
    //             <li>
    //               <label>Password <input
    //               id="passwordInput"
    //               type="text"
    //               placeholder="password here"
    //               onChange={this.updateSignUpFormPassword.bind(this,this.props.updateSignUpPassword)}
    //               value={this.props.signUpForm.password}
    //               ></input></label>
    //             </li>
    //             <li>
    //               <label>Verify Password <input
    //               id="passwordVerification"
    //               type="text"
    //               placeholder="verify password here"
    //               onChange={this.updateSignUpFormPasswordVer.bind(this,this.props.updateSignUpPasswordVer)}
    //               value={this.props.signUpForm.passwordVer}
    //               ></input></label>
    //             </li>
    //           </ul>
    //         </li>
    //         <button
    //           onClick={this.submitInfo.bind(event, this.props.signUpUser, this.props.signUpForm)}
    //
    //           >
    //           Sign Up</button>
    //       </ul>
    //
    //
    //
    //     </div>
    //
    //   </form>
    //
    // )
    // form without redux-form
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
                  onChange={this.updateSignUpFormF_Name.bind(this, this.props.updateSignUpF_Name)}
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
                  onChange={this.updateSignUpFormM_Name.bind(this, this.props.updateSignUpM_Name)}
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
                    onChange={this.updateSignUpFormL_Name.bind(this, this.props.updateSignUpL_Name)}
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
                onChange={this.updateSignUpFormEmail.bind(this,this.props.updateSignUpEmail)}
                value={this.props.signUpForm.email}
                ></input></label>
              </li>
              <li>
                <label>Verify Email <input
                id="emailVerification"
                type="text"
                placeholder="verify email here"
                onChange={this.updateSignUpFormEmailVer.bind(this,this.props.updateSignUpEmailVer)}
                value={this.props.signUpForm.emailVer}
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
                onChange={this.updateSignUpFormUsername.bind(this,this.props.updateSignUpUsername)}
                value={this.props.signUpForm.username}
                ></input></label>
              </li>
              <li>
                <label>Verify Username <input
                id="usernameVerification"
                type="text"
                placeholder="verify username here"
                onChange={this.updateSignUpFormUsernameVer.bind(this,this.props.updateSignUpUsernameVer)}
                value={this.props.signUpForm.usernameVer}
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
                onChange={this.updateSignUpFormPassword.bind(this,this.props.updateSignUpPassword)}
                value={this.props.signUpForm.password}
                ></input></label>
              </li>
              <li>
                <label>Verify Password <input
                id="passwordVerification"
                type="text"
                placeholder="verify password here"
                onChange={this.updateSignUpFormPasswordVer.bind(this,this.props.updateSignUpPasswordVer)}
                value={this.props.signUpForm.passwordVer}
                ></input></label>
              </li>
            </ul>
          </li>
          <button
            onClick={this.submitInfo.bind(event, this.props.signUpUser, this.props.signUpForm)}

            >
            Sign Up</button>
        </ul>



      </div>
    )
  }
}

// SignUp = reduxForm({
//   form: 'signup',
//   // initialValues : {
//   //   // firstNameFieldReduxForm : 'pat'
//   //   firstNameFieldReduxForm : signUpForm.firstName
//   //
//   // }
//   // initialValues: {
//   //   firstNameFieldReduxForm : `${this.props.signUpForm.firstName}`
//   // }
// })(SignUp);

// SignUp = connect(
//   state => ({
//     initialValues: signUpForm.firstName // pull initial values from account reducer
//   }),
//   { load: loadAccount }               // bind account loading action creator
// )(SignUp)

export default SignUp;
