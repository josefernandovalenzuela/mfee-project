<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center">Sign Up</h5>
        <form>
          <div class="form-group pb-3" >
            <label>Username</label>
            <input type="text" class="form-control" v-model="newUser.username" />
            <span class="form-text text-danger"> Error </span>
          </div>
          <div class="form-group pb-3">
            <label>Password</label>
            <input type="password" class="form-control" v-model="newUser.password" />
            <span class="form-text text-danger"> Error </span>
          </div>
          <div class="form-group pb-3">
            <label>Confirm Password</label>
            <input type="password" class="form-control" v-model="newUser.confirmPassword" />
            <span class="form-text text-danger"> Error </span>
          </div>
          <span class="form-text text-danger"> Error </span>
          <div class="d-flex justify-content-center mt-1">
            <button type="button" class="btn btn-primary" @click="handleSignUp">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpView',
  methods: {
    handleSignUp(){
      console.log('Sign Up')
    },
  },
  data() {
    return {
      newUser: {
        username: null,
        password: null,
        confirmPassword: null,
      },
    }
  },
}
</script>

<style>

</style>
