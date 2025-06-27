<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Option 1 (Hash and Redirect) -->
    <div class="flex justify-center mb-6">
      <button
        @click="encryptAndRedirect('option1', 'number-theory')"
        class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
      >
        Number Theory / Option 1 
      </button>

      <button
        @click="encryptAndRedirect('option2', 'cryptography')"
        class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300 ml-4"
      >
        Cryptography / Option 2
      </button>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  async function encryptAndRedirect(optionText, basePath) {
    const msgBuffer = new TextEncoder().encode(optionText)
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')

    // Navigate to the hashed URL like /demos/number-theory/<hash>
    router.push(`/demos/${basePath}/${hashHex}`)
  }
</script>
