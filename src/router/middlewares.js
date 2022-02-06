import store from '../store/index';
import {UrlService} from "../services/url.service";

const isDomainRelevant = async (to, from, next) => {
  next();
}

const isAccessTokenRelevant = async (to, from, next) => {
  next();
}

const changeAppTitle = (to, from, next) => {
  document.title = to.meta.title || process.env.VUE_APP_TITLE;
  next();
}

const middlewares = [ isDomainRelevant, isAccessTokenRelevant, changeAppTitle ];

export { middlewares }