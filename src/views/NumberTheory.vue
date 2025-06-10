<template>
  <div class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 ease-in-out">
    <div class="bg-[#bdbdbd] text-gray-900 dark:bg-[#353535] dark:text-gray-100 min-h-screen max-w-7xl mx-auto p-8">
      <h1 class="text-4xl text-center font-bold mb-8 text-blue-600 dark:text-blue-400">Number Theory Fundamentals</h1>
      
      <!-- Introduction Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">What is Number Theory?</h2>
        
        <div class="mb-6">
          <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
            <strong class="dark:text-white">Number theory</strong> is the branch of mathematics relating to numbers and the rules governing them. It is considered the mother of modern cryptography and deals with the properties and relationships of integers, especially natural numbers.
          </p>
          
          <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4 rounded">
            <h3 class="font-semibold mb-2 text-blue-800 dark:text-blue-300">Core Areas of Study:</h3>
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Prime numbers and their properties</li>
              <li>Divisibility and factorization</li>
              <li>Modular arithmetic and congruences</li>
              <li>Greatest Common Divisor (GCD) and Least Common Multiple (LCM)</li>
              <li>Diophantine equations</li>
              <li>Number-theoretic functions</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Prime Numbers Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">Prime Numbers</h2>
        
        <div class="mb-6">
          <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
            A <strong class="dark:text-white">prime number</strong> is a natural number greater than 1 that has no positive divisors other than 1 and itself. Prime numbers are the building blocks of all integers through unique prime factorization.
          </p>
          
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <h3 class="font-semibold mb-2 text-green-800 dark:text-green-300">First 20 Prime Numbers:</h3>
              <p class="font-mono text-sm">2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71</p>
            </div>
            
            <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 class="font-semibold mb-2 text-yellow-800 dark:text-yellow-300">Key Properties:</h3>
              <ul class="list-disc list-inside text-gray-700 dark:text-gray-400 text-sm space-y-1">
                <li>2 is the only even prime</li>
                <li>All other primes are odd</li>
                <li>There are infinitely many primes</li>
                <li>Every integer > 1 has unique prime factorization</li>
              </ul>
            </div>
          </div>

          <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 mb-6 rounded">
            <h3 class="font-semibold mb-2 text-purple-800 dark:text-purple-300">Fundamental Theorem of Arithmetic</h3>
            <p class="mb-2">Every integer greater than 1 is either prime or can be uniquely expressed as a product of primes.</p>
            <div class="bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded font-mono text-center">
              Example: 60 = 2² × 3 × 5 = 4 × 3 × 5
            </div>
          </div>
        </div>

        <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <h3 class="font-semibold mb-3 text-gray-800 dark:text-gray-200">Primality Testing: Trial Division Method</h3>
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
              The largest positive integer that divides two or more numbers without remainder.
            </p>
            
            <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <p class="mb-2 font-semibold text-green-800 dark:text-green-300">Example: GCD(48, 18) = 6</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Common divisors: 1, 2, 3, 6</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Least Common Multiple (LCM)</h3>
            <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
              The smallest positive integer divisible by two or more numbers.
            </p>
            
            <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <p class="mb-2 font-semibold text-green-800 dark:text-green-300">Example: LCM(4, 6) = 12</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Common multiples: 12, 24, 36...</p>
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
          <p class="text-gray-700 dark:text-gray-400 text-center">Therefore: LCM(a, b) = (a × b) / GCD(a, b)</p>
        </div>

        <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <h3 class="font-semibold mb-3 text-gray-800 dark:text-gray-200">Euclidean Algorithm</h3>
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
          <p class="mb-4 leading-relaxed text-gray-800 dark:text-gray-300">
            Modular arithmetic is arithmetic for integers where numbers "wrap around" after reaching a certain value called the modulus. It's like clock arithmetic - after 12 comes 1, not 13.
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

        <div class="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Examples:</h3>
            <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <p class="text-sm mb-1">17 ≡ 5 (mod 12) because 17 = 12×1 + 5</p>
              <p class="text-sm mb-1">29 ≡ 5 (mod 12) because 29 = 12×2 + 5</p>
              <p class="text-sm mb-1">-7 ≡ 5 (mod 12) because -7 = 12×(-1) + 5</p>
              <p class="text-sm">25 ≡ 4 (mod 7) because 25 = 7×3 + 4</p>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Properties:</h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-1 text-sm">
              <li><strong>Reflexive:</strong> a ≡ a (mod m)</li>
              <li><strong>Symmetric:</strong> if a ≡ b (mod m), then b ≡ a (mod m)</li>
              <li><strong>Transitive:</strong> if a ≡ b (mod m) and b ≡ c (mod m), then a ≡ c (mod m)</li>
              <li><strong>Addition:</strong> if a ≡ b (mod m), then a+c ≡ b+c (mod m)</li>
              <li><strong>Multiplication:</strong> if a ≡ b (mod m), then ac ≡ bc (mod m)</li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <h3 class="font-semibold mb-3 text-gray-800 dark:text-gray-200">Modular Operations:</h3>
          <div class="space-y-3">
            <div class="bg-gray-200 dark:bg-gray-700 p-3 rounded">
              <strong>Addition:</strong><br>
              <code class="text-sm">(a + b) mod m = ((a mod m) + (b mod m)) mod m</code>
            </div>
            <div class="bg-gray-200 dark:bg-gray-700 p-3 rounded">
              <strong>Multiplication:</strong><br>
              <code class="text-sm">(a × b) mod m = ((a mod m) × (b mod m)) mod m</code>
            </div>
            <div class="bg-gray-200 dark:bg-gray-700 p-3 rounded">
              <strong>Exponentiation:</strong><br>
              <code class="text-sm">a^b mod m (computed using fast exponentiation)</code>
            </div>
          </div>
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
          <h3 class="font-semibold mb-3 text-green-800 dark:text-green-300">Practical Example: Days of the Week</h3>
          <p class="mb-2">If today is Wednesday (day 3), what day will it be in 25 days?</p>
          <p class="mb-2">Solution: (3 + 25) mod 7 = 28 mod 7 = 0 ≡ Sunday</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">This is modular arithmetic in everyday life!</p>
        </div>
      </section>

      <!-- Interactive Demo Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">Interactive Number Theory Concepts</h2>
        
        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Prime Number Checker -->
          <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-300">Prime Number Checker</h3>
            <div class="space-y-4">
              <input 
                v-model="primeInput" 
                type="number" 
                placeholder="Enter a number"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
              <button 
                @click="checkPrime"
                class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Check if Prime
              </button>
              <div v-if="primeResult" class="p-3 rounded-md" :class="primeResult.isPrime ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'">
                {{ primeResult.message }}
              </div>
            </div>
          </div>

          <!-- Modular Arithmetic Calculator -->
          <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-300">Modular Arithmetic Calculator</h3>
            <div class="space-y-4">
              <div class="grid grid-cols-3 gap-2">
                <input 
                  v-model="modA" 
                  type="number" 
                  placeholder="a"
                  class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                >
                <input 
                  v-model="modB" 
                  type="number" 
                  placeholder="b"
                  class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                >
                <input 
                  v-model="modN" 
                  type="number" 
                  placeholder="n"
                  class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                >
              </div>
              <button 
                @click="calculateMod"
                class="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Calculate a^b mod n
              </button>
              <div v-if="modResult" class="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-md">
                {{ modA }}^{{ modB }} mod {{ modN }} = {{ modResult }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Advanced Theorems Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">Advanced Number Theory Theorems</h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
            <h3 class="font-semibold mb-2 text-purple-800 dark:text-purple-300">Fermat's Little Theorem</h3>
            <p class="mb-2 text-sm">If p is prime and gcd(a,p) = 1, then:</p>
            <div class="bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded text-center font-mono mb-2">
              a^(p-1) ≡ 1 (mod p)
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400">Essential for RSA and primality testing</p>
          </div>

          <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
            <h3 class="font-semibold mb-2 text-purple-800 dark:text-purple-300">Euler's Totient Function φ(n)</h3>
            <p class="mb-2 text-sm">Counts integers ≤ n that are coprime to n</p>
            <div class="bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded text-center font-mono text-sm mb-2">
              φ(p^k) = p^k - p^(k-1)
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-400">Foundation of RSA key generation</p>
          </div>

          <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
            <h3 class="font-semibold mb-2 text-purple-800 dark:text-purple-300">Chinese Remainder Theorem</h3>
            <p class="mb-2 text-sm">System of congruences with pairwise coprime moduli has unique solution</p>
            <p class="text-xs text-gray-600 dark:text-gray-400">Used in parallel computation and cryptography</p>
          </div>

          <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
            <h3 class="font-semibold mb-2 text-purple-800 dark:text-purple-300">Extended Euclidean Algorithm</h3>
            <p class="mb-2 text-sm">Finds integers x, y such that ax + by = gcd(a,b)</p>
            <p class="text-xs text-gray-600 dark:text-gray-400">Used to find modular multiplicative inverses</p>
          </div>
        </div>
      </section>

      <!-- Applications Preview -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">Why Number Theory Matters</h2>
        
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 class="font-semibold mb-4 text-blue-800 dark:text-blue-300">Applications in Modern Technology:</h3>
          <div class="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">🔐 Cryptography</h4>
              <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                <li>RSA encryption</li>
                <li>Digital signatures</li>
                <li>Key exchange protocols</li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">💻 Computer Science</h4>
              <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                <li>Hash functions</li>
                <li>Random number generation</li>
                <li>Error correction codes</li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">🌐 Internet Security</h4>
              <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                <li>SSL/TLS protocols</li>
                <li>Blockchain technology</li>
                <li>Digital certificates</li>
              </ul>
            </div>
          </div>
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
          to="/cryptography"
            @click="scrollToTop"
          class="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 rounded text-white shadow transition-colors duration-200"
        >
          Explore Cryptography →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'NumberTheory',
  mounted() {
    document.title = 'Number Theory Fundamentals | Learn Math';
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    } 
  },

  setup() {
    // Prime number checker
    const primeInput = ref('')
    const primeResult = ref(null)
    
    // Modular arithmetic calculator
    const modA = ref('')
    const modB = ref('')
    const modN = ref('')
    const modResult = ref(null)
    
    const isPrime = (n) => {
      if (n < 2) return false
      if (n === 2) return true
      if (n % 2 === 0) return false
      
      for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false
      }
      return true
    }
    
    const checkPrime = () => {
      const num = parseInt(primeInput.value)
      if (isNaN(num)) {
        primeResult.value = { isPrime: false, message: 'Please enter a valid number' }
        return
      }
      
      const prime = isPrime(num)
      primeResult.value = {
        isPrime: prime,
        message: prime ? `${num} is a prime number!` : `${num} is not a prime number.`
      }
    }
    
    const modPow = (base, exp, mod) => {
      if (mod === 1) return 0
      let result = 1
      base = base % mod
      while (exp > 0) {
        if (exp % 2 === 1) {
          result = (result * base) % mod
        }
        exp = Math.floor(exp / 2)
        base = (base * base) % mod
      }
      return result
    }
    
    const calculateMod = () => {
      const a = parseInt(modA.value)
      const b = parseInt(modB.value)
      const n = parseInt(modN.value)
      
      if (isNaN(a) || isNaN(b) || isNaN(n) || n <= 0) {
        modResult.value = 'Please enter valid numbers (n must be positive)'
        return
      }
      
      modResult.value = modPow(a, b, n)
    }
    
    return {
      primeInput,
      primeResult,
      modA,
      modB,
      modN,
      modResult,
      checkPrime,
      calculateMod
    }
  }
}
</script>

