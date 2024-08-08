<template>
  <nav class="navbar bg-body-tertiary" v-if="store.navVisible">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="./assets/world.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top" />
      </a>
      <div>
        <button @click="goToScreen('category')" class="btn btn-outline-warning me-2">Categories</button>
        <button @click="goToScreen('login')" class="btn btn-outline-warning">Login</button>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { store } from './store/store';
import router from './router/router';

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
  },
};
</script>
