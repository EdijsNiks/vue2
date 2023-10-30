<template>
  <header>
    <div class="logo">
      <img src="../assets/logo.svg" />
      <h1>KRAKEN.FM</h1>
    </div>
    <div class="login-section">
      <div class="user-info" v-if="loggedIn">
        <div class="avatar" :style="{ backgroundColor: 'white' }"></div>
        <div class="user-name">{{ fullName }}</div>
        <button @click="handleLogout">LOGOUT</button>
      </div>
      <div v-else>
        <button @click="handleLogin">LOGIN</button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      loggedIn: (state) => state.user.logged_in,
      user: (state) => state.user
    }),

    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`
    }
  },
  methods: {
    ...mapActions(['login', 'logout']),
    handleLogin() {
      if (confirm('Do you want to log in?')) {
        this.login()
      }
    },
    handleLogout() {
      if (confirm('Do you want to log out?')) {
        this.logout()
      }
    }
  }
}

</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
}

.logo {
  display: flex;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-name {
  font-weight: bold;
}

button {
  background-color: #4f0b77;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #42023d;
}
.login-section {
  display: flex;
  align-items: center;
}
</style>
