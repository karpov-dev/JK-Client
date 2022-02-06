import axios from "axios";
import {isEmptyParams, isHasEmptyParam} from "./functions.service";
import {PropertyRequiredError} from "./exceptions/PropertyRequiredError";
import store from "../store";

class Http {

  static METHOD = {
    GET: 'GET',
    POST: 'POST'
  }

  static HEADER = {
    authorization: 'Authorization',
    userAgent: 'User-Agent'
  }

  accessToken = null;
  fingerPrint = null;
  endPoint = null;
  method = Http.METHOD.GET;
  config = {
    headers: {}
  };
  payload = {};

  call() {
    console.log(this.payload)
    return axios({
      method: this.method,
      url: this.endPoint,
      data: this.payload
    })
  }

  usePayload(payload) {
    this.payload = isHasEmptyParam(payload) ? {} : payload;
    return this;
  }

  useMethod(method) {
    if (isEmptyParams(method)) throw new PropertyRequiredError(method);

    this.method = method;
    return this;
  }

  useEndPoint(endPoint) {
    if (isEmptyParams(endPoint)) throw new PropertyRequiredError(endPoint);

    this.endPoint = endPoint;
    return this;
  }

  useAccessToken(accessToken) {
    this.accessToken = isEmptyParams(accessToken) ? store.getters["user/getAccessToken"] : accessToken;
    this.config.headers[Http.HEADER.authorization] = 'bearer ' + this.accessToken;

    return this;
  }

  useFingerPrint(fingerPrint) {
    this.fingerPrint = isEmptyParams(fingerPrint) ? window.navigator.userAgent : fingerPrint;
    this.config.headers[Http.HEADER.userAgent] = this.fingerPrint;

    return this;
  }

}

export { Http }