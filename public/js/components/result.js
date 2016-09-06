import React from 'react';
import { render } from 'react-dom';

import ListView from './listView'; //need to figure out a good way of importing search results into this element.
import InnerResultList from './innerResultList';

export default class Result extends React.Component {


  render(){

    // console.log(this.props, 'this.props in components/result.js');
        let resultsView = [];
        let startingPoint = this.props.searchResults ? this.props.searchResults[0].data : [{"":""}] ; //is an array of objects when searching for "scalzi" as "authors"
        // console.log(startingPoint, 'was startingPoint in components/result.js'); //returns array of objects. each object is an author who in some way matched the search critera

        // this.props.searchResults[0] ?
        // console.log(Object.keys(startingPoint[0]), 'was Object.keys(startingPoint[0]) in components/result.js') : console.log('bullshit text');  //when results present, returns ["author_id", "name", "book_count", "dates", "book_ids", "category_ids", "last_name", "first_name", "subject_ids", "name_latin"] //these are the keys for the author object

        // startingPoint[i].book_ids returns an array of book titles with underscores for spaces
        // .first_name returns author's first name, .last_name returns author's last name

        // console.log(startingPoint.length, 'was startingPoint.length');




        let spLength = startingPoint ? startingPoint.length : 0;


        for(let i = 0; i < spLength ; i++){
          let stamp = new Date().getTime();
          let uniqueStamp = `${i}${stamp}`;
          let authorsBookTitleArray = startingPoint[i] ? startingPoint[i].book_ids : [] ; // ehhhhh
          let authorsFirstName = startingPoint[i] ? startingPoint[i].first_name : '' ; // ehhhhh
          let authorsLastName = startingPoint[i] ? startingPoint[i].last_name : '' ; // ehhhhh
          // console.log(spLength, 'spLength in for loop in components/result.js');

          resultsView.push(

            <div
              key={uniqueStamp}
              id={uniqueStamp}
              className="searchResultSingle"
              style={{"border":"solid 1px"}}>
              <p>{authorsFirstName} {authorsLastName}</p>

              <InnerResultList

                matchedAuthor={startingPoint[i]}
                searchResult={this.props.searchResult}
                />

            </div>
          )
        }


    return(
      <div id="resultList">

        {resultsView}

      </div>

    )
  }
}
