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
        Number Theory in Cryptography 
      </h1>

      <!-- Introduction Section -->
      <section class="mb-12">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          The Mathematical Foundation of Digital Security
        </h2>

        <div class="mb-6">
          <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
            Number theory is the
            <strong class="dark:text-white"
              >mother of modern cryptography</strong
            >. Cryptographic algorithms that guarantee data privacy, integrity,
            and authenticity derive their security from fundamental number
            theory concepts like prime numbers, modular arithmetic, and discrete
            logarithms.
          </p>

          <div
            class="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500 p-4 mb-4 rounded"
          >
            <h3 class="font-semibold mb-2 text-red-800 dark:text-red-300">
              Key Mathematical Concepts in Cryptography:
            </h3>
            <div class="grid md:grid-cols-2 gap-4 text-sm">
              <ul
                class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1"
              >
                <li>Prime numbers and factorization</li>
                <li>Modular arithmetic and congruences</li>
                <li>Euler's totient function</li>
                <li>Fermat's Little Theorem</li>
              </ul>
              <ul
                class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1"
              >
                <li>Discrete logarithm problem</li>
                <li>Chinese Remainder Theorem</li>
                <li>Elliptic curve mathematics</li>
                <li>Cryptographic hash functions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- RSA Cryptosystem Section -->
      <section class="mb-12">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          RSA Cryptosystem
        </h2>

        <div class="mb-6">
          <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
            RSA is the most widely used public-key cryptosystem, named after
            Rivest, Shamir, and Adleman. Its security relies on the difficulty
            of factoring large composite numbers that are products of two large
            primes.
          </p>

          <div
            class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6 rounded"
          >
            <h3 class="font-semibold mb-3 text-blue-800 dark:text-blue-300">
              RSA Key Generation Process:
            </h3>
            <div class="space-y-2 text-sm">
              <div class="bg-gray-200 dark:bg-gray-800 p-3 rounded">
                <strong>Step 1:</strong> Choose two distinct large primes p and
                q
              </div>
              <div class="bg-gray-200 dark:bg-gray-800 p-3 rounded">
                <strong>Step 2:</strong> Compute n = p × q (public modulus)
              </div>
              <div class="bg-gray-200 dark:bg-gray-800 p-3 rounded">
                <strong>Step 3:</strong> Calculate φ(n) = (p-1)(q-1) (Euler's
                totient)
              </div>
              <div class="bg-gray-200 dark:bg-gray-800 p-3 rounded">
                <strong>Step 4:</strong> Choose e such that gcd(e, φ(n)) = 1
                (public exponent)
              </div>
              <div class="bg-gray-200 dark:bg-gray-800 p-3 rounded">
                <strong>Step 5:</strong> Find d such that e×d ≡ 1 (mod φ(n))
                (private exponent)
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div
              class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded"
            >
              <h3 class="font-semibold mb-2 text-green-800 dark:text-green-300">
                Public Key: (n, e)
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Used for encryption and signature verification
              </p>
              <div
                class="bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded font-mono text-center text-sm"
              >
                C = M^e mod n
              </div>
            </div>

            <div
              class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded"
            >
              <h3 class="font-semibold mb-2 text-red-800 dark:text-red-300">
                Private Key: (n, d)
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Used for decryption and signature creation
              </p>
              <div
                class="bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded font-mono text-center text-sm"
              >
                M = C^d mod n
              </div>
            </div>
          </div>

          <div
            class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded"
          >
            <h3 class="font-semibold mb-2 text-yellow-800 dark:text-yellow-300">
              Security Foundation
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              RSA's security depends on the
              <strong>integer factorization problem</strong>. While it's easy to
              multiply two large primes, factoring their product back into the
              original primes is computationally infeasible with current
              technology for sufficiently large numbers.
            </p>
          </div>
        </div>
      </section>

      <!-- Applications of Number Theory Section -->
      <section class="mb-12">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          Applications of Number Theory in Computer Science
        </h2>

        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <!-- Cryptography Applications -->
          <div
            class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-6"
          >
            <h3
              class="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-300"
            >
              In Cryptography
            </h3>
            <div class="space-y-4">
              <div
                class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-purple-400"
              >
                <h4 class="font-semibold text-purple-700 dark:text-purple-300">
                  Public-Key Cryptography
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  RSA encryption depends on large prime numbers for key
                  generation. The difficulty of factoring these large primes
                  makes it computationally impossible to break the encryption.
                </p>
              </div>
              <div
                class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-purple-400"
              >
                <h4 class="font-semibold text-purple-700 dark:text-purple-300">
                  Digital Signatures
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Algorithms like ECDSA (Elliptic Curve Digital Signature
                  Algorithm) are based on elliptic curves to authenticate
                  senders and prevent man-in-the-middle attacks.
                </p>
              </div>
              <div
                class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-purple-400"
              >
                <h4 class="font-semibold text-purple-700 dark:text-purple-300">
                  Pseudorandom Number Generation
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Number theory helps design algorithms that generate
                  unpredictable sequences of numbers for encryption keys and
                  cryptographic operations.
                </p>
              </div>
            </div>
          </div>

          <!-- Coding Theory Applications -->
          <div
            class="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 rounded-lg p-6"
          >
            <h3
              class="text-xl font-semibold mb-4 text-teal-800 dark:text-teal-300"
            >
              In Coding Theory
            </h3>
            <div class="space-y-4">
              <div
                class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-teal-400"
              >
                <h4 class="font-semibold text-teal-700 dark:text-teal-300">
                  Error Correction
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Number theory is used for error-correcting codes to detect and
                  fix data transmission errors using modular arithmetic and
                  polynomial codes.
                </p>
              </div>
              <div
                class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-teal-400"
              >
                <h4 class="font-semibold text-teal-700 dark:text-teal-300">
                  Data Compression
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Techniques like Huffman coding use number theory concepts like
                  prime factorization for efficient data representation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Algorithm Design Applications -->
          <div
            class="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-lg p-6"
          >
            <h3
              class="text-xl font-semibold mb-4 text-orange-800 dark:text-orange-300"
            >
              In Algorithmic Design
            </h3>
            <div class="space-y-4">
              <div
                class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-orange-400"
              >
                <h4 class="font-semibold text-orange-700 dark:text-orange-300">
                  Primality Testing
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Efficient algorithms like Miller-Rabin primality test use
                  modular exponentiation concepts for cryptographic
                  applications.
                </p>
              </div>
              <div
                class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-orange-400"
              >
                <h4 class="font-semibold text-orange-700 dark:text-orange-300">
                  Fast Modular Arithmetic
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Efficient algorithms for modular exponentiation and
                  multiplication speed up cryptographic computations.
                </p>
              </div>
            </div>
          </div>

          <!-- Hashing Applications -->
          <div
            class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700 rounded-lg p-6"
          >
            <h3
              class="text-xl font-semibold mb-4 text-indigo-800 dark:text-indigo-300"
            >
              In Hashing & Security
            </h3>
            <div class="space-y-4">
              <div
                class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-indigo-400"
              >
                <h4 class="font-semibold text-indigo-700 dark:text-indigo-300">
                  Hash Functions
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Number theory provides concepts for secure hash functions like
                  SHA-256 that map data to fixed-size strings for integrity
                  checking.
                </p>
              </div>
              <div
                class="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-indigo-400"
              >
                <h4 class="font-semibold text-indigo-700 dark:text-indigo-300">
                  Complexity Analysis
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Integer factorization algorithms help assess the security and
                  computational difficulty of cryptographic systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Real-World Applications Section -->
      <section class="mb-12">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          Real-World Applications
        </h2>

        <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div
            class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border border-blue-200 dark:border-blue-700 rounded-lg p-6"
          >
            <div class="flex items-center mb-3">
              <div
                class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3"
              >
                <svg
                  class="w-4 h-4 text-white"
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
                class="text-lg font-semibold text-blue-800 dark:text-blue-300"
              >
                HTTPS & SSL/TLS
              </h3>
            </div>
            <p class="text-sm text-gray-700 dark:text-gray-300">
              Secure web browsing relies on RSA and elliptic curve cryptography
              for establishing secure connections between browsers and servers.
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 border border-green-200 dark:border-green-700 rounded-lg p-6"
          >
            <div class="flex items-center mb-3">
              <div
                class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3"
              >
                <svg
                  class="w-4 h-4 text-white"
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
                Banking & Finance
              </h3>
            </div>
            <p class="text-sm text-gray-700 dark:text-gray-300">
              Digital payments, online banking, and cryptocurrency transactions
              use number theory-based cryptographic protocols to ensure
              security.
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border border-purple-200 dark:border-purple-700 rounded-lg p-6"
          >
            <div class="flex items-center mb-3">
              <div
                class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3"
              >
                <svg
                  class="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3
                class="text-lg font-semibold text-purple-800 dark:text-purple-300"
              >
                Digital Identity
              </h3>
            </div>
            <p class="text-sm text-gray-700 dark:text-gray-300">
              Digital signatures and certificates for email security, software
              authentication, and identity verification systems.
            </p>
          </div>
        </div>

        <div
          class="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-6"
        >
          <h3
            class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-300"
          >
            Network Security Applications
          </h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-gray-700 dark:text-gray-400 mb-2">
                Government & Military
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Secure communication channels for sensitive information
                transmission using advanced encryption protocols.
              </p>
              <h4 class="font-semibold text-gray-700 dark:text-gray-400 mb-2">
                Enterprise Security
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Corporate networks use number theory-based access control
                systems to protect confidential resources from unauthorized
                access.
              </p>
            </div>
            <div>
              <h4 class="font-semibold text-gray-700 dark:text-gray-400 mb-2">
                Email Encryption
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Email communications are secured using number theory-derived
                encryption protocols to ensure privacy and prevent data
                breaches.
              </p>
              <h4 class="font-semibold text-gray-700 dark:text-gray-400 mb-2">
                Cloud Security
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Cloud storage and computing services implement cryptographic
                protocols based on number theory to protect user data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Conclusion Section -->
      <section class="mb-8">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          Conclusion
        </h2>

        <div
          class="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-200 dark:border-indigo-700/50 rounded-lg p-6"
        >
          <p class="text-gray-800 dark:text-gray-300 leading-relaxed mb-4">
            Number theory forms the mathematical backbone of modern cryptography
            and computer security. From the RSA algorithm that secures our
            online transactions to the elliptic curve cryptography protecting
            our digital communications, these mathematical concepts ensure the
            privacy and security of our digital world.
          </p>
          <p class="text-gray-800 dark:text-gray-300 leading-relaxed">
            As quantum computing advances, the field continues to evolve, with
            researchers developing new cryptographic methods based on different
            number theory problems that remain secure against quantum attacks.
            Understanding these foundations is crucial for anyone working in
            cybersecurity, software development, or computer science.
          </p>
        </div>
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
  name: "Cryptography",
  mounted() {
    document.title = "Cryptography | Number Theory Fundamentals";
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
