<template>
  <footer class="bg-gradient-to-r from-blue-600 to-purple-600 text-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 dark:text-gray-300 py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Left: Site Info -->
        <div class="mb-4 md:mb-0 text-center md:text-left">
          <h2 class="font-semibold text-lg">Number Theory & Cryptography</h2>
          <p class="text-sm">© {{ currentYear }} Rathanak Phan. All rights reserved.</p>
        </div>

        <!-- Right: Social Media Links -->
        <div class="flex space-x-4">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            class="rounded-full bg-white/10 hover:bg-blue-500 transition-colors duration-200 p-2 text-xl text-white hover:text-white shadow-md"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener"
            aria-label="Twitter"
            class="rounded-full bg-white/10 hover:bg-sky-400 transition-colors duration-200 p-2 text-xl text-white hover:text-white shadow-md"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            class="rounded-full bg-white/10 hover:bg-pink-500 transition-colors duration-200 p-2 text-xl text-white hover:text-white shadow-md"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            class="rounded-full bg-white/10 hover:bg-blue-700 transition-colors duration-200 p-2 text-xl text-white hover:text-white shadow-md"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>