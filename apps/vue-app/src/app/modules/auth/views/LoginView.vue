<template>
<div class="d-flex justify-content-center align-items-center" style="height: 100vh">
  <div>
    <div class="alert alert-danger my-5" role="alert" v-show="showError"> <strong>Oh snap!</strong> Change a few things
      up and try submitting again.</div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center">Login</h5>
        <form>
          <div class="form-group pb-3">
            <label>Username</label>
            <input type="text"
              :class="v$?.credentials?.username?.$error === true ? 'form-control is-invalid' : 'form-control'"
              v-model="credentials.username" />
            <span class="form-text text-danger" v-for="error of v$?.credentials?.username?.$errors" :key="error.$uid">
              {{ error.$message }} </span>
          </div>
          <div class="form-group pb-3">
            <label>Password</label>
            <input type="password"
              :class="v$?.credentials?.password?.$error === true ? 'form-control is-invalid' : 'form-control'"
              v-model="credentials.password" />
            <span class="form-text text-danger" v-for="error of v$?.credentials?.password?.$errors" :key="error.$uid">
              {{ error.$message }} </span>
          </div>

          <div class="d-flex p-1">
            <button class="btn btn-primary w-100" @click="handleLogin()">Login</button>
          </div>
        </form>
        <div class="d-flex p-1">
          <button class="btn btn-outline-primary w-100 " @click="handleSignUp()">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { postLogin } from '../../../helpers/login';
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import router from '../../../router/router';

export default {
  name: 'LoginView',
  data() {
    return {
      v$: useVuelidate(),
      credentials: {
        username: null,
        password: null,
      },
      showError: false,
    };
  },
  methods: {
    async handleLogin() {
      const isValid = await this.v$.$validate();

      if (!isValid) {
        this.v$.$touch;
      } else {
        const status = await postLogin({
          username: this.credentials.username,
          password: this.credentials.password
        });

        if (status) {
          router.push('/home');
        } else {
          this.showError = true;
        }
      }

    },
    handleSignUp() {
      router.push('/sign-up');

    }
  },
  validations() {
    return {
      credentials: {
        username: { required },
        password: { required },
      }
    }
  },
  created() {
    this.showError = false;
  },
};
</script>