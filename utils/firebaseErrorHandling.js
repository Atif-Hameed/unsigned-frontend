export const firebaseErrorMessages = {
  'auth/invalid-credential': {
    code: 400,
    message: 'INVALID_LOGIN_CREDENTIALS',
    errors: [
      {
        message: 'INVALID_LOGIN_CREDENTIALS',
        domain: 'global',
        reason: 'invalid'
      }
    ]
  },
  'auth/user-not-found': {
    code: 404,
    message: 'USER_NOT_FOUND',
    errors: [
      {
        message: 'User not found, please sign up or try again.',
        domain: 'global',
        reason: 'not_found'
      }
    ]
  },
  'auth/wrong-password': {
    code: 400,
    message: 'WRONG_PASSWORD',
    errors: [
      {
        message: 'The password is incorrect. Please try again.',
        domain: 'global',
        reason: 'invalid'
      }
    ]
  },
  'auth/email-already-in-use': {
    code: 400,
    message: 'EMAIL_EXISTS',
    errors: [
      {
        message: 'Email address already exist',
        domain: 'global',
        reason: 'invalid'
      }
    ]
  },
  // Add more mappings as needed
};
