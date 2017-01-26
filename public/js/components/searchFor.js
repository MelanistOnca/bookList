import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

// import Results from './results';
import Result from './result';
import SearchButton  from './searchButton';

const rp = require('request-promise');

export default class SearchFor extends React.Component {
  searchTermChanged(updateSearchTerm,e){
    // console.log('search term was changed');
    // console.log(e, 'was e');
    // console.log(e.target, 'was e.target');
    // console.log(e.target.value, 'was e.target.value');
    let searchTermField = e.target.value;
    e.preventDefault();
    console.log("i need to figure out how to distinguish here between title, author, isbn and if it's title, to convert from human readable (spaces and caps) to book_id format(unscores, lowercase). but ACTUALLY, i need to keep it human readable in the search field, but book_id format ... somehwere? otherwise search results for InnerResultList don't work right. or something breaks. its 9pm and i've been coding on and off all day");
    console.log(searchTermField, 'was searchTermField in searchTermChange in searchFor.js');
    // console.log(searchTermField.split(' ').join('_').split("'").join(''), 'was searchTermField.split().join().split().join() in searchTermChange in searchFor.js');
    // let parsedSearchTerm = searchTermField.split(' ').join('_').split("'").join('')
    // console.log(parsedSearchTerm, 'was parsedSearchTerm in searchTermChange in searchFor.js');
    let humanReadableTitle =
    searchTermField.split('_').join(' ');
    console.log(humanReadableTitle, 'was humanReadableTitle in searchTermChange in searchFor.js');

    // updateSearchTerm(searchTermField);
    // updateSearchTerm(parsedSearchTerm);
    updateSearchTerm(humanReadableTitle);

  }
  searchTypeChanged(updateSearchType,e){
    // console.log('searchTypeChanged called');
    e.preventDefault();
    // console.log(e, 'was e');
    // console.log(e.target, 'was e.target');
    // console.log(e.target.value, 'was e.target.value');
    let searchTypeSelected = e.target.value;
    //update via store/state here
    updateSearchType(searchTypeSelected)

    // console.log($('#searchTextInput'));
  }


  render(){
    // http://isbndb.com/api/v2/json/[your-api-key]/book/9780849303159
    //returns
// {
//    "index_searched" : "isbn",
//    "data" : [
//       {
//          "author_data" : [
//             {
//                "name" : "Richards, Rowland",
//                "id" : "richards_rowland"
//             }
//          ]
//          "awards_text" : "",
//          "marc_enc_level" : "4",
//          "subject_ids" : [
//             "mechanics_applied"
//          ],
//          "summary" : "",
//          "isbn13" : "9780849303159",
//          ...,
//          "book_id" : "principles_of_solid_mechanics", //this is the id referred to in author search results as res.data.book_ids[#] //kind of dumb to not use the isbn13 there instead?
//          ...
//       }
//    ]
// }
// SHOULD be res.data.isbn13 to get the isbn, here "9780849303159"
    let searchTypeLength = this.props.searchType.length;

    let selectOptions = [];
    //use foreach instead?
    for (let i=0; i < searchTypeLength; i++ ) {
      let stamp = new Date().getTime();
      let uniqueStamp = `${i}${stamp}`;
      let isSelected = "false";
      if (this.props.searchType[i]===this.props.selectedSearchType) {
        isSelected = "true";
      }//there is probably a more elegant way to write this

      selectOptions.push(
        <option
          key = {uniqueStamp}
          id = {uniqueStamp}
          value={this.props.searchType[i]}
          >
          {this.props.searchType[i]}
        </option>
      )
    }
    // console.log(selectOptions, 'selectOption in componenets/searchFor.js');
    // <option value="Author">Author</option>
    // <option value="Authors">Authors  (plural)</option>
    // <option value="Title">Title</option>
    // <option value="ISBN">ISBN</option>
    // let defValue = this.props.selectedSearchType[0]; //needed to refer to [0] to get rid of "scalar value" warning, since i had been passing the array and not the string


    // console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in components/searchFor');
    // console.log(defValue, 'was defValue in same');
    // console.log(this.props, 'was this.props in components/searchFor');

    // select value below spawns warning.js:44 Warning: The `value` prop supplied to <select> must be a scalar value if `multiple` is false. Check the render method of `SearchFor`
    // let event = window.event; //needed for firefox
    //following was replaced by SearchButton
    // <input type="submit"
    //   value="Search"
    //   onClick={this.searchClicked.bind(event, this.props)}/>
    //end of what was replaced by SearchButton
    return(
      <div id="searchContainer">
        <p>Add to list</p>
        <form>
          <label>Search By:
            <select

              onChange={this.searchTypeChanged.bind(this, this.props.updateSearchType)}
              value={this.props.selectedSearchType[0]}
              >
              <option value={undefined}>Select</option>
              {selectOptions}


            </select>

          </label>
          <input id="searchTextInput"
            type="text"
            value={this.props.searchTerm}
            placeholder="search term here"
            onChange={this.searchTermChanged.bind(this, this.props.updateSearchTerm)}

            />

          <SearchButton
            {...this.props}
            />

        </form>

        <Result
          {...this.props}
          />

      </div>
    )
    // <SearchButton
    //   selectedSearchType={this.props.selectedSearchType}
    //   searchTerm={this.props.searchTerm}
    //   receiveResults={this.props.receiveResults}
    //   updateSearchType={this.props.updateSearchType}
    //   updateSearchTerm={this.props.updateSearchTerm}
    //   addToList={this.props.addToList}
    //   removeFromList={this.props.removeFromList}
    //   />

    ///////

    // <Result
    //   selectedSearchType={this.props.selectedSearchType}
    //   searchResults={this.props.searchResults}
    //   receiveResults={this.props.receiveResults}
    //   updateSearchType={this.props.updateSearchType}
    //   selectedListKey={this.props.selectedListKey}
    //   updateSearchTerm={this.props.updateSearchTerm}
    //   addToList={this.props.addToList}
    //   removeFromList={this.props.removeFromList}
    //   />
  }
}
