import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

// import createCORSRequest from '../cors/corsRequest';
const rp = require('request-promise');

export default class TestButton extends React.Component {

  testReq(e){
    e.preventDefault();
      console.log('requestTest fired');
      // const rp = require('request-promise');
      // http://isbndb.com/api/v2/xml/0SBOHNU4/authors?q=jemisin //this returns html
      // http://isbndb.com/api/v2/json/0SBOHNU4/authors?q=jemisin //this returns JSON
      let apiKey = '0SBOHNU4'; //this switch in naming convention is going to fuck you.
      let searchType = 'authors';
      let searchTerm = 'jemisin';

      //problem running into here is cross-server requests are not allowed (by browser??). since this request is not going to this site, i need a work-around. maybe use JSON somehow, or find an extension? NOTE: ==> DO RESEARCH

      let options = {
        uri: `http://isbndb.com/api/v2/json/${apiKey}/${searchType}`,
        qs: {
          'q': `${searchTerm}`
        },
        headers: {
          'User-Agent': 'Request-Promise'
        },
        json: true
      }
      // let options = {
      //   // url: 'http://isbndb.com/api/v2/xml/0SBOHNU4/',
      //   uri: 'http://isbndb.com/api/v2/json/0SBOHNU4/authors?q=jemisin ',
      //   // qs: {
      //   //   authors: 'jemisin'
      //   // },
      //   headers: {
      //     'User-Agent': 'Request-Promise'
      //     // ,'Access-Control-Request-Origin': 'http://127.0.0.1:3003/' //this doesn't seem to work, am jury-rigging with chrome extension for now.
      //   },
      //   json: true
      // }
      // let corsURL = 'http://isbndb.com/api/v2/xml/0SBOHNU4/authors?q=jemisin'
      // let xhr = createCORSRequest('GET', corsURL);


      // rp(options)
      //   .then( (res) => {
      //     console.log(res,'was res');
      //     // console.log($.parseJSON(res), 'was $.parseJSON(res)')
      //     // console.log(options,'was options');
      //     // console.log(res.data,'was res.data');
      //     // console.log(res.data[0],'was res.data[0]');
      //     console.log(res.data[0].book_ids,'was res.data[0].book_ids');
      //   })
      //   .catch( (err) => {
      //     console.log(options,'was options');
      //     console.log(err, 'was err');
      //   })
      // rp(xhr)
      //   .then( (res) => {
      //     console.log(res,'was res');
      //     console.log(xhr,'was xhr');
      //   })
      //   .catch( (err) => {
      //     console.log(xhr,'was xhr');
      //     console.log(err, 'was err');
      //   })


  }

  render(){

    return(
      <div id="testButtonContainer">
        <button
          onClick={this.testReq}>
          Test Button
        </button>
      </div>
    )
  }
}
