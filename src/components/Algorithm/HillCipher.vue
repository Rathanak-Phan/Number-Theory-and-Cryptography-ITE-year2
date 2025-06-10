<template>
  <div class="max-w-lg mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl">
    <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Hill Cipher</h2>

    <div class="text-sm space-y-2 mb-4">
      <p><strong>Type:</strong> Matrix-based cipher</p>
      <p><strong>How it works:</strong></p>
      <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
        <li>Converts letters to numbers (A=0, B=1, ..., Z=25).</li>
        <li>Applies matrix multiplication with a key matrix.</li>
        <li>Result is converted back to letters using mod 26.</li>
      </ul>
      <div class="bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-sm rounded-lg px-4 py-2 border border-gray-200 mt-2">
        🛠 <strong>Formula:</strong><br />
        <code class="text-blue-600 dark:text-blue-400">C = K × P mod 26</code><br />
        <span class="text-xs">Where K is the key matrix, P is the plaintext vector, and C is the ciphertext.</span><br />
        🔁 <strong>Decryption:</strong> Uses the inverse matrix modulo 26.
      </div>
    </div>

    <button
      @click="showDemo = !showDemo"
      class="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      {{ showDemo ? 'Hide Demo' : 'Show Demo' }}
    </button>

    <transition name="fade">
      <div v-if="showDemo" class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Plaintext (length 2):</label>
          <input
            type="text"
            v-model="plaintext"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-300"
            placeholder="Enter 2-letter text"
            maxlength="2"
          />
        </div>

        <div class="mb-4 space-y-1">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Key Matrix (2x2):</label>
          <div class="grid grid-cols-2 gap-2">
            <input v-model.number="key[0]" type="number" class="px-2 py-1 border rounded-md dark:bg-gray-700 dark:text-gray-100" />
            <input v-model.number="key[1]" type="number" class="px-2 py-1 border rounded-md dark:bg-gray-700 dark:text-gray-100" />
            <input v-model.number="key[2]" type="number" class="px-2 py-1 border rounded-md dark:bg-gray-700 dark:text-gray-100" />
            <input v-model.number="key[3]" type="number" class="px-2 py-1 border rounded-md dark:bg-gray-700 dark:text-gray-100" />
          </div>
        </div>

        <div class="flex gap-2 mb-4">
          <button
            @click="encrypt"
            class="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Encrypt
          </button>
          <button
            @click="decrypt"
            class="flex-1 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
          >
            Decrypt
          </button>
        </div>

        <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3 rounded-lg">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Result:</label>
          <p class="text-lg text-gray-800 dark:text-gray-100 font-mono break-words">{{ result }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const plaintext = ref('')
const key = ref([3, 3, 2, 5]) // 2x2 matrix
const result = ref('')
const showDemo = ref(false)

function mod(n, m) {
  return ((n % m) + m) % m
}

function encrypt() {
  if (plaintext.value.length !== 2) {
    result.value = 'Enter exactly 2 letters.'
    return
  }

  const vec = plaintext.value.toUpperCase().split('').map(c => c.charCodeAt(0) - 65)
  const [a, b, c, d] = key.value
  const c1 = mod(a * vec[0] + b * vec[1], 26)
  const c2 = mod(c * vec[0] + d * vec[1], 26)

  result.value = String.fromCharCode(c1 + 65) + String.fromCharCode(c2 + 65)
}

function decrypt() {
  const det = key.value[0] * key.value[3] - key.value[1] * key.value[2]
  const invDet = modInverse(det, 26)
  if (invDet === -1) {
    result.value = 'Matrix is not invertible mod 26.'
    return
  }

  const [a, b, c, d] = key.value
  const invMatrix = [
    mod(d * invDet, 26),
    mod(-b * invDet, 26),
    mod(-c * invDet, 26),
    mod(a * invDet, 26)
  ]

  if (plaintext.value.length !== 2) {
    result.value = 'Enter exactly 2 letters.'
    return
  }

  const vec = plaintext.value.toUpperCase().split('').map(c => c.charCodeAt(0) - 65)
  const p1 = mod(invMatrix[0] * vec[0] + invMatrix[1] * vec[1], 26)
  const p2 = mod(invMatrix[2] * vec[0] + invMatrix[3] * vec[1], 26)

  result.value = String.fromCharCode(p1 + 65) + String.fromCharCode(p2 + 65)
}

function modInverse(a, m) {
  a = mod(a, m)
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) return x
  }
  return -1
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
