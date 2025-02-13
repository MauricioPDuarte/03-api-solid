export class UserAlreadyExistsError extends Error {
  constructor() {
    super('EMAIL_ALREADY_EXISTS')
  }
}
