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
import { createCategory, updateCategory } from '../../../helpers/categories';
import { alerts } from '../../../helpers/alerts';

export default {
    components: {},
    mixins: [alerts],
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
                this.addCategory();
            }
        },
        async addCategory() {
      const newCategory = { name: this.category.name };
      const status = this.action === 'Create' ? await createCategory(newCategory) : await updateCategory(this.category);
            if (status) {
                this.getCategories();
                this.showAlert('success', 'The category has been saved');
            } else {
                this.showAlert('error', "The category couldn't be saved");
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
    watch: {
    categorySelected(newValue) {
      if (newValue) {
        this.action = 'Edit';
        const { ...category } = newValue;
        this.category = category;
      } else if (newValue === null) {
        this.action = 'Create';
      }
    }
}
};
</script>