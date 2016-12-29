import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

import Site from '../site.js';

// console.log(actionCreators, 'actionCreators in components/mapper.js');


function mapStateToProps(state){
  // console.log(state, 'state in mapStateToProps in components/mapper.js');
  // console.log(state.signUpForm, 'was state.signUpForm in components/mapper.js');
  return{
    selectedListKey: state.selectedListKey,
    listCollection: state.listCollection,
    listTranslate: state.listTranslate,
    searchTerm: state.searchTerm,
    searchType: state.searchType,
    selectedSearchType: state.selectedSearchType,
    searchResults: state.searchResults,
    // currentISBN: state.currentISBN,
    newToList: state.newToList,
    user: state.user,
    logInForm: state.logInForm,
    signUpForm: state.signUpForm
  }
}

function mapDispatchToProps(dispatch){
  // console.log(dispatch, 'dispatch in same');
  return bindActionCreators(actionCreators,dispatch);
}

const Mapper = connect(mapStateToProps,mapDispatchToProps)(Site);

export default Mapper;
