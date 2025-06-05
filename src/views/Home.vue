<template>
  <main class="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors">
    <div class="max-w-4xl mx-auto px-4 py-12 text-center">
      <h1 class="text-4xl sm:text-5xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
        Welcome to Number Theory & Cryptography
      </h1>
      <p class="text-lg sm:text-xl mb-8 leading-relaxed">
        Explore the mathematical foundations and applications of number theory in cryptography.
        Learn how prime numbers, modular arithmetic, and algorithms secure digital communication.
      </p>

      <div class="flex justify-center space-x-4">
        <router-link
          to="/description"
          class="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        >
          Learn More
        </router-link>
        <router-link
          to="/demo"
          class="px-6 py-3 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Try Demo
        </router-link>
      </div>
    </div>
  </main>
</template>
