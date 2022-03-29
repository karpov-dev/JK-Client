import {ERROR_BY_CODE as getMessageByCode} from "@jira-killer/error-codes/src/constants/error-by-code.constants";

class ServerError {

  error;

  static getErrorCodeByError(error) {
    return error?.response?.data?.code;
  }

  static getErrorMessageByCode(code) {
    return getMessageByCode.get(code)
      ? getMessageByCode.get(code)
      : {title: 'Error', message: 'Code not found'};
  }

  constructor(response) {
    this.error = response;
  }

  getErrorCode() {
    return ServerError.getErrorCodeByError(this.error);
  }

  getErrorMessage() {
    const errorCode = this.getErrorCode();

    return ServerError.getErrorMessageByCode(errorCode);
  }

}

export {ServerError}