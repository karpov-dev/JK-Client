import {getErrorCodeFromResponse} from "./server-errors.service";

const getServerErrorEventPayload = (error) => {
  return {errorCode: getErrorCodeFromResponse(error), error}
}

const fireErrorEvent = (name, error, component) => {
  component.$emit(name, getServerErrorEventPayload(error));
}

export {getServerErrorEventPayload, fireErrorEvent}