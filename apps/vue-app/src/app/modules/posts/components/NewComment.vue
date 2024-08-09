<template>
  <div class="col-md-6 mt-5">
    <form @submit.prevent>
      <input type="text" class="form-control" placeholder="Write a comment" v-model="comment" />
    </form>
  </div>
  <div class="col-md-6">
    <button class="btn btn-primary mt-2" @click="addComment">Add</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      comment: null
    };
  },
  methods: {
    addComment() {
      console.log(this.comment);
    }
  }
};
</script>
