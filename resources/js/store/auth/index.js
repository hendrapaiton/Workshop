import { defineStore } from "pinia";
import { api } from "@/api";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        username: null,
        token: null,
        isLoggedIn: false,
        isOwner: false,
        isStaff: false,
        isCustomer: false,
    }),
    getters: {
        isAuthenticated: (state) => !!state.token && !!state.username,
    },
    actions: {
        async login(credentials) {
            const response = await api.login(credentials);
            this.token = response.data.access_token;
            this.isLoggedIn = true;
            localStorage.setItem("token", this.token);
        },
        async logout() {
            await api.logout();
            this.clearAuthData();
            localStorage.removeItem("token");
        },
        clearAuthData() {
            this.token = null;
            this.username = null;
            this.isLoggedIn = false;
            this.isOwner = false;
            this.isStaff = false;
            this.isCustomer = false;
        },
    },
});
