// Actions

export const logIn = ({ email, password }) => ({
  type: 'LOGIN',
  firstName: 'Jack',
  lastName: 'the Ripper',
  username: email,
  password: password,
  token: 'token',
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
  email: '',
  password: '',
  token: '',
  isLoggedIn: false,
}

// Reducer

function reducer(state = activeUser, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        password: action.password,
        token: action.token,
        isloggedIn: true,
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
