<template>
  <div class="max-w-lg mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl">
    <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">RSA Algorithm</h2>

    <div class="text-sm space-y-2 mb-4">
      <p><strong>Type:</strong> Public-key encryption</p>
      <p><strong>How it works:</strong></p>
      <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
        <li>Choose two large prime numbers <strong>p</strong> and <strong>q</strong>.</li>
        <li>Compute <strong>n = p × q</strong> and <strong>φ(n) = (p-1)(q-1)</strong>.</li>
        <li>Choose a number <strong>e</strong> such that 1 &lt; e &lt; φ(n) and <code>gcd(e, φ(n)) = 1</code>.</li>
        <li>Compute <strong>d</strong> such that <code>d × e ≡ 1 (mod φ(n))</code>.</li>
        <li>Public key: <code>(e, n)</code>, Private key: <code>(d, n)</code>.</li>
      </ul>
      <div class="bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-sm rounded-lg px-4 py-2 border border-gray-200 mt-2">
        🧮 <strong>Encryption:</strong> <code>c = m^e mod n</code><br />
        🔓 <strong>Decryption:</strong> <code>m = c^d mod n</code><br />
        ✅ Secure because factoring large <strong>n</strong> is hard.
      </div>
    </div>

    <!-- Toggle for RSA Step-by-Step Explanation -->
    <button
      @click="showSteps = !showSteps"
      class="mb-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
    >
      {{ showSteps ? 'Hide' : '⚙️ Show' }} How RSA Works – Step by Step
    </button>

    <transition name="fade">
      <div v-if="showSteps" class="text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4 leading-relaxed space-y-2">
        <h3 class="text-base font-semibold text-blue-600 dark:text-blue-400">⚙️ How RSA Works – Step by Step</h3>
        <ol class="list-decimal list-inside space-y-1">
          <li><strong>Key Generation</strong></li>
          <ul class="list-disc list-inside ml-4">
            <li>Choose two large prime numbers: <strong>p</strong> and <strong>q</strong></li>
            <li>Compute <strong>n = p × q</strong></li>
            <li><strong>n</strong> is used as the modulus for both the public and private keys</li>
            <li>Compute Euler’s totient function: <strong>φ(n) = (p - 1) × (q - 1)</strong></li>
            <li>Choose a public exponent <strong>e</strong> such that:<br />
              <code>1 &lt; e &lt; φ(n)</code> and <code>gcd(e, φ(n)) = 1</code> (e must be coprime to φ(n))
            </li>
            <li>Compute the private key <strong>d</strong> such that:<br />
              <code>d × e ≡ 1 (mod φ(n))</code><br />
              (This means d is the modular inverse of e modulo φ(n))
            </li>
            <li>✅ The public key is: <strong>(e, n)</strong></li>
            <li>✅ The private key is: <strong>(d, n)</strong></li>
          </ul>
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
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Prime p:</label>
            <input type="number" v-model.number="p" class="w-full px-2 py-1 border rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Prime q:</label>
            <input type="number" v-model.number="q" class="w-full px-2 py-1 border rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Public exponent e:</label>
            <input type="number" v-model.number="e" class="w-full px-2 py-1 border rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message (number):</label>
            <input type="number" v-model.number="message" class="w-full px-2 py-1 border rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
        </div>

        <div class="flex gap-2">
          <button @click="generateKeys" class="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600">Generate Keys</button>
          <button @click="encrypt" class="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">Encrypt</button>
          <button @click="decrypt" class="flex-1 bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">Decrypt</button>
        </div>

        <div class="text-sm">
          <p><strong>n:</strong> {{ n }}</p>
          <p><strong>φ(n):</strong> {{ phi }}</p>
          <p><strong>Private key d:</strong> {{ d }}</p>
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

const p = ref(61)
const q = ref(53)
const e = ref(17)
const d = ref(0)
const n = ref(0)
const phi = ref(0)
const message = ref(0)
const result = ref('')
const showDemo = ref(false)
const showSteps = ref(false)

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b]
  }
  return a
}

function modInverse(a, m) {
  let m0 = m, x0 = 0, x1 = 1
  if (m === 1) return 0
  while (a > 1) {
    const q = Math.floor(a / m)
    let t = m
    m = a % m
    a = t
    t = x0
    x0 = x1 - q * x0
    x1 = t
  }
  return x1 < 0 ? x1 + m0 : x1
}

function modPow(base, exponent, modulus) {
  if (modulus === 1) return 0
  let result = 1
  base = base % modulus
  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result = (result * base) % modulus
    }
    exponent = Math.floor(exponent / 2)
    base = (base * base) % modulus
  }
  return result
}

function generateKeys() {
  n.value = p.value * q.value
  phi.value = (p.value - 1) * (q.value - 1)
  if (gcd(e.value, phi.value) !== 1) {
    result.value = '❌ e must be coprime with φ(n)'
    return
  }
  d.value = modInverse(e.value, phi.value)
  result.value = `✅ Keys generated!\nPublic key: (${e.value}, ${n.value})\nPrivate key: (${d.value}, ${n.value})`
}

function encrypt() {
  if (!n.value || !e.value) {
    result.value = '⚠️ Generate keys first.'
    return
  }
  const c = modPow(message.value, e.value, n.value)
  result.value = `🔐 Encrypted ciphertext: ${c}`
}

function decrypt() {
  if (!d.value || !n.value) {
    result.value = '⚠️ Generate keys first.'
    return
  }
  const m = modPow(message.value, d.value, n.value)
  result.value = `🔓 Decrypted message: ${m}`
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
