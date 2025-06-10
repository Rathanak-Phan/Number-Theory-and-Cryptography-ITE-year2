<template>
  <div class="max-w-lg mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl">
    <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Vigenère Cipher</h2>

    <div class="text-sm space-y-2 mb-4">
      <p><strong>Type:</strong> Polyalphabetic substitution</p>
      <p><strong>How it works:</strong></p>
      <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
        <li>Uses a keyword to shift letters in the plaintext.</li>
        <li>Each letter of the keyword determines the shift for the corresponding letter in the message.</li>
        <li>Example: Keyword = "KEY", Message = "HELLO" → Shift by K=10, E=4, Y=24 repeatedly.</li>
      </ul>
      <div class="bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-sm rounded-lg px-4 py-2 border border-gray-200 mt-2">
        🛠 <strong>Formula:</strong><br />
        <code class="text-blue-600 dark:text-blue-400">Encrypted[i] = (Plain[i] + Key[i % keyLength]) mod 26</code>
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

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Keyword:</label>
          <input
            type="text"
            v-model="keyword"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-300"
            placeholder="Enter keyword"
          />
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
const keyword = ref('')
const result = ref('')
const showDemo = ref(false)

function encrypt() {
  result.value = vigenere(plaintext.value, keyword.value, true)
}

function decrypt() {
  result.value = vigenere(plaintext.value, keyword.value, false)
}

function vigenere(text, key, encrypt = true) {
  let output = ''
  key = key.toUpperCase().replace(/[^A-Z]/g, '')
  if (key.length === 0) return ''

  let j = 0
  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    const code = text.charCodeAt(i)

    if (char.match(/[A-Za-z]/)) {
      const base = code >= 97 ? 97 : 65
      const keyChar = key[j % key.length]
      const keyShift = keyChar.charCodeAt(0) - 65
      const shift = encrypt ? keyShift : 26 - keyShift
      const newChar = String.fromCharCode(((code - base + shift) % 26) + base)
      output += newChar
      j++
    } else {
      output += char
    }
  }

  return output
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
