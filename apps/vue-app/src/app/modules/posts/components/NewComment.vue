<template>
<div class="col-md-6 mt-5">
  <form @submit.prevent="submit">
    <input type="text" :class="v$?.newComment?.$error === true ? 'form-control is-invalid' : 'form-control'"
      placeholder="Write a comment" v-model="newComment" />
    <span class="form-text text-danger" v-for="error of v$?.newComment?.$errors" :key="error.$uid">
      {{ error.$message }} </span>
    <div class="col-md-6">
      <button class="btn btn-primary mt-2" @click="handleAdd()">Add</button>
    </div>
  </form>

</div>
</template>

<script>
import Swal from 'sweetalert2'
import { createComment } from '../../../helpers/comment';
import { store } from '../../../../app/store/store';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

export default {
  name: 'NewComment',
  props: {
    postId: String
  },
  data() {
    return {
      store,
      newComment: '',
      v$: useVuelidate(),
    };
  },
  methods: {
    async handleAdd() {
      const isValid = await this.v$.$validate();

      if (!isValid) {
        this.v$.$touch;
      } else {
        const status = await createComment({ author: 'anonymous', content: this.newComment }, this.postId)

        if (status) {
          this.store.setPostId(this.postId);
          this.store.getComments(this.postId);
          Swal.fire({
            title: 'Success',
            text: ' New comment has been created!',
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.isConfirmed || result.isDismissed) {
              this.newComment = null
              this.v$.$reset();
            }
          });

        } else {
          Swal.fire({
            title: 'Oh snap!',
            text: ' Change a few things up and try again',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      }
    },
  },
  validations() {
    return {
      newComment: { required: helpers.withMessage('A comment is required.', required), $autoDirty: true },
    }
  },

};
</script>