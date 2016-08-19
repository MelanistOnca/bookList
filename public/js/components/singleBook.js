import React from 'react';
import { render } from 'react-dom';

export default class SingleBook extends React.Component {


  render(){
    console.log(this.props, 'this.props in singleBook.js');
    console.log(this.props.pickedList,'this.props.pickedList in singleBook.js');
    console.log(this.props.pickedList[0],'this.props.pickedList[0] in singleBook.js');
    console.log(Object.keys(this.props.pickedList[0]),'Object.keys(this.props.pickedList[0]) in singleBook.js');
    let keyArray = Object.keys(this.props.pickedList[0]);

    console.log(keyArray, 'keyArray in same, should be same');
    console.log(keyArray[0],'keyArray[0] in same');

    console.log(this.props.pickedList[0][keyArray[0]],
    '(this.props.pickedList[0][keyArray[0]]');

    let book1InList = this.props.pickedList[0][keyArray[0]];


    //map the key array to get a list of names, then use that to list the values of those keys too. probably in same map function
    return(
      <div className="singleBookContainer" id={`${this.props.id}singleBookContainer}`}
        style={{"border":"solid 1px"}}


        >
        <p>{keyArray[0]}</p>
        <p>{book1InList.title}</p>
        <p>{book1InList.author}</p>
        <p>{book1InList.genre}</p>



      </div>
    )
  }
}
