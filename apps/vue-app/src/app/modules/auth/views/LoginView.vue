<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title text-center">Login</h5>
          <form @submit.prevent>
            <div class="form-group pb-3">
              <label>Username</label>
              <input
                type="text"
                class="form-control"
                :class="v$.credentials.username.$error === true ? 'is-invalid' : ''"
                v-model="credentials.username"
              />
              <span class="form-text text-danger" v-for="error of v$.credentials.username.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
            <div class="form-group pb-3">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                :class="v$.credentials.password.$error === true ? 'is-invalid' : ''"
                v-model="credentials.password"
              />
              <span class="form-text text-danger" v-for="error of v$.credentials.password.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
  
            <span class="form-text text-danger" v-show="error">Error on login</span>
  
            <div class="d-flex justify-content-end mt-3">
              <button class="btn btn-outline-primary me-1" @click="signUp">Sign Up</button>
              <button class="btn btn-primary" @click="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useVuelidate } from '@vuelidate/core';
  import router from '../../../router/router';
  import { helpers, required } from '@vuelidate/validators';
  import { login } from '../../../helpers/auth';
  
  export default {
    components: {},
    data() {
      return {
        v$: useVuelidate(),
        credentials: {
          username: null,
          password: null
        },
        error: null
      };
    },
    validations() {
      return {
        credentials: {
          username: {
            required: helpers.withMessage('User field is required.', required),
            $autoDirty: true
          },
          password: {
            required: helpers.withMessage('Password field is required.', required),
            $autoDirty: true
          }
        }
      };
    },
    methods: {
      signUp() {
        router.push({
          name: 'signUp'
        });
      },
  
      setError(error) {
        this.error = error;
      },
  
      async submit() {
        const isValid = await this.v$.$validate();
  
        if (!isValid) {
          this.v$.$touch();
        } else {
          this.login();
        }
      },
  
      async login() {
        let status;
        this.setError(null)
        status = await login(this.credentials);
  
        if (status) {
          router.push({
            name: 'home'
          });
        } else {
          const error = 'Error on login'
          console.error(error);
          this.setError(error)
        }
      }
    }
  };
  </script>  