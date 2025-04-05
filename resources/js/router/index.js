import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/store/auth";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/Components/Dashboard/Index.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/Components/Login/Index.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("@/Components/404.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(async (to, _, next) => {
    const authStore = useAuthStore();

    if (!authStore.isInitialized) {
        await authStore.initialize();
    }

    const isAuthenticated = authStore.isAuthenticated;

    if (!isAuthenticated && to.name !== "login") {
        return next({ name: "login" });
    }

    next();
});

export default router;
