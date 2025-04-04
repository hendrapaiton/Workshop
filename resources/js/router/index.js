import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../Components/Dashboard/Index.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../Components/Login/Index.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
