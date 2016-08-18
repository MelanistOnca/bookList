import React from 'react';
import { render } from 'react-dom';
//may want react-router stuff here instead of in site?
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; //review react-router to see if you need anything else, or for more detail on the imported.
import $ from 'jquery';

// components
import Site from './site';

// subcomponents
import Finished from './components/finished';
import Reading from './components/reading';
import ToBeRead from './components/toBeRead';
import UpdateLists from './components/updateLists';
import Mapper from './components/mapper';


//redux stuff
import { Provider } from 'react-redux';
import store, { history } from './store';


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
  // console.log(this.props.children,'this.props.children in app.js');
  (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Mapper}>
          <Route path="/reading" component={Reading}/>
          <Route path="/toberead" component={ToBeRead}/>
          <Route path="/finished" component={Finished}/>
          <Route path="/updateLists" component={UpdateLists}/>
        </Route>
        <Route path="*" component={Site}></Route>

      </Router>

    </Provider>

  ),
  document.getElementById('container')
)
