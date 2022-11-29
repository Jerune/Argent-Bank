// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'

// Initial State

const activeUser = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  token: '',
  isLoggedIn: false,
}

// Actions

export const SignIn = ({ token }) => ({
  type: 'signIn',
  token,
})

// export const SignOut = () => ({ type: 'SIGN_OUT' })

// export const changeUserData = ({ firstName, lastName }) => {
//   return {
//     type: 'CHANGE_USER_DATA',
//     firstName: firstName,
//     lastName: lastName,
//   }
// }

// Reducer

export const userSlice = createSlice({
  name: 'user',
  initialState: activeUser,
  reducers: {
    signIn: (state, data) => {
      const { token } = data
      return {
        ...state,
        token: token,
        isLoggedIn: true,
      }
    },
    signOut: () => {
      return { ...activeUser }
    },
    changeUserData: (state, data) => {
      const { firstName, lastName } = data
      return {
        ...state,
        firstName: firstName,
        lastName: lastName,
      }
    },
    default: (state) => {
      return state
    },
  },
})

export const { signIn, signOut, changeUserData } = userSlice.actions
export default userSlice.reducer
