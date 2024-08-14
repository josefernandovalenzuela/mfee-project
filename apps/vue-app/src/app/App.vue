<template>
  <nav class="navbar bg-body-tertiary" v-show="store.showNavBar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="./assets/world.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top" />
      </a>
      <div>
        <button class="btn btn-outline-warning me-2" @click="goToCategories">Categories</button>
        <button class="btn btn-outline-warning" @click="goToLogin">Login</button>
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
    return { store };
  },
  methods: {
    goToCategories() {
      router.push({
        name: 'categories'
      });
    },
    goToLogin() {
      router.push({
        name: 'login'
      });
    }
  }
};
</script>
