import React from 'react';
import { render } from 'react-dom';

import ListView from './listView';

export default class Reading extends React.Component{

//need to go to http://127.0.0.1:3003/#/reading to see this right now
  render(){

    // let readingList; //get list of reading books (books currently being read) from DB, add to state (REDUX?!?!?!?), pull down to here via props. create ul based on members of that (presumably) array.
    // readingList = <ul>placeholder reading list
    // <li>list item</li>
    // <li>list item</li>
    // <li>list item</li>

    // </ul>

    return(
      <div
        id="currentlyReadingListContainer"
        >
        <ListView
          listCollection = {this.props.listCollection}
          listKey = {"currentlyReadingList"}
          {...this.props}
          />
      </div>
    )
  }
}
