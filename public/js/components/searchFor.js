import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import Results from './results';

export default class SearchFor extends React.Component {
  searchTermChanged(updateSearchTerm,e){
    // console.log('search term was changed');
    // console.log(e, 'was e');
    // console.log(e.target, 'was e.target');
    // console.log(e.target.value, 'was e.target.value');
    let searchTermField = e.target.value
    e.preventDefault();
    updateSearchTerm(searchTermField);

  }
  searchTypeChanged(e){
    e.preventDefault();
    console.log(e, 'was e');
    console.log(e.target, 'was e.target');
    console.log(e.target.value, 'was e.target.value');
    //update via store/state here

    // console.log($('#searchTextInput'));
  }
  textChange(e){
    console.log(e, 'was e');
    console.log(e.target, 'was e.target');
    console.log(e.target.value, 'was e.target.value');
    this.setState({value: e.target.value}) //this updates the field but shoots error:
    // Uncaught TypeError: Cannot read property 'setState' of undefined
    // probably because this isn't it's own component and/or because bypassing store interaction?

  }
  searchClicked(e){
    e.preventDefault();
    let apiKey = process.env.API_KEY; //this switch in naming convention is going to fuck you.
    let searchType = 'selector element value';
    let searchTerm = 'input element text value';
    let options = {
      uri: `http://isbndb.com/api/v2/json/${apiKey}/${searchType}`,
      qs: {
        'q': `${searchTerm}`
        //if this were a well constructed API, the following note would apply.
        //searchType will probably be 'searchType' instead of whatever value assigned above? ==> USE BRACKET NOTATION. (this is correct now, theoretically)
      },//this seems like a badly contructed API as far as interacting with a qs object? but maybe i'm too green to see why it's not bad.
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true
    }

    rp(options)
      .then( (res) => {
        console.log(res,'was res in components/searchFor.js');
      })
      .catch( (err) => {
        console.log(err, 'was err in components/searchFor.js');//my impression is this will usually be a low-info response. may be confusing this err with CORS errors.
      })
      //NOTE
      //i think i then need to generate a results window. presumably done through putting the appropriate res info into the store, then letting the display update based on the store change.
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

      selectOptions.push(
        <option
          key = {uniqueStamp}
          id = {uniqueStamp}
          value={this.props.searchType[i]} >
          {this.props.searchType[i]}
        </option>
      )
    }
    console.log(selectOptions, 'selectOption in componenets/searchFor.js');
    // <option value="Author">Author</option>
    // <option value="Authors">Authors  (plural)</option>
    // <option value="Title">Title</option>
    // <option value="ISBN">ISBN</option>

    // console.log(this.props, 'was this.props in components/searchFor');
    return(
      <div id="searchContainer">
        <p>Add to list</p>
        <form>
          <label>Search By:
            <select

              onChange={this.searchTypeChanged}
              >
              {selectOptions}


            </select>

          </label>
          <input id="searchTextInput"
            type="text"
            value={this.props.searchTerm}
            placeholder="update via store"
            onChange={this.searchTermChanged.bind(event, this.props.updateSearchTerm)}

            />
          <input type="submit"
            value="Search"
            onClick={this.testCall}/>
        </form>


        <Results
          />
      </div>
    )
  }
}
