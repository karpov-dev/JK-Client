import store from '../store/index';
import {UrlService} from "../services/url.service";

const checkOrganizationRelevance = async (to, from, next) => {
  next();
}

const initUser = (to, from, next) => {
  next();
}

const middlewares = [ checkOrganizationRelevance, initUser ];

export { middlewares }