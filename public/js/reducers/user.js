// heavily inspired by tutorial https://github.com/rajaraodv/react-redux-blog

//NOTE maybe use RESET_USER state as the initial state? lots of nulls
function user(state=[], action) {
  // console.log('reducers/user.js')
  // console.log(action,'action in user')
  // console.log( state,'state in user');
  // NOTE commented returns are from tutorial, which appeared to not have a data/user
  switch(action.type) {
    case 'CURRENT_USER_FROM_TOKEN':

    // return { ...state, user: action.payload.data.user, status:'authenticated', error:null, loading: false}; //<-- authenticated
    // my stuff
      console.log('CURRENT_USER_FROM_TOKEN case');
      console.log(state, 'was state in this case');
      return state;
    case 'CURRENT_USER_FROM_TOKEN_SUCCESS'://return user, status = authenticated and make loading = false
    // return { ...state, user: action.payload.data.user, status:'authenticated', error:null, loading: false}; //<-- authenticated
    // my stuff
      console.log('CURRENTCURRENT_USER_FROM_TOKEN_SUCCESS case');
      console.log(state, 'was state in this case');
      return state;
    case 'CURRENT_USER_FROM_TOKEN_FAILURE':// return error and make loading = false
    //  error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    // return { ...state, user: null, status:'storage', error:error, loading: false};
    // my stuff
      console.log('CURRENT_USER_FROM_TOKEN_FAILURE case');
      console.log(state, 'was state in this case');
      return state;
    case 'RESET_TOKEN': // remove token from storage make loading = false
    // return { ...state, user: null, status:'storage', error:null, loading: false};
    // my stuff
      console.log('RESET_TOKEN case');
      console.log(state, 'was state in this case');
      return state;
    case 'SIGN_UP_USER': // sign up user, set loading = true and status = signup
    return { ...state, user: null, status:'signup', error:null, loading: true}; //i think my babel is not configured to work with the spread operator here? //i have fixed this, see the presets bracket statements in scripts in package.json. was [ react es2015 ] is now [ react es2015 stage-2 ] //i can probably clean up the book list shennanigans now, but get everything working first
    // my stuff
      console.log('SIGN_UP_USER case');
      console.log(state, 'was state in this case');
      console.log(action, 'was action in this case');

    case 'SIGN_UP_USER_SUCCESS': //return user, status = authenticated and make loading = false
    console.log('SIGN_UP_USER_SUCCESS case');
    console.log(state, 'was state in this case');
    return { ...state, user: action.payload.data.user, status:'authenticated', error:null, loading: false}; //<-- authenticated
    // my stuff
      return state;
    case 'SIGN_UP_USER_FAILURE': // return error and make loading = false
    // error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    // return { ...state, user: null, status:'signup', error:error, loading: false};
    // my stuff
      console.log('SIGN_UP_USER_FAILURE case');
      console.log(state, 'was state in this case');
      return state;
    case 'LOG_IN_USER': // log in user,  set loading = true and status = log_in
      console.log('LOG_IN_USER case');
      console.log(state, 'was state in this case');
      console.log(action, 'was action in this case');
      return { ...state, user: null, status:'log_in', error:null, loading: true};
    // my stuff
      // let stateReplace = {
      //   "user": null,
      //   "status": 'log_in',
      //   "error": 'null',
      //   "loading": true
      // }
      // return Object.assign(
      //   {},
      //
      // )
      return state;
    case 'LOG_IN_USER_SUCCESS': //return authenticated user,  make loading = false and status = authenticated
    console.log('LOG_IN_USER_SUCCESS');
    console.log(state, 'was state in this case');
    console.log(action, 'was action in this case');
    return { ...state, user: action.payload/*.data.user*/, /*NOTE log this and see what it looks like*/ /* this is user data from the DB. it includes the password digest. i can probably alter the return of the DB query to not return that, or i can try getting specific here like user: {user: action.payload.user, ... etc and leave out the digest} but i think i remember having issues with this specificity type in the book data retrieval*/ status:'authenticated', error:null, loading: false}; //<-- authenticated
    // my stuff
      console.log('LOG_IN_USER_SUCCESS case');
      console.log(state, 'was state in this case');
      return state;
    case 'LOG_IN_USER_FAILURE': // return error and make loading = false
    // error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    // return { ...state, user: null, status:'log_in', error:error, loading: false};
    // my stuff
      console.log('LOG_IN_USER_FAILURE case');
      console.log(state, 'was state in this case');
      return state;
    case 'UPDATE_USER_EMAIL':
    // return{...state, user:{...state.user, email:action.payload.email}};
    // my stuff
      console.log('UPDATE_USER_EMAIL case');
      console.log(state, 'was state in this case');
      console.log(action, 'was action in same');
      return state;
    case 'UPDATE_USER_INFO':
    // return{...state, user:{...state.user, email:action.payload.email}};
    // my stuff
      console.log('UPDATE_USER_INFO case');
      console.log(state, 'was state in this case');
      console.log(action, 'was action in same');
      
      return state;
    case 'UPDATE_USER_PASSWORD':
    // return{...state, user:{...state.user, email:action.payload.email}};
    // my stuff
      console.log('UPDATE_USER_PASSWORD case');
      console.log(state, 'was state in this case');
      console.log(action, 'was action in same');

      return state;
    case 'LOGOUT_USER':
    // return {...state, user:null, status:'logout', error:null, loading: false};
    // my stuff
      console.log('LOGOUT_USER case');
      console.log(state, 'was state in this case');
      return state;
    case 'RESET_USER':
    // reset authenticated user to initial state
    // return { ...state, user: null, status:null, error:null, loading: false};
    // my stuff
      console.log('RESET_USER case');
      console.log(state, 'was state in this case');
      return state;
    default:
      // console.log('default case');
      // console.log(state, 'was state in this case');
      return state;
    //
  }
}

export default user;
