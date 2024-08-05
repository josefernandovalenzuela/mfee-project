<template>
<div class="row pt-5">
    <CategoryList />
    <CategoryForm />
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
        return {};
    }
};
</script>