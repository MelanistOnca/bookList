import React from 'react';
import { render } from 'react-dom';

import ListView from './listView';

export default class Finished extends React.Component{

//need to go to http://127.0.0.1:3003/#/finished to see this right now
  render(){




    return(
      <div
        id="haveReadListContainer"
        >
        <ListView
          listCollection = {this.props.listCollection}
          listKey = {"haveReadList"}

          />
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
