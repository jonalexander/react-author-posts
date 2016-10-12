export default function change_current_author(selectedAuthorObject) {
  const CHANGE_CURRENT_AUTHOR = 'CHANGE_CURRENT_AUTHOR'
  return {
    type: CHANGE_CURRENT_AUTHOR,
    payload: selectedAuthorObject
  }
}


// this.props.store.dispatch({
//   type: 'CHANGE_CURRENT_AUTHOR',
//   payload: selectedAuthorObject
// })
