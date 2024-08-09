import { reactive } from 'vue';
import { getPosts, getPostById } from '../helpers/posts';
import { getCategories } from '../helpers/categories';

export const store = reactive({
  currentCategoryId: '1',
  setCurrentCategory(categorySelected) {
    this.currentCategoryId = categorySelected;
  },
  posts: [],
  async getPosts() {
    this.posts = await getPosts();
  },
  postEditing: null,
  setPostEditing(post) {
    this.postEditing = post;
  },
  categories: [],
  async getCategories() {
    this.categories = await getCategories();
  },
  displayNavBar: true,
  setDisplayNavBar(display) {
    this.displayNavBar = display;
  },
  postId: '',
  setPostId(value) {
    this.postId = value;
  },
  comments: [],
  async getComments(postId) {
    const data = await getPostById(postId);
    this.comments = data?.comments ?? [];
  }
});
