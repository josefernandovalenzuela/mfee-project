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
        _id: '6661055a82f08e5ed86ae7f5',
        name: 'Sport'
      },
      {
        _id: '667ee7e882f08e5ed86af174',
        name: 'Food updated 2'
      }
    ];
  },
  displayNavBar: true,
  setDisplayNavBar(display) {
    this.displayNavBar = display;
  }
});
