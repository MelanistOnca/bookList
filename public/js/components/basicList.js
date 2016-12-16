import React from 'react';
import { render } from 'react-dom';

import ListView from './listView';

export default class BasicList extends React.Component {

  setSelectedListKey(listKey, selectList){
    console.log(listKey, 'was listKey in setSelectedListKey in basicList.js');
    console.log(selectList, 'was selectList in setSelectedListKey in basicList.js');
    selectList(listKey)


  }
  componentWillMount(){
    let listKeyLabel = window.location.pathname.split("/")[1]
    console.log(listKeyLabel, 'was listKeyLabel in basicList.js'); //returns array ["", "basicList"], where basicList is the /route_name_here
    console.log(this.props.selectedListKey, 'was this.props.selectedListKey in basicList.js'); //returns empty array
    // let listKey = `${this.props.selectedListKey}`
    if(this.props.selectedListKey.length===0){ //so this should only run if the selectedListKey is an empty array
      this.setSelectedListKey(listKeyLabel, this.props.selectList)
    }

  }
  componentWillReceiveProps(nextProps){
    console.log(this.props, 'was this.props in basicList.js in componentWillReceiveProps');
    console.log(nextProps, 'was nextProps in same');
    // let listKeyLabel = window.location.pathname.split("/")
    // let listKeyLabel = window.location.pathname.split("/")[1]
    // console.log(listKeyLabel, 'was listKeyLabel in componentWillReceiveProps in basicList.js'); //returns array ["", "basicList"], where basicList is the /route_name_here
    //
    // //NOTE needed the switch here rather than in the function, since the URL and store values will never match ===>> this is probably bad design, but we're living with it.
    // switch (listKeyLabel) {
    //   // case "basicList":
    //   // // test case
    //   // listKeyLabel="basicList"
    //   //
    //   // break;
    //   case "reading":
    //   // currentlyReadingList
    //   listKeyLabel = "currentlyReadingList"
    //
    //   break;
    //   case "toberead":
    //   // toBeReadList
    //   listKeyLabel = "toBeReadList"
    //
    //   break;
    //   case "finished":
    //   // haveReadList
    //   listKeyLabel = "haveReadList"
    //
    //   break;
    //   default:
    //     console.log("sumpfin dun gon wrong in da basicList.js switch");
    // }
    //
    // console.log(this.props.selectedListKey, 'was this.props.selectedListKey in componentWillReceiveProps in basicList.js'); //returns empty array
    // // let listKey = `${this.props.selectedListKey}`
    // // if(this.props.selectedListKey.length===0){ //so this should only run if the selectedListKey is an empty array
    // //   this.setSelectedListKey(listKeyLabel, this.props.selectList)
    // // }
    //
    //
    //
    // // console.log(this.props.selectedListKey, 'was this.props.selectedListKey in basicList.js');
    // console.log(listKeyLabel, 'was listKeyLabel before the second conditional');
    // if(this.props.selectedListKey.length===0){ //so this should only run if the selectedListKey is an empty array
    //   this.setSelectedListKey(listKeyLabel, this.props.selectList)
    // } else if(this.props.selectedListKey[0]!==listKeyLabel) { //this probably catches more labels than it needs to?
    //   console.log(this.props.selectedListKey[0], 'was this.props.selectedListKey[0] in the second conditional');
    //   console.log(listKeyLabel, 'was listKeyLabel in the second conditional');
    //   this.setSelectedListKey(listKeyLabel, this.props.selectList)
    // } else {
    //   console.log('too many else if');
    // }

  }

  render(){
    console.log('.........');
    console.log(this.props, 'was this.props in basicList.js');
    console.log(this.props.selectedListKey, 'was this.props.selectedListKey in same');
    console.log('/////////');

    let listKeyLabel = window.location.pathname.split("/")[1]
    console.log(listKeyLabel, 'was listKeyLabel in componentWillReceiveProps in basicList.js'); //returns array ["", "basicList"], where basicList is the /route_name_here

    //NOTE needed the switch here rather than in the function, since the URL and store values will never match ===>> this is probably bad design, but we're living with it.
    switch (listKeyLabel.toLowerCase()) {
      // case "basicList":
      // // test case
      // listKeyLabel="basicList"
      //
      // break;
      case "reading":
      // currentlyReadingList
      listKeyLabel = "currentlyReadingList"
      console.log(listKeyLabel, 'was listKeyLabel in CRL');

      break;
      case "toberead":
      // toBeReadList
      listKeyLabel = "toBeReadList"
      console.log(listKeyLabel, 'was listKeyLabel in TBRL');

      break;
      case "finished":
      // haveReadList
      listKeyLabel = "haveReadList"
      console.log(listKeyLabel, 'was listKeyLabel in HRL');

      break;
      default:
        console.log("sumpfin dun gon wrong in da basicList.js switch");
    }

    console.log(this.props.selectedListKey, 'was this.props.selectedListKey in componentWillReceiveProps in basicList.js'); //returns empty array
    // let listKey = `${this.props.selectedListKey}`
    // if(this.props.selectedListKey.length===0){ //so this should only run if the selectedListKey is an empty array
    //   this.setSelectedListKey(listKeyLabel, this.props.selectList)
    // }



    // console.log(this.props.selectedListKey, 'was this.props.selectedListKey in basicList.js');
    console.log(listKeyLabel, 'was listKeyLabel before the second conditional');
    if(this.props.selectedListKey.length===0){ //so this should only run if the selectedListKey is an empty array
      console.log('this.props.selectedListKey.length===0');
      this.setSelectedListKey(listKeyLabel, this.props.selectList)
    } else if(this.props.selectedListKey[0]!==listKeyLabel) { //this probably catches more labels than it needs to?
      console.log('this.props.selectedListKey[0]!==listKeyLabel');
      console.log(this.props.selectedListKey[0], 'was this.props.selectedListKey[0] in the second conditional');
      console.log(listKeyLabel, 'was listKeyLabel in the second conditional');
      this.setSelectedListKey(listKeyLabel, this.props.selectList)
    } else {
      console.log('too many else if');
    }

    return(
      <div
        id= {this.props.selectedListKey+"Container"}
        >
        {this.props.selectedListKey} this should be the selected list key
        <ListView
          {...this.props}
          />

      </div>
    )
  }
}
