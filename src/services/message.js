import { HTTP_STATUS } from '../constants';

export class Created {
  constructor(message = `created`) {
    this.code = HTTP_STATUS.CREATED;
    this.message = message;
  }
}

export class OK {
  constructor(message = `ok`) {
    this.code = HTTP_STATUS.OK;
    this.message = message;
  }
}
