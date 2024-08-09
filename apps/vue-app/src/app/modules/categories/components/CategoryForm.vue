<template>
  <div class="modal fade" id="createCategoryModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h5 class="modal-title">{{ action }} Category</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="reset"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent>
            <div class="form-group pb-3">
              <label>Name</label>
              <input type="text" class="form-control" v-model="category.name" />
              <span class="form-text text-danger"> Error </span>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="btnCloseModal" @click="reset">Cancel</button>
          <button class="btn btn-primary" data-bs-dismiss="modal" @click="save">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      category: {
        _id: null,
        name: null
      },
      action: 'Create'
    };
  },
  methods: {
    reset() {
      this.category = {
        _id: null,
        name: null,
      };
    },
    save() {
      console.log(this.category);
      this.reset()
    }
  }
};
</script>
