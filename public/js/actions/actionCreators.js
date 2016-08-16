//

//select list
export function selectList(choice) {
  console.log(choice, 'was choice in actionCreators'); //am not seeing this in console
  return {
    type: 'SELECT_LIST',
    choice
  }
}
