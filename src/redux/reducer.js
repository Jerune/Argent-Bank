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

// Reducer

export const userSlice = createSlice({
  name: 'user',
  initialState: activeUser,
  reducers: {
    signIn: (state, { token }) => {
      return {
        ...state,
        token: token,
        isLoggedIn: true,
      }
    },
    signOut: () => {
      return { ...activeUser }
    },
    changeUserData: (state, { firstName, lastName }) => {
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
