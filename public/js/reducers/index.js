// see redux saga, redux thunk, redux normalizr for asynchronous stuff (ajax)
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//reducers
// import currentlyReadingList from './currentlyReadingList';
// import haveReadList from './haveReadList';
// import toBeReadList from './toBeReadList';
import selectedList from './selectedList';
import arrayedLists from './arrayedLists';


const rootReducer = combineReducers(
  {
    // currentlyReadingList,
    // haveReadList,
    // toBeReadList,
    selectedList,
    arrayedLists,
    routing: routerReducer
  }
)

export default rootReducer;
