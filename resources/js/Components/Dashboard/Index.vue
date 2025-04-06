<script setup>
import Brand from '../Layout/Brand.vue';
import Copyright from '../Layout/Copyright.vue';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
</script>

<template>
    <Brand />
    <div class="container mx-auto p-4 xl:w-3/4 xl:mt-4 lg:w-3/4 lg:mt-4 md:w-3/4 md:mt-4">
        <h1 class="text-2xl font-bold mb-1">Welcome {{ authStore.name }} to eCommerce Dashboard</h1>
        <p class="mb-4">Here you can manage your projects, view order stats, and manage your staff and customer.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-gray-100 p-4 rounded shadow">
                <h2 class="text-xl font-semibold mb-2">Project</h2>
                <p>View and manage all your projects here.</p>
            </div>
            <div class="bg-gray-100 p-4 rounded shadow">
                <h2 class="text-xl font-semibold mb-2">Order</h2>
                <p>Get statistics about your transactions.</p>
            </div>
            <div class="bg-gray-100 p-4 rounded shadow">
                <h2 class="text-xl font-semibold mb-2">Staff</h2>
                <p>Manage your staff and their roles.</p>
            </div>
        </div>
    </div>
    <Copyright />
</template>
