// Actions

export const SignIn = ({ email, password }) => ({
  type: 'SIGN_IN',
  firstName: 'Jack',
  lastName: 'the Ripper',
  email: email,
  password: password,
  token: 'token',
})

export const SignOut = () => ({ type: 'SIGN_OUT' })

export const changeUserData = ({ firstName, lastName }) => {
  return {
    type: 'CHANGE_USER_DATA',
    firstName: firstName,
    lastName: lastName,
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
    case 'SIGN_IN':
      return {
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        password: action.password,
        token: action.token,
        isloggedIn: true,
      }
    case 'SIGN_OUT':
      return { ...activeUser }
    case 'CHANGE_USER_DATA':
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
      }
    default:
      return state
  }
}

export default reducer
