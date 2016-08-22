import React from 'react';
import { render } from 'react-dom';

export default class Selector extends React.Component{

  render(){
    //option names copied from listCollection keys. there's gotta be a programmatic way to do this, but this is the band-aid/duct-tape/wd-40 for now.

    //NOTE: THIS IS NO LONGER USED, PROBABLY ELLIGIBLE FOR DELITION
    return(
      <div id="listSelectorContainer">
        <form>
          <label>Edit List: </label>
          // <select>
          //   <option value="null">Select</option>
          //   <option value="toBeReadList">To Be Read List</option>
          //   <option value="haveReadList">Have Read List</option>
          //   <option value="currentlyReadingList">Currently Reading List</option>
          // </select>
        </form>
      </div>
    )
  }
}
