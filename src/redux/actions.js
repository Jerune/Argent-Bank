export const logIn = ({ email, password }) => ({
  type: 'LOGIN',
  payload: { email: email, password: password },
})

export const logOut = () => ({ type: 'LOGOUT' })

export const changeUserData = (data) => {
  return {
    type: 'CHANGE_USER_DATA',
    payload: data,
  }
}
