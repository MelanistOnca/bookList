// see redux saga, redux thunk, redux normalizr for asynchronous stuff (ajax)
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//reducers
// import currentlyReadingList from './currentlyReadingList';
// // import currentlyReadingList from './currentlyReadingList';
// import haveReadList from './haveReadList';
// import toBeReadList from './toBeReadList';
import selectedList from './selectedList';
import listCollection from './listCollection';


const rootReducer = combineReducers(
  {
    selectedList,
    listCollection,
    routing: routerReducer
  }
)

export default rootReducer;
