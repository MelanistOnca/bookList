import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

//components
import NavLink from './navLink';

import TestButton from './testButton'

export default class Nav extends React.Component{


  render(){


    return(
      <div id="navContainer">
        {/* may want a blank/default landing page */}
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
            UpdateLists</NavLink></li>
        </ul>
        <TestButton
          />
      </div>
    )
  }
}
