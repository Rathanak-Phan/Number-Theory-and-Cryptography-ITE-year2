<template>
  <div class="mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 ease-in-out">
    <!-- Interactive Demo Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 duration-300 ease-in-out">
      <h2 class="text-2xl md:text-3xl text-center font-semibold mb-6 text-indigo-600 dark:text-indigo-300">
        Interactive Cryptography Demos
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Explore number theory concepts used in cryptography, such as prime numbers, modular arithmetic, and ciphers.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Prime Number Checker -->
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Prime Number Checker
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Checks if a number is prime, a key concept in RSA for generating secure keys.
          </p>
          <div class="space-y-4">
            <input
              v-model="primeInput"
              type="number"
              min="2"
              placeholder="Enter a number (≥ 2)"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition"
            />
            <button
              @click="checkPrime"
              class="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Check if Prime
            </button>
            <div
              v-if="primeResult"
              class="p-3 rounded-md text-sm"
              :class="primeResult.isPrime ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300'"
            >
              {{ primeResult.message }}
            </div>
          </div>
        </div>

        <!-- Modular Arithmetic Calculator -->
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Modular Arithmetic Calculator
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Computes \( a^b \mod n \), used in RSA and Diffie-Hellman for secure computations.
          </p>
          <div class="space-y-4">
            <div class="grid grid-cols-3 gap-2">
              <input
                v-model="modA"
                type="number"
                placeholder="a (base)"
                class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition"
              />
              <input
                v-model="modB"
                type="number"
                placeholder="b (exponent)"
                class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition"
              />
              <input
                v-model="modN"
                type="number"
                placeholder="n (modulus)"
                class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition"
              />
            </div>
            <button
              @click="calculateMod"
              class="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Calculate a^b mod n
            </button>
            <div
              v-if="modResult"
              class="p-3 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 rounded-md text-sm"
            >
              {{ modA }}^{{ modB }} mod {{ modN }} = {{ modResult }}
            </div>
          </div>
        </div>

        <!-- Caesar Cipher -->
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Caesar Cipher
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            A substitution cipher using modular arithmetic to shift letters, a basic encryption technique.
          </p>
          <div class="space-y-4">
            <input
              v-model="caesarText"
              type="text"
              placeholder="Enter text to encrypt"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition"
            />
            <input
              v-model="caesarShift"
              type="number"
              min="1"
              max="25"
              placeholder="Shift (1-25)"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition"
            />
            <div class="flex gap-2">
              <button
                @click="encryptCaesar"
                class="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Encrypt
              </button>
              <button
                @click="decryptCaesar"
                class="w-full bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Decrypt
              </button>
            </div>
            <div
              v-if="caesarResult"
              class="p-3 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded-md text-sm"
            >
              {{ caesarResult }}
            </div>
          </div>
        </div>

        <!-- Vigenère Cipher -->
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Vigenère Cipher
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            A polyalphabetic cipher using a key, more secure than Caesar cipher due to multiple shifts.
          </p>
          <div class="space-y-4">
            <input
              v-model="vigenereText"
              type="text"
              placeholder="Enter text to encrypt"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition"
            />
            <input
              v-model="vigenereKey"
              type="text"
              placeholder="Enter key (letters only)"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition"
            />
            <div class="flex gap-2">
              <button
                @click="encryptVigenere"
                class="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Encrypt
              </button>
              <button
                @click="decryptVigenere"
                class="w-full bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Decrypt
              </button>
            </div>
            <div
              v-if="vigenereResult"
              class="p-3 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded-md text-sm"
            >
              {{ vigenereResult }}
            </div>
          </div>
        </div>

        <!-- RSA Demo -->
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            RSA Encryption/Decryption
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Demonstrates RSA using small numbers, relying on modular exponentiation and prime numbers.
          </p>
          <div class="space-y-4">
            <input
              v-model="rsaText"
              type="number"
              min="1"
              max="32"
              placeholder="Enter number (1-32)"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
            />
            <div class="flex gap-2">
              <button
                @click="encryptRSA"
                class="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Encrypt
              </button>
              <button
                @click="decryptRSA"
                class="w-full bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Decrypt
              </button>
            </div>
            <div
              v-if="rsaResult"
              class="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-md text-sm"
            >
              {{ rsaResult }}
            </div>
          </div>
        </div>

        <!-- Hash Function Demo -->
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            SHA-256 Hash Function
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Generates a fixed-length hash for data integrity, not reversible unlike encryption.
          </p>
          <div class="space-y-4">
            <input
              v-model="hashInput"
              type="text"
              placeholder="Enter text to hash"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition"
            />
            <button
              @click="calculateHash"
              class="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Generate Hash
            </button>
            <div
              v-if="hashResult"
              class="p-3 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 rounded-md text-sm break-all"
            >
              Hash: {{ hashResult }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- apply for this website -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 duration-300 ease-in-out">
      <h2 class="text-2xl md:text-3xl text-center font-semibold mb-6 text-indigo-600 dark:text-indigo-300">
        Apply Number Theory in Cryptography(Hash Function)
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Hash functions are essential for data integrity and security, ensuring that data has not been altered.
        They convert input data of any size into a fixed-length string, making it difficult to reverse the process.
      </p>
      <!-- bnt navigation for other thing -->
      <div class="flex justify-center">
        <router-link
          to="/demos/number-theory/{domain-naem}"
          class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
        >
          Learn More About Number Theory
        </router-link>
        <router-link
          to="/demos/cryptography/{domain-name}"
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300 ml-4"
        >
          Explore Cryptography
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CryptoDemos',
  mounted() {
    document.title = 'Interactive Cryptography Demos | Number Theory';
  },

  data() {
    return {
      // Prime Checker
      primeInput: '',
      primeResult: null,

      // Modular Arithmetic
      modA: '',
      modB: '',
      modN: '',
      modResult: null,

      // Caesar Cipher
      caesarText: '',
      caesarShift: '',
      caesarResult: '',

      // Vigenère Cipher
      vigenereText: '',
      vigenereKey: '',
      vigenereResult: '',

      // RSA
      rsaText: '',
      rsaEncrypted: null,
      rsaResult: '',

      // Hash Function
      hashInput: '',
      hashResult: ''
    };
  },

  methods: {
    // Prime Number Checker
    // Checks if a number is prime, crucial for RSA key generation where large primes ensure security.
    checkPrime() {
      const num = parseInt(this.primeInput);
      if (isNaN(num) || num < 2) {
        this.primeResult = {
          isPrime: false,
          message: 'Please enter a number ≥ 2.'
        };
        return;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          this.primeResult = {
            isPrime: false,
            message: `${num} is not prime (divisible by ${i}).`
          };
          return;
        }
      }
      this.primeResult = {
        isPrime: true,
        message: `${num} is a prime number.`
      };
    },

    // Modular Arithmetic Calculator
    // Computes a^b mod n, a core operation in RSA and Diffie-Hellman (uses Fermat's Little Theorem implicitly).
    calculateMod() {
      const a = parseInt(this.modA);
      const b = parseInt(this.modB);
      const n = parseInt(this.modN);
      if (isNaN(a) || isNaN(b) || isNaN(n) || n <= 0) {
        this.modResult = 'Please enter valid numbers (n > 0).';
        return;
      }
      try {
        const result = BigInt(a) ** BigInt(b) % BigInt(n);
        this.modResult = result.toString();
      } catch (e) {
        this.modResult = 'Calculation error (numbers too large).';
      }
    },

    // Caesar Cipher Encryption
    // Shifts letters using modular arithmetic (mod 26), a basic encryption method.
    encryptCaesar() {
      const shift = parseInt(this.caesarShift) % 26;
      if (isNaN(shift) || shift < 1 || shift > 25) {
        this.caesarResult = 'Shift must be between 1 and 25.';
        return;
      }
      if (!this.caesarText) {
        this.caesarResult = 'Please enter text to encrypt.';
        return;
      }
      this.caesarResult = this.caesarText.replace(/[a-z]/gi, char => {
        const base = char >= 'a' && char <= 'z' ? 97 : 65;
        return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
      });
    },

    // Caesar Cipher Decryption
    // Reverses the shift for decryption.
    decryptCaesar() {
      const shift = parseInt(this.caesarShift) % 26;
      if (isNaN(shift) || shift < 1 || shift > 25) {
        this.caesarResult = 'Shift must be between 1 and 25.';
        return;
      }
      if (!this.caesarText) {
        this.caesarResult = 'Please enter text to decrypt.';
        return;
      }
      this.caesarResult = this.caesarText.replace(/[a-z]/gi, char => {
        const base = char >= 'a' && char <= 'z' ? 97 : 65;
        return String.fromCharCode(((char.charCodeAt(0) - base - shift + 26) % 26) + base);
      });
    },

    // Vigenère Cipher Encryption
    // Uses a key to apply multiple Caesar shifts, improving security over a single shift.
    encryptVigenere() {
      const text = this.vigenereText.toUpperCase();
      const key = this.vigenereKey.toUpperCase().replace(/[^A-Z]/g, '');
      if (!key) {
        this.vigenereResult = 'Please enter a valid key (letters only).';
        return;
      }
      if (!text) {
        this.vigenereResult = 'Please enter text to encrypt.';
        return;
      }
      let result = '';
      for (let i = 0, j = 0; i < text.length; i++) {
        const c = text[i];
        if (c.match(/[A-Z]/)) {
          const charCode = (c.charCodeAt(0) + key[j % key.length].charCodeAt(0) - 130) % 26 + 65;
          result += String.fromCharCode(charCode);
          j++;
        } else {
          result += c;
        }
      }
      this.vigenereResult = result;
    },

    // Vigenère Cipher Decryption
    // Reverses the Vigenère encryption process.
    decryptVigenere() {
      const text = this.vigenereText.toUpperCase();
      const key = this.vigenereKey.toUpperCase().replace(/[^A-Z]/g, '');
      if (!key) {
        this.vigenereResult = 'Please enter a valid key (letters only).';
        return;
      }
      if (!text) {
        this.vigenereResult = 'Please enter text to decrypt.';
        return;
      }
      let result = '';
      for (let i = 0, j = 0; i < text.length; i++) {
        const c = text[i];
        if (c.match(/[A-Z]/)) {
          const charCode = (c.charCodeAt(0) - key[j % key.length].charCodeAt(0) + 26) % 26 + 65;
          result += String.fromCharCode(charCode);
          j++;
        } else {
          result += c;
        }
      }
      this.vigenereResult = result;
    },

    // RSA Encryption
    // Uses small numbers (e=3, n=33, d=7) to demonstrate RSA based on modular exponentiation.
    encryptRSA() {
      const text = parseInt(this.rsaText);
      const e = 3; // Public exponent
      const n = 33; // Modulus (3*11)
      if (isNaN(text) || text < 1 || text >= n) {
        this.rsaResult = 'Enter a number between 1 and 32.';
        return;
      }
      try {
        const encrypted = BigInt(text) ** BigInt(e) % BigInt(n);
        this.rsaEncrypted = encrypted;
        this.rsaResult = `Encrypted: ${encrypted}`;
      } catch (e) {
        this.rsaResult = 'Encryption error.';
      }
    },

    // RSA Decryption
    // Decrypts using the private key (d=7).
    decryptRSA() {
      const d = 7; // Private exponent
      const n = 33; // Modulus
      if (this.rsaEncrypted === null) {
        this.rsaResult = 'Encrypt a number first.';
        return;
      }
      try {
        const decrypted = BigInt(this.rsaEncrypted) ** BigInt(d) % BigInt(n);
        this.rsaResult = `Decrypted: ${decrypted}`;
      } catch (e) {
        this.rsaResult = 'Decryption error.';
      }
    },

    // SHA-256 Hash Function
    // Generates a cryptographic hash for data integrity, not reversible.
    async calculateHash() {
      if (!this.hashInput) {
        this.hashResult = 'Please enter text to hash.';
        return;
      }
      try {
        const encoder = new TextEncoder();
        const data = encoder.encode(this.hashInput);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        this.hashResult = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      } catch (e) {
        this.hashResult = 'Hashing error.';
      }
    }
  }
};
</script>

<style scoped>
/* Custom styles for additional responsiveness */
@media (max-width: 640px) {
  .grid-cols-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
}

/* Ensure long hash outputs wrap cleanly */
.break-all {
  word-break: break-all;
}
</style>