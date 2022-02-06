import state from './session.state';
import mutations from './session.mutations';
import getters from './session.getters';
import actions from './session.actions'

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};