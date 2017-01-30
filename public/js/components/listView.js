import React from 'react';
import { render } from 'react-dom';

import SingleBook from './singleBook';

export default class ListView extends React.Component {

  componentWillReceiveProps(nextProps){
    // console.log(this.props, 'was this.props in componentWillReceiveProps in components/listView.js');
    // let fnArg = {
    //   nextProps.selectedListKey[0],
    //   nextProps.user.user.id
    // }
    if (nextProps.user.status==="authenticated") {
      // let listKey = this.props.selectedListKey[0];
      // let uID = this.props.user.user.id;
      let getFnArg = {
        listKey: nextProps.selectedListKey[0],
        user_id: nextProps.user.user.id,
        listNumber: nextProps.listTranslate[nextProps.selectedListKey[0]].listNumber
      }

      nextProps.getList(getFnArg)
      // console.log(this.props.listTranslate[this.props.selectedListKey[0]].listNumber, 'was this.props.listTranslate[this.props.selectedListKey[0]].listNumber');
      // console.log(nextProps.listTranslate[nextProps.selectedListKey[0]].listNumber, 'was nextProps.listTranslate[this.props.selectedListKey[0]].listNumber');
      let updateFnArg = {
        user_id: nextProps.user.user.id,
        listName: nextProps.selectedListKey[0],
        listNumber: nextProps.listTranslate[nextProps.selectedListKey[0]].listNumber
      }

      if((this.props.selectedListKey[0]!==nextProps.selectedListKey[0])) {
        nextProps.updateList(updateFnArg);
      }

    }
  }
  render(){

    // console.log(this.props, 'this.props in components/listView.js');
    // console.log(this.props.selectedListKey, 'this.props.selectedListKey in components/listView.js');
    let key = this.props.selectedListKey[0];
    // console.log(key, 'key in components/listView.js');
    // listKey is this.props.selectedListKey in components which actively choose a list, and is just a string with the appropriate key name in the "static" page lists
    //that is probably bad practice, but i don't think i can use "key" as a prop name, and it is descriptively super accurate being the key for the list, or the selected list key depending on an selection or static page.
    //need to have the reading/toberead/finished component pages set the this.props.selectedListKey on load so that i can bypass the use of 'key' variable here
    //TODO doublecheck use of 'key' here

    // console.log(this.props.listCollection, 'was this.props.listCollection in componenets/listView');

    let listTitle= this.props.listCollection[key] ? this.props.listTranslate[key] : undefined;

    let listShow = this.props.listCollection[key] ? this.props.listCollection[key] : "no key, therefore no list"
    // console.log(listShow, 'listShow in componenets/listView');

    let listShowKeys = listShow ? Object.keys(listShow) : "no listShow yet, therefore no listShowKeys";
    // console.log(listShowKeys, 'listShowKeys in componenets/listView');

    let listLength = listShowKeys.length;
    // console.log(listLength, 'was listLength componenets/listView');

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

    }

    return(
      <div id="listViewContainer">
        {listDisplay}
      </div>

    )
  }
}
