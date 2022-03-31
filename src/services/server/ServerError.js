import {ERROR_BY_CODE} from "@jira-killer/constants";
import {ServerErrorHandler} from "./ServerErrorHandler";

class ServerError {

  static getErrorCodeByError(error) {
    return error?.response?.data?.code;
  }

  static getErrorMessageByCode(code) {
    return ERROR_BY_CODE.get(code)
      ? ERROR_BY_CODE.get(code)
      : {title: 'Error', message: 'Code not found'};
  }

  static getErrorMessageByError(error) {
    const errorCode = ServerError.getErrorCodeByError(error);

    return ServerError.getErrorMessageByCode(errorCode);
  }

  static handleErrorResponse(error, errorEventByErrorCode, component) {
    const errorCode = ServerError.getErrorCodeByError(error);
    const handler = ServerErrorHandler.getErrorHandlerByErrorCode(errorCode, errorEventByErrorCode);
    handler.bind(component)(errorCode, errorEventByErrorCode[errorCode]);
  }

}

export {ServerError}