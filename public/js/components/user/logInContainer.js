import LogIn from './logIn.js';
import {
  logInUser,
  logInUserSuccess,
  logInUserFailure,
  resetUser
} from '../../actions/user';
import { reduxForm } from 'redux-form';

const signInUser = (values, dispatch) => {
  return new Promise( (resolve, reject) => {
    dispatch( signInUser(values) )
      .then( (response) =>{
        let data = response.payload.data;
        if(response.payload.status != 200) {
          dispatch(logInUserFailure(response.payload));
          reject(data);
        } else {
          sessionStorage.setItem('jwtToken', response.payload.data.token);
          dispatch(logInUserSuccess(response.payload));
          resolve();
        }
      })
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: signInUser,
    resetMe: () => {

    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default reduxForm({
  form: 'LogInForm',
  fields: ['username','password'],
  null,
  null,
  validate
}, mapStateToProps, mapDispatchToProps)(LogInForm)
