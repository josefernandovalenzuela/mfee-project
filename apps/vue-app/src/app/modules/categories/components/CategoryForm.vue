<template>
<div class="modal fade" id="createCategoryModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header text-center">
                <h5 class="modal-title">{{ action }} Category</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    @click="reset()"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group pb-3">
                        <label>Name</label>
                        <input type="text"
                            :class="v$?.categorySelected?.name?.$error === true ? 'form-control is-invalid' : 'form-control'"
                            v-model="categorySelected.name" />
                        <span class="form-text text-danger" v-for="error of v$?.categorySelected?.name?.$errors"
                            :key="error.$uid">
                            {{ error.$message }} </span>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="btnCloseModal"
                    @click="reset()">Cancel</button>
                <button class="btn btn-primary" @click="handleSave()">Save</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { createCategory } from '../../../helpers/categories';
import { store } from '../../../store/store.js';

export default {
    name: 'CategoryForm',
    props: {
        categorySelected: {
            type: Object
        }
    },
    data() {
        return {
            store,
            v$: useVuelidate(),
            category: this.categorySelected,
            action: 'Create',
        }
    },
    methods: {
        reset() {
            this.v$.$reset();
        },
        async handleSave() {
            const isValid = await this.v$.$validate();

            if (!isValid) {
                this.v$.$touch;
            } else {
                const status = await createCategory(
                    { name: this.categorySelected?.name }
                );

                if (status) {
                    this.store.getCategories();
                    this.$refs.btnCloseModal.click();
                } else {
                    console.error("Save category error status:", status);
                }
            }

        },

    },
    validations() {
        return {
            categorySelected: {
                name: { required },
            }
        }
    },
};
</script>