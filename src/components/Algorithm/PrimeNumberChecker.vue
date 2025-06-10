<template>
  <div class="max-w-xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl">
    <h2 class="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Prime Number Checker</h2>

    <div class="text-sm space-y-2 mb-4">
      <p><strong>Definition:</strong> A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.</p>
      <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
        <li>2 is the smallest and only even prime number.</li>
        <li>All other even numbers are not prime.</li>
        <li>Prime numbers have exactly two distinct positive divisors: 1 and the number itself.</li>
      </ul>
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Enter a number:</label>
      <input
        type="number"
        v-model.number="number"
        class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-green-300"
        min="0"
      />
    </div>

    <button
      @click="checkPrime"
      class="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
    >
      Check Prime
    </button>

    <div v-if="result !== null" class="mt-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3 rounded-lg">
      <p class="text-lg font-mono text-gray-800 dark:text-gray-100">{{ number }} is <strong>{{ result ? 'a Prime' : 'not a Prime' }}</strong> number.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const number = ref(0)
const result = ref(null)

function checkPrime() {
  if (number.value <= 1) {
    result.value = false
    return
  }
  for (let i = 2; i <= Math.sqrt(number.value); i++) {
    if (number.value % i === 0) {
      result.value = false
      return
    }
  }
  result.value = true
}
</script>
