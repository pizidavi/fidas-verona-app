// Others
import { AxiosError } from 'axios';

abstract class ApiError extends AxiosError {}

export class InternalApplicationError extends Error {
  constructor() {
    super('errors:internalApplicationError');
  }
}

export class NetworkMissingError extends ApiError {
  constructor() {
    super('errors:networkMissingError');
  }
}

export class AuthError extends ApiError {
  constructor() {
    super('Auth failed');
  }
}

export class NoLocalAuthError extends ApiError {
  constructor() {
    super('User not found in local storage');
  }
}
