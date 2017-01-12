import React from 'react';
import { render } from 'react-dom';

import ListView from './listView';

export default class BasicList extends React.Component {

  setSelectedListKey(listKey, selectList){
    // console.log(listKey, 'was listKey in setSelectedListKey in basicList.js');
    // console.log(selectList, 'was selectList in setSelectedListKey in basicList.js');

    selectList(listKey);



  }
  getListFn(listKey, getList, user_id) {
    // console.log(listKey, 'was listKey in getListFn in basicList.js');
    // console.log(user_id, 'was user_id in getListFn in basicList.js');
    // console.log(getList, 'was getList in getListFn in basicList.js');
    let fnArg = {
      listKey,
      user_id
    }
    // console.log('???????????????????');
    // console.log(fnArg, 'was fnArg in getListFn in basicList.js');
    // console.log('???????????????????');
    //
    // console.log('just before the getList call in getListFn in in basicList.js');
    getList( fnArg );
    // console.log('just after the getList call in getListFn in in basicList.js');

  }
  updateListFn(userData, listName, updateListFn, listTranslate){
    // console.log(userData, 'was userData in updateListFn in components/basicList');
    // console.log(listName, 'was listName in updateListFn in components/basicList');
    // console.log('listData is probably not what i want it to be right now, is just listKeyLabel');
    // console.log(updateListFn, 'was updateListFn in updateListFn in components/basicList');
    // console.log(listTranslate, 'was listTranslate in updateListFn in components/basicList');

    let fnArg = {
      user_id: userData.id,
      listName,
      listNumber: listTranslate[listName].listNumber
    }
    console.log('just before the updateListFn call in getListFn in in basicList.js');
    updateListFn(fnArg);
    console.log('just after the updateListFn call in getListFn in in basicList.js');

  }
  componentWillMount(){
    let listKeyLabel = window.location.pathname.split("/")[1]
    console.log('+++++++++++++');
    console.log(listKeyLabel, 'was listKeyLabel in componentWillMount in basicList.js'); //returns array ["", "basicList"], where basicList is the /route_name_here
    console.log(this.props.selectedListKey, 'was this.props.selectedListKey in componentWillMount in basicList.js'); //returns empty array
    // let listKey = `${this.props.selectedListKey}`
    // let labelLength = listKeyLabel.length;
    // console.log(listKeyLabel.length, 'listKeyLabel.length');
    // console.log(labelLength, 'labelLength');
    // console.log(listKeyLabel.substr(labelLength-4,4), 'was listKeyLabel.substr(labelLength-4,4)');
    console.log(`${listKeyLabel}List`);
    console.log('++++++++++++++');

    // this.props.getList(`${listKeyLabel}List`)
    if(this.props.selectedListKey.length===0){ //so this should only run if the selectedListKey is an empty array
      this.setSelectedListKey(listKeyLabel, this.props.selectList )
      this.getListFn(listKeyLabel, this.props.getList, this.props.user.user.id)
      this.updateListFn(this.props.user.user, listKeyLabel, this.props.updateList, this.props.listTranslate)
    }

  }
  componentWillReceiveProps(nextProps){
    console.log(this.props, 'was this.props in componentWillReceiveProps in basicList.js');
    console.log(nextProps, 'was nextProps in componentWillReceiveProps in basicList.js');
    // if((this.props!==nextProps)) {
    //   this.updateListFn(this.props.user.user, this.props.selectedListKey[0], this.props.updateList, this.props.listTranslate)
    // }

  }

  render(){
    console.log('.........');
    console.log(this.props, 'was this.props in basicList.js');
    // console.log(this.props.selectedListKey, 'was this.props.selectedListKey in same');
    console.log('/////////');

    let listKeyLabel = window.location.pathname.split("/")[1]
    console.log(listKeyLabel, 'was listKeyLabel in render in basicList.js'); //returns array ["", "basicList"], where basicList is the /route_name_here

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





    // console.log(this.props.selectedListKey, 'was this.props.selectedListKey in basicList.js');
    console.log(listKeyLabel, 'was listKeyLabel before the second conditional');
    console.log(this.props.selectedListKey[0], 'was this.props.selectedListKey[0] before the second conditional');
    // console.log(this.props.getList, 'was this.props.getList before conditionals in basicList.js');
    console.log(this.props.selectedListKey.length, 'was this.props.selectedListKey.length before conditionals in basicList.js');
    if(this.props.selectedListKey.length===0){ //so this should only run if the selectedListKey is an empty array
      console.log('this.props.selectedListKey.length===0');
      this.setSelectedListKey(listKeyLabel, this.props.selectList )
      this.getListFn(listKeyLabel, this.props.getList, this.props.user.user.id)
      this.updateListFn(this.props.user.user, listKeyLabel, this.props.updateList, this.props.listTranslate)
    } else if(this.props.selectedListKey[0]!==listKeyLabel) { //this probably catches more labels than it needs to?
      console.log('this.props.selectedListKey[0]!==listKeyLabel');
      console.log(this.props.selectedListKey[0], 'was this.props.selectedListKey[0] in the second conditional');
      console.log(listKeyLabel, 'was listKeyLabel in the second conditional');
      this.setSelectedListKey(listKeyLabel, this.props.selectList )
      this.getListFn(listKeyLabel, this.props.getList, this.props.user.user.id)
      this.updateListFn(this.props.user.user, listKeyLabel, this.props.updateList, this.props.listTranslate)
    // } //else if (this.props.selectedListKey[0]===listKeyLabel){
    //   console.log('<><><><><><><><><><><><>');
    //   console.log(`${this.props.selectedListKey[0]} is equal to ${listKeyLabel} in the second conditional`);
    //   console.log('<><><><><><><><><><><><>');
    //   this.getListFn(listKeyLabel, this.props.getList, this.props.user.user.id)
    //   // this.updateListFn(this.props.user.user, listKeyLabel, this.props.updateList, this.props.listTranslate)
    } else {
      console.log('========================');
      console.log(`the else case in second conditional in basicList.js`);
      console.log('========================');
      this.getListFn(listKeyLabel, this.props.getList, this.props.user.user.id)
      // this.updateListFn(this.props.user.user, listKeyLabel, this.props.updateList, this.props.listTranslate)
    }
    // this.props.getList(listKeyLabel, this.props.getList, this.props.user.user.id)

    return(
      <div
        id= {this.props.selectedListKey+"Container"}
        >

        <ListView
          {...this.props}
          />

      </div>
    )
  }
}
