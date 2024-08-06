<template>
<div class="d-flex justify-content-center align-items-center" style="height: 100vh">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-center">Sign Up</h5>
      <form @submit.prevent="submit">
        <div class="form-group pb-3">
          <label>Username</label>
          <input type="text" class="form-control" v-model="credentials.username" />
          <span class="form-text text-danger"> Error </span>
        </div>
        <div class="form-group pb-3">
          <label>Password</label>
          <input type="password" class="form-control" v-model="credentials.password" />
          <span class="form-text text-danger"> Error </span>
        </div>
        <div class="form-group pb-3">
          <label>Confirm Password</label>
          <input type="password" class="form-control" v-model="credentials.confirmPassword" />
          <span class="form-text text-danger"> Error </span>
        </div>
        <span class="form-text text-danger"> Error </span>
        <div class="d-flex justify-content-center mt-1">
          <button class="btn btn-primary" @click="handleSignUp()">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SignUpView',
  data() {
    return {
      credentials: {
        username: null,
        password: null,
      }
    };
  },
  methods: {
    handleSignUp() {
      console.log("🚀 ~ methods ~ handleSignUp");
    }
  }
};
</script>