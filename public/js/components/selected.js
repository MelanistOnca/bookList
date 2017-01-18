import React from 'react';
import { render } from 'react-dom';

// import SingleBook from './singleBook';
import ListView from './listView';
import SearchFor from './searchFor';

export default class Selected extends React.Component {

  // componentWillReceiveProps(nextProps){
  //   // let fnArg = {
  //   //   listKey,
  //   //   user_id
  //   // }
  //   console.log(this.props, 'was this.props in componentWillReceiveProps in components/selected.js');
  //   // let fnArg = {
  //   //   this.props.selectedListKey[0],
  //   //   this.props.user.user.id
  //   // }
  //   if (this.props.user.status==="authenticated") {
  //     // let listKey = this.props.selectedListKey[0];
  //     // let uID = this.props.user.user.id;
  //     let getFnArg = {
  //       listKey: this.props.selectedListKey[0],
  //       user_id: this.props.user.user.id
  //     }
  //     console.log('before getList in componentWillReceiveProps in components/selected.js');
  //     console.log('kind of expecting this to loop?');
  //     this.props.getList(getFnArg)
  //     console.log('after getList in componentWillReceiveProps in components/selected.js');
  //     // this.updateListFn(this.props.user.user, listKeyLabel, this.props.updateList, this.props.listTranslate)
  //     // let fnArg = {
  //     //   user_id: userData.id,
  //     //   listName,
  //     //   listNumber: listTranslate[listName].listNumber
  //     // }
  //     // console.log('just before the updateListFn call in getListFn in in basicList.js');
  //     // updateListFn(fnArg);
  //     // console.log('just after the updateListFn call in getListFn in in basicList.js');
  //     console.log(this.props.listTranslate, 'was this.props.listTranslate');
  //     console.log(this.props.selectedListKey[0], 'was this.props.listTranslate');
  //     // console.log(this.props.listTranslate[this.props.selectedListKey[0]].listNumber, 'was this.props.listTranslate[this.props.selectedListKey[0]].listNumber');
  //     console.log(this.props.listTranslate[this.props.selectedListKey[0]].listNumber, 'was this.props.listTranslate[this.props.selectedListKey[0]].listNumber');
  //     let updateFnArg = {
  //       user_id: this.props.user.user.id,
  //       listName: this.props.selectedListKey[0],
  //       listNumber: this.props.listTranslate[this.props.selectedListKey[0]].listNumber
  //     }
  //     console.log('just before the updateListFn call in getListFn in in basicList.js');
  //     this.props.updateList(updateFnArg);
  //     console.log('just after the updateListFn call in getListFn in in basicList.js');
  //   }
  // }
  // componentWillMount(){
  //   this.props.getList()
  // }
  componentWillReceiveProps(nextProps){
    console.log(this.props, 'was this.props in componentWillReceiveProps in selected');
    console.log(nextProps, 'was nextProps in componentWillReceiveProps in selected');
    console.log(this.props.selectedListKey[0], 'was this.props.selectedListKey[0] in same');
    if( nextProps.user.status === "authenticated" ){
      if( this.props.listCollection !== nextProps.listCollection ) {
        let fnArg = {
          listKey: this.props.selectedListKey[0],
          user_id: this.props.user.user.id
        }
        nextProps.getList( fnArg )
      }
    }

  }
  render(){


    let key = this.props.selectedListKey;

    // let listTitle = (this.props.listCollection[key] ? this.props.listCollection[key].title : undefined);

    // console.log(key, 'was key in selected.js');
    // console.log(this.props.listTranslate[key].listFrontTitle, 'was this.props.listTranslate[key].listFrontTitle in selected.js');
    let listTitle= this.props.listCollection[key] ? this.props.listTranslate[key].listFrontTitle : undefined;

    // let listTitle = (this.props.listCollection[key] ? this.props.listCollection[key].title : undefined);

    // console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in componenets/selected.js');
    return(
      <div id = "selectedListKeyContainer">
        <SearchFor
          {...this.props}
          />

        <p>{listTitle}</p>
        <ListView
          {...this.props}
          />

      </div>
    )
    // <SearchFor
    //   updateSearchTerm={this.props.updateSearchTerm}
    //   searchTerm={this.props.searchTerm}
    //   updateSearchType={this.props.updateSearchType}
    //   searchType={this.props.searchType}
    //   selectedSearchType={this.props.selectedSearchType}
    //   searchResults={this.props.searchResults}
    //   receiveResults={this.props.receiveResults}
    //   selectedListKey={this.props.selectedListKey}
    //   addToList={this.props.addToList}
    //   removeFromList={this.props.removeFromList}
    //   />

    ///////

    // <ListView
    //   listKey={this.props.selectedListKey}
    //   listCollection={this.props.listCollection}
    //   />

    // <ListView
    //   {...this.props}
    //   listKey={this.props.selectedListKey}
    //   />
  }
}
