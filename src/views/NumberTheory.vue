<template>
  <div class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 ease-in-out">
    <div class="bg-[#bdbdbd] text-gray-900 dark:bg-[#353535] dark:text-gray-100 min-h-screen max-w-6/10 mx-auto p-8">
      <h1 class="text-4xl text-center font-bold mb-6 text-blue-600 dark:text-blue-400">Learn Number Theory</h1>

      <!-- Prime Numbers -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-300">Prime Numbers</h2>
        <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
          A <strong class="dark:text-white">prime number</strong> is a natural number greater than 1 that is not a product of two smaller natural numbers.
        </p>
        <p class="mb-4 italic text-gray-600 dark:text-gray-400">Examples: 2, 3, 5, 7, 11, 13, 17, 19, ...</p>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-400">
          <li>2 is the only even prime number.</li>
          <li>Prime factorization expresses a number as the product of primes.</li>
          <li>Fundamental Theorem of Arithmetic: Every integer &gt; 1 is either a prime or a unique product of primes.</li>
          <li>Used in hashing and cryptography (e.g., RSA).</li>
        </ul>
      </section>

      <!-- GCD and LCM -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-300">GCD & LCM</h2>
        <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
          <strong class="dark:text-white">GCD</strong> is the largest number that divides two numbers without a remainder.
        </p>
        <p class="mb-4 italic text-gray-600 dark:text-gray-400">Example: GCD(48, 18) = 6</p>
        <p class="mb-4 text-gray-800 dark:text-gray-300">Euclidean algorithm is commonly used to compute the GCD.</p>
        <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
          <strong class="dark:text-white">LCM</strong> is the smallest number divisible by both.
        </p>
        <p class="mb-4 italic text-gray-600 dark:text-gray-400">Example: LCM(4, 6) = 12</p>
        <p class="mb-4 text-gray-800 dark:text-gray-300">
          <code class="bg-gray-200 dark:bg-gray-800 px-1 rounded">
            GCD(a, b) × LCM(a, b) = a × b
          </code>
        </p>
      </section>

      <!-- Modular Arithmetic -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-300">Modular Arithmetic</h2>
        <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
          Modular arithmetic deals with numbers looping back after reaching a modulus. It's like clock arithmetic.
        </p>
        <p class="mb-4 italic text-gray-600 dark:text-gray-400">
          Example: 17 ≡ 5 (mod 12)
        </p>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-400">
          <li>Addition: (a + b) mod m</li>
          <li>Multiplication: (a × b) mod m</li>
          <li>Exponentiation: a^b mod m</li>
        </ul>
        <p class="mb-4 text-gray-800 dark:text-gray-300">
          Used in cryptography (RSA, ECC), hashing, and digital systems.
        </p>
      </section>

      <!-- Back Button -->
      <div class="flex justify-end">
        <router-link
          to="/"
          class="inline-block mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 rounded text-white shadow"
        >
          ← Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>
