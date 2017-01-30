// see redux saga, redux thunk, redux normalizr for asynchronous stuff (ajax)
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import { reducer as formReducer } from 'redux-form';

//reducers
// import currentlyReadingList from './currentlyReadingList';
// // import currentlyReadingList from './currentlyReadingList';
// import haveReadList from './haveReadList';
// import toBeReadList from './toBeReadList';
import selectedListKey from './selectedListKey_reducer';
import listCollection from './listCollection_reducer';
import listTranslate from './listTranslate';
import searchTerm from './searchTerm_reducer';
import searchType from './searchType_reducer';
import selectedSearchType from './selectedSearchType_reducer';
import searchResults from './searchResults_reducer';
// import currentISBN from './currentISBN';
import newToList from './newToList_reducer';
import user from './user_reducer';
import logInForm from './logInForm_reducer';
import userFormData from './userFormData_reducer';
import deletedBook from './deletedBook_reducer';


const rootReducer = combineReducers(
  {
    selectedListKey,
    listCollection,
    listTranslate,
    searchTerm,
    searchType,
    selectedSearchType,
    searchResults,
    // currentISBN,
    newToList,
    user,
    logInForm,
    userFormData,
    deletedBook,
    routing: routerReducer/*,
    form: formReducer*/
  } //i feel like if i leave out the reducers that don't actually do anything, i get an error. should probably test that at some point. TODO //hmmm maybe not? i see i havea currentlyReadList reducer file, but its not included here... so dropping the do-nothings should be fine?
)

export default rootReducer;
