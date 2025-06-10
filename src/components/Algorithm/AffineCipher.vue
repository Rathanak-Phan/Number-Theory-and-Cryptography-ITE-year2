<template>
  <div class="max-w-lg mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl">
    <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Affine Cipher</h2>

    <div class="text-sm space-y-2 mb-4">
      <p><strong>Type:</strong> Mathematical substitution cipher</p>
      <p><strong>How it works:</strong></p>
      <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
        <li>Each letter is encrypted using the formula:</li>
        <li><code>E(x) = (a * x + b) mod 26</code></li>
        <li><strong>a</strong> and <strong>b</strong> are keys; <strong>x</strong> is the index of the letter (A=0, B=1, ...).</li>
        <li>Decryption uses the modular inverse of <strong>a</strong>.</li>
      </ul>
      <div class="bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-sm rounded-lg px-4 py-2 border border-gray-200 mt-2">
        🔐 <strong>Note:</strong><br />
        <code class="text-blue-600 dark:text-blue-400">a</code> must be coprime with <code>26</code> to allow decryption.
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
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Plaintext:</label>
          <input
            type="text"
            v-model="plaintext"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-300"
            placeholder="Enter text to encrypt"
          />
        </div>

        <div class="flex gap-4 mb-4">
          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Key a:</label>
            <input
              type="number"
              v-model.number="a"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-300"
              min="1"
              max="25"
            />
          </div>
          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Key b:</label>
            <input
              type="number"
              v-model.number="b"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-300"
              min="0"
              max="25"
            />
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
const a = ref(5) // a must be coprime with 26
const b = ref(8)
const result = ref('')
const showDemo = ref(false)

function encrypt() {
  if (gcd(a.value, 26) !== 1) {
    result.value = 'Error: "a" must be coprime with 26.'
    return
  }

  result.value = transformText(plaintext.value, (x) => (a.value * x + b.value) % 26)
}

function decrypt() {
  const aInv = modInverse(a.value, 26)
  if (aInv === -1) {
    result.value = 'Error: No modular inverse for "a".'
    return
  }

  result.value = transformText(plaintext.value, (x) => (aInv * (x - b.value + 26)) % 26)
}

function transformText(text, transformFn) {
  return text
    .split('')
    .map(char => {
      const code = char.charCodeAt(0)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(transformFn(code - 65) + 65)
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(transformFn(code - 97) + 97)
      }
      return char
    })
    .join('')
}

function gcd(a, b) {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

function modInverse(a, m) {
  a = a % m
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
