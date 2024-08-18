<template>
  <div class="col-md-6 mt-5">
    <form>
      <input type="text" class="form-control" placeholder="Write a comment" v-model="comment"/>
    </form>
  </div>
  <div class="col-md-6">
    <button class="btn btn-primary mt-2">Add</button>
  </div>
</template>

<script>

export default {
    name: "NewComponent",
    data() {
        return {
            comment: 'My comment test'

        };
    },
};
</script>