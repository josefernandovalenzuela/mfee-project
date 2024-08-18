<template>
    <div class="modal fade" id="createCategoryModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h5 class="modal-title">{{ action }} Category</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        v-on:click="reset()"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group pb-3">
                            <label>Name</label>
                            <input type="text" class="form-control"
                                :class="v$.category.name.$error === true ? 'is-invalid' : ''" v-model="category.name" />
                            <span class="form-text text-danger" v-for="error of v$.category.name.$errors"
                                :key="error.$uid">
                                {{ error.$message }}
                            </span>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="btnCloseModal"
                        v-on:click="reset()">Cancel</button>
                    <button class="btn btn-primary" v-on:click="save()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';
import { createCategory } from '../../../helpers/categories';

export default {
    name: "CategoryForm",
    created() {

    },
    props: {
        categorySelected: {
            type: Object
        }
    },
    methods: {
        reset() {
            this.category = { _id: null, name: null };
            this.selectCategory();
            this.v$.$reset();
        },
        getCategories() {
            this.$emit('getCategories');
        },
        selectCategory() {
            this.$emit('selectCategory', null);
        },
        async submit() {
            const isValid = await this.v$.$validate();
            if (!isValid) {
                this.v$.$touch();
            } else {
                const { name } = this.category;
                this.addCategory({ name });
            }
        },
        async addCategory(newCategory) {
            let status;
            status = await createCategory(newCategory);
            if (status) {
                this.getCategories();
            } else {
                console.error('Error on adding the category');
            }
            this.$refs.btnCloseModal.click();
        }

    },
    data() {
        return {
            v$: useVuelidate(),
            action: 'Create',
            category: { _id: null, name: null }
        };
    },
    validations() {
        return {
            category: {
                name: {
                    required: helpers.withMessage('Name field is required.', required),
                    $autoDirty: true
                }
            }
        };
    },
};
</script>