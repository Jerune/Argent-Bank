export const logIn = () => ({ type: 'LOGIN' })

export const logOut = () => ({ type: 'LOGOUT' })

export const changeUserData = (dataType) => {
  return {
    type: 'CHANGE_USER_DATA',
    payload: dataType,
  }
}
