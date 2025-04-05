<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center text-blue-700">Welcome to eCommerce</h2>
            <form>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Username" v-model="email" />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="******************" v-model="password" />
                </div>
                <div class="flex items-center justify-start">
                    <button
                        class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button" @click="handleLogin">
                        Login
                    </button>
                </div>
            </form>
            <div v-if="message" class="mt-4 p-3 text-sm bg-red-100 border border-red-400 text-red-700 rounded">
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const router = useRouter()
const authStore = useAuthStore()
const email = ref('')
const password = ref('')
const message = ref('')

const handleLogin = async () => {
    console.log('Logging in with:', email.value, password.value)
    try {
        await authStore.login({
            email: email.value,
            password: password.value,
        })
        const redirectUrl = router.currentRoute.value.query.redirect || '/'
        router.push(redirectUrl)
    } catch (error) {
        message.value = error.message || 'Login failed. Please try again.'
    }
}
</script>
