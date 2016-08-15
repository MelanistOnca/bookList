import React from 'react';
import { render } from 'react-dom';

export default class Selector extends React.Component{

  render(){
    // console.log(this.props.refs,'this.props.refs');
    // console.log(this.refs,'this.refs');
    // console.log(this.props, 'this.props in components/selected.js');
    // console.log(this.props.selected, 'this.props.selected in components/selected.js');
    // console.log(this.props.selectList,'this.props.selectList in components/selected.js');
    return(
      <div id="selectedListContainer">
        <p>selected list goes here</p>

        <p>here is {this.props.selectedList}</p>
        

      </div>
    )
  }
}
