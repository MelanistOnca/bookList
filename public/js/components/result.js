import React from 'react';
import { render } from 'react-dom';

import ListView from './listView'; //need to figure out a good way of importing search results into this element.
import InnerResultList from './innerResultList';

export default class Result extends React.Component {

  // componentWillReceiveProps(nextProps){
  //   console.log('componentWillReceiveProps ran');
  //   console.log(this.props, 'this.props in componentWillReceiveProps');
  //   console.log(nextProps, 'nextProps in componentWillReceiveProps');
  //   // console.log(startingPoint, 'startingPoint in componentWillReceiveProps'); //this is undefined, which makes complete sense
  //   // this.props = nextProps;
  // }
  render(){

    // console.log(this.props, 'this.props in components/result.js');
    // console.log(this.props.searchResults, 'was this.props.searchResults in components/result.js');
    // console.log(this.props.searchResults.data, 'was this.props.searchResults.data in components/result.js');
    // console.log(this.props.searchResults.data.data.result.data, 'was this.props.searchResults.data.data.result.data in components/result.js');
    // console.log(this.props.searchResults[0], 'was this.props.searchResults[0] in components/result.js');
        let resultsView = [];

         //returns array of objects.
          // when searching for authorS (plural!) each object is an author who in some way matched the search critera
          // when searching for ISBN, it returns an array with a single object, startingPoint[0]. this object has book data.



        //when results present on authorS (plural!) search, returns ["author_id", "name", "book_count", "dates", "book_ids", "category_ids", "last_name", "first_name", "subject_ids", "name_latin"] //these are the keys for the author object

        //when results present on ISBN search, returns ["marc_enc_level", "dewey_normal", "notes", "dewey_decimal", "isbn10", "lcc_number", "title", "edition_info", "subject_ids", "isbn13", "awards_text", "book_id", "urls_text", "publisher_text", "author_data", "physical_description_text", "summary", "title_long", "language", "title_latin", "publisher_name", "publisher_id"]

        // console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in components/result.js');
        // console.log(this.props.selectedSearchType[0], 'was this.props.selectedSearchType[0] in components/result.js');

        let stamp = new Date().getTime();

        // console.log(this.props.selectedSearchType[0], 'was this.props.selectedSearchType[0] right before switch in component/result.js');
        //the followis drenched, not DRY. should probably use if/else instead, but this works for now and i have other shit to do.
        // console.log(this.props.searchResults, 'was this.props.searchResults in components/result.js');
        // console.log(this.props.searchResults.results, 'was this.props.searchResults.results in components/result.js');
        // console.log(this.props.searchResults.results.author_name, 'was this.props.searchResults.results.author_name in components/result.js');
        // console.log(this.props.searchResults.results.book_ids, 'was this.props.searchResults.results.book_ids in components/result.js');
        // console.log(this.props.searchResults.results, 'was this.props.searchResults.results.author_name in components/result.js');
        // switch (this.props.searchResults.results.index_searched){
        //   case 'book_id':
        //
        //   break;
        //   case 'author_name':
        //
        //   break;
        //   case 'isbn':
        //
        //   break;
        //   // case 'book_id':
        //   //
        //   // break;
        //   default:
        //     // console.log('no recognized this.props.searchResults.results.index_searched case found');
        //     // console.log(this.props.searchResults.results.index_searched, 'was this.props.searchResults.results.index_searched');
        //
        // }
        switch(this.props.selectedSearchType[0]) {
          case 'Authors': {
              let uniqueStamp = `${stamp}`;

              resultsView.push(

                <div
                  key={uniqueStamp}
                  id={uniqueStamp}
                  className="searchResultSingle"
                  style={{"border":"solid 1px"}}
                  >
                  <p>{this.props.searchResults.results.author_name} </p>

                <InnerResultList
                  {...this.props}

                  matchedAuthor={this.props.searchResults.results}
                  />

                </div>
              )
          }
          break;

          case 'Title' : {
              let uniqueStamp = `${stamp}`;
              resultsView.push(
                <div
                  key={uniqueStamp}
                  id={uniqueStamp}
                  className="searchResultSingle"
                  style={{"border":"solid 1px"}}
                  >
                  <InnerResultList
                    {...this.props}
                    matchedISBN={this.props.searchResults.results}
                    />


                </div>
              )
          }
          break; //derp

          case 'ISBN' : {
              let uniqueStamp = `${stamp}`;
              resultsView.push(
                <div
                  key={uniqueStamp}
                  id={uniqueStamp}
                  className="searchResultSingle"
                  style={{"border":"solid 1px"}}
                  >
                  <InnerResultList
                    {...this.props}
                    matchedISBN={this.props.searchResults.results}
                    />


                </div>
              )
          }

          break;

          case '' : { //trying an or case above, which is ugly but effective here? hopefully. it did not work, only triggered on A when ( A || B ). duplicated code for 2 cases. SO BAAAAD TODO comprehend this when your brain hasn't been awake for 18+ hours straight
          }

          break;
          default:

            // console.log('no case matched for this.props.selectedSearchType in switch in components/result.js');
            // console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in default case in components/result.js')
            // console.log(this.props.selectedSearchType[0], 'was this.props.selectedSearchType[0] in default case in components/result.js');

        } //end of switch

    return(
      <div
        id="resultContainer"
        >
        <h3>NOTE: we are currently investigating why books that are not in the bookList database require you to press the "add to list" button twice before the book is added. Until this bug is resolved, please press the button again if your list does not update on the first push</h3>
        {resultsView}
      </div>
    )
  }
}
