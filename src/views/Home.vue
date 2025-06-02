<template>
  <header class="relative w-full border-2 py-10 md:py-20">
    <!-- Background image layer -->
    <div
      class="absolute inset-0 bg-[url('https://th.bing.com/th/id/R.77377b033da7e65208486a42e99b1915?rik=8JP1GrPiBVYTZg&riu=http%3a%2f%2f3.bp.blogspot.com%2f_UkrggvWyhFY%2fRpradWn9KWI%2fAAAAAAAAAAM%2fFcxn6T_9rrU%2fw1200-h630-p-k-no-nu%2fDV00001.jpg&ehk=Apj66QhYTtIuIyZWlNLMzigWzT2Fb%2fv3ufCac4boVZo%3d&risl=&pid=ImgRaw&r=0')] bg-cover bg-center opacity-50"
    ></div>

    <!-- Content layer -->
    <div class="relative w-11/12 md:w-8/12 lg:w-6/12 mx-auto text-black">
      <div
        class="flex flex-col md:flex-row items-center justify-center gap-3 mb-6 md:mb-10"
      >
        <img
          class="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          src="/logo.png"
          alt="RUPP logo"
        />
        <div class="text-center md:text-left">
          <p class="text-3xl md:text-4xl lg:text-5xl khmer-moul font-bold">
            សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ
          </p>
          <p
            class="text-2xl md:text-3xl lg:text-4xl eb-garamond font-bold mt-2"
          >
            Royal University of Phnom Penh
          </p>
        </div>
      </div>
      <hr class="border-gray-300" />
      <div class="mt-6 text-sm md:text-base lg:text-lg">
        <!-- Shortened content for brevity -->
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sed
        atque...
      </div>
      <hr class="border-gray-300 mt-6" />
    </div>
  </header>

  <main class="w-full px-4 md:px-8 lg:px-16 border-2 mt-1 md:mt-7 p-6 md:p-10">
    <h1
      class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 flex items-start my-5"
    >
      Number Theory & Cryptography — (Interactive Demo Guide)
    </h1>
    <hr class="border-gray-300" />

    <!-- Description about number theory and cryptography -->
    <div>
      <p class="text-xl md:text-2xl font-bold text-gray-800 text-center my-5">
        Welcome to the Number Theory and Cryptography Demo!
      </p>
      <p class="text-base md:text-lg text-gray-800 text-start my-5">
        This website lets you explore and test important cryptographic concepts
        with interactive tools...
      </p>

      <!-- I. Classical Cryptography -->
      <div>
        <h3 class="text-xl md:text-2xl font-bold">
          I. Classical Cryptography (Caesar Cipher)
        </h3>
        <!-- Add content or components as needed -->
        <div class="ml-0 md:ml-10">
          <!-- Caesar Cipher Explanation -->
          <div class="bg-white p-6 rounded-lg shadow-md text-gray-800 my-10">
            <!-- <h2 class="text-xl font-bold mb-4">Caesar Cipher: Number Theory & Cryptography Explanation</h2> -->

            <p class="mb-4">
              The <strong>Caesar Cipher</strong> is one of the earliest and
              simplest types of encryption techniques. It belongs to the family
              of <em>substitution ciphers</em>, where each letter in the
              plaintext is replaced by a letter some fixed number of positions
              down the alphabet.
            </p>

            <p class="mb-4">
              In terms of <strong>number theory</strong>, we represent each
              alphabet letter by a number: A = 0, B = 1, ..., Z = 25. The
              encryption and decryption processes involve modular arithmetic
              (mod 26), because there are 26 letters in the English alphabet.
            </p>

            <p class="mb-4">
              The <strong>encryption function</strong> is defined as:
              <code class="block mt-2 mb-2 text-blue-600"
                >C = (P + k) mod 26</code
              >
              - <strong>P</strong> is the position of the plaintext letter
              (0–25)<br />
              - <strong>k</strong> is the key or shift value (e.g., 3)<br />
              - <strong>C</strong> is the resulting encrypted letter's position
            </p>

            <p class="mb-4">
              The <strong>decryption function</strong> is:
              <code class="block mt-2 mb-2 text-green-600"
                >P = (C - k + 26) mod 26</code
              >
              We add 26 before applying mod to ensure a non-negative result.
            </p>

            <p class="mb-4 font-semibold">Encryption Example:</p>
            <div class="bg-gray-50 border p-4 rounded-md mb-4">
              <p><strong>Plaintext:</strong> HELLO</p>
              <p><strong>Shift (k):</strong> 3</p>
              <div class="flex gap-10">
                <div>
                  <p>Convert each letter to number:</p>
                  <ul class="list-disc list-inside">
                    <li>H → 7</li>
                    <li>E → 4</li>
                    <li>L → 11</li>
                    <li>L → 11</li>
                    <li>O → 14</li>
                  </ul>
                </div>
                <div>
                  <p>Apply <code>(P + 3) mod 26</code>:</p>
                  <ul class="list-disc list-inside">
                    <li>(7 + 3) mod 26 = 10 → K</li>
                    <li>(4 + 3) mod 26 = 7 → H</li>
                    <li>(11 + 3) mod 26 = 14 → O</li>
                    <li>(11 + 3) mod 26 = 14 → O</li>
                    <li>(14 + 3) mod 26 = 17 → R</li>
                  </ul>
                </div>
              </div>
              <p><strong>Encrypted Text:</strong> KHOOR</p>
            </div>

            <p class="mb-4 font-semibold">Decryption Example:</p>
            <div class="bg-gray-50 border p-4 rounded-md mb-4">
              <p><strong>Ciphertext:</strong> KHOOR</p>
              <p><strong>Shift (k):</strong> 3</p>
              <div class="flex gap-10">
                <div>
                  <p>Convert each letter to number:</p>
                  <ul class="list-disc list-inside">
                    <li>K → 10</li>
                    <li>H → 7</li>
                    <li>O → 14</li>
                    <li>O → 14</li>
                    <li>R → 17</li>
                  </ul>
                </div>
                <div>
                  <p>Apply <code>(C - 3 + 26) mod 26</code>:</p>
                  <ul class="list-disc list-inside">
                    <li>(10 - 3 + 26) mod 26 = 7 → H</li>
                    <li>(7 - 3 + 26) mod 26 = 4 → E</li>
                    <li>(14 - 3 + 26) mod 26 = 11 → L</li>
                    <li>(14 - 3 + 26) mod 26 = 11 → L</li>
                    <li>(17 - 3 + 26) mod 26 = 14 → O</li>
                  </ul>
                  <p><strong>Decrypted Text:</strong> HELLO</p>
                </div>
              </div>
            </div>

            <p class="mb-4">
              Since there are only 26 possible shifts (from 1 to 25), the Caesar
              Cipher is easy to break by trying all possibilities. However, it
              is still valuable for understanding the basic principles of
              classical encryption and modular arithmetic.
            </p>
          </div>

          <!-- Caesar Cipher Demo -->
          <div class="mx-auto max-w-md bg-gray-100 p-4 rounded-lg shadow-md">
            <button
              @click="handleClick"
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
            >
              Try Caesar Cipher
            </button>

            <div :class="{ hidden: !showInputModal }" class="mt-4">
              <CaesarCipher
                :input="userInput"
                @result="cipherResult = $event"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- II. RSA Algorithm -->
      <div>
        <h3 class="text-xl md:text-2xl font-bold mt-8">
          II. RSA Algorithm (RSA Encryption)
        </h3>
        <!-- Add content or components as needed -->
        <div class="ml-0 md:ml-10">
          <!-- Caesar Cipher Explanation -->
          <div class="bg-white p-6 rounded-lg shadow-md text-gray-800 my-10">
            <!-- <h2 class="text-xl font-bold mb-4">Caesar Cipher: Number Theory & Cryptography Explanation</h2> -->
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              commodi adipisci reprehenderit nemo aut! Voluptatibus consectetur,
              blanditiis nobis accusantium nihil dolorem nesciunt? Tenetur
              consequuntur voluptatem sequi incidunt libero amet, nobis possimus
              numquam eaque vitae harum voluptatibus aut vero, ipsam, molestiae
              temporibus. Doloremque voluptatem iusto facere accusantium, sit,
              perferendis minus molestiae odit omnis aliquid sunt assumenda in
              neque facilis placeat, ut qui sed repudiandae ipsum id consequatur
              soluta fugit? Nisi ullam cupiditate vero excepturi cumque, ad sunt
              magni esse non fugit nostrum illo incidunt, minus maxime,
              necessitatibus nulla repellendus sapiente id laboriosam beatae
              nam. Placeat voluptas eum tempora? Sequi, facere ratione.
              </p>
          </div>

          <!-- Caesar Cipher Demo -->
          <div class="mx-auto max-w-md bg-gray-100 p-4 rounded-lg shadow-md">
            <button
              @click="handleClick"
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
            >
              Try RSA Encryption
            </button>

            <div :class="{ hidden: !showInputModal }" class="mt-4">
              <RSA
                :input="userInput"
                @result="cipherResult = $event"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- III. Digital Signature -->
      <div>
        <h3 class="text-xl md:text-2xl font-bold mt-8">
          III. Digital Signature
        </h3>
        <!-- Add content or components as needed -->
      </div>

      <!-- IV. Elliptic Curve Cryptography -->
      <div>
        <h3 class="text-xl md:text-2xl font-bold mt-8">
          IV. Elliptic Curve Cryptography
        </h3>
        <!-- Add content or components as needed -->
      </div>
    </div>
  </main>

  <footer class="bg-gray-800 text-white py-4 text-center">
    <div class="container mx-auto px-4">
      <p class="text-sm">© 2025 Rathanak Phan. All rights reserved.</p>
      <div class="mt-2 flex justify-center space-x-4">
        <a href="#" class="hover:text-gray-400 transition">Privacy Policy</a>
        <a href="#" class="hover:text-gray-400 transition">Terms of Service</a>
        <a href="#" class="hover:text-gray-400 transition">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script>
import RSA from '../components/RSA.vue';

import CaesarCipher from '../components/CaesarCipher.vue';

export default {
  components: {
    // CaesarCipher,
    // RSA,
  },
  data() {
    return {
      userInput: "",
      cipherResult: "",
      showInputModal: false,
    };
  },
  methods: {
    handleClick() {
      this.showInputModal = !this.showInputModal;
    },
  },
};
</script>
