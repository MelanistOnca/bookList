import React from 'react';
import { render } from 'react-dom';

import ListView from './listView'; //need to figure out a good way of importing search results into this element.
import InnerResultList from './innerResultList';

export default class Result extends React.Component {


  render(){

    console.log(this.props, 'this.props in components/result.js');
    // console.log(this.props.searchResults[0], 'was this.props.searchResults[0] in components/result.js');
    // console.log(this.props.searchResults, 'was this.props.searchResults in components/result.js');
        let resultsView = [];
        let startingPoint = this.props.searchResults ? this.props.searchResults[0].data :
        'string'
        // [{}] ; //undefined
        // [{"":""}] ; //undefined
        //is an array of objects when searching for "scalzi" as "authors"
        console.log(startingPoint, 'was startingPoint in components/result.js'); //returns array of objects.
          // when searching for authorS (plural!) each object is an author who in some way matched the search critera
          // when searching for ISBN, it returns an array with a single object, startingPoint[0]. this object has book data.

        // this.props.searchResults[0] ?
        // console.log(Object.keys(startingPoint[0]), 'was Object.keys(startingPoint[0]) in components/result.js') : console.log('bullshit text');

        //when results present on authorS (plural!) search, returns ["author_id", "name", "book_count", "dates", "book_ids", "category_ids", "last_name", "first_name", "subject_ids", "name_latin"] //these are the keys for the author object

        //when results present on ISBN search, returns ["marc_enc_level", "dewey_normal", "notes", "dewey_decimal", "isbn10", "lcc_number", "title", "edition_info", "subject_ids", "isbn13", "awards_text", "book_id", "urls_text", "publisher_text", "author_data", "physical_description_text", "summary", "title_long", "language", "title_latin", "publisher_name", "publisher_id"]

        // startingPoint[i].book_ids returns an array of book titles with underscores for spaces
        // .first_name returns author's first name, .last_name returns author's last name

        // console.log(startingPoint.length, 'was startingPoint.length');




        let spLength = startingPoint ? startingPoint.length : 0;
        console.log(spLength, 'was spLength just after declaration in components/result.js');

        // console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in components/result.js');
        // console.log(this.props.selectedSearchType[0], 'was this.props.selectedSearchType[0] in components/result.js');

        let stamp = new Date().getTime();

        console.log(this.props.selectedSearchType[0], 'was this.props.selectedSearchType[0] right before switch in component/result.js');
        // let identicalURIforTitleOrISBN = 'ISBN' || 'Title';
        //the followis drenched, not DRY. should probably use if/else instead, but this works for now and i have other shit to do.
        switch(this.props.selectedSearchType[0]) {
          case 'Authors':
          console.log(startingPoint, 'was startingPoint in Authors case in components/result.js');
          for(let i = 0; i < spLength ; i++){
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
                style={{"border":"solid 1px"}}
                >
                <p>{authorsFirstName} {authorsLastName}</p>
                <p>(use the Title selection to search for a book and add to your list)</p>

                <InnerResultList

                  matchedAuthor={startingPoint[i]}
                  searchResult={this.props.searchResult}
                  receiveResults={this.props.receiveResults}
                  updateSearchType={this.props.updateSearchType}
                  selectedListKey={this.props.selectedListKey}
                  updateSearchTerm={this.props.updateSearchTerm}
                  />

              </div>
            )
            console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in "Authors" case in  components/result.js');
          } //end of for-loop in 'Authors' case

          break;
          case 'Title' :
          console.log(startingPoint, 'was startingPoint in ISBN case in components/result.js');
          // let i = 0;
          // let uniqueStamp = `${i}${stamp}`;
          for(let i = 0; i < spLength ; i++){
            resultsView.push(
              <div
                key={stamp}
                id={stamp}
                className="searchResultSingle"
                style={{"border":"solid 1px"}}
                >
                <InnerResultList
                  matchedISBN={startingPoint[i]}
                  searchResults={this.props.searchResults}
                  receiveResults={this.props.receiveResults}
                  updateSearchType={this.props.updateSearchType}
                  selectedListKey={this.props.selectedListKey}
                  updateSearchTerm={this.props.updateSearchTerm}
                  />

              </div>
            )
            console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in "Title" case in components/result.js');

          }
          case 'ISBN' :
          console.log(startingPoint, 'was startingPoint in ISBN case in components/result.js');
          // let i = 0;
          // let uniqueStamp = `${i}${stamp}`;
          for(let i = 0; i < spLength ; i++){
            resultsView.push(
              <div
                key={stamp}
                id={stamp}
                className="searchResultSingle"
                style={{"border":"solid 1px"}}
                >
                <InnerResultList
                  matchedISBN={startingPoint[i]}
                  searchResults={this.props.searchResults}
                  receiveResults={this.props.receiveResults}
                  updateSearchType={this.props.updateSearchType}
                  selectedListKey={this.props.selectedListKey}
                  updateSearchTerm={this.props.updateSearchTerm}
                  />

              </div>
            )
            console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in "ISBN" case in components/result.js');

          }


          break;
          case '' : //trying an or case above, which is ugly but effective here? hopefully. it did not work, only triggered on A when ( A || B ). duplicated code for 2 cases. SO BAAAAD
          console.log(this.props.selectedSearchType, 'should be an empty string in "" case in components/result.js');

          break;
          default:

            console.log('no case matched for this.props.selectedSearchType in switch in components/result.js');
            console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in default case in components/result.js')
            console.log(this.props.selectedSearchType[0], 'was this.props.selectedSearchType[0] in default case in components/result.js');

        } //end of switch




        // let stamp = new Date().getTime();
        // let uniqueStamp = `${i}${stamp}`;


    return(
      <div
        id="resultContainer">

        {resultsView}

      </div>
    )
  }
}
