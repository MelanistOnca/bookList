import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import ListView from './listView'; //need to figure out a good way of importing search results into this element.

export default class Results extends React.Component {

//NOTE: building this as a separate component, but likely this and ListView should be generalized so i only need one component for both.
  render(){

    // console.log(this.props, 'this.props. in components/results.js');

    let resultsView=[];
    let startingPoint = this.props.searchResults[0].data; //is an array of objects when searching for "scalzi" as "authors"
    // console.log(startingPoint.length, 'was startingPoint.length');

    // let startingPointLength =
    // startingPoint.length ?  startingPoint.length : 0 // i was able to get rid of this ternary by putting in dummy initial data so that startingPoint starts off as 0, but i don't like it.
    // console.log(startingPointLength, 'was startingPointLength');
    // let spLength = startingPoint.length || 0;


    let spLength = startingPoint ? startingPoint.length : 0;
    // console.log(test,'was test after turnary');

    // resultsView.forEach( () => {
      // resultsView.push(
      //   <div>
      //
      //   </div>
      // )
    // })
    for(let i = 0; i < spLength ; i++){
      let stamp = new Date().getTime();
      let uniqueStamp = `${i}${stamp}`;
      resultsView.push(
        <div
          key={uniqueStamp}
          id={uniqueStamp}
          className="searchResultSingle"
          style={{"border":"solid 1px"}}>
          <p>{startingPoint[i].first_name} {startingPoint[i].last_name}</p>
          <p>put a loop here to go through their books</p>

        </div>
      )
    }

    return(
      <div id='resultsContainer'>
        {/*<ListView

          />*/}

          {resultsView}
      </div>
    )
  }
}
