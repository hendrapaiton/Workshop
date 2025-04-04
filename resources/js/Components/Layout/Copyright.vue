<template>
    <div class="text-center text-xs text-gray-400 py-4">
        <p>Copyright &copy; {{ currentYear }} Agerep Proyek. Hak cipta dilindungi undang-undang.</p>
    </div>
</template>

<script>
export default {
    name: 'Copyright',
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    }
}
</script>
