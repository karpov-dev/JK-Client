import {UserApi} from "./apis/user.api";
import {OrganizationApi} from "./apis/organization.api";

const api = {
    user: {
        auth: {
            signIn: UserApi.auth.signIn(),
            signUp: UserApi.auth.signUp()
        },
        data: {
            getById: UserApi.data.getById()
        }
    },

    organization: {
        auth: {
            signIn: OrganizationApi.auth.signIn(),
            signUp: OrganizationApi.auth.signUp()
        },
        data: {
            getById: OrganizationApi.data.getById()
        }
    },

    task: {
      data: {
          getById: null,
          getByIds: null
      }
    }
}

export { api }