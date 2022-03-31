const uiConstants = {
  select: {
    variant: {
      standard: 'standard',
      button: 'button'
    },
    type: {
      checkbox: 'checkbox',
      radio: 'radio'
    }
  },

  button: {
    type: {
      fill: 'fill',
      outline: 'outline'
    }
  },

  securityCode: {
    codeType: {
      userActivation: 'user_activation',
      authorization: 'user_activation'
    },
    method: {
      email: 'email',
      phone: 'phone'
    },
    type: {
      signInByEmail: 'signInByEmail',
      activateUser: 'activateUser',
      checkCode: 'checkCode'
    }
  },

  notification: {
    variant: {
      success: 'success',
      warning: 'warning',
      error: 'error',
      common: 'common',
      default: 'default'
    }
  },

  globalEvents: {
    notification: {
      show: 'show',
      hide: 'hide'
    }
  }
}

export {uiConstants}