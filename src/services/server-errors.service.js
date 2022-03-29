import {ERROR_BY_CODE as getMessageByCode} from "@jira-killer/error-codes";
import {Notification, NOTIFICATION_VARIANTS} from "./notification/Notification";

const getErrorCodeFromResponse = (error) => {
  return error?.response?.data?.code;
}

const getErrorMessageByErrorCode = (code) => {
  return getMessageByCode.get(code) ? getMessageByCode.get(code) : {title: 'Error', message: 'Code not found'};
}

const getNotificationByErrorMessage = (message, variant) => {
  return new Notification(message?.title, message?.message, variant);
}

const getNotificationByErrorResponse = (error, variant) => {
  const errorCode = getErrorCodeFromResponse(error);
  const errorMessage = getErrorMessageByErrorCode(errorCode);
  return getNotificationByErrorMessage(errorMessage, variant);
}

const getServerErrorNotification = () => {
  return new Notification('Internal Error', 'Please contact with system administrator', NOTIFICATION_VARIANTS.danger);
}

export {
  getErrorMessageByErrorCode,
  getErrorCodeFromResponse,
  getNotificationByErrorMessage,
  getNotificationByErrorResponse,
  getServerErrorNotification
}