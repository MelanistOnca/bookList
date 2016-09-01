import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';


export default class SearchFor extends React.Component {


  render(){

    return(
      <div id="searchContainer">
        <p>Add to list</p>

        <label>Search By:
          <select>

            <option value="Author">Author</option>
            <option value="Title">Title</option>
            <option value="ISBN">ISBN</option>

          </select>

        </label>
        <input type="text"/>
      </div>
    )
  }
}
