import {isHasEmptyParam} from "../functions.service";
import {PropertyRequiredError} from "../exceptions/PropertyRequiredError";
import {ServerError} from "./ServerError";

class ServerErrorHandler {

  static getErrorHandlerByErrorCode(errorCode, eventNameByErrorCode) {
    if (isHasEmptyParam(eventNameByErrorCode)) throw new PropertyRequiredError(eventNameByErrorCode);

    return eventNameByErrorCode[errorCode]
      ? ServerErrorHandler.failedError
      : ServerErrorHandler.serverError;
  }

  static failedError(errorCode, eventName) {
    const errorMessage = ServerError.getErrorMessageByCode(errorCode);

    this.$emit(eventName, errorMessage);
    this.$emit('on-failed', errorMessage);
  }

  static serverError(errorCode, ...any) {
    this.$emit('on-server-error', ServerError.getErrorMessageByCode(errorCode));
  }

}

export {ServerErrorHandler}