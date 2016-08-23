import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

import Site from '../site.js';

function mapStateToProps(state){
  return{
    selectedListKey: state.selectedListKey,
    listCollection: state.listCollection
    // listTranslate: state.listTranslate
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}

const Mapper = connect(mapStateToProps,mapDispatchToProps)(Site);

export default Mapper;
