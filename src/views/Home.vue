<template>
  <main
    class="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 ease-in-out"
  >
    <!-- Header Section -->
    <section
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center duration-300 ease-in-out"
    >
      <div
        class="relative w-full border-2 border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 shadow-lg"
      >
        <!-- Background image layer -->
        <div
          class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 dark:opacity-20"
          aria-hidden="true"
        ></div>

        <!-- Content layer -->
        <div
          class="relative w-full max-w-6xl mx-auto text-black dark:text-white z-10"
        >
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
          >
            <img
              class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain"
              src="/logo.png"
              alt="Royal University of Phnom Penh logo"
              loading="lazy"
            />
            <div class="text-center sm:text-left">
              <h1
                class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl khmer-moul font-bold tracking-tight"
              >
                សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ
              </h1>
              <p
                class="text-xl sm:text-2xl md:text-3xl lg:text-4xl eb-garamond font-semibold mt-2"
              >
                Royal University of Phnom Penh
              </p>
            </div>
          </div>
          <hr class="border-t-2 border-gray-700 dark:border-gray-200 my-6" />
          <p
            class="text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            Established in 1960, the Royal University of Phnom Penh (RUPP) is
            Cambodia's leading institution for higher education, fostering
            academic excellence and research in diverse fields. Committed to
            innovation and cultural preservation, RUPP prepares students to
            contribute to global and local challenges with knowledge and
            integrity.
          </p>
          <hr class="border-t-2 border-gray-700 dark:border-gray-200 my-6" />
          <p class="text-base text-gray-700 font-sans">
            <strong class="text-red-500">Reference:</strong>
            <a
              href="https://www.geeksforgeeks.org/number-theory-used-in-cryptography/"
              target="_blank"
              class="text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline transition-colors"
            >
              Number Theory used in Cryptography - GeeksforGeeks
            </a>
          </p>
        </div>
      </div>
    </section>

    <!-- Welcome Section -->
    <section
      class="text-center py-16 px-4 sm:px-6 md:px-20 bg-gray-50 dark:bg-gray-800 duration-300 ease-in-out"
    >
      <h1
        class="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-700 dark:text-blue-400 mb-6"
      >
        Welcome to Number Theory & Cryptography
      </h1>
      <p
        class="text-lg sm:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed"
      >
        Dive into the fascinating world of numbers and secure communication.
        Discover how mathematical principles like prime numbers and modular
        arithmetic power modern cryptographic systems.
      </p>
      <p
        class="text-3xl sm:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-4"
      >
        Example of RSA Algorithm
      </p>
      <Carousel />
    </section>

    <!-- About Number Theory -->
    <section
      class="py-16 px-4 sm:px-6 md:px-20 bg-white dark:bg-gray-900 duration-300 ease-in-out"
    >
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            class="text-3xl sm:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-4"
          >
            What is Number Theory?
          </h2>
          <p
            class="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            Number theory is the study of integers and their properties, forming
            the backbone of many mathematical disciplines. Key concepts include:
          </p>
          <ul class="list-disc ml-6 mt-4 text-gray-700 dark:text-gray-300">
            <li>Prime numbers and factorization</li>
            <li>Modular arithmetic and congruences</li>
            <li>
              Greatest common divisors (GCD) and least common multiples (LCM)
            </li>
            <li>Euler’s theorem and Diophantine equations</li>
          </ul>
        </div>
        <img
          src="/src/assets/number.png"
          alt="Illustration of number theory concepts"
          class="rounded-lg shadow-md w-full h-auto"
          loading="lazy"
        />
      </div>
    </section>

    <!-- About Cryptography -->
    <section
      class="py-16 px-4 sm:px-6 md:px-20 bg-gray-50 dark:bg-gray-800 duration-300 ease-in-out"
    >
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/src/assets/cryptography.png"
          alt="Diagram of cryptographic encryption process"
          class="rounded-lg shadow-md w-full h-auto"
          loading="lazy"
        />
        <div>
          <h2
            class="text-3xl sm:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-4"
          >
            What is Cryptography?
          </h2>
          <p
            class="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            Cryptography secures communication through mathematical techniques,
            ensuring data privacy and integrity. It includes:
          </p>
          <ul class="list-disc ml-6 mt-4 text-gray-700 dark:text-gray-300">
            <li>Classical ciphers (e.g., Caesar, Vigenère)</li>
            <li>Public-key cryptography (e.g., RSA, ECC)</li>
            <li>Hash functions and digital signatures</li>
            <li>Secure protocols for modern applications</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="text-center py-16 px-4 sm:px-6 md:px-20 bg-white dark:bg-gray-900 duration-300 ease-in-out"
    >
      <h2
        class="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6"
      >
        Start Your Journey
      </h2>
      <p
        class="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8 text-base sm:text-lg"
      >
        Whether you're a beginner or an expert, explore the math behind secure
        systems and unlock the power of cryptography.
      </p>
      <div class="flex justify-center flex-wrap gap-4">
        <router-link
          to="/number-theory"
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
          aria-label="Learn about number theory"
        >
          Learn Number Theory
        </router-link>
        <router-link
          to="/cryptography"
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
          aria-label="Explore cryptography"
        >
          Explore Cryptography
        </router-link>
        <router-link
          to="/demos"
          class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
          aria-label="Try interactive demos"
        >
          Try Demos
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import Carousel from "../components/Carousel.vue";
</script>
