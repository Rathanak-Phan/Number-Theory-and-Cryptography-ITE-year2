<template>
  <div class="max-w-lg mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl">
    <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">CRC (Cyclic Redundancy Check)</h2>

    <div class="text-sm space-y-2 mb-4">
      <p><strong>Type:</strong> Error-detection algorithm (not cryptographic)</p>
      <p><strong>How it works:</strong></p>
      <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
        <li>Convert input data into binary.</li>
        <li>Choose a generator polynomial (also in binary).</li>
        <li>Append zero bits to the message equal to the degree of the polynomial.</li>
        <li>Perform binary division (XOR) and find the remainder.</li>
        <li>That remainder is the <strong>CRC checksum</strong>.</li>
      </ul>
      <div class="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm rounded-lg px-4 py-2 mt-2">
        🧮 <strong>Example:</strong><br />
        Message: <code>11010011101100</code><br />
        Polynomial: <code>1011</code><br />
        CRC: <code>100</code>
      </div>
    </div>

    <button
      @click="showSteps = !showSteps"
      class="mb-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
    >
      {{ showSteps ? 'Hide' : '⚙️ Show' }} How CRC Works – Step by Step
    </button>

    <transition name="fade">
      <div v-if="showSteps" class="text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4 space-y-2 leading-relaxed">
        <h3 class="text-base font-semibold text-blue-600 dark:text-blue-400">⚙️ CRC Step-by-Step</h3>
        <ol class="list-decimal list-inside space-y-1">
          <li>Input message and generator are binary strings.</li>
          <li>Append zeros to the message (length = degree of polynomial).</li>
          <li>Divide using XOR logic (binary division).</li>
          <li>The remainder is the CRC checksum.</li>
          <li>Append the checksum to the original message for transmission.</li>
        </ol>
      </div>
    </transition>

    <!-- Demo -->
    <button
      @click="showDemo = !showDemo"
      class="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      {{ showDemo ? 'Hide Demo' : 'Show Demo' }}
    </button>

    <transition name="fade">
      <div v-if="showDemo" class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message (binary):</label>
          <input v-model="message" class="w-full px-2 py-1 border rounded-md dark:bg-gray-700 dark:text-white" placeholder="e.g. 11010011101100" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Polynomial (binary):</label>
          <input v-model="polynomial" class="w-full px-2 py-1 border rounded-md dark:bg-gray-700 dark:text-white" placeholder="e.g. 1011" />
        </div>
        <button @click="calculateCRC" class="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">Compute CRC</button>

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

const message = ref('')
const polynomial = ref('')
const result = ref('')
const showSteps = ref(false)
const showDemo = ref(false)

function xor(dividend, divisor) {
  let result = ''
  for (let i = 1; i < divisor.length; i++) {
    result += dividend[i] === divisor[i] ? '0' : '1'
  }
  return result
}

function calculateCRC() {
  let msg = message.value.trim()
  let poly = polynomial.value.trim()

  if (!msg || !poly || !/^[01]+$/.test(msg) || !/^[01]+$/.test(poly)) {
    result.value = '❌ Please enter valid binary strings.'
    return
  }

  const appended = msg + '0'.repeat(poly.length - 1)
  let temp = appended.slice(0, poly.length)

  for (let i = poly.length; i <= appended.length; i++) {
    if (temp[0] === '1') {
      temp = xor(temp, poly)
    } else {
      temp = xor(temp, '0'.repeat(poly.length))
    }
    if (i < appended.length) {
      temp += appended[i]
    }
  }

  result.value = `✅ CRC: ${temp.padStart(poly.length - 1, '0')}`
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
