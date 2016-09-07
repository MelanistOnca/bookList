import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import Result from './result';

export default class Results extends React.Component {

  // authorsBookLoop(authorsBookTitleArray){
  //   //this should probably be in a helper?
  //   console.log(authorsBookTitleArray, 'was authorsBookTitleArray in authorsBookLoop in components/results.js');
  //   let booksPerAuthor = authorsBookTitleArray.length;
  //
  //   let readableArray = []
  //
  //   for (let o = 0; o < booksPerAuthor ; o++) {
  //     console.log(authorsBooksTitleArray[o], 'was booksPerAuthor[o] in same');
  //     let stamp = new Date().getTime();
  //     let uniqueStamp = `${o}${stamp}`;
  //     let humanReadableTitle =
  //     authorsBooksTitleArray[o].split('_').join(' ');
  //     readableArray.push(<div
  //       className={"bookFromSearchedAuthor"}
  //       key={uniqueStamp}
  //       id={uniqueStamp}
  //       style={{"border":"solid 1px"}}
  //       >
  //       {humanReadableTitle}
  //     </div>)
  //
  //
  //   }
  //
  //   return readableArray
  // }

//NOTE: building this as a separate component, but likely this and ListView should be generalized so i only need one component for both.
  render(){

    // console.log(this.props, 'this.props. in components/results.js');


    return(
      <div id='resultsContainer'>
        {/*<ListView

          />*/}

          <Result
            selectedSearchType={this.props.selectedSearchType}
            searchResults={this.props.searchResults}
            receiveResults={this.props.receiveResults}
            />
      </div>
    )
  }
}
