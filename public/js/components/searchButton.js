import React from 'react';
import { render } from 'react-dom';

const rp = require('request-promise');

export default class SearchButton extends React.Component {
  //NOTE: theoretically, this will receive all the info that the current button in ./components/searchFor uses, as props, and then i can replace that button with this component, but then also re-use this component in the element that lists books by an author so that the user can get the info on whichever specific book there they want the info on.
  searchClicked(props, e){
    console.log('seachClicked ran in components/searchFor.js ');
    e.preventDefault();
    // console.log(this.props, 'this.props in searchClicked() in components/searchFor'); //as expected, this returns null since "this.props" hasn't been passed in as a param
    console.log(props, 'props in searchClicked() in components/searchFor');
    let apiKey = '0SBOHNU4'; //this switch in naming convention is going to fuck you.
    // let apiKey = process.env.API_KEY; //this switch in naming convention is going to fuck you.
    let searchType = props.selectedSearchType[0].toLowerCase();
    let searchTerm = props.searchTerm[0];
    // console.log(searchType, 'was searchType in searchClicked() before switch in same');
    switch(searchType) {
      case 'isbn' :
        searchType = 'book';
        // console.log(searchType, 'was searchType in searchClicked() in same');
        break;
      //may need a case to re-define for 'title'
      default:
        console.log(searchType, 'was searchType in default case of searchType switch');
    }
    // console.log(searchType, 'was searchType in searchClicked() after switch in same');

    let options = {
      "authors" : {
        uri: `http://isbndb.com/api/v2/json/${apiKey}/${searchType}`,
        qs: {
          'q': `${searchTerm}`
        },
        headers: {
          'User-Agent': 'Request-Promise'
        },
        json: true
      },
      "book": {
        uri : `http://isbndb.com/api/v2/json/${apiKey}/book/${searchTerm}`,
        headers: {
          'User-Agent': 'Request-Promise'
        },
        json: true
      }
    }


    // console.log(options.searchType, 'was options.searchType in same'); //returns undefined
    // console.log(options[searchType], 'was options[searchType] in same');

    console.log(options[searchType], 'was options[searchType] before rp() in components/searchFor.js');
    //need to see if i can add in a .something so that if a search fails (author?q=scalzi) it tries a more general search, i.e. authorS?q=scalzi
    rp(options[searchType])
      .then( (res) => {
        // console.log(res,'was res in components/searchFor.js');

        // console.log(options[searchType], 'was options[searchType] in .then in componenets/searchFor.js ');
        props.receiveResults(res);
      })
      .catch( (err) => {
        console.log(err, 'was err in components/searchFor.js');//my impression is this will usually be a low-info response. may be confusing this err with CORS errors.
        // console.log(options[searchType], 'was options[searchType] in .catch in componenets/searchFor.js');
      })

      // console.log('searchClicked reached end of function');
  }

  render(){

    let searchClickedProps = {
      "selectedSearchType" : this.props.selectedSearchType,
      "searchTerm" : this.props.searchTerm,
      "receiveResults" : this.props.receiveResults
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
