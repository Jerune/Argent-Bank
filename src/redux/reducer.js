// Actions

export const logIn = ({ username, password }) => ({
  type: 'LOGIN',
  username: username,
  password: password,
})

export const logOut = () => ({ type: 'LOGOUT' })

export const changeUserData = (data) => {
  return {
    type: 'CHANGE_USER_DATA',
    payload: data,
  }
}

// Initial State

const activeUser = {
  firstName: '',
  lastName: '',
  id: null,
  isLoggedIn: false,
}

// Reducer

function reducer(state = activeUser, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        firstName: action.username,
        lastName: action.password,
      }
    case 'LOGOUT':
      return {}
    case 'CHANGE_USER_DATA':
      return {}
    default:
      return state
  }
}

export default reducer
