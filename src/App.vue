<template>
  <div id="app" >
    <HeaderComponent :loggedIn="loggedIn" @login="login" @logout="logout" />
    <div class="main-container">
      <NavigationComponent v-if="loggedIn" />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavigationComponent,
  },
  computed: {
    loggedIn() {
      return this.$store.state.user.logged_in;
    },
  },
  methods: {
  login: () => this.$store.dispatch('login'),
  logout: () => this.$store.dispatch('logout'),
},
};
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
  background-color: #191621;
  color: white;
  margin: 0;
  padding: 0;
}

.main-container {
  display: flex;
  background-image: './assets/background.png';
}

.content {
  flex: 1;
  padding: 220px;
}

</style>