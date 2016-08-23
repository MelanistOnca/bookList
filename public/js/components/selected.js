import React from 'react';
import { render } from 'react-dom';

import SingleBook from './singleBook';

export default class Selected extends React.Component{

  render(){
    // console.log(this.props.refs,'this.props.refs');
    // console.log(this.refs,'this.refs');
    // console.log(this.props, 'this.props in components/selected.js');
    // console.log(this.props.selected, 'this.props.selected in components/selected.js');
    // console.log(this.props.selectList,'this.props.selectList in components/selected.js');
    // console.log(this.props.selectedListKey,'this.props.selectedListKey in components/selected.js');

    // console.log(this.props.listCollection, 'this.props.listCollection in components/selected.js');

    let key = this.props.selectedListKey;
    let listTitle= this.props.listCollection[key] ? this.props.listCollection[key].title : "A list has not yet been selected";

    let listDisplay = [];

    //this needs to turn into a loop going through the selected list

    // listDisplay = <SingleBook selectedListKey={this.props.selectedListKey} listCollection={this.props.listCollection}/>; //this is before restructuring, don't think i need the selectedListKey prop here

    listDisplay = //need loop to start here

    //with "SingleBook" called in each part of the loop
    <SingleBook selectedListKey={this.props.selectedListKey} listCollection={this.props.listCollection}/>;//this is shit, and probably the wrong props to pass.

    //


    //end of where needs to be loop of selected list

    // console.log(this.props.listCollection[key], 'this.props.listCollection[key] in components/selected.js'); //this returns the appropriate store object
    // console.log(listTitle, 'listTitle in components/selected.js'); //this returns the title key's value of the appropriate store object

    return(
      <div id="selectedListKeyContainer">


        <p>{listTitle}</p>

        <p>here is listDisplay:</p> {listDisplay}


      </div>
    )
  }
}
