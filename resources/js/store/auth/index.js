import { defineStore } from "pinia";
import { api } from "@/api";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        name: null,
        email: null,
        roles: null,
        token: null,
        isInitialized: false,
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
        async initialize() {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    this.clearAuthData();
                    return;
                }

                const response = await api.validateToken(token);
                this.token = response.data.access_token;
                this.name = response.data.name;
                this.email = response.data.email;
                this.roles = response.data.roles;
            } catch (error) {
                try {
                    const response = await api.refreshToken();
                    this.token = response.data.access_token;
                    this.name = response.data.name;
                    this.email = response.data.email;
                    this.roles = response.data.roles;
                } catch (error) {
                    this.clearAuthData();
                }
            } finally {
                this.isInitialized = true;
            }
        },
        async login(credentials) {
            const response = await api.login(credentials);
            this.token = response.data.access_token;
            this.name = response.data.name;
            this.email = response.data.email;
            this.roles = response.data.roles;
            localStorage.setItem("token", this.token);
        },
        async logout() {
            await api.logout();
            this.clearAuthData();
            localStorage.removeItem("token");
        },
        clearAuthData() {
            this.token = null;
            this.name = null;
            this.email = null;
            this.roles = null;
            this.isInitialized = false;
        },
    },
});
