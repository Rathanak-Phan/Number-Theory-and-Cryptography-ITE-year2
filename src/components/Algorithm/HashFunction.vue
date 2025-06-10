<template>
  <div class="max-w-lg mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl">
    <h2 class="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Hash Functions (SHA-256, MD5)</h2>

    <div class="text-sm space-y-2 mb-4">
      <p><strong>Type:</strong> One-way functions</p>
      <p><strong>How it works:</strong></p>
      <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
        <li>Input of any length → fixed-length output (called the <em>digest</em>).</li>
        <li>Example: <code>SHA-256("hello")</code> → <code>2cf24dba5fb0a...</code></li>
      </ul>
      <p><strong>Used for:</strong></p>
      <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
        <li>Password storage</li>
        <li>Data integrity verification</li>
        <li>Digital signatures</li>
      </ul>
      <div class="bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-sm rounded-lg px-4 py-2 border border-gray-200 mt-2">
        🧠 <strong>No decryption possible — hashing is not encryption but a one-way transform.</strong>
      </div>
    </div>

    <!-- Demo -->
    <button
      @click="showDemo = !showDemo"
      class="mb-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
    >
      {{ showDemo ? 'Hide Demo' : 'Show Demo' }}
    </button>

    <transition name="fade">
      <div v-if="showDemo" class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 space-y-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Input text:</label>
        <input
          v-model="inputText"
          type="text"
          placeholder="Enter text to hash"
          class="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
        />

        <div>
          <button @click="computeHashes" class="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
            Compute Hashes
          </button>
        </div>

        <div v-if="sha256Hash" class="text-sm">
          <p><strong>SHA-256:</strong></p>
          <pre class="bg-white dark:bg-gray-900 p-2 rounded font-mono break-all">{{ sha256Hash }}</pre>
        </div>

        <div v-if="md5Hash" class="text-sm">
          <p><strong>MD5:</strong></p>
          <pre class="bg-white dark:bg-gray-900 p-2 rounded font-mono break-all">{{ md5Hash }}</pre>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Import hashing libs
import sha256 from 'js-sha256'
import md5 from 'blueimp-md5'

const inputText = ref('')
const sha256Hash = ref('')
const md5Hash = ref('')
const showDemo = ref(false)

function computeHashes() {
  if (!inputText.value) {
    sha256Hash.value = ''
    md5Hash.value = ''
    return
  }
  sha256Hash.value = sha256(inputText.value)
  md5Hash.value = md5(inputText.value)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
