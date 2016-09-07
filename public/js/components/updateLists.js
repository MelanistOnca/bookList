import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';


import Selector from './selector';
import Selected from './selected';



export default class UpdateList extends React.Component {


  render(){
    //on selection, change subcomponents to appropriate UI elements
    // console.log(this.props,'this.props in components/updateLists.js');
    // console.log(this.props.receiveResults,'this.props.receiveResults in components/updateLists.js');

    // console.log(this.props.selectedListKey, 'this.props.selectedListKey in components/updateLists.js'); //returns the expected (default) value from the store, at least before i got the update selection working

    // console.log(this.props.selectedListKey,'this.props.selectedListKey in components/updateLists.js');
    // console.log(this.props.selectList,'this.props.selectList in components/updateLists.js');


    // PUT THE FUNCTION ON THE BUTTON TO SEE IF YOU CAN GET IT TO CALL THERE

    // possibly use radio rather than dropdown?

    //option names copied from listCollection keys. there's gotta be a programmatic way to do this, but this is the band-aid/duct-tape/wd-40 for now.
    // console.log(this.props, 'this.props in components/updateLists');
    // console.log(this.props.selectedSearchType, 'this.props.selectedSearchType in components/updateLists');
    // console.log(this.props.selectedListKey[0], 'this.props.selectedListKey[0] in components/updateLists');//returns toBeReadList
    const event = window.event;
    return(
      <div id="updateListsContainer">

        <Selector
          selectList={this.props.selectList}
          selectedListKey={this.props.selectedListKey}
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
          searchTerm={this.props.searchTerm}
          updateSearchTerm={this.props.updateSearchTerm}
          searchType={this.props.searchType}
          updateSearchType={this.props.updateSearchType}
          selectedSearchType={this.props.selectedSearchType}
          searchResults={this.props.searchResults}
          receiveResults={this.props.receiveResults}
          />

      </div>
    )
  }
}
