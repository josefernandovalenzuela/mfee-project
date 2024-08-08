<template lang="">
  <div class="container mt-5">
    <div class="d-flex justify-content-between">
      <h1 class="display-6">Categories</h1>
      <button class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#createCategoryModal">Add Category</button>
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
            <i class="fa-solid fa-pen me-3" data-bs-toggle="modal" data-bs-target="#createCategoryModal"></i>
            <i class="fa-solid fa-trash">

            </i>
          </td>
        </tr>
      </tbody>
    </table>

    <CategoryForm />
  </div>
</template>

<script>
import CategoryForm from '../components/CategoryForm.vue'

export default {
  name: 'CategoryList',
  data() {
    return {
      categories: [
        {
          _id: '2',
          name: 'Category 1'
        },
        {
          _id: '3',
          name: 'Category 2'
        },
        {
          _id: '4',
          name: 'Category 3'
        }
      ]
    };
  },
  components: {
    CategoryForm
  }
}
</script>
<style lang="">

</style>
