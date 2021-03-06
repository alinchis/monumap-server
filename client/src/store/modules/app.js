// store >> app.js

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// STATE

const state = {
  leftPanel: false,
  rightPanel: false,
  itemSelected: false,
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GETTERS

const getters = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ACTIONS

const actions = {

  updateLeftPanel({commit}, value) {
    commit('setLeftPanel', value);
  },

  updateRightPanel({commit}, value) {
    commit('setRightPanel', value);
  },

  toggleLeftPanel({commit, state}) {
    commit('setLeftPanel', !state.leftPanel);
  },

  toggleRightPanel({commit, state}) {
    commit('setRightPanel', !state.rightPanel);
    // dispatch('infrastructuraSanatate/toggleRightPanel', null, {root: true});
    // dispatch('toaletePublice/toggleRightPanel', null, {root: true});
  },

  updateItemSelected({commit}, value) {
    commit('setItemSelected', value);
  },

};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MUTATIONS

const mutations = {

  setLeftPanel(state, value) {
    // console.log('@store > app / setLeftPanel: ', value);
    state.leftPanel = value;
  },

  setRightPanel(state, value) {
    state.rightPanel = value;
  },

  setItemSelected(state, value) {
    state.itemSelected = value;
  },

};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EXPORT

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
