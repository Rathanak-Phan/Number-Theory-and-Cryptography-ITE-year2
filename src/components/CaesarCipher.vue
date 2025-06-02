<template>
  <div class="bg-gray-100 p-6 border-1 rounded-lg shadow-md w-full max-w-md mx-auto">
    <h4 class="text-lg md:text-xl font-bold text-gray-800 mb-4">Caesar Cipher Demo</h4>

    <div class="mb-4">
      <label for="text-input" class="block text-sm font-medium text-gray-700">Enter Text:</label>
      <input
        v-model="localInput"
        id="text-input"
        type="text"
        placeholder="Enter text to encrypt/decrypt"
        class="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div class="mb-4">
      <label for="shift-input" class="block text-sm font-medium text-gray-700">Shift Value:</label>
      <input
        v-model.number="shift"
        id="shift-input"
        type="number"
        placeholder="Enter shift (e.g., 3)"
        class="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div class="flex justify-between gap-2">
      <button
        @click="encrypt"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
      >
        Encrypt
      </button>
      <button
        @click="decrypt"
        class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full"
      >
        Decrypt
      </button>
    </div>

    <div v-if="result" class="mt-4">
      <p class="text-sm font-medium text-gray-700">Result:</p>
      <p class="text-base text-gray-800 bg-white p-2 rounded-md border">{{ result }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaesarCipher',
  data() {
    return {
      localInput: '', // user input stays untouched
      shift: 3,
      result: ''
    };
  },
  methods: {
    caesarCipher(text, shift, encrypt = true) {
      if (!text) return '';
      const shiftValue = encrypt ? shift : -shift;
      return text
        .split('')
        .map(char => {
          if (/[a-zA-Z]/.test(char)) {
            const code = char.charCodeAt(0);
            const base = char >= 'a' ? 97 : 65;
            return String.fromCharCode(((code - base + shiftValue) % 26 + 26) % 26 + base);
          }
          return char;
        })
        .join('');
    },
    encrypt() {
      this.result = this.caesarCipher(this.localInput, this.shift, true);
    },
    decrypt() {
      this.result = this.caesarCipher(this.localInput, this.shift, false);
    }
  }
};
</script>
