<template>
  <div
    class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 ease-in-out"
  >
    <div
      class="bg-[#bdbdbd] text-gray-900 dark:bg-[#353535] dark:text-gray-100 min-h-screen max-w-7xl mx-auto p-8"
    >
      <h1
        class="text-4xl text-center font-bold mb-8 text-blue-600 dark:text-blue-400"
      >
        Number Theory Concepts in Cryptography
      </h1>

      <!-- Introduction Section -->
      <section class="mb-12">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          Foundation of Modern Security
        </h2>

        <div class="mb-6">
          <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
            Number theory, which is the branch of mathematics relating to
            numbers and the rules governing them, is the mother of modern
            cryptography - the science of encrypting communication.
            Understanding these mathematical foundations is crucial for
            comprehending how digital security works in our modern world.
          </p>

          <div
            class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 p-4 mb-4 rounded"
          >
            <h3 class="font-semibold mb-2 text-blue-800 dark:text-blue-300">
              Core Mathematical Concepts:
            </h3>
            <div class="grid md:grid-cols-2 gap-4 text-sm">
              <ul
                class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1"
              >
                <li>Prime Numbers and Factorization</li>
                <li>Modular Arithmetic</li>
                <li>Greatest Common Divisor (GCD)</li>
                <li>Euler's Totient Function</li>
              </ul>
              <ul
                class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1"
              >
                <li>Discrete Logarithm Problem</li>
                <li>Fermat's Little Theorem</li>
                <li>Chinese Remainder Theorem</li>
                <li>Elliptic Curve Mathematics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Prime Numbers in Cryptography Section -->
      <section class="mb-12">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          Prime Numbers: The Building Blocks
        </h2>

        <div class="mb-6">
          <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
            The use of prime numbers in cryptography is grounded in the
            complexity of mathematical problems associated with primes. Their
            unique properties make them perfect for creating secure encryption
            systems.
          </p>

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div
              class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded"
            >
              <h3 class="font-semibold mb-2 text-green-800 dark:text-green-300">
                Why Primes Are Special:
              </h3>
              <ul
                class="list-disc list-inside text-gray-700 dark:text-gray-400 text-sm space-y-1"
              >
                <li>Only divisible by 1 and themselves</li>
                <li>Fundamental building blocks of all integers</li>
                <li>Create one-way mathematical functions</li>
                <li>Computationally hard to factor when large</li>
              </ul>
            </div>

            <div
              class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded"
            >
              <h3
                class="font-semibold mb-2 text-yellow-800 dark:text-yellow-300"
              >
                Cryptographic Applications:
              </h3>
              <ul
                class="list-disc list-inside text-gray-700 dark:text-gray-400 text-sm space-y-1"
              >
                <li>RSA key generation</li>
                <li>Diffie-Hellman key exchange</li>
                <li>Digital signature algorithms</li>
                <li>Pseudo-random number generation</li>
              </ul>
            </div>
          </div>

          <div
            class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-6 rounded"
          >
            <h3 class="font-semibold mb-2 text-red-800 dark:text-red-300">
              The Factorization Problem
            </h3>
            <p class="mb-2 text-sm text-gray-700 dark:text-gray-400">
              While multiplying two large primes is easy, factoring their
              product back into the original primes is computationally
              infeasible.
            </p>
            <div
              class="bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded font-mono text-center text-sm"
            >
              Easy: 1009 × 1013 = 1,022,117<br />
              Hard: 1,022,117 = ? × ?
            </div>
          </div>
        </div>
      </section>

      <!-- Modular Arithmetic Section -->
      <section class="mb-12">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          Modular Arithmetic: Clock Mathematics
        </h2>

        <div class="mb-6">
          <div class="grid md:grid-cols-3 gap-6 mb-6">
            <div class="md:col-span-2">
              <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
                <strong class="dark:text-white">Modular arithmetic</strong> is
                like clock arithmetic where numbers "wrap around" after reaching
                a certain value (the modulus). This concept is fundamental to
                many cryptographic operations.
              </p>

              <div
                class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4 rounded"
              >
                <h3 class="font-semibold mb-2 text-blue-800 dark:text-blue-300">
                  Basic Operations:
                </h3>
                <div class="space-y-2 text-sm font-mono">
                  <div class="bg-gray-200 dark:bg-gray-800 p-2 rounded">
                    <strong>Addition:</strong> (a + b) mod n = ((a mod n) + (b
                    mod n)) mod n
                  </div>
                  <div class="bg-gray-200 dark:bg-gray-800 p-2 rounded">
                    <strong>Multiplication:</strong> (a × b) mod n = ((a mod n)
                    × (b mod n)) mod n
                  </div>
                  <div class="bg-gray-200 dark:bg-gray-800 p-2 rounded">
                    <strong>Exponentiation:</strong> a^b mod n (used in RSA)
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-4"
            >
              <h3
                class="font-semibold mb-3 text-purple-800 dark:text-purple-300"
              >
                Clock Example
              </h3>
              <div class="text-center mb-3">
                <div
                  class="w-20 h-20 border-4 border-purple-400 rounded-full mx-auto flex items-center justify-center text-lg font-bold"
                >
                  12
                </div>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-400 text-center">
                15 hours = 3 o'clock<br />
                15 mod 12 = 3
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Cryptographic Algorithms Section -->
      <section class="mb-12">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          Key Cryptographic Algorithms
        </h2>

        <!-- RSA Algorithm -->
        <div class="mb-8">
          <h3
            class="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400"
          >
            RSA (Rivest-Shamir-Adleman)
          </h3>

          <div
            class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-6 mb-6"
          >
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4
                  class="font-semibold mb-3 text-purple-800 dark:text-purple-300"
                >
                  Key Generation Steps:
                </h4>
                <div class="space-y-2 text-sm">
                  <div
                    class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-purple-400"
                  >
                    <strong>1.</strong> Choose two large primes p and q
                  </div>
                  <div
                    class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-purple-400"
                  >
                    <strong>2.</strong> Compute n = p × q
                  </div>
                  <div
                    class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-purple-400"
                  >
                    <strong>3.</strong> Calculate φ(n) = (p-1)(q-1)
                  </div>
                  <div
                    class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-purple-400"
                  >
                    <strong>4.</strong> Choose e with gcd(e, φ(n)) = 1
                  </div>
                  <div
                    class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-purple-400"
                  >
                    <strong>5.</strong> Find d where e×d ≡ 1 (mod φ(n))
                  </div>
                </div>
              </div>

              <div>
                <h4
                  class="font-semibold mb-3 text-purple-800 dark:text-purple-300"
                >
                  Encryption/Decryption:
                </h4>
                <div class="space-y-3">
                  <div class="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                    <strong class="text-green-800 dark:text-green-300"
                      >Public Key:</strong
                    >
                    (n, e)<br />
                    <code class="text-sm font-mono">C = M^e mod n</code>
                  </div>
                  <div class="bg-red-100 dark:bg-red-900/30 p-3 rounded">
                    <strong class="text-red-800 dark:text-red-300"
                      >Private Key:</strong
                    >
                    (n, d)<br />
                    <code class="text-sm font-mono">M = C^d mod n</code>
                  </div>
                </div>

                <div
                  class="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded"
                >
                  <p class="text-xs text-yellow-800 dark:text-yellow-300">
                    <strong>Security:</strong> Breaking RSA requires factoring n
                    into p and q, which is computationally infeasible for large
                    primes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Diffie-Hellman -->
        <div class="mb-8">
          <h3
            class="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400"
          >
            Diffie-Hellman Key Exchange
          </h3>

          <div
            class="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border border-teal-200 dark:border-teal-700 rounded-lg p-6"
          >
            <p class="mb-4 text-gray-800 dark:text-gray-300">
              Allows two parties to establish a shared secret over an insecure
              channel using the discrete logarithm problem.
            </p>

            <div class="grid md:grid-cols-3 gap-4 text-sm">
              <div
                class="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-teal-400"
              >
                <h4 class="font-semibold text-teal-700 dark:text-teal-300 mb-2">
                  Setup
                </h4>
                <p class="text-xs text-gray-600 dark:text-gray-400">
                  Choose prime p and generator g<br />
                  Both values are public
                </p>
              </div>

              <div
                class="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-teal-400"
              >
                <h4 class="font-semibold text-teal-700 dark:text-teal-300 mb-2">
                  Exchange
                </h4>
                <p class="text-xs text-gray-600 dark:text-gray-400">
                  Alice sends: g^a mod p<br />
                  Bob sends: g^b mod p
                </p>
              </div>

              <div
                class="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-teal-400"
              >
                <h4 class="font-semibold text-teal-700 dark:text-teal-300 mb-2">
                  Shared Secret
                </h4>
                <p class="text-xs text-gray-600 dark:text-gray-400">
                  Both compute: g^(ab) mod p<br />
                  Same result for both parties
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Hash Functions Section -->
      <section class="mb-12">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          Cryptographic Hash Functions
        </h2>

        <div class="mb-6">
          <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
            Principles of number theory like cryptographic hash functions help
            in successfully verifying data integrity and preventing tampering
            during digital documentation or even blockchain transactions.
          </p>

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div
              class="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded"
            >
              <h3
                class="font-semibold mb-2 text-orange-800 dark:text-orange-300"
              >
                Properties of Secure Hash Functions:
              </h3>
              <ul
                class="list-disc list-inside text-gray-700 dark:text-gray-400 text-sm space-y-1"
              >
                <li>
                  <strong>Deterministic:</strong> Same input = same output
                </li>
                <li>
                  <strong>Fixed Output:</strong> Always same length regardless
                  of input
                </li>
                <li><strong>One-way:</strong> Infeasible to reverse</li>
                <li>
                  <strong>Avalanche Effect:</strong> Small input change = large
                  output change
                </li>
                <li>
                  <strong>Collision Resistant:</strong> Hard to find two inputs
                  with same hash
                </li>
              </ul>
            </div>

            <div
              class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded"
            >
              <h3
                class="font-semibold mb-2 text-indigo-800 dark:text-indigo-300"
              >
                Common Hash Functions:
              </h3>
              <div class="space-y-2 text-sm">
                <div class="bg-gray-200 dark:bg-gray-800 p-2 rounded">
                  <strong>SHA-256:</strong> 256-bit output, Bitcoin mining
                </div>
                <div class="bg-gray-200 dark:bg-gray-800 p-2 rounded">
                  <strong>SHA-3:</strong> Latest standard, quantum-resistant
                  design
                </div>
                <div class="bg-gray-200 dark:bg-gray-800 p-2 rounded">
                  <strong>bcrypt:</strong> Password hashing with salt
                </div>
                <div class="bg-gray-200 dark:bg-gray-800 p-2 rounded">
                  <strong>Argon2:</strong> Modern password hashing winner
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <h3 class="font-semibold mb-3 text-gray-800 dark:text-gray-200">
              Hash Function Example
            </h3>
            <div
              class="bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded font-mono text-sm overflow-x-auto"
            >
              <div class="space-y-1">
                <div>
                  <span class="text-blue-600 dark:text-blue-400">Input:</span>
                  "Hello World"
                </div>
                <div>
                  <span class="text-green-600 dark:text-green-400"
                    >SHA-256:</span
                  >
                  a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
                </div>
                <div>
                  <span class="text-blue-600 dark:text-blue-400">Input:</span>
                  "Hello World!"
                </div>
                <div>
                  <span class="text-green-600 dark:text-green-400"
                    >SHA-256:</span
                  >
                  7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
                </div>
              </div>
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">
              Notice how adding one character completely changes the hash
              output.
            </p>
          </div>
        </div>
      </section>

      <!-- Practical Applications Section -->
      <section class="mb-12">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          Real-World Applications
        </h2>

        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <!-- Secure Transactions -->
          <div
            class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-700 rounded-lg p-6"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3
                class="text-lg font-semibold text-green-800 dark:text-green-300"
              >
                Secure Online Transactions
              </h3>
            </div>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Number theory-based cryptographic communication protocols, like
              SSL/TLS (Secure Socket Layer/Transport Layer Security), serve the
              purpose of keeping online transactions and operations at
              e-commerce platforms safe and secure.
            </p>
            <div
              class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-green-400"
            >
              <p class="text-xs text-gray-600 dark:text-gray-400">
                <strong>Example:</strong> When you see "https://" in a URL,
                SSL/TLS protocols are protecting your financial information
                during the transaction.
              </p>
            </div>
          </div>

          <!-- Digital Identity -->
          <div
            class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-6"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3
                class="text-lg font-semibold text-blue-800 dark:text-blue-300"
              >
                Digital Identity Verification
              </h3>
            </div>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Digital signatures and Public Key Infrastructure (PKI) use number
              theory to verify digital identities and authenticate electronic
              documents.
            </p>
            <div
              class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-blue-400"
            >
              <p class="text-xs text-gray-600 dark:text-gray-400">
                <strong>Example:</strong> Digital signatures on electronic
                documents ensure authenticity and integrity using the signer's
                private key.
              </p>
            </div>
          </div>

          <!-- Secure Messaging -->
          <div
            class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-700 rounded-lg p-6"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3
                class="text-lg font-semibold text-purple-800 dark:text-purple-300"
              >
                Secure Messaging
              </h3>
            </div>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">
              End-to-end encryption protocols like Signal and WhatsApp use
              number theory-based algorithms to ensure only intended recipients
              can read messages.
            </p>
            <div
              class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-purple-400"
            >
              <p class="text-xs text-gray-600 dark:text-gray-400">
                <strong>Example:</strong> WhatsApp's end-to-end encryption
                prevents even the service provider from reading your messages.
              </p>
            </div>
          </div>

          <!-- Password Security -->
          <div
            class="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 border border-orange-200 dark:border-orange-700 rounded-lg p-6"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3
                class="text-lg font-semibold text-orange-800 dark:text-orange-300"
              >
                Password Security
              </h3>
            </div>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Cryptographic hashing algorithms like bcrypt and Argon2 use number
              theory concepts to securely store passwords and protect against
              attacks.
            </p>
            <div
              class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-orange-400"
            >
              <p class="text-xs text-gray-600 dark:text-gray-400">
                <strong>Example:</strong> Websites store hashed passwords
                instead of plain text, making them useless even if stolen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Conclusion Section -->
      <section class="mb-12">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          Conclusion
        </h2>
        <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Number theory is the backbone of modern cryptography, providing the
          mathematical foundation for secure communication in our digital world.
          Understanding these concepts not only enhances our knowledge of
          mathematics but also empowers us to appreciate the security measures
          that protect our online activities.
        </p>
      </section>

      <!-- Navigation -->
      <div class="flex justify-between items-center">
        <router-link
          to="/"
          @click="scrollToTop"
          class="inline-block px-6 py-3 bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 rounded text-white shadow transition-colors duration-200"
        >
          ← Back to Home
        </router-link>
        <router-link
          to="/demos"
          @click="scrollToTop"
          class="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 rounded text-white shadow transition-colors duration-200"
        >
          Navigate to Demo →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Concepts",
  mounted() {
    document.title = "Concepts | Number Theory & Cryptography";
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
