import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

import Site from '../site.js';

// console.log(actionCreators, 'actionCreators in components/mapper.js');


function mapStateToProps(state){
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
    userFormData: state.userFormData,
    deletedBook: state.deletedBook
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}

const Mapper = connect(mapStateToProps,mapDispatchToProps)(Site);

export default Mapper;
