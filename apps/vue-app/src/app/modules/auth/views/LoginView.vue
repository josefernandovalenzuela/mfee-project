<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-center">Login</h5>
                <form>
                    <div class="form-group pb-3">
                        <label>Username</label>
                        <input type="text" class="form-control is-invalid" v-model="newUser.username" />
                        <span class="form-text text-danger"> Error </span>
                    </div>
                    <div class="form-group pb-3">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="newUser.password"/>
                        <span class="form-text text-danger"> Error </span>
                    </div>

                    <span class="form-text text-danger"> Error </span>
                    <div class="d-flex justify-content-end mt-1">
                        <button class="btn btn-outline-primary me-1" v-on:click="signUpEvent()">Sign Up</button>
                        <button class="btn btn-primary" v-on:click="loginEvent()">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginView",
    created() {
    },
    methods: {
        signUpEvent(){},
        loginEvent(){},

    },
    data() {
        return {
            newUser: {
                username: null,
                password: null,
                confirmPassword: null,
            }
        };
    },
};
</script>

<style></style>