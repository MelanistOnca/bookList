import React from 'react';
import { render } from 'react-dom';

//react-router may belong in app.js rather than here
// import { Router, Route, IndexRoute, hashHistory } from 'react-router'; //review react-router to see if you need anything else, or for more detail on the imported.

//components
// import Finished from './components/finished';
// import Reading from './components/reading';
// import ToBeRead from './components/toBeRead';
// import  from '';

export default class Site extends React.Component{

  // <Finished
  //   />
  // <Reading
  //   />
  // <ToBeRead
  //   />

  render(){

    return(
      <div id="siteContainer">
        bookList site.js loaded

      </div>
    )
  }
}
