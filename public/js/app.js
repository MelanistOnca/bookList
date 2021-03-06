import React from 'react';
import { render } from 'react-dom';
//may want react-router stuff here instead of in site?
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; //review react-router to see if you need anything else, or for more detail on the imported.
import $ from 'jquery';

// components
import Site from './site';

// subcomponents

// import Finished from './components/finished';
// import Reading from './components/reading';
// import ToBeRead from './components/toBeRead';
//if i could figure out how to pass props in the <Route/> component, Finished,Reading,ToBeRead seem to be replacable with (new) ListView component with the right props. Look in to trying that.
// import ListView from './components/listView';

import UpdateLists from './components/updateLists';
import Mapper from './components/mapper';
import Nav from './components/nav';
import SignUp from './components/user/signUp';
import LogIn from './components/user/logIn';
import Placeholder from './components/placeholder';
import BasicList from './components/basicList';
import UpdateUserInfo from './components/user/updateUserInfo';


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
  (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Mapper}>
          {/*
            when going to :3003 (no slash)
            index route of {Site} or {Mapper} seems to loop infinitely, nav creates 2 nav elements, no index route means this.props.children is null in site.js
            wtf is going on?
            {Placeholder} is an empty div but gets the site to not shoot errors and has this.props.children acting "correctly"
          */}
          <IndexRoute component={Placeholder}/>
          <Route path="/reading" component={BasicList}
            />
          <Route path="/toberead" component={BasicList}/>
          <Route path="/finished" component={BasicList}/>
          <Route path="/updatelists" component={UpdateLists}/>
          <Route path="/signup"
            component={SignUp}/>
          <Route path="/login"
            component={LogIn}/>
          <Route path="/logout"
            component={LogIn}/>
          <Route path="/updateuserinfo"
            component={UpdateUserInfo}/>
          {/*
            catch-all route
          */}
          <Route path="*" component={Placeholder}></Route>


        </Route>

        {/*

          */}

      </Router>

    </Provider>

  ),
  document.getElementById('container')
)
