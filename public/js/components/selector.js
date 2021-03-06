import React from 'react';
import { render } from 'react-dom';

export default class Selector extends React.Component{

  selectedListChanged(selectList,e){
    // console.log('selection was changed');
    // console.log(selectList, 'selectList passed to selectedListChanged() in components/updateLists.js');
    let chosen = e.target.value;
    // console.log(chosen, 'was chosen in selectedListChanged() in updateLists');

    e.preventDefault();
    selectList(chosen);
  }


  render(){
    //option names copied from listCollection keys. there's gotta be a programmatic way to do this, but this is the band-aid/duct-tape/wd-40 for now.
    // console.log(this.props, 'was this.props in components/selector.js');

    let selectedList;

    this.props.selectedListKey[0] ? selectedList = this.props.selectedListKey[0] : selectedList = undefined ;

    //NOTE: THIS IS NO LONGER USED, PROBABLY ELLIGIBLE FOR DELITION
    //COUNTER NOTE:repurposing to general selector list

    //additional NOTE: need to have select's value based on store //this is done via the selectedList ternary above
    return(
      <div id="listSelectorContainer">
        <form>
          <label>Edit List: </label>
          <select id="listSelector"
            value={selectedList}
            onChange={this.selectedListChanged.bind(this, this.props.selectList)}
            >
            <option value="undefined">Select</option>
            <option value="toBeReadList">
              To Be Read List</option>
            <option value="currentlyReadingList">
              Currently Reading List</option>
            <option value="haveReadList">
              Have Read List</option>
          </select>
        </form>
      </div>
    )
  }
}
