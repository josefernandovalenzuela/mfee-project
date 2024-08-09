<template>
<div class="col-12 d-flex justify-content-center">
    <CategoryList @update-category="catchCategory($event)" />
    <CategoryForm :categorySelected="categorySelected" />
</div>
</template>

<script>
import CategoryForm from '../components/CategoryForm.vue';
import CategoryList from '../components/CategoryList.vue';

export default {
    components: {
        CategoryForm,
        CategoryList
    },
    data() {
        return {
            categorySelected: {}
        };
    },
    methods: {
        catchCategory(value) {
            this.categorySelected = value;
        }
    }
};
</script>