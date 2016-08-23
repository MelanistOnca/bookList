//

//select list
export function selectList(choice) {
  // console.log(choice, 'was choice in actionCreators'); 
  return {
    type: 'SELECT_LIST',
    choice
  }
}
