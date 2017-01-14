import React from 'react';
import { render } from 'react-dom';

import SingleBook from './singleBook';

export default class ListView extends React.Component {

  componentWillReceiveProps(nextProps){
    // let fnArg = {
    //   listKey,
    //   user_id
    // }
    console.log(this.props, 'was this.props in componentWillReceiveProps in components/selected.js');
    // let fnArg = {
    //   nextProps.selectedListKey[0],
    //   nextProps.user.user.id
    // }
    if (nextProps.user.status==="authenticated") {
      // let listKey = this.props.selectedListKey[0];
      // let uID = this.props.user.user.id;
      let getFnArg = {
        listKey: nextProps.selectedListKey[0],
        user_id: nextProps.user.user.id
      }
      console.log('before getList in componentWillReceiveProps in components/selected.js');
      console.log('kind of expecting this to loop?');
      nextProps.getList(getFnArg)
      console.log('after getList in componentWillReceiveProps in components/selected.js');
      // this.updateListFn(this.props.user.user, listKeyLabel, this.props.updateList, this.props.listTranslate)
      // let fnArg = {
      //   user_id: userData.id,
      //   listName,
      //   listNumber: listTranslate[listName].listNumber
      // }
      // console.log('just before the updateListFn call in getListFn in in basicList.js');
      // updateListFn(fnArg);
      // console.log('just after the updateListFn call in getListFn in in basicList.js');
      console.log(nextProps.listTranslate, 'was nextProps.listTranslate');
      console.log(nextProps.selectedListKey[0], 'was nextProps.listTranslate');
      // console.log(this.props.listTranslate[this.props.selectedListKey[0]].listNumber, 'was this.props.listTranslate[this.props.selectedListKey[0]].listNumber');
      console.log(nextProps.listTranslate[nextProps.selectedListKey[0]].listNumber, 'was nextProps.listTranslate[this.props.selectedListKey[0]].listNumber');
      let updateFnArg = {
        user_id: nextProps.user.user.id,
        listName: nextProps.selectedListKey[0],
        listNumber: nextProps.listTranslate[nextProps.selectedListKey[0]].listNumber
      }

      if((this.props.selectedListKey[0]!==nextProps.selectedListKey[0])) {
        console.log('just before the updateListFn call in getListFn in in basicList.js');
        nextProps.updateList(updateFnArg);
        console.log('just after the updateListFn call in getListFn in in basicList.js');
      }

    }
  }
  render(){

    // console.log(this.props, 'this.props in components/listView.js');
    // console.log(this.props.selectedListKey, 'this.props.selectedListKey in components/listView.js');
    // let key = this.props.listKey;
    let key = this.props.selectedListKey[0];
    // console.log(key, 'key in components/listView.js');
    // listKey is this.props.selectedListKey in components which actively choose a list, and is just a string with the appropriate key name in the "static" page lists
    //that is probably bad practice, but i don't think i can use "key" as a prop name, and it is descriptively super accurate being the key for the list, or the selected list key depending on an selection or static page.
    //need to have the reading/toberead/finished component pages set the this.props.selectedListKey on load so that i can bypass the use of 'key' variable here

    // console.log('............');
    // console.log(key,'key in components/listView.js');
    // console.log(this.props.listCollection, 'was this.props.listCollection in componenets/listView');

    // let listTitle= this.props.listCollection[key] ? this.props.listCollection[key].title : undefined;
    let listTitle= this.props.listCollection[key] ? this.props.listTranslate[key] : undefined;

    // console.log(listTitle,'listTitle in componenets/listView');
    // console.log(`${listTitle} THIS IS listTitle WITH THE $ NOTATION`);

    let listShow = this.props.listCollection[key] ? this.props.listCollection[key] : "no key, therefore no list"
    // console.log(listShow, 'listShow in componenets/listView');

    let listShowKeys = listShow ? Object.keys(listShow) : "no listShow yet, therefore no listShowKeys";
    // console.log(listShowKeys, 'listShowKeys in componenets/listView');

    let listLength = listShowKeys.length;
    // console.log(listLength, 'was listLength componenets/listView');
    // console.log('/////////');

    let listDisplay = [];

    if(listTitle){
      for(let i = 0; i < listLength; i++){
        // console.log(listShow[listShowKeys], 'was listShow[listShowKeys]');
        // console.log(listShowKeys[i], 'was listShowKeys[i] in components/listView loop');
        // console.log(listShow[listShowKeys[i]], 'was listShow[listShowKeys[i]]');
        // console.log(listShow, 'was listShow in components/listView loop');
        let thisBook = listShow[listShowKeys[i]]
        thisBook.isbn13 = listShowKeys[i];
        let stamp = new Date().getTime();
        let uniqueStamp = `${i}${stamp}`;
        // console.log(thisBook, 'was thisBook in components/listView');
        listDisplay.push(
          <SingleBook
            {...this.props}
            key = {uniqueStamp}
            id = {uniqueStamp}
            title={thisBook.title}
            author={thisBook.author}
            publisher={thisBook.publisher}
            isbn13={thisBook.isbn13}
            />
        )

      }
      // console.log(listDisplay, 'listDisplay after loop');
    }

    // let containerId = `${id}Container`

    //there should only ever be 1 of this element on a page, so should not need a key tag



    return(
      <div id="listViewContainer">
        {listDisplay}
      </div>

    )
  }
}
