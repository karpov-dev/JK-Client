import {isHasEmptyParam} from "../functions.service";
import {PropertyRequiredError} from "../exceptions/PropertyRequiredError";
import {Http} from "../http/Http";
import {api} from "../../api/api";

class ServerApi {

  static get api() {
    return apiMapping;
  }

  static user = {
    signInByCredentials: (email, password) => {
      if (isHasEmptyParam(email, password)) throw new PropertyRequiredError(email, password);

      return new Http()
        .useEndPoint(this.api.user.signIn.credentials.url)
        .useMethod(Http.METHOD.POST)
        .usePayload({email, password})
        .useFingerPrint()
        .call();
    },

    signInByCode: ({email, code}) => {
      if (isHasEmptyParam(email, code)) throw new PropertyRequiredError(email, code);

      return new Http()
        .useEndPoint(this.api.user.signIn.code.url)
        .useMethod(Http.METHOD.POST)
        .usePayload({email, code})
        .call();
    },

    signUp: (firstName, lastName, email, password) => {
      if(isHasEmptyParam(firstName, lastName, email, password)) {
        throw new PropertyRequiredError(firstName, lastName, email, password);
      }

      return new Http()
        .useEndPoint(this.api.user.signUp.url)
        .useMethod(Http.METHOD.POST)
        .usePayload({firstName, lastName, email, password})
        .call();
    },

    activate: ({email, code}) => {
      if (isHasEmptyParam(email, code)) throw new PropertyRequiredError(email, code);

      return new Http()
        .useEndPoint(this.api.user.activate.url)
        .useMethod(Http.METHOD.POST)
        .usePayload({email, code})
        .call();
    },

    isActive: (email) => {
      if (isHasEmptyParam(email)) throw new PropertyRequiredError(email);

      return new Http()
        .useEndPoint(this.api.user.isActive.url)
        .useMethod(Http.METHOD.GET)
        .useParamInUrl(email)
        .call();
    }
  }

  static code = {
    send: (email, codeType) => {
      if (isHasEmptyParam(email, codeType)) throw new PropertyRequiredError(email, codeType);

      return new Http()
        .useEndPoint(this.api.code.send.email.url)
        .useMethod(Http.METHOD.POST)
        .usePayload({codeType, email})
        .call();
    },

    check: ({email, code}) => {
      if (isHasEmptyParam(email, code)) throw new PropertyRequiredError(email, code);

      return new Http()
        .useEndPoint(this.api.code.check.url)
        .useMethod(Http.METHOD.POST)
        .usePayload({email, code})
        .call()
    }
  }
}

const apiMapping = {
  url: process.env.VUE_APP_SERVER_API,
  user: {
    signIn: {
      credentials: {
        url: process.env.VUE_APP_SERVER_API + '/auth/user/signin/credentials',
        call: ServerApi.user.signInByCredentials
      },
      code: {
        url: process.env.VUE_APP_SERVER_API + '/auth/user/signin/code',
        call: ServerApi.user.signInByCode
      }
    },
    signUp: {
      url: process.env.VUE_APP_SERVER_API + '/auth/user/signup',
      call: ServerApi.user.signUp
    },
    activate: {
      url: process.env.VUE_APP_SERVER_API + '/auth/user/activate',
      call: ServerApi.user.activate
    },
    isActive: {
      url: process.env.VUE_APP_SERVER_API + '/users/active',
      call: ServerApi.user.isActive
    }
  },
  code: {
    send: {
      email: {
        url: process.env.VUE_APP_SERVER_API + '/code/send/email',
        call: ServerApi.code.send
      }
    },
    check: {
      url: process.env.VUE_APP_SERVER_API + '/code/check',
      call: ServerApi.code.check
    }
  }
}

export {ServerApi}
