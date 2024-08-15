<template>
  <nav class="navbar bg-body-tertiary" v-if="store.navVisible">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="./assets/world.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top" />
      </a>
      <div>
        <button v-if="store.isLogged" @click="goToScreen('category')" class="btn btn-outline-warning me-2">Categories</button>
        <button v-if="!store.isLogged" @click="goToScreen('login')" class="btn btn-outline-warning">Log In</button>
        <button v-else @click="handleLogout" class="btn btn-outline-warning">Log Out</button>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { store } from './store/store';
import router from './router/router';
import { logoutService } from './helpers/auth';

export default {
  data() {
    return {
      store
    };
  },
  methods: {
    goToScreen(screen) {
      router.push({
        name: screen
      });
    },
    handleLogout() {
      logoutService()
        .then(() => {
          store.setLogged(false);
          this.$router.push({
            name: 'login'
          });
        })
        .catch((error) => {
          console.log('Error', error);
        });
    }
  },
  mounted() {
    if (localStorage.getItem('token')) {
      store.setLogged(true);
    }
  }
};
</script>
