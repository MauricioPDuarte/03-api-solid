export class InvalidCredentialsError extends Error {
  constructor() {
    super('USER_CREDENTIALS_ERROR')
  }
}
