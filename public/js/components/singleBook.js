import React from 'react';
import { render } from 'react-dom';

import EditOptions from './editOptions';

export default class SingleBook extends React.Component {

//NOTE: props that should be passed to this element are
// this.props.
          // key
          // id
          // title
          // author
          // genre
  render(){
    // console.log(this.props, 'this.props in singleBook.js');
    // console.log(this.props.pickedList,'this.props.pickedList in singleBook.js');


    //map the key array to get a list of names, then use that to list the values of those keys too. probably in same map function
    return(
      <div
        className="singleBookContainer"
        id={`${this.props.id}singleBookContainer}`}
        style={{"border":"solid 1px"}}
        >
        <p>Title : {this.props.title}</p>
        <p>Author : {this.props.author}</p>
        <p>Publisher : {this.props.publisher}</p>
        <EditOptions
          {...this.props}
          />

      </div>
    )
  }
}
