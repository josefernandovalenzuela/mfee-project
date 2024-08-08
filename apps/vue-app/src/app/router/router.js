import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    // redirect: "/home",
    redirect: { name: 'home' }
  },
  {
    path: '/home',
    name: 'home',
    //component: PostView, // TODO: Carga normal
    component: () =>
      // TODO: Carga perezosa
      import(/* webpackChunkName: "PostView"*/ '../modules/posts/views/PostView.vue')
  },
  {
    path: '/post-detail/:id',
    name: 'post-detail',
    component: () =>
      // TODO: Carga perezosa
      import(/* webpackChunkName: "PostDetail"*/ '../modules/posts/views/PostDetailView.vue'),
    props: true
  },
  {
    path: '/category',
    name: 'category-list',
    component: () =>
      // TODO: Carga perezosa
      import(/* webpackChunkName: "Category"*/ '../modules/categories/views/CategoryView.vue'),
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      // TODO: Carga perezosa
      import(/* webpackChunkName: "Login"*/ '../modules/auth/views/LoginView.vue'),
    props: true
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "Register"*/ '../modules/auth/views/SignUpView.vue'),
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "NotFoundView"*/ '../shared/views/NotFoundView.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
