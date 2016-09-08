// const newToList = (state=[], action) => {
function newToList(state=[], action) { //this was my original syntax
  console.log('reducers/newToList.js is where both addToList and removeFromList are defined. yes, the naming conventions could be better');
  console.log(state, 'was state in reducers/newToList');
  // console.log(action,'was action in same');
  switch(action.type){
    case 'ADD_TO_LIST' :
    //i THINK the info i want will com in as action.list and action.isbn or action.book. may be state.___ instead? will need to see
      console.log(state, 'was state in ADD_TO_LIST case in reducers/newToList'); //this shows the list keys.
      // let list = action.list[0];
      // console.log(state.[], 'was state.[action.list[0]] in ADD_TO_LIST case in reducers/newToList'); //this shows the list keys.
      console.log(state[action.list[0]], 'was state[action.list[0]] in ADD_TO_LIST case in reducers/newToList'); //this shows the list keys.
      // console.log(state[action.list[0]].ISBNsToAddToList, 'was state[action.list[0]].ISBNsToAddToList in ADD_TO_LIST case in reducers/newToList'); //this shows the list keys.

      // console.log(action,'was action in same');
      console.log(action.list, 'was action.list');
      console.log(action.list[0], 'was action.list[0]');
      console.log(action.list[1],'was action.list[1]');
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

      return Object.assign(
        {},
        // state[action.list[0]],
        state, // object with the book list keys
        {
          [action.list[0]] : //this is the list that i want to add a book to. currently seems to replace the book? //[
            //  ...state[action.list[0]],
             {
                //  [action.list[0]]  : {
                 [ action.list[1].isbn13 ] :
                 {
                   "author": action.list[1].author_data[0].name,
                   "title": action.list[1].title,
                   "publisher": action.list[1].publisher_name
                  //  ,'test key':'test value'
                 }
              //  }

             }
          //  ]


        }
      )

      // {
      //   // ...state,
      //
      // }


      // return state;
    case 'REMOVE_FROM_LIST' :
      console.log();

      return state;

    default:
      return state;
  }
}

export default newToList;
