import {isHasEmptyParam} from "../functions.service";
import {PropertyRequiredError} from "../exceptions/PropertyRequiredError";
import {Http} from "../http/Http";
import {api} from "../../api/api";

class ServerApi {

  static get api() {
    return apiMapping;
  }

  static user = {
    signInByPassword: (email, password) => {
      if (isHasEmptyParam(email, password)) throw new PropertyRequiredError({email, password});

      return new Http()
        .useEndPoint(this.api.user.signInByPassword.url)
        .useMethod(Http.METHOD.POST)
        .usePayload({email, password})
        .useFingerPrint()
        .call();
    },

    signUp: (user) => {
      if(isHasEmptyParam(user)) throw new PropertyRequiredError(user);

      return new Http()
        .useEndPoint(this.api.user.signUp.url)
        .useMethod(Http.METHOD.POST)
        .usePayload(user)
        .call();
    }
  }

  static code = {
    send: (email, codeType) => {
      if (isHasEmptyParam(email, codeType)) throw new PropertyRequiredError({email, codeType});

      return new Http()
        .useEndPoint(this.api.code.send.email.url)
        .useMethod(Http.METHOD.POST)
        .usePayload({codeType, email})
        .call();
    },

    check: (email, codeType, code) => {
      if (isHasEmptyParam(email, codeType, code)) throw new PropertyRequiredError({email, codeType, code});

      return new Http()
        .useEndPoint(this.api.code.check.url)
        .useMethod(Http.METHOD.POST)
        .usePayload({email, codeType, code})
        .call()
    }
  }
}

const apiMapping = {
  url: process.env.VUE_APP_SERVER_API,
  user: {
    signInByPassword: {
      url: process.env.VUE_APP_SERVER_API + '/auth/user/signin',
      call: ServerApi.user.signInByPassword
    },
    signUp: {
      url: process.env.VUE_APP_SERVER_API + '/auth/user/signup',
      call: ServerApi.user.signUp
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
