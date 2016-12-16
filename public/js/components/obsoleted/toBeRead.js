import React from 'react';
import { render } from 'react-dom';

import ListView from './listView';

import TestButton from './testButton';

export default class ToBeRead extends React.Component{

//need to go to http://127.0.0.1:3003/#/toberead to see this right now
  render(){



    return(
      <div
        id="toBeReadListContainer"
        >
        <ListView
          listCollection = {this.props.listCollection}
          listKey = {"toBeReadList"}

          />
          
      </div>
    )
  }
}
