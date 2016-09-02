import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import ListView from './listView'; //need to figure out a good way of importing search results into this element.

export default class Results extends React.Component {


  render(){

    return(
      <div id='resultsContainer'>
        {/*<ListView

          />*/}
      </div>
    )
  }
}
