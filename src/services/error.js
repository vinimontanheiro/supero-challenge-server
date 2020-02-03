import { HTTP_STATUS } from '../constants';

export class Unauthorized extends Error {
  constructor(message = `unauthorized`) {
    super(message);
    this.code = HTTP_STATUS.UNAUTHORIZED;
    this.name = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequest extends Error {
  constructor(message = `bad_request`) {
    super(message);
    this.code = HTTP_STATUS.BAD_REQUEST;
    this.name = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class CustomError extends Error {
  constructor(code, message = `Error`) {
    super(message);
    this.code = code || HTTP_STATUS.INTERNAL_SERVER_ERROR;
    this.name = message;
    Error.captureStackTrace(this, this.constructor);
  }
}
