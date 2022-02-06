import {isHasEmptyParam} from "../functions.service";
import {PropertyRequiredError} from "../exceptions/PropertyRequiredError";
import {Http} from "../http.service";

class AuthApi {

  static get api() {
    return apiMapping;
  }

  static user = {
    signInByPassword: (username, password) => {
      if (isHasEmptyParam(username, password)) throw new PropertyRequiredError({username, password});

      //TODO: change username to email
      return new Http()
        .useEndPoint(this.api.user.signInByPassword.url)
        .useMethod(Http.METHOD.POST)
        .usePayload({username, password})
        .useFingerPrint()
        .call();
    },

    signUp: (user) => {
      if(isHasEmptyParam(user)) throw new PropertyRequiredError(user);

      //TODO: need delete
      user.fingerprint = 'test';

      return new Http()
        .useEndPoint(this.api.user.signUp.url)
        .useMethod(Http.METHOD.POST)
        .usePayload(user)
        .useFingerPrint()
        .call();
    }
  }

  static workspace = {
    isExist: (workspaceName) => {
      if (isHasEmptyParam(workspaceName)) throw new PropertyRequiredError({workspaceName});

      return new Http()
        .useEndPoint(this.api.workspace.isExist.url + '/' + workspaceName)
        .useMethod(Http.METHOD.POST)
        .call();
    }
  }
}

const apiConstants = {
  rootUrl: process.env.VUE_APP_SERVER_API + '/auth',
  user: '/user',
  workspace: '/workspace',
  signIn: '/signin',
  signUp: '/signup',
  isExist: '/isExist'
}

const apiMapping = {
  url: apiConstants.rootUrl,
  user: {
    url: apiConstants.rootUrl + apiConstants.user,
    signInByPassword: {
      url: apiConstants.rootUrl + apiConstants.user + apiConstants.signIn,
      call: AuthApi.user.signInByPassword
    },
    signUp: {
      url: apiConstants.rootUrl + apiConstants.user + apiConstants.signUp,
      call: AuthApi.user.signUp
    }
  },
  workspace: {
    url: apiConstants.rootUrl + apiConstants.workspace,
    isExist: {
      url: apiConstants.rootUrl + apiConstants.workspace + apiConstants.isExist,
      call: AuthApi.workspace.isExist
    }
  }
}

export {AuthApi}
