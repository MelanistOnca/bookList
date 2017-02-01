import React from 'react';
import { render } from 'react-dom';

//react-router may belong in app.js rather than here
// import { Router, Route, IndexRoute, hashHistory } from 'react-router'; //review react-router to see if you need anything else, or for more detail on the imported.

//components

import Nav from './components/nav';
import Footer from './components/footer';

// import  from '';



export default class Site extends React.Component{



  render(){
    // console.log(this.props, 'this.props.in site.js');

    return(
      <div id="siteContainer">
        <Nav
          {...this.props}
          />
        {/* {this.props.children} */}
        {React.cloneElement(this.props.children,this.props)}
        <Footer />
      </div>
    )
  }
}
