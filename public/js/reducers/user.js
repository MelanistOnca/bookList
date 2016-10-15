//NOTE maybe use RESET_USER state as the initial state? lots of nulls
function user(state=[], action) {
  console.log('data/user.js',action,'action in user', state,'state in user');
  // NOTE commented returns are from tutorial, which appeared to not have a data/user
  switch(action.type) {
    case 'CURRENT_USER_FROM_TOKEN':

    // return { ...state, user: action.payload.data.user, status:'authenticated', error:null, loading: false}; //<-- authenticated
    // my stuff
      return state;
    case 'CURRENT_USER_FROM_TOKEN_SUCCESS'://return user, status = authenticated and make loading = false
    return { ...state, user: action.payload.data.user, status:'authenticated', error:null, loading: false}; //<-- authenticated
    // my stuff
      return state;
    case 'CURRENT_USER_FROM_TOKEN_FAILURE':// return error and make loading = false
    //  error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    // return { ...state, user: null, status:'storage', error:error, loading: false};
    // my stuff
      return state;
    case 'RESET_TOKEN': // remove token from storage make loading = false
    // return { ...state, user: null, status:'storage', error:null, loading: false};
    // my stuff
      return state;
    case 'SIGN_UP_USER': // sign up user, set loading = true and status = signup
    // return { ...state, user: null, status:'signup', error:null, loading: true};
    // my stuff
      return state;
    case 'SIGN_UP_USER_SUCCESS': //return user, status = authenticated and make loading = false
    // return { ...state, user: action.payload.data.user, status:'authenticated', error:null, loading: false}; //<-- authenticated
    // my stuff
      return state;
    case 'SIGN_UP_USER_FAILURE': // return error and make loading = false
    // error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    // return { ...state, user: null, status:'signup', error:error, loading: false};
    // my stuff
      return state;
    case 'LOG_IN_USER': // log in user,  set loading = true and status = log_in
    return { ...state, user: null, status:'log_in', error:null, loading: true};
    // my stuff
      return state;
    case 'LOG_IN_USER_SUCCESS': //return authenticated user,  make loading = false and status = authenticated
    // return { ...state, user: action.payload.data.user, status:'authenticated', error:null, loading: false}; //<-- authenticated
    // my stuff
      return state;
    case 'LOG_IN_USER_FAILURE': // return error and make loading = false
    // error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    // return { ...state, user: null, status:'log_in', error:error, loading: false};
    // my stuff
      return state;
    case 'UPDATE_USER_EMAIL':
    // return{...state, user:{...state.user, email:action.payload.email}};
    // my stuff
      return state;
    case 'LOGOUT_USER':
    // return {...state, user:null, status:'logout', error:null, loading: false};
    // my stuff
      return state;
    case 'RESET_USER':
    // reset authenticated user to initial state
    // return { ...state, user: null, status:null, error:null, loading: false};
    // my stuff
      return state;
    default:
      return state;
    
  }
}
