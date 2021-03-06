import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';


//root reducer
import rootReducer from './reducers/index';

//state categories
// import currentlyReadingList from './data/currentlyReadingList';
// import haveReadList from './data/haveReadList';
// import toBeReadList from './data/toBeReadList';
import selectedListKey from './data/selectedListKey';
import listCollection from './data/listCollection';
import listTranslate from './data/listTranslate';
import searchTerm from './data/searchTerm';
import searchType from './data/searchType';
import selectedSearchType from './data/selectedSearchType';
import searchResults from './data/searchResults';
// import currentISBN from './data/currentISBN';
import newToList from './data/newToList';
import user from './data/user';
import logInForm from './data/logInForm';
import userFormData from './data/userFormData';
import deletedBook from './data/deletedBook';

// console.log(userFormData, 'was userFormData in store.js');

//default state
const defaultState = {
  selectedListKey,
  listCollection,
  listTranslate,
  searchTerm,
  searchType,
  selectedSearchType,
  searchResults,
  newToList,
  user,
  logInForm,
  userFormData,
  deletedBook
  // currentISBN
}

//store enhancer, REVIEW REDUX DOCS TO FIGURE WHAT THIS IS ACTUALLY DOING
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

//store
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// export default class const store //look up why class is used for react components
//this SHOULD work as is, but in case of error, triple check
// const store = createStore(rootReducer, defaultState, enhancers, applyMiddleware(thunk))
const store = createStoreWithMiddleware(rootReducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store);

//i believe this hot-reloads reducers
// if(module.hot){
//   module.hot.accept('./reducers/', ()=> {
//     const nextRootReducer = require('./reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   })
// }

export default store;
