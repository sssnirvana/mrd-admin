import { getBaseCategoryList } from "@/api/index";
let state = {
    getBaseCategoryList:{}
};

let mutations = {
    BASECATEGORYLIST(state,req){
      state.getBaseCategoryList = req
    }
};

let actions = {
  async BaseCategoryList({commit}) {
    let req = await getBaseCategoryList();
    req = req.data
    commit('BASECATEGORYLIST',req)
  },
};

let getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
