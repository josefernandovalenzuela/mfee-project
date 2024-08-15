<template>
  <div class="modal fade" id="createCategoryModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h5 class="modal-title">{{ action }} Category</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group pb-3">
              <label>Name</label>
              <input type="text" class="form-control" v-model="category.name" />
              <span class="form-text text-danger" v-for="error of v$.category.name.$errors" :key="error.$uid">
                {{ error.$message }}<br />
              </span>
            </div>
          </form>
          <div class="alert alert-danger" role="alert" v-if="errorMessage">{{ errorMessage }}</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="btnCloseModal">Cancel</button>
          <button type="button" @click="handleSave" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { createCategorie, updateCategorie } from '../../../helpers/categories';

export default {
  name: 'CategoryForm',
  methods: {
    async handleSave() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      }
      if (this.category._id) {
        // Edit
        updateCategorie(this.category._id, this.category.name)
          .then(() => {
            this.$refs.btnCloseModal.click();
            this.$emit('refresh-categories', 'edited');
          })
          .catch((error) => {
            this.errorMessage = error;
            console.log('Error', error);
          });
      } else {
        // Create
        createCategorie(this.category.name)
          .then(() => {
            this.$refs.btnCloseModal.click();
            this.$emit('refresh-categories', 'created');
          })
          .catch((error) => {
            this.errorMessage = error;
            console.log('Error', error);
          });
      }
    }
  },
  props: {
    categorySelected: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      v$: useVuelidate(),
      category: {
        _id: null,
        name: null
      },
      action: 'Create',
      errorMessage: ''
    };
  },
  validations() {
    return {
      category: {
        name: { required: helpers.withMessage('Name is required', required), $autoDirty: true }
      }
    };
  },
  watch: {
    categorySelected: {
      handler(category) {
        if (category) {
          this.category = category;
          this.action = 'Edit';
        } else {
          this.category = {
            _id: null,
            name: null
          };
          this.action = 'Create';
        }
      },
      immediate: true
    },
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

<style></style>
