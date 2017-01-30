import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';


import Selector from './selector';
import Selected from './selected';



export default class UpdateList extends React.Component {

  componentWillMount(){
    // let listKeyLabel = window.location.pathname.split("/")[1]
    // console.log('+++++++++++++');
    // console.log(listKeyLabel, 'was listKeyLabel in componentWillMount in basicList.js'); //returns array ["", "basicList"], where basicList is the /route_name_here
    // console.log(this.props.selectedListKey, 'was this.props.selectedListKey in componentWillMount in basicList.js'); //returns empty array
    // // let listKey = `${this.props.selectedListKey}`
    // // let labelLength = listKeyLabel.length;
    // // console.log(listKeyLabel.length, 'listKeyLabel.length');
    // // console.log(labelLength, 'labelLength');
    // // console.log(listKeyLabel.substr(labelLength-4,4), 'was listKeyLabel.substr(labelLength-4,4)');
    // console.log(`${listKeyLabel}List`);
    // console.log('++++++++++++++');

    // this.props.getList(`${listKeyLabel}List`)
    // if(this.props.selectedListKey.length===0){ //so this should only run if the selectedListKey is an empty array
    //   // this.setSelectedListKey(listKeyLabel, this.props.selectList )
    //   // this.getListFn(listKeyLabel, this.props.getList, this.props.user.user.id)
    //   this.updateListFn(this.props.user.user, listKeyLabel, this.props.updateList, this.props.listTranslate)
    // }

  }
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
    // const event = window.event;
    // {/*
    // <form>
    //   <label>Edit List: </label>
    //   <select id="listSelector"
    //     onChange={this.changed.bind(event, this.props.selectList)}
    //     >
    //     <option value="null">Select</option>
    //     <option value="toBeReadList">
    //       To Be Read List</option>
    //     <option value="haveReadList">
    //       Have Read List</option>
    //     <option value="currentlyReadingList">
    //       Currently Reading List</option>
    //   </select>
    // </form>
    // */}
    return(
      <div id="updateListsContainer">
        <Selector
          {...this.props}
          />




        <Selected
          {...this.props}
          />


      </div>
    )

    
  }
}
