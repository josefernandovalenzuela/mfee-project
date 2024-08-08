<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center">Login</h5>
        <form>
          <div class="form-group pb-3">
            <label>Username</label>
            <input type="text" class="form-control is-invalid" v-model="credentials.username" />
            <span class="form-text text-danger"> Error </span>
          </div>
          <div class="form-group pb-3">
            <label>Password</label>
            <input type="password" class="form-control" v-model="credentials.password" />
            <span class="form-text text-danger"> Error </span>
          </div>

          <span class="form-text text-danger"> Error </span>
          <div class="d-flex justify-content-end mt-1">
            <button type="button" @click="handleSignUp" class="btn btn-outline-primary me-1">Sign Up</button>
            <button type="button" @click="handleLogin" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../../../router/router';

export default {
  name: 'LoginView',
  methods: {
    handleSignUp(){
      router.push({
        name: 'register'
      });
    },
    handleLogin(){
      console.log('Login')
    }
  },
  data() {
    return {
      credentials: {
        username: null,
        password: null,
      },
    }
  },
}
</script>

<style>

</style>
