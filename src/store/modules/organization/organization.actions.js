import {AuthOrganizationService} from "../../../services/auth/auth.organization.service";

export default {
  signIn: ({ commit, state }, domain) => {
    AuthOrganizationService.signIn(domain);

  }
}