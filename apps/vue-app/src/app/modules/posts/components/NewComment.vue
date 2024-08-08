<template>
  <div class="col-md-6 mt-5">
    <form>
      <input type="text" class="form-control" v-model="comment.content" placeholder="Write a comment" />
    </form>
  </div>
  <div class="col-md-6">
    <button class="btn btn-primary mt-2">Add</button>
  </div>
</template>

<script>
export default {
  name: 'NewComment',
  methods: {},
  data() {
    return {
      comment: {
        _id: null,
        content: null,
      },
    }
  },
}
</script>
