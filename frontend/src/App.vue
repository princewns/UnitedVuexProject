<template>
  <div id="app">
    <div v-if="$store.state.user">
      <span>{{$store.state.user}}님 환영합니다.</span>
      <button @click="logOut">로그아웃</button>
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/writeform">Write</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return{
      //user 값을 비우기 위한 매개변수
      userOut : ''
    }
  },
  methods : {
    logOut() {
      //userOut을 mutation으로 넘겨준후 $store.state.user 값을 빈값으로 만든다.
      this.$store.commit('loginuser', this.userOut);
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
