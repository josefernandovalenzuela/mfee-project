import { reactive } from 'vue';
import { getPosts } from '../helpers/posts';
export const store = reactive({
  currentCategoryId: '1',
  setCurrentCategory(categorySelected) {
    this.currentCategoryId = categorySelected;
  },
  posts: [],
  async getPosts() {
    this.posts = await getPosts();
  },
  categories: [],
  getCategories() {
    this.categories = [
      {
        _id: '1a',
        name: 'Category 1',
        createdAt: '2024-06-11T04:54:33.269Z',
        updatedAt: '2024-06-11T04:54:40.365Z',
        __v: 0
      },
      {
        _id: '1b',
        name: 'Category 2',
        createdAt: '2024-06-28T16:42:16.635Z',
        updatedAt: '2024-07-10T22:36:26.649Z',
        __v: 0
      }
    ];
  },
  navVisible: true,
  toggleNav(newValue) {
    if (newValue !== undefined) {
      this.navVisible = newValue;
    } else {
      this.navVisible = !this.navVisible;
    }
  }
});
