import React from 'react';
import { render } from 'react-dom';

import SingleBook from './singleBook';

export default class Selector extends React.Component{

  render(){
    // console.log(this.props.refs,'this.props.refs');
    // console.log(this.refs,'this.refs');
    console.log(this.props, 'this.props in components/selected.js');
    // console.log(this.props.selected, 'this.props.selected in components/selected.js');
    // console.log(this.props.selectList,'this.props.selectList in components/selected.js');
    console.log(this.props.selectedList,'this.props.selectedList in components/selected.js');
    let listDisplay = [];

    //this needs to turn into a loop going through the selected list
    listDisplay = <SingleBook selectedList={this.props.selectedList} />;
    //since using person-readable string, does not easily correspond to store-understandable call. need to turn this.prop.selectedList into an object?
    //
    // // like this.props.selectedList = {
    // //   "name":"listNameHere",
    // //   "value": 0 //or 1 or 2 depending on which list
    // // }

    //end of where needs to be loop of selected list

    return(
      <div id="selectedListContainer">


        <p>here is the name of the selected list: {this.props.selectedList}</p>

        <p>here is listDisplay:</p> {listDisplay}


      </div>
    )
  }
}
