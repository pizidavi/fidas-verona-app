// Others
import { AxiosError } from 'axios';

abstract class AppError extends Error {}
abstract class ApiError extends AxiosError {}

export class InternalApplicationError extends AppError {
  constructor() {
    super('errors:internalApplicationError');
  }
}

export class NetworkMissingError extends ApiError {
  constructor() {
    super('errors:networkMissingError');
  }
}

export class NoLocalAuthError extends AppError {
  constructor() {
    super('User not found in local storage');
  }
}
