<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const isOpen = ref(false);
const userImage = ref(new URL('@/assets/user.png', import.meta.url).href);
const logoImage = ref(new URL('@/assets/logo.png', import.meta.url).href);
const logout = () => {
    authStore.logout();
    router.push({ name: 'login' });
};
</script>

<template>
    <div class="bg-white w-full">
        <nav class="bg-blue-700 p-4 mx-auto xl:w-3/4 xl:mt-4 lg:w-3/4 lg:mt-4 md:w-3/4 md:mt-4">
            <div class="container mx-auto flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <img alt="Company Logo" class="h-15 w-15" height="40" :src="logoImage" width="40" />
                    <span class="text-white text-3xl font-extrabold">eCommerce</span>
                </div>
                <div class="relative">
                    <button @mouseenter="isOpen = true" class="flex items-center focus:outline-none">
                        <img alt="User Avatar" class="w-15 h-15 rounded-full transition-transform hover:scale-90"
                            height="40" :src="userImage" width="40" />
                    </button>
                    <div v-if="isOpen" @mouseleave="isOpen = false"
                        class="absolute right-0 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                        <div class="block px-4 text-lg text-gray-80 font-extrabold">{{ authStore.name }}</div>
                        <div class="block px-4 text-xs text-gray-500 font-extralight lowercase">{{ authStore.email }}
                        </div>
                        <hr class="my-2 border-gray-200">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Setting</a>
                        <a @click="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                    </div>
                </div>
            </div>
            <div class="container mx-auto hidden md:block lg:block xl:block text-white" id="mobile-menu">
                <div class="w-full flex justify-center space-x-3">
                    <a class="hover:underline border-b-2 border-white" href="#">Dashboard</a>
                    <a class="hover:underline border-white" href="#">Project</a>
                    <a class="hover:underline border-white" href="#">Order</a>
                    <a class="hover:underline border-white" href="#">Staff</a>
                    <a class="hover:underline border-white" href="#">Customer</a>
                    <a class="hover:underline border-white" href="#">Setting</a>
                </div>
            </div>
        </nav>
    </div>
</template>
