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


const rootReducer = combineReducers(
  {
    selectedListKey,
    listCollection,
    // listTranslate,
    searchTerm,
    searchType,
    selectedSearchType,
    searchResults,
    routing: routerReducer
  }
)

export default rootReducer;
