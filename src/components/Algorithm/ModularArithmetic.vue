<template>
  <div class="max-w-lg mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl">
    <h2 class="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Modular Arithmetic</h2>

    <div class="text-sm space-y-2 mb-4">
      <p><strong>Definition:</strong> Modular arithmetic deals with integers and a modulus, wrapping around upon reaching the modulus.</p>
      <div class="bg-gray-100 dark:bg-gray-800 text-sm rounded-lg px-4 py-2 border border-gray-200 dark:border-gray-700 mt-2">
        🧮 <strong>Formula:</strong><br />
        <code class="text-purple-600 dark:text-purple-400">a mod n = remainder when a is divided by n</code>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
      <div>
        <label class="block text-sm font-medium mb-1">a:</label>
        <input type="number" v-model.number="a" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600" />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">n (modulus):</label>
        <input type="number" v-model.number="n" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600" />
      </div>
      <div class="flex items-end">
        <button @click="computeMod" class="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">Calculate</button>
      </div>
    </div>

    <div v-if="result !== null" class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3 rounded-lg">
      <p class="text-lg font-mono text-gray-800 dark:text-gray-100">{{ a }} mod {{ n }} = <strong>{{ result }}</strong></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const a = ref(0)
const n = ref(1)
const result = ref(null)

function computeMod() {
  if (n.value === 0) {
    result.value = 'Undefined (division by zero)'
    return
  }
  result.value = ((a.value % n.value) + n.value) % n.value
}
</script>
