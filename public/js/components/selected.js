import React from 'react';
import { render } from 'react-dom';

// import SingleBook from './singleBook';
import ListView from './listView';
import SearchFor from './searchFor';

export default class Selected extends React.Component {

  render(){


    let key = this.props.selectedListKey;

    let listTitle = (this.props.listCollection[key] ? this.props.listCollection[key].title : undefined);
    // let listTitle = (this.props.listCollection[key] ? this.props.listCollection[key].title : undefined);

    // console.log(this.props.selectedSearchType, 'was this.props.selectedSearchType in componenets/selected.js');
    return(
      <div id = "selectedListKeyContainer">
        <SearchFor
          updateSearchTerm={this.props.updateSearchTerm}
          searchTerm={this.props.searchTerm}
          updateSearchType={this.props.updateSearchType}
          searchType={this.props.searchType}
          selectedSearchType={this.props.selectedSearchType}
          searchResults={this.props.searchResults}
          receiveResults={this.props.receiveResults}
          selectedListKey={this.props.selectedListKey}
          addToList={this.props.addToList}
          removeFromList={this.props.removeFromList}
          />
        <p>{listTitle}</p>
        <ListView
          listKey={this.props.selectedListKey}
          listCollection={this.props.listCollection}
          />
      </div>
    )
  }
}
