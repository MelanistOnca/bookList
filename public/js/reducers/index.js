// see redux saga, redux thunk, redux normalizr for asynchronous stuff (ajax)
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//reducers
// import currentlyReadingList from './currentlyReadingList';
// // import currentlyReadingList from './currentlyReadingList';
// import haveReadList from './haveReadList';
// import toBeReadList from './toBeReadList';
import selectedListKey from './selectedListKey';
import listCollection from './listCollection';
// import listTranslate from './listTranslate';
import searchTerm from './searchTerm';
import searchType from './searchType';
import selectedSearchType from './selectedSearchType';
import searchResults from './searchResults';
// import currentISBN from './currentISBN';
import newToList from './newToList';
import user from './user';
import logInForm from './logInForm_reducer';
import signUpForm from './signUpForm_reducer';


const rootReducer = combineReducers(
  {
    selectedListKey,
    listCollection,
    // listTranslate,
    searchTerm,
    searchType,
    selectedSearchType,
    searchResults,
    // currentISBN,
    newToList,
    user,
    logInForm,
    signUpForm,
    routing: routerReducer
  }
)

export default rootReducer;
