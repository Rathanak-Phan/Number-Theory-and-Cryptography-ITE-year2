<template>
  <div class="mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 ease-in-out">
    
    <!-- Interactive Demo Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-12">
      <h2 class="text-2xl md:text-3xl text-center font-semibold mb-6 text-indigo-600 dark:text-indigo-300">
        Interactive Cryptography Demos
      </h2>
      <p class="text-center text-gray-600 dark:text-gray-300 mb-6">
        Explore number theory concepts used in cryptography, such as prime numbers, modular arithmetic, and classical/modern ciphers.
      </p>
    </section>

    <!-- Number Theory Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-12">
      <h2 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4">
        Number Theory
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PrimeNumberChecker />
        <ModularArithmetic />
      </div>
    </section>

    <!-- Classical Cryptography Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-12">
      <h2 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4">
        Classical Cryptography
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CaesarCipher />
        <VigenereCipher />
        <HillCipher />
        <AffineCipher />
      </div>
    </section>

    <!-- Modern Cryptography Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-12">
      <h2 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4">
        Modern Cryptography
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RSA />
      </div>
    </section>

    <!-- Hash Function Application Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-2xl md:text-3xl text-center font-semibold mb-6 text-indigo-600 dark:text-indigo-300">
        Apply Number Theory in Cryptography (Hash Function)
      </h2>
      <p class="text-center text-gray-600 dark:text-gray-300 mb-6">
        Hash functions ensure data integrity and security by converting any input into a fixed-length string. They're a fundamental part of modern cryptographic systems.
      </p>
      <Apply />
    </section>
  </div>
</template>

<script>
import Apply from "../components/Apply.vue";
import CaesarCipher from "../components/Algorithm/CaesarCipher.vue";
import PrimeNumberChecker from "../components/Algorithm/PrimeNumberChecker.vue";
import ModularArithmetic from "../components/Algorithm/ModularArithmetic.vue";
import VigenereCipher from "../components/Algorithm/VigenereCipher.vue";
import HillCipher from "../components/Algorithm/HillCipher.vue";
import AffineCipher from "../components/Algorithm/AffineCipher.vue";
import RSA from "../components/Algorithm/RSA.vue";

export default {
  name: "CryptoDemos",
  components: {
    Apply,
    CaesarCipher,
    PrimeNumberChecker,
    ModularArithmetic,
    VigenereCipher,
    HillCipher,
    AffineCipher,
    RSA,
  },
  mounted() {
    document.title = "Interactive Cryptography Demos | Number Theory";
  },
};
</script>
