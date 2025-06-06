<template>
  <footer class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Left: Site Info -->
        <div class="mb-4 md:mb-0 text-center md:text-left">
          <h2 class="font-semibold text-lg">Number Theory & Cryptography</h2>
          <p class="text-sm">© {{ currentYear }} Rathanak Phan. All rights reserved.</p>
        </div>

        <!-- Right: Navigation Links -->
        <div class="flex space-x-4">
          <router-link to="/" class="footer-link">Home</router-link>
          <router-link to="/description" class="footer-link">Description</router-link>
          <router-link to="/demo" class="footer-link">Demo</router-link>
          <router-link to="/about" class="footer-link">About</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
