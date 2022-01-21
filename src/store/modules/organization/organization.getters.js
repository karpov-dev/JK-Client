import { UrlService } from "../../../services/url.service";

export default {
  isActualDomain: (state) => {
    return UrlService.getDomainName() === state.domain;
  },

  isNeedRefresh: (state, getters) => {
    return !(getters.isActualDomain && state.id);
  }
}