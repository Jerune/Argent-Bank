export const logIn = ({ username, password }) => ({
  type: 'LOGIN',
  payload: { username: username, password: password },
})

export const logOut = () => ({ type: 'LOGOUT' })

export const changeUserData = (data) => {
  return {
    type: 'CHANGE_USER_DATA',
    payload: data,
  }
}
