<template>
  <div class="dark bg-gray-900 text-gray-100 min-h-screen p-8">
    <h1 class="text-4xl font-bold mb-6 text-blue-400">Learn Number Theory</h1>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-2 text-indigo-300">Prime Numbers</h2>
      <p class="mb-4 leading-relaxed text-gray-300">
        Prime numbers are integers greater than 1 that have no positive divisors other than 1 and itself. They are the building blocks of number theory and play a critical role in cryptography.
      </p>
      <ul class="list-disc list-inside text-gray-400">
        <li>Examples: 2, 3, 5, 7, 11, 13, ...</li>
        <li>Fundamental Theorem of Arithmetic: Every integer can be uniquely factored into primes.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-2 text-indigo-300">Greatest Common Divisor (GCD)</h2>
      <p class="mb-4 leading-relaxed text-gray-300">
        The greatest common divisor of two integers is the largest positive integer that divides both without a remainder.
      </p>
      <p class="mb-4 italic text-gray-400">
        Example: GCD of 48 and 18 is 6.
      </p>
      <p class="mb-4 text-gray-400">
        The Euclidean algorithm is an efficient method to compute the GCD.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-2 text-indigo-300">Modular Arithmetic</h2>
      <p class="mb-4 leading-relaxed text-gray-300">
        Modular arithmetic deals with integers wrapped around after reaching a certain value called the modulus. It is like a clock where after 12 comes 1.
      </p>
      <p class="mb-4 italic text-gray-400">
        Notation: <code class="bg-gray-800 px-1 rounded">a ≡ b (mod m)</code> means that (a - b) is divisible by m.
      </p>
      <ul class="list-disc list-inside text-gray-400">
        <li>Used heavily in cryptography algorithms like RSA.</li>
        <li>Properties include addition, multiplication, and exponentiation modulo m.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-2 text-indigo-300">Euler’s Totient Function</h2>
      <p class="mb-4 leading-relaxed text-gray-300">
        Euler’s Totient Function, denoted <code class="bg-gray-800 px-1 rounded">φ(n)</code>, counts the positive integers up to n that are relatively prime to n.
      </p>
      <p class="mb-4 text-gray-400">
        It’s used in the RSA algorithm to compute the private key.
      </p>
    </section>

    <router-link
      to="/"
      class="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white shadow"
    >
      ← Back to Home
    </router-link>
  </div>
</template>
