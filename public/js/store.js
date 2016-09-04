import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//root reducer
import rootReducer from './reducers/index';

//state categories
// import currentlyReadingList from './data/currentlyReadingList';
// import haveReadList from './data/haveReadList';
// import toBeReadList from './data/toBeReadList';
import selectedListKey from './data/selectedListKey';
import listCollection from './data/listCollection';
// import listTranslate from './data/listTranslate';
import searchTerm from './data/searchTerm';
import searchType from './data/searchType';
import selectedSearchType from './data/selectedSearchType';
import searchResults from './data/searchResults';

//default state
const defaultState = {
  selectedListKey,
  listCollection,
  // listTranslate
  searchTerm,
  searchType,
  selectedSearchType,
  searchResults
}

//store enhancer, REVIEW REDUX DOCS TO FIGURE WHAT THIS IS ACTUALLY DOING
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

//store
// export default class const store //look up why class is used for react components
//this SHOULD work as is, but in case of error, triple check
const store = createStore(rootReducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store);

//i believe this hot-reloads reducers
// if(module.hot){
//   module.hot.accept('./reducers/', ()=> {
//     const nextRootReducer = require('./reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   })
// }

export default store;
