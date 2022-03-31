import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../pages/login/LoginMain.vue";
// import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "account",
    component: Login,
    meta: {
      title: "Ducky | Login",
      hideHeader: true,
      needCheck: false,
    },
    children: [
      {
        path: "/",
        name: "Home ",
        component: () =>
          import(
            /* webpackChunkName: "login" */ "@/views/HomeView.vue"
          ),
      },
      {
        path: "/log-in",
        name: "Login",
        component: () =>
          import(
            /* webpackChunkName: "login" */ "@/components/login/LoginForm.vue"
          ),
      },
      {
        path: "/register",
        name: "Register",
        component: () =>
          import(
            /* webpackChunkName: "register" */ "@/components/login/RegisterForm.vue"
          ),
      },
      {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: () =>
          import(
            /* webpackChunkName: "forgotpassword" */ "@/components/login/ForgotPasswordForm.vue"
          ),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
