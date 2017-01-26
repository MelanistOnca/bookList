// const newToList = (state=[], action) => {
function newToList(state=[], action) { //this was my original syntax
  // console.log('reducers/newToList.js is where both addToList and removeFromList are defined. yes, the naming conventions could be better');
  // console.log(state, 'was state in reducers/newToList');
  // console.log(action,'was action in same');
  switch(action.type){
    case 'ADD_TO_LIST' : //may need to make cases for each list?
    //i THINK the info i want will com in as action.list and action.isbn or action.book. may be state.___ instead? will need to see
      console.log(state, 'was state in ADD_TO_LIST case in reducers/newToList'); //this shows the list keys. //as empty objects??
      console.log(action, 'was action in ADD_TO_LIST case in reducers/newToList'); //this shows the list object, which has keys 'list' and 'book'. //i am not sure where the list object wrap over list/book is coming from.
      // let selectedListKey = action.list.list;
      // console.log(selectedListKey, 'was selectedListKey in ADD_TO_LIST case in reducers/newToList');
      // console.log(action.list.list, 'was action.list.list in same');
      // console.log(action.list.book.isbn13, 'was action.list.book.isbn13 in same');
      // console.log(action.list.book.author_data[0].name, 'was action.list.book.author_data[0].name in same');
      // console.log(action.list.book.title, 'was action.list.book.title in same');
      // console.log(action.list.book.publisher_name, 'was action.list.book.publisher_name in same');

      // return {
      //   ...state,
      //   [action.list.list]:{
      //     "author": [action.list.book.author_data[0].name],
      //     "title": [action.list.book.title],
      //     "publisher": [action.list.book.publisher_name]
      //   }
      //
      // }
      // let authorName = this.props.matchedISBN.author_data ? (this.props.matchedISBN.author_data[0] ? this.props.matchedISBN.author_data[0].name : 'No author creditted') : 'No author creditted'; //this and its use below feels like a violation of state and/or the functional paradigm? i should probably have this check on when we receive data from isbndb query? maybe?
      /**/
      return {
        ...state,

          [action.list.list]/*frontend list name*/: {
            [action.list.book.isbn13]/*book's isbn13*/: {
                "author": action.list.book.author,
                "title": action.list.book.title,
                "publisher": action.list.book.publisher_name
            }
          }
      } //this allows a single book to be added to each of the lists, but does not allow for new .isbn13 values to create new keys

      //NOTE NOTE NOTE

      // let stateReplace =  {} //would need to copy state to this object, then add on to it? then probably do something like ...state, stateReplace   in the return below.

      // return {
      //   ...state,
      //
      //
      //       [action.list.book.isbn13]: {
      //           "author": action.list.book.author_data[0].name,
      //           "title": action.list.book.title,
      //           "publisher": action.list.book.publisher_name
      //       }
      //
      // } //this adds a new key to the book lists equivalent to .isbn13 value. if i change the search to another valid isbn13, another key is added, NOT replaced

      // return {
      //   ...state[action.list.list],
      //       [action.list.book.isbn13]: {
      //           "author": action.list.book.author_data[0].name,
      //           "title": action.list.book.title,
      //           "publisher": action.list.book.publisher_name
      //       }
      //
      // } // this erases the list keys that should be at state[action.list.list] and replaces it with the .isbn13


      // let list = action.list[0];
      // console.log(state.[], 'was state.[action.list[0]] in ADD_TO_LIST case in reducers/newToList'); //this shows the list keys.
      // console.log(state[action.list[0]], 'was state[action.list[0]] in ADD_TO_LIST case in reducers/newToList'); //this shows the list keys.
      // console.log(state[action.list[0]].ISBNsToAddToList, 'was state[action.list[0]].ISBNsToAddToList in ADD_TO_LIST case in reducers/newToList'); //this shows the list keys.

      // console.log(action,'was action in same');
      // console.log(action.list, 'was action.list');
      // console.log(action.list[0], 'was action.list[0]');
      // console.log(action.list[1],'was action.list[1]');
      // console.log(state[action.list[0]] , `was state[${action.list[0]}] was state[action.list[0]] and we want to get this as a string`); //this returns the LISTNAME
      // console.log( Object.keys(state[action.list[0]])
        //  , `was Object.keys(${state[action.list[0]]}) was Object.keys(state[action.list[0]]) `);
      // console.log(action.list[0][0] , 'was action.list[0][0] ');
      // let objKeys = Object.keys(state[ action.list[0] ]);
        // console.log(objKeys, 'was objKeys');
      // console.log(
      //   state[ action.list[0] ][ objKeys ] ,
      //   'was state[ action.list[0] ][ objKeys ]'
      // );

      // let stateReplace ={};

      // let otherThingy =
      // objKeys.forEach( (el) =>{
      //   console.log(el,'logging each el');
      //   // console.log(state[ action.list[0] ][ el ], 'was state[ action.list[0] ][ el ]');
      //   let stateRepVal = state[ action.list[0] ][ el ];
      //   console.log(stateRepVal, 'was stateRepVal');
      //   stateReplace[el] = stateRepVal;
      //   console.log(stateReplace[el], 'stateReplace[el] just before returning it in the ForEach loop');
      //   return stateReplace[el]
      // }
      //
      //
      // )
      // console.log(stateReplace, 'stateReplace');
      // console.log(stateReplace.valueOf, 'stateReplace.valueOf');
      // console.log(stateReplace.valueOf(), 'stateReplace.valueOf()');
      // // console.log(otherThingy(), 'otherThingy()');
      //
      // stateReplace[  action.list[1].isbn13  ] = {
      //   "author": action.list[1].author_data[0].name,
      //   "title": action.list[1].title,
      //   "publisher": action.list[1].publisher_name
      //  //  ,'test key':'test value'
      // }

      // console.log(action.list[1],'was action.list[1]');
      // console.log(action.list[1].author_data[0].name,'was action.list[1].author_data.name');
      // console.log(action.list[1].title,'was action.list[1].title');
      // console.log(action.list[1].publisher_name,'was action.list[1].publisher_name');
      // action.list[0] returns the selected list string
      // action.list[1] returns the book object.
      // goal: add the
      // action.list[1]
      //   .author_data[0].name
      //   .title
      //   .publisher_name
      // to the .isbn13 key in the
      // [ action.list[0] ].ISBNsToAddToList object

      //state coords for the above information:
      // state.[ action.list[0] ].ISBNsToAddToList.[ action.list[1].isbn13 ] = {
      // "author": action.list[1].author_data[0].name,
      // "title": action.list[1].title,
      // "publisher": action.list[1].publisher_name
      // }

      // return Object.assign(
      //   {},
      //   state,
      //   {
      //     [action.list[0]] : [
      //       ...state[action.list[0]],
      //       {
      //           [action.list[0]]  : {
      //           [ action.list[1].isbn13 ] :
      //           {
      //             "author": action.list[1].author_data[0].name,
      //             "title": action.list[1].title,
      //             "publisher": action.list[1].publisher_name
      //           }
      //         }
      //       }
      //     ]
      //   }
      // ) //the result of this is additional levels inside the object. not what i'm trying for
      // /////

      // return Object.assign(
      //   {},
      //   // state[action.list[0]],
      //   state, // object with the book list keys
      //   {
      //     [action.list[0]] : stateReplace //this is almost CERTAINLY the wrong way to do this, but: results.
      //   }
      // )
        // {
        //
        //   // [action.list[0]]: {
        //   [stateReplace]//: {
            // [action.list[0]]: //this is the list that i want to add a book to. currently seems to replace the book? //[
            //    ...state[action.list[0]],
            //    {
            //        [action.list[0]]  : {
            //        [state[action.list[0]]] : state[action.list[0]], //thing's
            //       [ action.list[0] ]:      [state[action.list[0]]]  ,
            //       [state[action.list[0]]] :      state[action.list[0]]  ,
            //        [action.list[0]] : stateReplace,
            //       [stateReplace] : stateReplace,
            //       stateReplace.valueOf(),
            //        state[action.list[0]] : [state[action.list[0]]]
            //        [ action.list[1].isbn13 ] :
            //        {
            //          "author": action.list[1].author_data[0].name,
            //          "title": action.list[1].title,
            //          "publisher": action.list[1].publisher_name
            //         //  ,'test key':'test value'
            //        }
                //  }

              //  }
            //  ]
          // }



        // }
      // )

      // {
      //   // ...state,
      //
      // }


      return state;
    // case 'REMOVE_FROM_LIST' :
    //
    //   console.log(state, 'was state in REMOVE_FROM_LIST case in reducers/newToList');
    //   //returns object of format
    //   // {
    //   //   currentlyReadingList,
    //   //   haveReadList,
    //   //   toBeReadList
    //   // } //though each appears empty here?
    //   console.log(action, 'was action in REMOVE_FROM_LIST case in reducers/newToList')
    //   // returns object of format
    //   {
    //     book_isbn13: "9780765309402",
    //     list: "toBeReadList",
    //     listTranlate, //object from store
    //     user, //object from store
    //   }
    //   // NOTE NOTE start of NOTE
    //   // this is the add to list from above, for reference when removing
    //   // return {
    //   //   ...state,
    //   //
    //   //     [action.list.list]/*frontend list name*/: {
    //   //       [action.list.book.isbn13]/*book's isbn13*/: {
    //   //           "author": action.list.book.author_data[0].name,
    //   //           "title": action.list.book.title,
    //   //           "publisher": action.list.book.publisher_name
    //   //       }
    //   //     }
    //   // } //this allows a single book to be added to each of the lists, but does not allow for new .isbn13 values to create new keys
    //   return state;
    //   // return {
    //   //   ...state,
    //   //   delete state.
    //   // }
    case 'GET_LIST' :
    // console.log('getgetgetgetget');
    console.log(state, 'was state in GET_LIST case in reducers/newToList');
    console.log(action, 'was action in GET_LIST case in reducers/newToList');
    // console.log('getting list from DB and setting store list to it');
    // console.log('getgetgetgetget');
    // console.log(' i may want to be using the listColletion reducer instead of this, the newToList reducer');

      return state;
      // return {
      //   ...state,
      //
      // }

    default:
      return state;
  }
}

export default newToList;
