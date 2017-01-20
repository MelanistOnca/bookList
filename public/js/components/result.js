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

        // let startingPoint = this.props.searchResults ? this.props.searchResults[0].data :
        // [{'key': 'value'}]; //dont think i can use startingPoint as a shortcut anymore, using my-API as the data source
        // console.log(this.props.searchResults[0].data, 'was this.props.searchResults[0].data');
        // console.log(startingPoint, ' was startingPoint');
        // console.log(typeof startingPoint, 'was typeof startingPoint');
        // console.log(startingPoint[0], 'was startingPoint[0]');
        // NOTE this probably broke when i switched the results to come from my server rather than the live function call?
        // [{}] ; //undefined
        // [{"":""}] ; //undefined
        //is an array of objects when searching for "scalzi" as "authors"
        // console.log(startingPoint, 'was startingPoint in components/result.js'); //returns array of objects.
          // when searching for authorS (plural!) each object is an author who in some way matched the search critera
          // when searching for ISBN, it returns an array with a single object, startingPoint[0]. this object has book data.

        // console.log(this.props.searchResults[0], 'was this.props.searchResults[0]'); //returns object. to get what i want in the my-API version, i need this to be .data.result.data
        // this.props.searchResults[0] ?
        // console.log('this.props.searchResults[0] true') : console.log('this.props.searchResults[0] false');
        // let test = this.props.searchResults[0].data.result ? this.props.searchResults[0].data.result.data[0] : 'this.props.searchResults[0].data.result.data is false'
        // console.log(test, 'was test', startingPoint[0], 'was startingPoint[0] after test'); //these should be the same. they are not. i think startingPoint is only being defined on initial render, and not updating once the ajax response comes through
        //
        // this.props.searchResults[0] ?
        // console.log(Object.keys(startingPoint[0]), 'was Object.keys(startingPoint[0]) in components/result.js') :
        // console.log('bullshit text');
        console.log();

        //when results present on authorS (plural!) search, returns ["author_id", "name", "book_count", "dates", "book_ids", "category_ids", "last_name", "first_name", "subject_ids", "name_latin"] //these are the keys for the author object

        //when results present on ISBN search, returns ["marc_enc_level", "dewey_normal", "notes", "dewey_decimal", "isbn10", "lcc_number", "title", "edition_info", "subject_ids", "isbn13", "awards_text", "book_id", "urls_text", "publisher_text", "author_data", "physical_description_text", "summary", "title_long", "language", "title_latin", "publisher_name", "publisher_id"]

        // startingPoint[i].book_ids returns an array of book titles with underscores for spaces
        // .first_name returns author's first name, .last_name returns author's last name

        // console.log(startingPoint.length, 'was startingPoint.length');




        // let spLength = startingPoint ? startingPoint.length : 0;
        let spLength = 6;
        // console.log(spLength, 'was spLength just after declaration in components/result.js');

        // console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in components/result.js');
        // console.log(this.props.selectedSearchType[0], 'was this.props.selectedSearchType[0] in components/result.js');

        let stamp = new Date().getTime();

        // console.log(this.props.selectedSearchType[0], 'was this.props.selectedSearchType[0] right before switch in component/result.js');
        // let identicalURIforTitleOrISBN = 'ISBN' || 'Title';
        //the followis drenched, not DRY. should probably use if/else instead, but this works for now and i have other shit to do.
        // console.log(this.props.searchResults, 'was this.props.searchResults in components/result.js');
        console.log(this.props.searchResults.results, 'was this.props.searchResults.results in components/result.js');
        // console.log(this.props.searchResults.results.author_name, 'was this.props.searchResults.results.author_name in components/result.js');
        // console.log(this.props.searchResults.results.book_ids, 'was this.props.searchResults.results.book_ids in components/result.js');
        // console.log(this.props.searchResults.results, 'was this.props.searchResults.results.author_name in components/result.js');
        switch (this.props.searchResults.results.index_searched){
          case 'book_id':

          break;
          case 'author_name':

          break;
          case 'isbn':

          break;
          // case 'book_id':
          //
          // break;
          default:
            console.log('no recognized this.props.searchResults.results.index_searched case found');
            console.log(this.props.searchResults.results.index_searched, 'was this.props.searchResults.results.index_searched');

        }
        switch(this.props.selectedSearchType[0]) {
          case 'Authors': {
            // console.log(startingPoint, 'was startingPoint in Authors case in components/result.js');
            console.log(this.props.searchResults, 'was this.props.searchResults in authors case in in components/result.js');
            // for(let i = 0; i < this.props.searchResults.results.book_ids.length ; i++){

              // console.log(this.props.searchResults.results.book_ids[i], 'was this.props.searchResults.results.book_ids[i] in components/result.js');
              let uniqueStamp = `${stamp}`;
              // let authorsBookTitleArray = this.props.searchResults.data.data.result.data[i] ? this.props.searchResults.data.data.result.data[i].book_ids : [] ; // ehhhhh
              // let authorsFirstName = this.props.searchResults.data.data.result.data[i] ? this.props.searchResults.data.data.result.data[i].first_name : '' ; // ehhhhh
              // let authorsLastName = this.props.searchResults.data.data.result.data[i] ? this.props.searchResults.data.data.result.data[i].last_name : '' ; // ehhhhh
              // console.log(spLength, 'spLength in for loop in components/result.js');
              // let authorsBookTitleArray = [];
              // let authorName = '';

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
              //authorBookList={this.props.searchResults.results.book_ids[i]}
              // console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in "Authors" case in  components/result.js');
              // <InnerResultList
              //
              //   matchedAuthor={this.props.searchResults.data.data.result.data[i]}
              //   searchResult={this.props.searchResults.data.data.result.data}
              //   receiveResults={this.props.receiveResults}
              //   updateSearchType={this.props.updateSearchType}
              //   selectedListKey={this.props.selectedListKey}
              //   updateSearchTerm={this.props.updateSearchTerm}
              //   addToList={this.props.addToList}
              //   removeFromList={this.props.removeFromList}
              //   />
            // } //end of for-loop in 'Authors' case
            console.log(resultsView, 'was resultsView before break; in Authors case');
          }

          break;


          case 'Title' : {

            // console.log(startingPoint, 'was startingPoint in ISBN case in components/result.js');
            // let i = 0;
            // let uniqueStamp = `${i}${stamp}`;
            // console.log(this.props.searchResults.data.data.result,' was this.props.searchResults.data.data.result copied from authors, in title');
            // console.log(this.props.searchResults.data.data.result.data,' was this.props.searchResults.data.data.result.data copied from authors, in title');
            // console.log(this.props.searchResults.data.data.result.data.length,' was this.props.searchResults.data.data.result.data.length copied from authors, in title');
            // console.log(this.props.searchResults.data.data.result.data[0],' was this.props.searchResults.data.data.result.data[0] copied from authors, in title');
            // console.log(this.props.searchResults.data.data.result.data[0].length,' was this.props.searchResults.data.data.result.data[0].length copied from authors, in title');
            // console.log(this.props.searchResults.data.data.result.data[0], 'was this.props.searchResults.data.data.result.data[0] in Title case', typeof this.props.searchResults.data.data.result.data[i], 'was typeof of same');
            // console.log(this.props.searchResults.data.data.result.data[i], 'was this.props.searchResults.data.data.result.data[i] in Title case', typeof this.props.searchResults.data.data.result.data[i], 'was typeof of same');

            console.log(this.props.searchResults.results, 'was this.props.searchResults.results in title case in components/result.js');
            console.log(this.props.searchResults.results.data, 'was this.props.searchResults.result.data in title case in components/result.js');
            // console.log(this.props.searchResults.result.data.length, 'was this.props.searchResults.result.data in title case in components/result.js');
            // console.log(this.props.searchResults.result.data, 'was this.props.searchResults.result.data.length in title case in components/result.js');
            // for(let i = 0; i < this.props.searchResults.data.data.result.data.length ; i++){
            //   let uniqueStamp = `${i}${stamp}`;
            //   resultsView.push(
            //     <div
            //       key={uniqueStamp}
            //       id={uniqueStamp}
            //       className="searchResultSingle"
            //       style={{"border":"solid 1px"}}
            //       >
            //     <InnerResultList
            //       {...this.props}
            //       matchedISBN={this.props.searchResults.data.data.result.data[i]}
            //       />
            //
            //     </div>
            //   )
            //   console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in "Title" case in components/result.js');
            //   // <InnerResultList
            //   //   matchedISBN={this.props.searchResults.data.data.result.data[i]}
            //   //   searchResults={this.props.searchResults}
            //   //   receiveResults={this.props.receiveResults}
            //   //   updateSearchType={this.props.updateSearchType}
            //   //   selectedListKey={this.props.selectedListKey}
            //   //   updateSearchTerm={this.props.updateSearchTerm}
            //   //   addToList={this.props.addToList}
            //   //   removeFromList={this.props.removeFromList}
            //   //   />
            // } //end of loop in "Title" case
            //
            /////////
            //use below while results only return one book.
            // let i = 0;
            // let uniqueStamp = `${i}${stamp}`;
            console.log(this.props.searchResults.results, 'was this.props.searchResults.results');
            // for(let i = 0; i < this.props.searchResults.data.data.result.data.length ; i++){
              // let uniqueStamp = `${i}${stamp}`;
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

            console.log(resultsView, 'was resultsView before break; in Title case');
          }
          break; //derp


          case 'ISBN' : {
            // console.log(startingPoint, 'was startingPoint in ISBN case in components/result.js');
            // let i = 0;
            // let uniqueStamp = `${i}${stamp}`;
            console.log(this.props.searchResults.results, 'was this.props.searchResults.results');
            // for(let i = 0; i < this.props.searchResults.data.data.result.data.length ; i++){
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
              // console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in "ISBN" case in components/result.js');
              // <InnerResultList
              //   matchedISBN={this.props.searchResults.data.data.result.data[i]}
              //   searchResults={this.props.searchResults}
              //   receiveResults={this.props.receiveResults}
              //   updateSearchType={this.props.updateSearchType}
              //   selectedListKey={this.props.selectedListKey}
              //   updateSearchTerm={this.props.updateSearchTerm}
              //   addToList={this.props.addToList}
              //   removeFromList={this.props.removeFromList}
              //   />
            // }

            console.log(resultsView, 'was resultsView before break; in ISBN case');
          }

          break;
          case '' : { //trying an or case above, which is ugly but effective here? hopefully. it did not work, only triggered on A when ( A || B ). duplicated code for 2 cases. SO BAAAAD
          // console.log(this.props.selectedSearchType, 'should be an empty string in "" case in components/result.js');

          }

          break;
          default:

            // console.log('no case matched for this.props.selectedSearchType in switch in components/result.js');
            // console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in default case in components/result.js')
            // console.log(this.props.selectedSearchType[0], 'was this.props.selectedSearchType[0] in default case in components/result.js');

        } //end of switch


        // console.log(resultsView, 'was resultsView before return() in components/result.js');

        // let stamp = new Date().getTime();
        // let uniqueStamp = `${i}${stamp}`;


    return(
      <div
        id="resultContainer">
        results here
        {resultsView}

      </div>
    )
  }
}
