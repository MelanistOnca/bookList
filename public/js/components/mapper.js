import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

import Site from '../site.js';

function mapStateToProps(state){
  return{
    currentlyReadingList: state.currentlyReadingList,
    haveReadList: state.haveReadList,
    toBeReadList: state.toBeReadList,
    selectedList: state.selectedList,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}

const Mapper = connect(mapStateToProps,mapDispatchToProps)(Site);

export default Mapper;
