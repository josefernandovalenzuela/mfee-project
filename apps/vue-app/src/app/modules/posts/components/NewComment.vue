<template>
  <div class="col-md-6 mt-5">
    <form>
      <input type="text" class="form-control" v-model="comment.content" placeholder="Write a comment" />
      <span class="form-text text-danger" v-for="error of v$.comment.content.$errors" :key="error.$uid"> {{ error.$message }}<br /> </span>
    </form>
  </div>
  <div class="col-md-6">
    <button class="btn btn-primary mt-2" @click="handleAdd">Add</button>
  </div>
  <div class="alert alert-danger" role="alert" v-if="errorMessage">{{errorMessage}}</div>

</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { commentPost } from '../../../helpers/posts';

export default {
  name: 'NewComment',
  methods: {
    handleAdd() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      }
      commentPost(this.id, this.comment.content)
        .then(() => {
          this.$emit('refresh-comments');
          this.comment.content = null;
        })
        .catch((error) => {
          console.log('Error', error);
        });
    }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      v$: useVuelidate(),
      comment: {
        _id: null,
        content: null
      },
      errorMessage: ''
    };
  },
  validations() {
    return {
      comment: {
        content: {
          required: helpers.withMessage('Comment is required', required),
          $autoDirty: true
        }
      }
    };
  },
  watch: {
    errorMessage: {
      handler() {
        setTimeout(() => {
          this.errorMessage = '';
        }, 2000);
      }
    }
  }
};
</script>
