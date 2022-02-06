import {isHasEmptyParam} from "../../../services/functions.service";
import {PropertyRequiredError} from "../../../services/exceptions/PropertyRequiredError";

const setAccessToken = (state, accessToken) => {
  if (isHasEmptyParam(accessToken)) throw new PropertyRequiredError(accessToken);

  state.accessToken = accessToken;
}

const setUserId = (state, userId) => {
  if (isHasEmptyParam(userId)) throw new PropertyRequiredError(userId);

  state.userId = userId;
}

export default {
  setAccessToken,
  setUserId
}