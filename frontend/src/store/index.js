import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// Vuex의 store에서 따로 하므로 Vue의 프로토타입에 넣지않고 사용

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user : '',
    memos : [{
        id : 1,
        writer : "익명",
        title : '확인용입니다.'
    }],
    memo : {
      title : '제목',
      memo : '내용'
    },
    comments :[{
      writer : '익명',
      comment : '내용'
    }]
  },
  getters: {},
  mutations: {
    loginuser(state, user){
      state.user = user;
    },
    changeMemoList(state, mList){
      state.memos = mList;
    },
    changeMemo(state, memo) {
      state.memo = memo;
    },
    changeComment(state, comments) {
      state.comments = comments;
    },
    addMemo(state, memo){
      state.memos = memo
    }
  },
  actions: {
    getMemoList({commit}) {
      axios.get('/api/memo').then((response) => {
        //가져온 response.data값을 memos에 넣어줌
        commit('changeMemoList', response.data);
      });
    },
    //id값은 사용하는 컴포넌트에서 전달
    getMemo({commit}, id) {
      axios.get(`/api/memo/${id}`).then((response) => {
        //가져온 response.data값을 memo에 넣어줌
        commit('changeMemo', response.data);
      });
    },
    getComment({commit}, id) {
      axios.get(`/api/comment/${id}`).then((response) => {
        //가져온 response.data값을 comment에 넣어줌
        commit('changeComment', response.data);
      });
    },
    postComment({commit}, comment) {
      axios.post('/api/comment', {
        data : {
          comment : comment
        }
      }).then((response) => {
        console.log(response.data);
        //변경된 comments의 내용을 가져와야 함
        commit('changeComment', response.data);
      });
    },
    addMemo({commit}, memo){
      axios.post('/api/memo', {
        data : {
          memo : memo
        }
      }).then((response) => {
        commit('addMemo', response.data);
      })
    }
  },
  modules: {}
})
