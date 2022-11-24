const activeUser = {
  firstName: '',
  lastName: '',
  id: null,
  isLoggedIn: false,
}

function reducer(state = activeUser, action) {
  switch (action.type) {
    case 'LOGIN':
      return {}
    case 'LOGOUT':
      return {}
    case 'CHANGE_USER_DATA':
      return {}
    default:
      return state
  }
}

export default reducer
