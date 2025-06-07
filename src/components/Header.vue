<template>
  <header class="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo / Brand -->
        <router-link to="/" class="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
          Number
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-6">
            <router-link to="/" class="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Home</router-link>
            <router-link to="/concept" class="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Concept</router-link>
            <router-link to="/demos" class="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Demo</router-link>
            <router-link to="/about" class="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">About</router-link>
            <div class="items-center space-x-4 text-gray-700 dark:text-gray-300">
                <Theme />
            </div>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center justify-center text-gray-700 dark:text-gray-300 space-x-4">
            <div class="items-center space-x-4">
                <Theme />
            </div>
            <button @click="toggleMenu" class="flex gap-5 text-gray-700 dark:text-gray-300 focus:outline-none">
                <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4 bg-gray-50 dark:bg-gray-800">
      <nav class="flex flex-col space-y-2">
        <router-link to="/" @click="closeMenu" class="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Home</router-link>
        <router-link to="/concept" @click="closeMenu" class="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Concept</router-link>
        <router-link to="/demos" @click="closeMenu" class="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Demo</router-link>
        <router-link to="/about" @click="closeMenu" class="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">About</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import Theme from '../context/Theme.vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}
</script>

<style lang="css">
/* Add your component-specific styles here if needed */
</style>
