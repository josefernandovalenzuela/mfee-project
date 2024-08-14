<template>
<nav class="navbar bg-body-tertiary" v-show="this.store.displayNavBar">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="./assets/world.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top" />
    </a>
    <div>
      <button class="btn btn-outline-warning me-2" @click="this.$router.push('/categories')">Categories</button>
      <button class="btn btn-outline-warning" @click="this.$router.push('/login')">Login</button>
    </div>
  </div>
</nav>
<router-view />
</template>

<script>
import { store } from '../../../vue-app/src/app/store/store';
export default {
  data() {
    return {
      store
    };
  }
};
</script>
