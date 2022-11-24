const activeUser = {
  firstName: '',
  lastName: '',
  id: null,
  isLoggedIn: false,
}

function reducer(state = activeUser, action) {
  switch (action.type) {
    case 'CHANGE_COUNT':
      return {}
    case 'ADD_FAVORITE_THING':
      return {}
    default:
      return state
  }
}

export default reducer
