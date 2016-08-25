import React from 'react';
import { render } from 'react-dom';

export default class Selector extends React.Component{

  changed(selectList,e){
    //props don't live here by default
    console.log('selection was changed');
    // console.log(this.props, 'this.props');
    // // this.props.selectList
    // console.log(e,' was e');
    // console.log(e.target, 'was e.target');
    // console.log(e.target.value, 'was e.target.value in components/updateLists.js');
    // console.log(selectList, 'selectList passed to changed() in components/updateLists.js');
    let chosen = e.target.value;
    // console.log(chosen, 'was chosen in changed() in updateLists');

    e.preventDefault();
    selectList(chosen);
  }

  render(){
    //option names copied from listCollection keys. there's gotta be a programmatic way to do this, but this is the band-aid/duct-tape/wd-40 for now.

    //NOTE: THIS IS NO LONGER USED, PROBABLY ELLIGIBLE FOR DELITION
    //COUNTER NOTE:repurposing to general selector list
    return(
      <div id="listSelectorContainer">
        <form>
          <label>Edit List: </label>
          <select id="listSelector"
            onChange={this.changed.bind(event, this.props.selectList)}
            >
            <option value="null">Select</option>
            <option value="toBeReadList">
              To Be Read List</option>
            <option value="haveReadList">
              Have Read List</option>
            <option value="currentlyReadingList">
              Currently Reading List</option>
          </select>
        </form>
      </div>
    )
  }
}
