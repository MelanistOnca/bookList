import React from 'react';
import { render } from 'react-dom';

//react-router may belong in app.js rather than here
import { Router, Route, IndexRoute, hashHistory } from 'react-router'; //review react-router to see if you need anything else, or for more detail on the imported.

export default class Site extends React.Component{


  render(){

    return(
      <div id="siteContainer">
        bookList site.js loaded
      </div>
    )
  }
}
