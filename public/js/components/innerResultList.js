import React from 'react';
import { render } from 'react-dom';

//NOTE: this should probably be refactored to be substituted with a ListView

export default class InnerResultList extends React.Component {


  render(){
    //NOTE: the startingPoint and i PROPS are non-stateful and passed from result.js. FIX THISSSS
    console.log(this.props, 'was this.props in components/innerResultList');
    console.log(this.props.startingPoint, 'was this.props.startingPoint in components/innerResultList');
    // console.log(this.props.startingPoint[this.props.i], 'was this.props.startingPoint[this.props.i] in components/innerResultList');
    // console.log(this.props.startingPoint[this.props.i].book_ids, 'was this.props.startingPoint[this.props.i].book_ids in components/innerResultList');
    // let booksPerAuthor = this.props.startingPoint[this.props.i] ? this.props.startingPoint[this.props.i].length : 0 ; //this may be valid when i get this component stateful again
    let booksPerAuthor = this.props.startingPoint[this.props.i].book_ids ? this.props.startingPoint[this.props.i].book_ids.length : 0 ;
    console.log(booksPerAuthor, 'was booksPerAuthor in components/innerResultList');

    let authorsBooksTitleArray = this.props.startingPoint[this.props.i] ? this.props.startingPoint[this.props.i].book_ids : [];

    let readableArray = [];
    console.log(readableArray, 'was readableArray before loop');
    for (let o = 0; o < booksPerAuthor ; o++) {
      console.log(authorsBooksTitleArray[o], 'was booksPerAuthor[o] in same');
      let stamp = new Date().getTime();
      let uniqueStamp = `${o}${stamp}`;
      let humanReadableTitle =
      authorsBooksTitleArray[o].split('_').join(' ');
      readableArray.push(
        <div
        className={"bookFromSearchedAuthor"}
        key={uniqueStamp}
        id={uniqueStamp}
        style={{"border":"solid 1px"}}
        >
        {humanReadableTitle}
        inner loop text
        </div>
      )


    }
    console.log(readableArray, 'was readableArray after loop');

    return(
      <div id="innerResult">
        placeholder inner result
        {readableArray}
      </div>
    )
  }
}
