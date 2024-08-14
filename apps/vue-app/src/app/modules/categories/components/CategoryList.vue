<template>
<div class="container mt-5">
    <div class="d-flex justify-content-between">
        <h1 class="display-6">Categories</h1>
        <button @click="updateCategory({})" class="btn btn-outline-success" data-bs-toggle="modal"
            data-bs-target="#createCategoryModal">Add
            Category</button>
    </div>

    <hr />
    <table class="table table-striped" v-show="thereAreCategories">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody v-for="category in store.categories" :key="category._id">
            <tr>
                <th scope="row"> {{ category._id }}</th>
                <td>{{ category.name }}</td>
                <td>
                    <i class="fa-solid fa-pen me-3" data-bs-toggle="modal" data-bs-target="#createCategoryModal"
                        @click="updateCategory(category)"></i>
                    <i class="fa-solid fa-trash" @click="handleDelete(category._id)"></i>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="alert alert-warning m-3" role="alert" v-show="!thereAreCategories">There are not results.</div>
</div>
</template>

<script>
import { store } from '../../../store/store.js';
import { deleteCategory } from '../../../helpers/categories';
import { alerts } from '../../../helpers/alerts';

export default {
    name: 'CategoryList',
    emits: ['updateCategory'],
    data() {
        return {
            store
        };
    },
    mixins: [alerts],
    methods: {
        async handleDelete(id) {
            const status = await deleteCategory(id);
            this.showAlert('success', 'Category has been deleted!');
            if (status) {
                await this.store.getCategories();
            } else {
                this.showAlert('error', 'Something bad happened :(');
                console.error("Categories error status:", status);
            }
        },
        updateCategory(category) {
            this.$emit('updateCategory', category);
        },
        async getAllCategories() {
            await this.store.getCategories();
        }
    },
    computed: {
        thereAreCategories() {
            return this.store.categories?.length > 0
        },

    },
    created() {
        this.getAllCategories();
    },

};
</script>