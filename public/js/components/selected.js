import React from 'react';
import { render } from 'react-dom';

import SingleBook from './singleBook';

export default class Selected extends React.Component{

  render(){
    // console.log(this.props.refs,'this.props.refs');
    // console.log(this.refs,'this.refs');
    // console.log(this.props, 'this.props in components/selected.js');
    // console.log(this.props.selected, 'this.props.selected in components/selected.js');
    // console.log(this.props.selectList,'this.props.selectList in components/selected.js');
    // console.log(this.props.selectedListKey,'this.props.selectedListKey in components/selected.js');

    // console.log(this.props.listCollection, 'this.props.listCollection in components/selected.js');

    let key = this.props.selectedListKey;




    let listTitle= this.props.listCollection[key] ? this.props.listCollection[key].title : undefined;
    // console.log(listTitle,'listTitle');

    // listTitle ? console.log('listTitle is truthy') : console.log('listTitle is falsey');

    let listShow = this.props.listCollection[key] ? this.props.listCollection[key].list : "no key, therefore no list"
    console.log(listShow, 'listShow in components/selected.js');
    // let listShowList = listShow.list;
    // console.log(listShowList, 'listShowList in components/selected.js');
    let listShowKeys = listShow ? Object.keys(listShow) : "no listShow yet";
    // console.log(listShowKeys, 'listShowKeys in components/selected.js');
    // console.log(listShowKeys[0],'listShowKeys[0] in components/selected.js');

    // let gettingComplicated = listShowKeys[0] ? listShowKeys[0] : "why's everything gotta be so complicatedddd"
    // console.log(gettingComplicated, 'gettingComplicated');

    // let firstBook = listShow.listShowKeys ? listShow.`${listShowKeys[0]}` : "no listShow.`${listShowKeys[0]}`"; console.log(firstBook, 'firstBook');
    console.log(listShow, 'listShow before listShowKeys');
    console.log(listShowKeys, 'listShowKeys before listShowKeysTitleList');
    console.log(listShowKeys.length, 'listShowKeys.length before listShowKeysTitleList');
    let listLength = listShowKeys.length;

    //NOTE: LOOP STARTS HERE, NEED TO LOOP THROUGH listShowKeys INDICIES
    console.log(listShowKeys[0], 'listShowKeys[0] before listShowKeysTitleList');//returns book id number
    let listDisplay = [];

    if(listTitle){
      for(let i = 0; i < listLength; i++){
        let thisBook = listShow[listShowKeys[i]]
        let stamp = new Date().getTime();
        let uniqueStamp = `${i}${stamp}`;
        listDisplay.push(
          <SingleBook
            key = {uniqueStamp}
            id = {uniqueStamp}
            title={thisBook.title}
            author={thisBook.author}
            genre={thisBook.genre}
            />
        )

      }
    }

    let firstBook = listShow[listShowKeys[0]];
    console.log(firstBook, 'firstBook === listShow[listShowKeys[0]] in components/selected.js'); //returns book object

    let firstBookTitle = firstBook.title;
    console.log(firstBookTitle, 'firstBookTitle in components/selected.js'); //returns title of book

    console.log();


    //this needs to turn into a loop going through the selected list

    // listDisplay = <SingleBook selectedListKey={this.props.selectedListKey} listCollection={this.props.listCollection}/>; //this is before restructuring, don't think i need the selectedListKey prop here

    // listDisplay = //need loop to start here
    //
    // //with "SingleBook" called in each part of the loop
    // <SingleBook selectedListKey={this.props.selectedListKey} listCollection={this.props.listCollection}/>;//this is shit, and probably the wrong props to pass.

    //


    //end of where needs to be loop of selected list

    // console.log(this.props.listCollection[key], 'this.props.listCollection[key] in components/selected.js'); //this returns the appropriate store object
    // console.log(listTitle, 'listTitle in components/selected.js'); //this returns the title key's value of the appropriate store object

    return(
      <div id="selectedListKeyContainer">


        <p>{listTitle}</p>
        <div id="selectedListBooksContainer">
          {listDisplay}
        </div>



      </div>
    )
  }
}
