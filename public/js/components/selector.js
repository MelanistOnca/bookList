import React from 'react';
import { render } from 'react-dom';

export default class Selector extends React.Component{

  render(){

    return(
      <div id="listSelectorContainer">
        <form>
          <label>Edit List: </label>
          <select>
            <option value="null">Select</option>
            <option value="toBeRead">To Be Ready List</option>
            <option value="haveRead">Have Read List</option>
            <option value="currentlyReading">Currently Reading List</option>
          </select>
        </form>
      </div>
    )
  }
}
