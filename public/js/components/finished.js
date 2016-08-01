import React from 'react';
import { render } from 'react-dom';

export default class Finished extends React.Component{

//need to go to http://127.0.0.1:3003/#/finished to see this right now
  render(){

    let finishedList; //get list of finished books from DB, add to state (REDUX?!?!?!?), pull down to here via props. create ul based on members of that (presumably) array.
    finishedList = <ul>placeholder finished list
    <li>list item</li>
    <li>list item</li>
    <li>list item</li>

    </ul>


    return(
      <div
        id="finishedContainer"
        className="subContainer"
        >
        {finishedList}
      </div>
    )
  }
}

// export default React.createClass({
//   render(){
//     return
//     <div id="finishedContainer">
//       finished container
//     </div>
//   }
// })
