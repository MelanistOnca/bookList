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
    let searchTermField = e.target.value;
    e.preventDefault();
    // console.log(searchTermField, 'was searchTermField in searchTermChange in searchFor.js');
    // console.log(searchTermField.split(' ').join('_').split("'").join(''), 'was searchTermField.split().join().split().join() in searchTermChange in searchFor.js');
    let humanReadableTitle =
    searchTermField.split('_').join(' ');
    // console.log(humanReadableTitle, 'was humanReadableTitle in searchTermChange in searchFor.js');

    // updateSearchTerm(searchTermField);
    // updateSearchTerm(parsedSearchTerm);
    updateSearchTerm(humanReadableTitle);
  }
  searchTypeChanged(updateSearchType,e){
    // console.log('searchTypeChanged called');
    e.preventDefault();
    let searchTypeSelected = e.target.value;
    //update via store/state here
    updateSearchType(searchTypeSelected)

    // console.log($('#searchTextInput'));
  }


  render(){
    let searchTypeLength = this.props.searchType.length;

    let selectOptions = [];
    for (let i=0; i < searchTypeLength; i++ ) { //this loop determines what options are available from the 'Search By' selector by going through the 'searchType' store and providing those options
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
