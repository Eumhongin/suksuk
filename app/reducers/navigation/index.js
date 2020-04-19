const navigationState = (state = 'Home', action) => {
  switch (action.type) {
    case 'NAVIGATION/ROOT/CHANGE':
      return action.payload
    default:
      return state
  }
}
export default navigationState