<template>
<div class="container mt-5">
    <div class="d-flex justify-content-between">
        <h1 class="display-6">Categories</h1>
        <button class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#createCategoryModal">Add
            Category</button>
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
            <tr>
                <th scope="row">1</th>
                <td>Category name</td>
                <td>
                    <i class="fa-solid fa-pen me-3" data-bs-toggle="modal" data-bs-target="#createCategoryModal"></i>
                    <i class="fa-solid fa-trash"></i>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: 'CategoryList',
    data() {
        return {};
    },
    methods: {}
};
</script>