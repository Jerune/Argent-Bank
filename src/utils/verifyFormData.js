// @ts-nocheck
import { USER_DATA } from '../mocks/userData'

export function verifyIfDataExistsInDatabase(formData) {
  const currentUserLogin = USER_DATA.filter(
    (user) => user.username == formData.username,
  )[0]

  if (currentUserLogin !== undefined) {
    if (currentUserLogin.password === formData.password) {
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
      errorLocation: 'usernameInput',
      error: 'Unknown username',
    }
  }
}
