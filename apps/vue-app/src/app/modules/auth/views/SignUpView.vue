<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center">Sign Up</h5>
        <form>
          <div class="form-group pb-3">
            <label>Username</label>
            <input type="text" class="form-control" v-model="newUser.username" />
            <span class="form-text text-danger" v-for="error of v$.newUser.username.$errors" :key="error.$uid">
              {{ error.$message }}<br>
            </span>
          </div>
          <div class="form-group pb-3">
            <label>Password</label>
            <input type="password" class="form-control" v-model="newUser.password" />
            <span class="form-text text-danger" v-for="error of v$.newUser.password.$errors" :key="error.$uid">
              {{ error.$message }}<br>
            </span>
          </div>
          <div class="form-group pb-3">
            <label>Confirm Password</label>
            <input type="password" class="form-control" v-model="newUser.confirmPassword" />
            <span class="form-text text-danger" v-for="error of v$.newUser.confirmPassword.$errors" :key="error.$uid">
              {{ error.$message }}<br>
            </span>
          </div>
          <span class="form-text text-danger" v-if="error"> {{ error }} </span>
          <div class="d-flex justify-content-center mt-1">
            <button type="button" class="btn btn-primary" @click="handleSignUp">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email, helpers, sameAs } from '@vuelidate/validators';
import router from '../../../router/router';
import { signUpService } from '../../../helpers/auth';

export default {
  name: 'SignUpView',
  methods: {
    handleSignUp() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      }
      signUpService(this.newUser.username, this.newUser.password)
        .then(() => {
          router.push({
            name: 'login'
          });
        })
        .catch((error) => {
          console.log('Error', error);
          this.error = error;
        });
    }
  },
  data() {
    return {
      v$: useVuelidate(),
      newUser: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      error: null
    };
  },
  validations() {
    return {
      newUser: {
        username: {
          required: helpers.withMessage('Username is required', required),
          $autoDirty: true,
          email: helpers.withMessage('Invalid email', email)
        },
        password: { required: helpers.withMessage('Password is required', required), $autoDirty: true },
        confirmPassword: {
          required: helpers.withMessage('Confirm Password is required', required),
          sameAsPassword: helpers.withMessage('Passwords do not match', sameAs(this.newUser.password)),
          $autoDirty: true
        }
      }
    };
  }
};
</script>

<style></style>
