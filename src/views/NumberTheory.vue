<template>
  <div class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 ease-in-out">
    <div class="bg-[#bdbdbd] text-gray-900 dark:bg-[#353535] dark:text-gray-100 min-h-screen max-w-6xl mx-auto p-8">
      <h1 class="text-4xl text-center font-bold mb-8 text-blue-600 dark:text-blue-400">Learn Number Theory</h1>
      
      <!-- Prime Numbers Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">Prime Numbers</h2>
        
        <div class="mb-6">
          <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
            A <strong class="dark:text-white">prime number</strong> is a natural number greater than 1 that has no positive divisors other than 1 and itself. It cannot be formed by multiplying two smaller natural numbers.
          </p>
          
          <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 mb-4 rounded">
            <p class="mb-2 italic text-gray-600 dark:text-gray-400"><strong>Examples:</strong></p>
            <p class="mb-2"><strong>Primes:</strong> 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47...</p>
            <p><strong>Composite numbers:</strong> 4 = 2×2, 6 = 2×3, 8 = 2×4, 9 = 3×3, 10 = 2×5</p>
          </div>
        </div>

        <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 mb-6 rounded">
          <h3 class="font-semibold mb-2 text-purple-800 dark:text-purple-300">Fundamental Theorem of Arithmetic</h3>
          <p class="mb-2">Every integer greater than 1 is either a prime number itself or can be represented as a unique product of prime numbers.</p>
          <div class="bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded font-mono">
            Example: 60 = 2² × 3 × 5 = 4 × 3 × 5
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Key Properties:</h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-1">
              <li>2 is the only even prime number</li>
              <li>All other primes are odd numbers</li>
              <li>There are infinitely many primes (Euclid's theorem)</li>
              <li>Twin primes: pairs differing by 2, like (3,5), (5,7), (11,13)</li>
              <li>Mersenne primes: primes of the form 2ⁿ - 1</li>
              <li>Every even number ≥ 4 can be expressed as sum of two primes</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Applications:</h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-1">
              <li><strong>Cryptography:</strong> RSA encryption algorithm</li>
              <li><strong>Hash functions:</strong> Better key distribution</li>
              <li><strong>Computer science:</strong> Hash table sizing</li>
              <li><strong>Random number generation:</strong> Pseudo-random sequences</li>
              <li><strong>Error detection:</strong> Checksums and codes</li>
              <li><strong>Network security:</strong> Digital signatures</li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <h3 class="font-semibold mb-3 text-gray-800 dark:text-gray-200">Prime Testing Algorithm (Trial Division):</h3>
          <div class="bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded font-mono text-sm overflow-x-auto">
            <pre class="text-gray-800 dark:text-gray-200">function isPrime(n):
    if n ≤ 1: return false
    if n ≤ 3: return true
    if n % 2 = 0 or n % 3 = 0: return false
    
    for i from 5 to √n step 6:
        if n % i = 0 or n % (i+2) = 0:
            return false
    return true</pre>
          </div>
        </div>
      </section>

      <!-- GCD and LCM Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">GCD & LCM</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Greatest Common Divisor (GCD)</h3>
            <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
              <strong class="dark:text-white">GCD</strong> is the largest positive integer that divides two or more numbers without a remainder.
            </p>
            
            <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <p class="mb-2 italic text-gray-600 dark:text-gray-400">Example: GCD(48, 18) = 6</p>
              <p class="text-sm">Factors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48</p>
              <p class="text-sm">Factors of 18: 1, 2, 3, 6, 9, 18</p>
              <p class="text-sm font-semibold">Common factors: 1, 2, 3, 6</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Least Common Multiple (LCM)</h3>
            <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
              <strong class="dark:text-white">LCM</strong> is the smallest positive integer that is divisible by two or more numbers.
            </p>
            
            <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <p class="mb-2 italic text-gray-600 dark:text-gray-400">Example: LCM(4, 6) = 12</p>
              <p class="text-sm">Multiples of 4: 4, 8, 12, 16, 20, 24...</p>
              <p class="text-sm">Multiples of 6: 6, 12, 18, 24, 30...</p>
              <p class="text-sm font-semibold">Common multiples: 12, 24, 36...</p>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 mb-6 rounded">
          <h3 class="font-semibold mb-2 text-purple-800 dark:text-purple-300">Fundamental Relationship</h3>
          <div class="text-center mb-2">
            <code class="bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded text-lg font-mono">
              GCD(a, b) × LCM(a, b) = a × b
            </code>
          </div>
          <p class="text-gray-700 dark:text-gray-400">This means: LCM(a, b) = (a × b) / GCD(a, b)</p>
        </div>

        <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <h3 class="font-semibold mb-3 text-gray-800 dark:text-gray-200">Euclidean Algorithm for GCD</h3>
          <p class="mb-3 text-gray-700 dark:text-gray-400">The most efficient method to compute GCD:</p>
          
          <div class="bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded font-mono text-sm mb-4">
            <pre class="text-gray-800 dark:text-gray-200">function gcd(a, b):
    while b ≠ 0:
        temp = b
        b = a mod b
        a = temp
    return a</pre>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
            <h4 class="font-semibold mb-2 text-green-800 dark:text-green-300">Step-by-step: GCD(48, 18)</h4>
            <p class="text-sm">48 = 18 × 2 + 12</p>
            <p class="text-sm">18 = 12 × 1 + 6</p>
            <p class="text-sm">12 = 6 × 2 + 0</p>
            <p class="text-sm font-semibold">Therefore, GCD(48, 18) = 6</p>
          </div>
        </div>
      </section>

      <!-- Modular Arithmetic Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">Modular Arithmetic</h2>
        
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">What is Modular Arithmetic?</h3>
          <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
            Modular arithmetic is a system where numbers "wrap around" after reaching a certain value called the modulus. Think of it like a clock - after 12 comes 1, not 13.
          </p>
          
          <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4 rounded">
            <div class="text-center mb-2">
              <code class="bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded text-lg font-mono">
                a ≡ b (mod m)
              </code>
            </div>
            <p class="text-center text-sm text-gray-600 dark:text-gray-400">reads as "a is congruent to b modulo m"</p>
            <p class="text-center text-sm text-gray-600 dark:text-gray-400">means: a and b have the same remainder when divided by m</p>
          </div>
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 mb-6 rounded">
          <h3 class="font-semibold mb-3 text-green-800 dark:text-green-300">Examples of Congruence:</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="text-sm">
              <p class="mb-1">17 ≡ 5 (mod 12) because 17 = 12 × 1 + 5</p>
              <p class="mb-1">29 ≡ 5 (mod 12) because 29 = 12 × 2 + 5</p>
              <p class="mb-1">-7 ≡ 5 (mod 12) because -7 = 12 × (-1) + 5</p>
            </div>
            <div class="text-sm">
              <p class="mb-1">25 ≡ 4 (mod 7) because 25 = 7 × 3 + 4</p>
              <p class="mb-1">100 ≡ 2 (mod 7) because 100 = 7 × 14 + 2</p>
              <p class="mb-1">15 ≡ 1 (mod 7) because 15 = 7 × 2 + 1</p>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Modular Operations:</h3>
            <div class="space-y-3">
              <div class="bg-gray-200 dark:bg-gray-800 p-3 rounded">
                <strong>Addition:</strong><br>
                <code class="text-sm">(a + b) mod m = ((a mod m) + (b mod m)) mod m</code>
              </div>
              <div class="bg-gray-200 dark:bg-gray-800 p-3 rounded">
                <strong>Multiplication:</strong><br>
                <code class="text-sm">(a × b) mod m = ((a mod m) × (b mod m)) mod m</code>
              </div>
              <div class="bg-gray-200 dark:bg-gray-800 p-3 rounded">
                <strong>Exponentiation:</strong><br>
                <code class="text-sm">aᵇ mod m (requires special algorithms)</code>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Properties:</h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-1">
              <li><strong>Reflexive:</strong> a ≡ a (mod m)</li>
              <li><strong>Symmetric:</strong> if a ≡ b (mod m), then b ≡ a (mod m)</li>
              <li><strong>Transitive:</strong> if a ≡ b (mod m) and b ≡ c (mod m), then a ≡ c (mod m)</li>
              <li><strong>Addition:</strong> if a ≡ b (mod m), then a+c ≡ b+c (mod m)</li>
              <li><strong>Multiplication:</strong> if a ≡ b (mod m), then ac ≡ bc (mod m)</li>
            </ul>
          </div>
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 mb-6 rounded">
          <h3 class="font-semibold mb-3 text-green-800 dark:text-green-300">Practical Example: Days of the Week</h3>
          <p class="mb-2">If today is Wednesday (day 3), what day will it be in 25 days?</p>
          <p class="mb-2">Solution: (3 + 25) mod 7 = 28 mod 7 = 0 ≡ Sunday</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">This is modular arithmetic in everyday life!</p>
        </div>

        <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <h3 class="font-semibold mb-3 text-gray-800 dark:text-gray-200">Applications:</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-medium mb-2 text-blue-600 dark:text-blue-400">Cryptography:</h4>
              <ul class="list-disc list-inside text-gray-700 dark:text-gray-400 text-sm space-y-1">
                <li>RSA encryption uses modular exponentiation</li>
                <li>Elliptic Curve Cryptography (ECC)</li>
                <li>Digital signatures and authentication</li>
                <li>Key exchange protocols</li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium mb-2 text-blue-600 dark:text-blue-400">Computer Science:</h4>
              <ul class="list-disc list-inside text-gray-700 dark:text-gray-400 text-sm space-y-1">
                <li>Hash table indexing and collision resolution</li>
                <li>Circular arrays and ring buffers</li>
                <li>Load balancing algorithms</li>
                <li>Random number generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Advanced Topics Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">Advanced Topics</h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
            <h3 class="font-semibold mb-2 text-purple-800 dark:text-purple-300">Fermat's Little Theorem</h3>
            <p class="mb-2 text-sm">If p is prime and a is not divisible by p, then:</p>
            <div class="bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded text-center font-mono mb-2">
              a^(p-1) ≡ 1 (mod p)
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400">Used in primality testing and cryptography</p>
          </div>

          <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
            <h3 class="font-semibold mb-2 text-purple-800 dark:text-purple-300">Chinese Remainder Theorem</h3>
            <p class="mb-2 text-sm">System of congruences with pairwise coprime moduli has a unique solution modulo their product.</p>
            <p class="text-xs text-gray-600 dark:text-gray-400">Used in cryptography and parallel computation</p>
          </div>

          <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
            <h3 class="font-semibold mb-2 text-purple-800 dark:text-purple-300">Euler's Totient Function φ(n)</h3>
            <p class="mb-2 text-sm">Counts integers ≤ n that are coprime to n</p>
            <div class="bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded text-center font-mono text-sm mb-2">
              φ(p^k) = p^k - p^(k-1)
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400">Foundation of RSA cryptography</p>
          </div>

          <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
            <h3 class="font-semibold mb-2 text-purple-800 dark:text-purple-300">Diophantine Equations</h3>
            <p class="mb-2 text-sm">Polynomial equations with integer solutions</p>
            <div class="bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded text-center font-mono mb-2">
              ax + by = c
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400">Has solutions iff GCD(a,b) divides c</p>
          </div>
        </div>
      </section>

      <!-- Navigation -->
      <div class="flex justify-end">
        <router-link
          to="/"
          class="inline-block mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 rounded text-white shadow transition-colors duration-200"
        >
          ← Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>