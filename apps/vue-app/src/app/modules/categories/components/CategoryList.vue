<template lang="">
  <div class="container mt-5">
    <div class="d-flex justify-content-between">
      <h1 class="display-6">Categories</h1>
      <button class="btn btn-outline-success" @click="handleCreate" data-bs-toggle="modal" data-bs-target="#createCategoryModal">
        Add Category
      </button>
    </div>

    <hr />
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category._id">
          <th scope="row">1</th>
          <td>{{ category.name }}</td>
          <td>
            <i
              class="fa-solid fa-pen me-3"
              @click="() => handleEdit(category)"
              data-bs-toggle="modal"
              data-bs-target="#createCategoryModal"
            ></i>
            <i @click="() => handleDelete(category._id)" class="fa-solid fa-trash"> </i>
          </td>
        </tr>
      </tbody>
    </table>

    <CategoryForm :categorySelected="categorySelected" @refresh-categories="handleGetData" />
    <div class="alert alert-warning m-3" role="alert" v-if="!thereAreCategories">There are not results.</div>
  </div>
</template>

<script>
import CategoryForm from '../components/CategoryForm.vue';
import { store } from '../../../store/store';
import { deleteCategorie } from '../../../helpers/categories';

export default {
  name: 'CategoryList',
  methods: {
    handleEdit(category) {
      console.log('handle edit');
      this.categorySelected = category;
    },
    handleDelete(categoryId) {
      deleteCategorie(categoryId)
        .then(() => {
          this.categories = this.categories.filter((category) => category._id !== categoryId);
        })
        .catch((error) => {
          console.log('Error', error);
        });
    },
    handleCreate() {
      this.categorySelected = null;
    },
    async handleGetData() {
      await store.getCategories();
      this.categories = store.categories;
    }
  },
  data() {
    return {
      categorySelected: null,
      categories: []
    };
  },
  components: {
    CategoryForm
  },
  mounted() {
    this.handleGetData();
  },
  computed: {
    thereAreCategories() {
      return this.categories.length > 0;
    }
  }
};
</script>
<style lang=""></style>
