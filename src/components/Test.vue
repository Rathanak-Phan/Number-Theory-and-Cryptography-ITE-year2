<template>
  <section class="max-w-5xl mx-auto px-4 py-10 text-gray-800">
    <h1 class="text-4xl font-bold mb-6 text-center">🔐 Welcome to Number Theory & Cryptography</h1>

    <p class="text-lg mb-6 text-center">
      Learn the core principles of number theory and how they power modern cryptographic systems like RSA and ECC.
    </p>

    <!-- What is Number Theory -->
    <div class="mb-10">
      <h2 class="text-2xl font-semibold mb-2">📘 What is Number Theory?</h2>
      <p class="text-base">
        Number theory is a branch of mathematics that studies integers and their properties. It includes topics like prime numbers, modular arithmetic, and greatest common divisors—all essential for encryption algorithms.
      </p>
    </div>

    <!-- What is Cryptography -->
    <div class="mb-10">
      <h2 class="text-2xl font-semibold mb-2">🔒 What is Cryptography?</h2>
      <p class="text-base">
        Cryptography is the science of securing information. It uses mathematical techniques—especially number theory—to encrypt data so only authorized parties can understand it.
      </p>
    </div>

    <!-- Navigation Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      <RouterLink
        to="/concepts"
        class="p-6 bg-white shadow-md rounded-xl hover:shadow-lg border hover:border-blue-500 transition"
      >
        <h3 class="text-xl font-semibold mb-2">📗 Concepts</h3>
        <p class="text-sm">Learn modular arithmetic, GCD, primes, and other key math ideas.</p>
      </RouterLink>

      <RouterLink
        to="/algorithms"
        class="p-6 bg-white shadow-md rounded-xl hover:shadow-lg border hover:border-green-500 transition"
      >
        <h3 class="text-xl font-semibold mb-2">📘 Algorithms</h3>
        <p class="text-sm">Explore RSA, Diffie-Hellman, ECC and how they use number theory.</p>
      </RouterLink>

      <RouterLink
        to="/demo"
        class="p-6 bg-white shadow-md rounded-xl hover:shadow-lg border hover:border-purple-500 transition"
      >
        <h3 class="text-xl font-semibold mb-2">🧪 Demo</h3>
        <p class="text-sm">Try encryption and decryption interactively with real algorithms.</p>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
// No logic required for static home page
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
