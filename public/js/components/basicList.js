import React from 'react';
import { render } from 'react-dom';

import ListView from './listView';

export default class BasicList extends React.Component {

  setSelectedListKey(listKey, selectList){
    // console.log(listKey, 'was listKey in setSelectedListKey in basicList.js');
    // console.log(selectList, 'was selectList in setSelectedListKey in basicList.js');

    selectList(listKey);



  }
  getListFn(listKey, getList, user_id, user_status) {
    // console.log(listKey, 'was listKey in getListFn in basicList.js');
    // console.log(user_id, 'was user_id in getListFn in basicList.js');
    // console.log(getList, 'was getList in getListFn in basicList.js');
    let fnArg = {
      listKey,
      user_id
    }
    // console.log(fnArg, 'was fnArg in getListFn in basicList.js');

    if(user_status !== "authenticated"){
      window.alert("Your list will be available on this page once you have logged in!")
      return
    }
    getList( fnArg );
  }

  updateListFn(userData, listName, updateListFn, listTranslate){
    // console.log(userData, 'was userData in updateListFn in components/basicList');
    // console.log(listName, 'was listName in updateListFn in components/basicList');
    // console.log('listData is probably not what i want it to be right now, is just listKeyLabel');
    // console.log(updateListFn, 'was updateListFn in updateListFn in components/basicList');
    // console.log(listTranslate, 'was listTranslate in updateListFn in components/basicList');
    // console.log(listTranslate[listName], 'was listTranslate[listName] in updateListFn in components/basicList');

    let fnArg = {
      user_id: userData.id,
      listName,
      listNumber: listTranslate[listName].listNumber
    }
    // console.log('just before the updateListFn call in getListFn in in basicList.js');
    updateListFn(fnArg);
    // console.log('just after the updateListFn call in getListFn in in basicList.js');
  }

  refreshLists(listKeyLabel, props){
    //needs:
      // listKeyLabel
      // props.
        // selectList
        // getList
        // user
        // updateList
        // listTranslate

    //designed to call the following:
    this.setSelectedListKey(listKeyLabel, props.selectList )
    this.getListFn(listKeyLabel, props.getList, props.user.user.id, props.user.status)
    this.updateListFn(props.user.user, listKeyLabel, props.updateList, props.listTranslate)

  }
  componentWillMount(){
    let listKeyLabel = window.location.pathname.split("/")[1]
    // console.log('+++++++++++++');
    // console.log(listKeyLabel, 'was listKeyLabel in componentWillMount in basicList.js'); //returns array ["", "basicList"], where basicList is the /route_name_here
    switch (listKeyLabel.toLowerCase()) {
      // case "basicList":
      // // test case
      // listKeyLabel="basicList"
      //
      // break;
      case "reading":
      // currentlyReadingList
      listKeyLabel = "currentlyReadingList"
      // console.log(listKeyLabel, 'was listKeyLabel in CRL');

      break;
      case "toberead":
      // toBeReadList
      listKeyLabel = "toBeReadList"
      // console.log(listKeyLabel, 'was listKeyLabel in TBRL');

      break;
      case "finished":
      // haveReadList
      listKeyLabel = "haveReadList"
      // console.log(listKeyLabel, 'was listKeyLabel in HRL');

      break;
      default:
        console.log("sumpfin dun gon wrong in da basicList.js switch");
    }
    // console.log(this.props.selectedListKey, 'was this.props.selectedListKey in componentWillMount in basicList.js');

    // this.props.getList(`${listKeyLabel}List`)
    if(this.props.selectedListKey.length===0){ //so this should only run if the selectedListKey is an empty array
      // this.setSelectedListKey(listKeyLabel, this.props.selectList )
      // this.getListFn(listKeyLabel, this.props.getList, this.props.user.user.id, this.props.user.status)
      // this.updateListFn(this.props.user.user, listKeyLabel, this.props.updateList, this.props.listTranslate)
      this.refreshLists(listKeyLabel, this.props)
    } else if(this.props.selectedListKey[0]!==listKeyLabel) { //this probably catches more labels than it needs to?
      // console.log('this.props.selectedListKey[0]!==listKeyLabel');
      // console.log(this.props.selectedListKey[0], 'was this.props.selectedListKey[0] in the  conditional of componentWillMount in basicList');
      // console.log(listKeyLabel, 'was listKeyLabel in the conditional of componentWillMount in basicList');
      // this.setSelectedListKey(listKeyLabel, this.props.selectList )
      // this.getListFn(listKeyLabel, this.props.getList, this.props.user.user.id, this.props.user.status)
      // this.updateListFn(this.props.user.user, listKeyLabel, this.props.updateList, this.props.listTranslate)
      this.refreshLists(listKeyLabel, this.props)
    // } //else if (this.props.selectedListKey[0]===listKeyLabel){
    //  console.log(`${this.props.selectedListKey[0]} is equal to ${listKeyLabel} in the conditional of componentWillMount in basicList`);
    //   this.getListFn(listKeyLabel, this.props.getList, this.props.user.user.id)
    //   // this.updateListFn(this.props.user.user, listKeyLabel, this.props.updateList, this.props.listTranslate)
    } else {
      // console.log(`the else case in conditional of componentWillMount in basicList`);
      this.getListFn(listKeyLabel, this.props.getList, this.props.user.user.id, this.props.user.status)
      // this.updateListFn(this.props.user.user, listKeyLabel, this.props.updateList, this.props.listTranslate)
      // this.refreshLists(listKeyLabel, this.props)
    }

  }
  componentWillReceiveProps(nextProps){
    // console.log(this.props, 'was this.props in componentWillReceiveProps in basicList.js');
    // console.log(nextProps, 'was nextProps in componentWillReceiveProps in basicList.js');
    // if((this.props!==nextProps)) {
    //   this.updateListFn(this.props.user.user, this.props.selectedListKey[0], this.props.updateList, this.props.listTranslate)
    // }
    let listKeyLabel = window.location.pathname.split("/")[1]
    // console.log(listKeyLabel, 'was listKeyLabel in componentWillMount in basicList.js'); //returns array ["", "basicList"], where basicList is the /route_name_here
    //TODO: can i make the switch a function that i can then call in each space, rather than copy/pasting the code here and above?
    switch (listKeyLabel.toLowerCase()) {
      // case "basicList":
      // // test case
      // listKeyLabel="basicList"
      //
      // break;
      case "reading":
      // currentlyReadingList
      listKeyLabel = "currentlyReadingList"
      // console.log(listKeyLabel, 'was listKeyLabel in CRL');

      break;
      case "toberead":
      // toBeReadList
      listKeyLabel = "toBeReadList"
      // console.log(listKeyLabel, 'was listKeyLabel in TBRL');

      break;
      case "finished":
      // haveReadList
      listKeyLabel = "haveReadList"
      // console.log(listKeyLabel, 'was listKeyLabel in HRL');

      break;
      default:
        console.log("sumpfin dun gon wrong in da basicList.js switch");
    }
    if(this.props.selectedListKey.length===0){
      // this.refreshLists(listKeyLabel, this.props)
      // console.log('this.props.selectedListKey.length===0');
    } else if(this.props.selectedListKey[0]!==listKeyLabel) {
      this.refreshLists(listKeyLabel, this.props)
      // console.log('this.props.selectedListKey[0]!==listKeyLabel');
    } else {
      // this.refreshLists(listKeyLabel, this.props)
      // console.log('else case');
      // console.log(this.props.selectedListKey[0], 'was this.props.selectedListKey[0]');
    }

  }

  render(){
    // console.log(this.props, 'was this.props in basicList.js');
    // console.log(this.props.selectedListKey, 'was this.props.selectedListKey in same');

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
