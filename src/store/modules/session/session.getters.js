const getUserId = (state) => {
  return state.userId;
}

const getAccessToken = (state) => {
  return state.accessToken;
}

export default {
  getUserId,
  getAccessToken
}