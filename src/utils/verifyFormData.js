import { USER_DATA } from '../mocks/userData'

export function verifyIfDataExistsInDatabase(userData) {
  const usernameExistsInDatabase = USER_DATA.some((user) => {
    user.username.includes(userData.username)
  })
  if (usernameExistsInDatabase) {
    const isPasswordCorrect = USER_DATA.some((user) => {
      user.password.includes(userData.password)
    })
    if (isPasswordCorrect) {
      return {
        success: true,
      }
    } else {
      return {
        success: false,
        errorLocation: 'passwordInput',
        error: 'Wrong password',
      }
    }
  } else {
    return {
      success: false,
      errorLocation: 'userNameInput',
      error: 'Unknown username',
    }
  }
}
