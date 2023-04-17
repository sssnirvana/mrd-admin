import { postlist } from '@/api';
let state = {
    list:{}
};

let mutations = {
    LIST(state,req){
       state.list = req.data
    }
};

let actions = {
    async list({commit}){
        let req = await postlist()
        commit('LIST',req)
    }
};

let getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};



