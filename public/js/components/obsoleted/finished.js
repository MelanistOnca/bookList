import React from 'react';
import { render } from 'react-dom';

import ListView from './listView';

export default class Finished extends React.Component{

//need to go to http://127.0.0.1:3003/#/finished to see this right now
  setSelectedListKey(){

  }
  render(){


    //run a function here to set the this.props.selectedListKey? it would need the URL as an argument
    // window.location.href will give me the url, based on http://stackoverflow.com/a/1034642
    // console.log(window.location.href, 'was window.location.href in finished.js');

    // other ideas from http://mycodingtricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/#Get_Pathname_of_URL_in_JavaScript
    console.log(window.location.pathname, 'was window.location.pathname in finished.js'); //returns /finished //can feed this to the setSelectedListKey fn to set the key

    return(


      <div
        id="haveReadListContainer"
        >
        <ListView
          listCollection = {this.props.listCollection}
          listKey = {"haveReadList"}
          {...this.props}

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
