import React from 'react';
import { render } from 'react-dom';

const rp = require('request-promise');
import axios from 'axios';

// '../../../db/isbndb'
// '../../../db/isbndb'
// const isbndb_fns = require('../../../db/isbndb'); //pg-native error similar to components/user/login. i'm guessing i can't import stuff from DB directory into public? maybe? ==> DUH. because the db files AREN'T public, therefore stuff in public does not have access to them

export default class SearchButton extends React.Component {
  //NOTE: theoretically, this will receive all the info that the current button in ./components/searchFor uses, as props, and then i can replace that button with this component, but then also re-use this component in the element that lists books by an author so that the user can get the info on whichever specific book there they want the info on.
  searchClicked(props, e){
    console.log('seachClicked ran in components/searchButton.js ');
    e.preventDefault();
    console.log(props.selectedSearchType, 'was props.selectedSearchType in searchClicked');
    console.log(props.selectedSearchType[0], 'was props.selectedSearchType[0] in searchClicked');
    if(!props.selectedSearchType[0]){
      window.alert("Please select a search type before pressing the search button");
      return
    } else if((props.selectedSearchType[0]==="Select")){
      window.alert("Please select a search type before pressing the search button");
      return
    } else {
      //nothing
    }
    // switch(props.selectedSearchType[0]) {
    //   case 'Select': {
    //     window.alert("Please select a search type before searching");
    //     console.log(props.selectedSearchType[0], 'was props.selectedSearchType[0] in searchClicked Select case');
    //     return
    //   }
    //   break;
    //   case undefined : {
    //     console.log(props.selectedSearchType[0], 'was props.selectedSearchType[0] in searchClicked null case');
    //     window.alert("Please select a search type before searching");
    //     return
    //   }
    //   break;
    //   default:
    //   //do nothing
    // }
    //
    // // console.log(props, 'props in searchClicked() in components/searchButton');
    // props.updateSearchType(props.selectedSearchType[0])

    // need to start a reqest here to hit the ISBNdb api of MINE, which will then hit the action ISBNDB api, to get the data here without revealing my ISBNDB api key.

    // //  *************
    // console.log(props.searchTerm, 'was props.searchTerm in same');
    // console.log(props.searchTerm[0], 'was props.searchTerm[0] in same');
    // console.log(props.updateSearchTerm, 'was props.updateSearchTerm in same');
    // props.updateSearchTerm(props.searchTerm[0])

    //MEGA NOTE
    //MEGA NOTE
    //MEGA NOTE
     //migrate the ISBNdb api call to the db/isbndb.js file
    //END OF MEGA NOTE
    //END OF MEGA NOTE
    //END OF MEGA NOTE
    //NOTE: also need to update search term when coming from the author book list button
    // **************
    //end of NOTE

    let searchType = props.selectedSearchType[0].toLowerCase();
    let searchTerm = props.searchTerm[0];
    // console.log(searchType, 'was searchType in searchClicked() in components/searchButton');
    // let forcedSearchType = props.forceSelectedSearchType  ;
    if(props.forceSelectedSearchType) {
      if(props.selectedSearchType[0]!==props.forceSelectedSearchType){
        //NOTE pass and use function here to change search type to get it to display results properly?
        console.log(props.newSearchTerm, 'was props.newSearchTerm in second conidtional in searchButton');
        props.updateSearchType(props.forceSelectedSearchType) //this works for switching the selector, but the rest of the code go bjorked because its giving me author results when i'm trying to search for the book. i've clicked on. NOTE: should i create a store for "nested author book searches" or something? no->just updating searchTerm and searchType is easier
        // props.updateSearchTerm(props.searchTerm) //this doesn't work because the search term is remaining the author's name, need to locate the book title and insert that here

        // let searchType = props.forceSelectedSearchType.toLowerCase();
        // let searchTerm = [props.newSearchTerm];

        props.updateSearchTerm(props.newSearchTerm)
        props.resultSearchClicked(props)
        return
      }
    }

    // searchType = (forcedSearchType||searchType)//NOTE or maybe use that function here instead?

    console.log(searchType, 'was searchType in searchClicked() before switch in same');
    switch(searchType) {
      case 'isbn' :
        searchType = 'book';
        // console.log(searchType, 'was searchType in searchClicked() in same');
        break;
      //may need a case to re-define for 'title'
      case 'title' :
        searchType = 'book';
        break;
      default:
        console.log(searchType, 'was searchType in default case of searchType switch');
    }
    // console.log(searchType, 'was searchType in searchClicked() after switch in same');
    // console.log(searchTerm, 'was searchTerm in searchClicked() after switch in same');

    // let options = {
    //   "authors" : {
    //     uri: `http://isbndb.com/api/v2/json/${apiKey}/${searchType}`,
    //     qs: {
    //       'q': `${searchTerm}`
    //     },
    //     headers: {
    //       'User-Agent': 'Request-Promise'
    //     },
    //     json: true
    //   },
    //   "book": {
    //     uri : `http://isbndb.com/api/v2/json/${apiKey}/book/${searchTerm}`,
    //     headers: {
    //       'User-Agent': 'Request-Promise'
    //     },
    //     json: true
    //   }
    // }
    // console.log(options, 'was options in searchClicked() in components/searchButton');
    let options = {
      searchTerm,
      searchType
    }
    // console.log(options, 'was options in componets/searchButton', typeof options, 'was typeof options');

    // console.log(options.searchType, 'was options.searchType in same'); //returns undefined
    // console.log(searchType, 'was search type in searchClicked() componenets/searchButton.js');
    // console.log(options[searchType], 'was options[searchType] in same');

    // console.log(options[searchType], 'was options[searchType] before rp() in components/searchFor.js');
    //need to see if i can add in a .something so that if a search fails (author?q=scalzi) it tries a more general search, i.e. authorS?q=scalzi
    ///////////////
    console.log('axios.post runs here');
    const request = axios.post('api/isbndb', options) //may need to make the accompanying fields part of a form
    request
      .catch( (err) => {
        console.log(err,'was err in the .then from the axios.post in searchClicked fn in components/searchButton.js');
      })
      .then( (data) => {
        console.log(data,'was data in the .then from the axios.post in searchClicked fn in components/searchButton.js');
        //
        // console.log(typeof data, 'was typeof in same');
        //
        // console.log(data.data,'was data.data in the .then from the axios.post in searchClicked fn in components/searchButton.js');
        // console.log(typeof data.data, 'was typeof in same');
        console.log(data.data.result,'was data.data.result in the .then from the axios.post in searchClicked fn in components/searchButton.js');
        //NOTE NOTE TODO: i should probably clean up here so i can remove some of the nesting from the received results?
        // props.receiveResults(data)
        // console.log('props.receiveResults(data) invoked above this line');
        props.receiveResults(data.data.result)
        console.log('props.receiveResults(data.data.result) invoked above this line');
      })
    // the rp section is moved to db/isbndb.js
    // rp(options[searchType])
    //   .then( (res) => {
    //     console.log(res,'was res in components/searchButton.js');
    //
    //     // console.log(options[searchType], 'was options[searchType] in .then in componenets/searchFor.js ');
    //     props.receiveResults(res);
    //   })
    //   .catch( (err) => {
    //     console.log(err, 'was err in components/searchButton.js');//my impression is this will usually be a low-info response. may be confusing this err with CORS errors.
    //     // console.log(options[searchType], 'was options[searchType] in .catch in componenets/searchFor.js');
    //   })

    // isbndb_fns.getResultsFromSearch(options)
      // console.log('searchClicked reached end of function');
  }
  resultSearchClicked(props){
    // let searchType = props.selectedSearchType[0].toLowerCase();
    let searchType = props.forceSelectedSearchType.toLowerCase();
    let searchTerm = [props.newSearchTerm];
    // let searchTerm = props.searchTerm[0];
    // let searchTerm = props.searchTerm[0];
    // let searchTerm = props.newSearchTerm;
    console.log(searchType, 'was searchType in resultSearchClicked() before switch in same');
    console.log(searchTerm, 'was searchTerm');
    switch(searchType) {
      case 'isbn' :
        searchType = 'book';
        // console.log(searchType, 'was searchType in searchClicked() in same');
        break;
      //may need a case to re-define for 'title'
      case 'title' :
        searchType = 'book';
        break;
      default:
        console.log(searchType, 'was searchType in default case of searchType switch');
    }

    let options = {
      searchTerm,
      searchType
    }
    console.log(options, 'was options in resultSearchClicked');
    console.log('axios.post runs here');
    const request = axios.post('api/isbndb', options) //may need to make the accompanying fields part of a form
    request
      .catch( (err) => {
        console.log(err,'was err in the .then from the axios.post in searchClicked fn in components/searchButton.js');
      })
      .then( (data) => {
        console.log(data,'was data in the .then from the axios.post in searchClicked fn in components/searchButton.js');

        console.log(data.data.result,'was data.data.result in the .then from the axios.post in searchClicked fn in components/searchButton.js');

        props.receiveResults(data.data.result)
        console.log('props.receiveResults(data.data.result) invoked above this line');
      })

  }
  componentWillMount(){
    // this.props.updateSearchType(this.props.selectedSearchType[0])
    // console.log('theoretically, search type should have updated to ISBN here');
    // console.log(this, 'was this in componentWillMount in components/searchButton.js');
  }

  render(){
    // console.log(this.props, 'was this.props in components/searchButton render');
    console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in components/searchButton render');


    let searchClickedProps = {
      "selectedSearchType" : this.props.selectedSearchType,
      "forceSelectedSearchType" : this.props.forceSelectedSearchType,
      "searchTerm" : [this.props.searchTerm],
      "receiveResults" : this.props.receiveResults,
      "updateSearchType" : this.props.updateSearchType,
      "updateSearchTerm" : this.props.updateSearchTerm,
      "resultSearchClicked" : this.resultSearchClicked,
      "newSearchTerm" : this.props.newSearchTerm
      // "bufferDeletedBook" : this.props.bufferDeletedBook,
      // "clearDeletedBook" : this.props.clearDeletedBook

    }

    return(
      <input
        type="submit"
        value="Search"
        onClick={this.searchClicked.bind(event, searchClickedProps)}
        />
    )
  }
}
