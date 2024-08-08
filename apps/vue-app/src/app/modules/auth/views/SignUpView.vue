<template>
<div class="d-flex justify-content-center align-items-center" style="height: 100vh">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-center">Sign Up</h5>
      <form>
        <div class="form-group pb-3">
          <label>Username</label>
          <input type="text"
            :class="v$?.newUser?.username?.$error === true ? 'form-control is-invalid' : 'form-control'"
            v-model="newUser.username" />
          <span class="form-text text-danger" v-for="error of v$?.newUser?.username?.$errors" :key="error.$uid">
            {{ error.$message }} </span>
        </div>
        <div class="form-group pb-3">
          <label>Password</label>
          <input type="password"
            :class="v$?.newUser?.password?.$error === true ? 'form-control is-invalid' : 'form-control'"
            v-model="newUser.password" />
          <span class="form-text text-danger" v-for="error of v$?.newUser?.password?.$errors" :key="error.$uid">
            {{ error.$message }} </span>
        </div>
        <div class="form-group pb-3">
          <label>Confirm Password</label>
          <input type="password"
            :class="v$?.newUser?.confirmPassword?.$error === true ? 'form-control is-invalid' : 'form-control'"
            v-model="newUser.confirmPassword" />
          <span class="form-text text-danger" v-for="error of v$?.newUser?.confirmPassword?.$errors" :key="error.$uid">
            {{ error.$message }} </span>
        </div>
        <div class="d-flex justify-content-center mt-1">
          <button class="btn btn-primary" @click="handleSignUp()">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, sameAs, minLength, maxLength, helpers } from '@vuelidate/validators'
import { postRegister } from '../../../helpers/register';
import router from '../../../router/router';

export default {
  name: 'SignUpView',
  data() {
    return {
      v$: useVuelidate(),
      newUser: {
        username: null,
        password: null,
        confirmPassword: null
      }
    };
  },
  methods: {
    async handleSignUp() {
      const isValid = await this.v$.$validate();

      if (!isValid) {
        this.v$.$touch;
      } else {
        const status = await postRegister({
          username: this.newUser.username,
          password: this.newUser.password
        });


        if (status) {
          router.push('/login');
        } else {
          console.error("Register error status:", status);
        }
      }
    }
  },
  validations() {
    return {
      newUser: {
        username: {
          required: helpers.withMessage('Username field is required.', required),
        },
        password: { required, minLength: minLength(8), maxLength: maxLength(15) },
        confirmPassword: { sameAsPassword: sameAs(this.newUser.password), },
      }
    }
  },
};
</script>