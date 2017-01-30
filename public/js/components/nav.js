import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

//components
import NavLink from './navLink';

import UserSection from './user/userSection';

export default class Nav extends React.Component{


  render(){

    // console.log(this.props, 'was this.props in components/navs.js');
    return(
      <div id="navContainer">
        {/* may want a blank/default landing page TODO make the server serve a 'static' page that says something like "log in to enjoy bookList!"*/}
        <ul>
          <li><NavLink
            to="/reading"
            >
            Reading</NavLink></li>
          <li><NavLink
            to="/toBeRead"
            >
            To Be Read</NavLink></li>
          <li><NavLink
            to="/finished"
            >
            Finished</NavLink></li>
          <li><NavLink
            to="/updateLists"
            >
            Update Lists</NavLink></li>
          <li><NavLink
            to="/updateuserinfo"
            >
            Update User Info</NavLink></li>
        </ul>
        <UserSection
          {...this.props}
          />

      </div>
    )
  }
}
