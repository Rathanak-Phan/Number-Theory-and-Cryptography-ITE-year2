<template>
    <div>
        <!-- Interactive Demo Section (Updated) -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">Interactive Cryptography Demos</h2>
        
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

          <!-- Caesar Cipher Demo -->
          <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-300">Caesar Cipher</h3>
            <div class="space-y-4">
              <input 
                v-model="caesarText" 
                type="text" 
                placeholder="Enter text to encrypt"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
              <input 
                v-model="caesarShift" 
                type="number" 
                placeholder="Shift (1-25)"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
              <div class="flex gap-2">
                <button 
                  @click="encryptCaesar"
                  class="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Encrypt
                </button>
                <button 
                  @click="decryptCaesar"
                  class="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Decrypt
                </button>
              </div>
              <div v-if="caesarResult" class="p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md">
                {{ caesarResult }}
              </div>
            </div>
          </div>

          <!-- Vigenère Cipher Demo -->
          <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-300">Vigenère Cipher</h3>
            <div class="space-y-4">
              <input 
                v-model="vigenereText" 
                type="text" 
                placeholder="Enter text to encrypt"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
              <input 
                v-model="vigenereKey" 
                type="text" 
                placeholder="Enter key (letters only)"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
              <div class="flex gap-2">
                <button 
                  @click="encryptVigenere"
                  class="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Encrypt
                </button>
                <button 
                  @click="decryptVigenere"
                  class="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Decrypt
                </button>
              </div>
              <div v-if="vigenereResult" class="p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md">
                {{ vigenereResult }}
              </div>
            </div>
          </div>

          <!-- RSA Demo -->
          <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-300">RSA Encryption/Decryption</h3>
            <div class="space-y-4">
              <input 
                v-model="rsaText" 
                type="number" 
                placeholder="Enter number to encrypt (small)"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
              <div class="flex gap-2">
                <button 
                  @click="encryptRSA"
                  class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Encrypt
                </button>
                <button 
                  @click="decryptRSA"
                  class="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Decrypt
                </button>
              </div>
              <div v-if="rsaResult" class="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-md">
                {{ rsaResult }}
              </div>
            </div>
          </div>

          <!-- Hash Function Demo -->
          <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-300">Simple Hash Function</h3>
            <div class="space-y-4">
              <input 
                v-model="hashInput" 
                type="text" 
                placeholder="Enter text to hash"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
              <button 
                @click="calculateHash"
                class="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Generate Hash
              </button>
              <div v-if="hashResult" class="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-md">
                Hash: {{ hashResult }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
    name: 'Demo',
    mounted() {
      document.title = 'Interactive Demos | Number Theory Fundamentals';
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
        // Prime Checker
        checkPrime() {
        const num = parseInt(this.primeInput);
        if (isNaN(num) || num < 2) {
            this.primeResult = {
            isPrime: false,
            message: 'Please enter a valid number greater than 1.'
            };
            return;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
            this.primeResult = {
                isPrime: false,
                message: `${num} is not a prime number.`
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
        calculateMod() {
        const a = parseInt(this.modA);
        const b = parseInt(this.modB);
        const n = parseInt(this.modN);
        if (isNaN(a) || isNaN(b) || isNaN(n) || n === 0) {
            this.modResult = 'Invalid input.';
            return;
        }
        const result = BigInt(a) ** BigInt(b) % BigInt(n);
        this.modResult = result.toString();
        },

        // Caesar Cipher
        encryptCaesar() {
        const shift = parseInt(this.caesarShift) % 26;
        if (isNaN(shift) || shift < 1 || shift > 25) {
            this.caesarResult = 'Shift must be between 1 and 25.';
            return;
        }
        this.caesarResult = this.caesarText.replace(/[a-z]/gi, char => {
            const base = char >= 'a' && char <= 'z' ? 97 : 65;
            return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
        });
        },
        decryptCaesar() {
        const shift = parseInt(this.caesarShift) % 26;
        if (isNaN(shift) || shift < 1 || shift > 25) {
            this.caesarResult = 'Shift must be between 1 and 25.';
            return;
        }
        this.caesarResult = this.caesarText.replace(/[a-z]/gi, char => {
            const base = char >= 'a' && char <= 'z' ? 97 : 65;
            return String.fromCharCode(((char.charCodeAt(0) - base - shift + 26) % 26) + base);
        });
        },

        // Vigenère Cipher
        encryptVigenere() {
        const text = this.vigenereText.toUpperCase();
        const key = this.vigenereKey.toUpperCase().replace(/[^A-Z]/g, '');
        if (!key) {
            this.vigenereResult = 'Please enter a valid key (letters only).';
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
        decryptVigenere() {
        const text = this.vigenereText.toUpperCase();
        const key = this.vigenereKey.toUpperCase().replace(/[^A-Z]/g, '');
        if (!key) {
            this.vigenereResult = 'Please enter a valid key (letters only).';
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

        // RSA (simplified)
        encryptRSA() {
        const text = parseInt(this.rsaText);
        const e = 3;
        const n = 33; // 3*11, small number for demo
        if (isNaN(text)) {
            this.rsaResult = 'Invalid number.';
            return;
        }
        const encrypted = BigInt(text) ** BigInt(e) % BigInt(n);
        this.rsaEncrypted = encrypted;
        this.rsaResult = `Encrypted: ${encrypted}`;
        },
        decryptRSA() {
        const d = 7;
        const n = 33;
        if (this.rsaEncrypted === null) {
            this.rsaResult = 'No encrypted value.';
            return;
        }
        const decrypted = BigInt(this.rsaEncrypted) ** BigInt(d) % BigInt(n);
        this.rsaResult = `Decrypted: ${decrypted}`;
        },

        // Simple Hash Function (Using built-in hash simulation)
        async calculateHash() {
        const encoder = new TextEncoder();
        const data = encoder.encode(this.hashInput);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        this.hashResult = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        }
    }
};
</script>

