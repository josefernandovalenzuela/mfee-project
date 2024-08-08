<template>
  <CategoryView />
  <!-- <PostDetailView /> -->
</template>

<script>
import PostView from './modules/posts/views/PostView.vue';
/* import PostDetailView from './modules/posts/views/PostDetailView.vue'; */
import CategoryView from './modules/categories/views/CategoryView.vue';

export default {
  components: {
    // PostView
    CategoryView
    /* PostDetailView */
  }
};
</script>
