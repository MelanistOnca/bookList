import React from 'react';
import { render } from 'react-dom';

//react-router may belong in app.js rather than here
// import { Router, Route, IndexRoute, hashHistory } from 'react-router'; //review react-router to see if you need anything else, or for more detail on the imported.

//components

import Nav from './components/nav';

// import  from '';



export default class Site extends React.Component{

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     loggedIn: false,
  //     user: {},//this will maybe include location data to help determine nearby libraries/stores?
  //     haveReadList: [],
  //     readingNowList: [],
  //     toBeReadList: []
  //   } //does redux completely replace the state, or do i need state for it to use?
  // }


  render(){
    console.log(this.props,'this.props in site.js');
    console.log(this.props.children,'this.props.children in site.js');
    return(
      <div id="siteContainer">
        <Nav
          />
        {/* {this.props.children} */}
        {React.cloneElement(this.props.children,this.props)}

      </div>
    )
  }
}
