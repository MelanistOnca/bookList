import React from 'react';
import { render } from 'react-dom';

export default class ToBeRead extends React.Component{

//need to go to http://127.0.0.1:3003/#/toberead to see this right now
  render(){

    let toBeReadList; //get list of to be read books from DB, add to state (REDUX?!?!?!?), pull down to here via props. create ul based on members of that (presumably) array.
    toBeReadList = <ul>placeholder to be read list
    <li>list item</li>
    <li>list item</li>
    <li>list item</li>

    </ul>

    return(
      <div
        id="toBeReadContainer"
        className="subContainer"
        >
        {toBeReadList}
      </div>
    )
  }
}
