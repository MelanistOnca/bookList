import React from 'react';
import { render } from 'react-dom';

export default class SingleBook extends React.Component {


  render(){
    console.log(this.props.pickedList,'this.props.pickedList in singleBook.js');
    console.log(this.props.pickedList[0],'this.props.pickedList[0] in singleBook.js');
    console.log(Object.keys(this.props.pickedList[0]),'Object.keys(this.props.pickedList[0]) in singleBook.js');
    let keyArray = Object.keys(this.props.pickedList[0]);

    console.log(keyArray, 'keyArray in same, should be same');
    console.log(keyArray[0],'keyArray[0] in same');


    //map the key array to get a list of names, then use that to list the values of those keys too. probably in same map function
    return(
      <div className="singleBookContainer" id={`${this.props.id}singleBookContainer}`}



        >
        {keyArray}

      </div>
    )
  }
}
