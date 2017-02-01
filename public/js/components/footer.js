import React from 'react';
import { render } from 'react-dom';

export default class Footer extends React.Component {

  render(){

    let bottomAnchor = {
      position: 'fixed',
      bottom: 0
    } //inspired by http://stackoverflow.com/a/6029162

    return(
      <div id="footer"
        style={bottomAnchor}>book and author searches powered by isbndb.com
      </div>
    )

  }
}
