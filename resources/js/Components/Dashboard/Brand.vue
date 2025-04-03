<template>
    <div class="bg-white w-full">
        <nav class="bg-blue-700 p-4 mx-auto xl:w-3/4 xl:mt-4 lg:w-3/4 lg:mt-4 md:w-3/4 md:mt-4">
            <div class="container mx-auto flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <img alt="Company Logo" class="h-10 w-10" height="40"
                        src="https://storage.googleapis.com/a1aa/image/eIjNI_w5oUclIFwdESw3hHsT6DnZHzav6yYuOQiGU-E.jpg"
                        width="40" />
                    <span class="text-white text-xl font-semibold">eCommerce</span>
                </div>
            </div>
            <div class="container mx-auto mt-4 hidden md:block lg:block xl:block text-white" id="mobile-menu">
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
        <div class="container mx-auto p-4 xl:w-3/4 xl:mt-4 lg:w-3/4 lg:mt-4 md:w-3/4 md:mt-4">
            <h1 class="text-2xl font-bold mb-1">Welcome to eCommerce Dashboard</h1>
            <p class="mb-4">Here you can manage your projects, view order stats, and manage your staff and customer.</p>
        </div>
    </div>
</template>
