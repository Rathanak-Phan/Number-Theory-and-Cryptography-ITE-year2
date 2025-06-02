<template>
  <div class="bg-gray-100 p-6 border-1 rounded-lg shadow-md w-full max-w-md mx-auto">
    <h4 class="text-lg md:text-xl font-bold text-gray-800 mb-4">RSA Encryption Demo</h4>

    <div class="mb-4">
      <label for="text-input" class="block text-sm font-medium text-gray-700">Enter Text:</label>
      <input
        v-model="plainText"
        id="text-input"
        type="text"
        placeholder="Enter text to encrypt"
        class="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div class="flex justify-between gap-2 mb-4">
      <button @click="generateKeys" class="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded w-full">
        Generate Keys
      </button>
    </div>

    <div class="flex justify-between gap-2 mb-4">
      <button @click="encrypt" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">
        Encrypt
      </button>
      <button @click="decrypt" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full">
        Decrypt
      </button>
    </div>

    <div v-if="encrypted" class="mb-4">
      <p class="text-sm font-medium text-gray-700">Encrypted (numeric):</p>
      <p class="text-xs break-words text-gray-800 bg-white p-2 rounded-md border">{{ encrypted }}</p>
    </div>

    <div v-if="decrypted" class="mt-4">
      <p class="text-sm font-medium text-gray-700">Decrypted Text:</p>
      <p class="text-base text-gray-800 bg-white p-2 rounded-md border">{{ decrypted }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RSADemo',
  data() {
    return {
      plainText: '',
      encrypted: '',
      decrypted: '',
      publicKey: null,
      privateKey: null
    };
  },
  methods: {
    // Simple function to compute GCD
    gcd(a, b) {
      return b === 0n ? a : this.gcd(b, a % b);
    },

    // Compute modular inverse using Extended Euclidean Algorithm
    modInverse(a, m) {
      let m0 = m, t, q;
      let x0 = 0n, x1 = 1n;
      if (m === 1n) return 0n;

      while (a > 1n) {
        q = a / m;
        t = m;
        m = a % m;
        a = t;
        t = x0;
        x0 = x1 - q * x0;
        x1 = t;
      }
      return x1 < 0n ? x1 + m0 : x1;
    },

    generateKeys() {
      // Small primes for demo
      const p = 61n;
      const q = 53n;
      const n = p * q;
      const phi = (p - 1n) * (q - 1n);
      const e = 17n; // Public exponent (common choice)
      const d = this.modInverse(e, phi); // Private key

      this.publicKey = { e, n };
      this.privateKey = { d, n };
      alert('RSA keys generated!');
    },

    encrypt() {
      if (!this.publicKey || !this.plainText) return;
      const { e, n } = this.publicKey;
      const encryptedChars = [...this.plainText].map(char => {
        const code = BigInt(char.charCodeAt(0));
        return code ** e % n;
      });
      this.encrypted = encryptedChars.join(' ');
    },

    decrypt() {
      if (!this.privateKey || !this.encrypted) return;
      const { d, n } = this.privateKey;
      const encryptedNums = this.encrypted.split(' ').map(BigInt);
      const decryptedChars = encryptedNums.map(num =>
        String.fromCharCode(Number(num ** d % n))
      );
      this.decrypted = decryptedChars.join('');
    }
  }
};
</script>
