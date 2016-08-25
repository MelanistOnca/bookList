import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import Selector from './selector';
import Selected from './selected';

export default class UpdateList extends React.Component {
  // //need to address this using state(store)
  // updateSelected(event){
  //   event.preventDefault();
  //   let selected = event.target.value
  //   console.log(selected, "selected in updateSelected");
  //
  // }
  // clicked(){
  //   console.log('button was clicked');
  // }
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
    //on selection, change subcomponents to appropriate UI elements
    // console.log(this.props,'this.props in components/updateLists.js');

    // console.log(this.props.selectedListKey, 'this.props.selectedListKey in components/updateLists.js'); //returns the expected (default) value from the store, at least before i got the update selection working

    // console.log(this.props.selectedListKey,'this.props.selectedListKey in components/updateLists.js');
    // console.log(this.props.selectList,'this.props.selectList in components/updateLists.js');


    // PUT THE FUNCTION ON THE BUTTON TO SEE IF YOU CAN GET IT TO CALL THERE

    // possibly use radio rather than dropdown?

    //option names copied from listCollection keys. there's gotta be a programmatic way to do this, but this is the band-aid/duct-tape/wd-40 for now.
    console.log(this.props, 'this.props in components/updateLists');
    console.log(this.props.selectedListKey[0], 'this.props.selectedListKey[0] in components/updateLists');//returns toBeReadList
    const event = window.event;
    return(
      <div id="updateListsContainer">

        <Selector
          selectList={this.props.selectList}
          />

        {/*
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
        */}

        <Selected
          selectedListKey={this.props.selectedListKey}
          listCollection={this.props.listCollection}
          />

      </div>
    )
  }
}
