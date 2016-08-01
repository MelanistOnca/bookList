import React from 'react';
import { render } from 'react-dom';
//may want react-router stuff here instead of in site?
import { Router, Route, IndexRoute, hashHistory } from 'react-router'; //review react-router to see if you need anything else, or for more detail on the imported.
import $ from 'jquery';

// components
import Site from './site';

// subcomponents
import Finished from './components/finished';
import Reading from './components/reading';
import ToBeRead from './components/toBeRead';


// render(
//   (
//     <Site
//       />
//   ),
//   document.getElementById('container')
//
// )

// <Route path="" component={}/>
render(
  (
  <Router history={hashHistory}>
    <Route path="/" component={Site}>
      <Route path="/reading" component={Reading}/>
      <Route path="/toberead" component={ToBeRead}/>
      <Route path="/finished" component={Finished}/>
    </Route>

  </Router>
  ),
  document.getElementById('container')
)
