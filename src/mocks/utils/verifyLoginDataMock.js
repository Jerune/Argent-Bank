// @ts-nocheck
import { USER_DATA } from '../userData'

export function verifyIfMockedDataExistsInDatabase(formData) {
  const currentUserLogin = USER_DATA.filter(
    (user) => user.email == formData.email,
  )[0]

  if (currentUserLogin !== undefined) {
    if (currentUserLogin.password === formData.password) {
      return {
        data: {
          status: 200,
          message: 'User successfully logged in',
          body: {
            token: 'fdwufygo2oeifyf78w87730',
          },
        },
        error: undefined,
      }
    } else {
      return {
        data: undefined,
        error: {
          status: 400,
          data: {
            message: 'Error: Password is invalid',
            status: 400,
          },
        },
      }
    }
  } else {
    return {
      data: undefined,
      error: {
        status: 400,
        data: {
          message: 'Error: User not found!',
          status: 400,
        },
      },
    }
  }
}
