<template>
  <div class="home">
    <label>유저 이름</label> <br>
    <input type="text" v-model="user">
    <button @click="loginuser">로그인</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return{
      user : ''
    }
  },
  methods : {
    loginuser(){
      this.$store.commit('loginuser', this.user);
      //list로 이동
      this.$router.push('/list');
      //작성창 초기화
      this.user = ''
    }
  }
}
</script>
