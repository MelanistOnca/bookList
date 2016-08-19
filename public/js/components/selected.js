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
    console.log(this.props.selectedListName,'this.props.selectedListName in components/selected.js');
    let listDisplay = [];
    listDisplay = <SingleBook
                    pickedList={this.props.selectedListArray}
                              />; //since using person-readable string, does not easily correspond to store-understandable call.

    return(
      <div id="selectedListContainer">
        <p>selected list goes here</p>

        <p>here is the name of the selected list: {this.props.selectedListName}</p>

        <p>here is listDisplay:</p> {listDisplay}


      </div>
    )
  }
}
