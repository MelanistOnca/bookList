import React from 'react';
import { render } from 'react-dom';

import ListView from './listView'; //need to figure out a good way of importing search results into this element.
import InnerResultList from './innerResultList';

export default class Result extends React.Component {


  render(){

    // console.log(this.props, 'this.props in components/result.js');
        let resultsView=[];
        let startingPoint = this.props.searchResults ? this.props.searchResults[0].data : 0 ; //is an array of objects when searching for "scalzi" as "authors"
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

        //
        // for (let o = 0; o < startingPoint[i].book_ids.length)

        for(let i = 0; i < spLength ; i++){
          let stamp = new Date().getTime();
          let uniqueStamp = `${i}${stamp}`;
          let authorsBookTitleArray = startingPoint[i] ? startingPoint[i].book_ids : [] ; // ehhhhh
          // console.log(spLength, 'spLength in for loop in components/result.js');

          resultsView.push(

            <div
              key={uniqueStamp}
              id={uniqueStamp}
              className="searchResultSingle"
              style={{"border":"solid 1px"}}>
              <p>{startingPoint[i].first_name} {startingPoint[i].last_name}</p>
              <p>text</p>
              <InnerResultList
                i={i}
                startingPoint={startingPoint}
                searchResult={this.props.searchResult}
                />

            </div>
          )
        }


    return(
      <div id="resultList">

        {resultsView}

      </div>

    )
  }
}
