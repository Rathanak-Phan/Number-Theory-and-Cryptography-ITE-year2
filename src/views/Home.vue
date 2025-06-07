<template>
  <main
    class="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 ease-in-out"
  >
    <!-- Header Section -->
    <UniversityHero />

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

    <!-- Future of Number Theory in Cryptography -->
    <section
      class="py-16 px-4 sm:px-6 md:px-20 bg-gray-50 dark:bg-gray-800 duration-300 ease-in-out"
    >
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            class="text-3xl sm:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-4"
          >
            Future of Number Theory in Cryptography
          </h2>
          <p
            class="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            The future of number theory in cryptography is promising, with
            advancements in quantum computing and new cryptographic protocols. 
            Key areas of focus include:
          </p>
          <ul class="list-disc ml-6 mt-4 text-gray-700 dark:text-gray-300">
            <li>Quantum-resistant ciphers</li>
            <li>Post-quantum cryptography</li>
            <li>Privacy-enhancing technologies</li>
            <li>Blockchain applications</li>
          </ul>
        </div>
        <img
          src="/src/assets/number.png"
          alt="Image of future of number theory in cryptography"
          class="rounded-lg shadow-md w-full h-auto"
          loading="lazy"
        />
      </div>
    </section>
  </main>
</template>

<script>
  import Carousel from "../components/Carousel.vue";
  import UniversityHero from "../components/UniversityHero.vue";

  export default {
    name: "Home",
    components: {
      Carousel,
      UniversityHero,
    },
    mounted() {
      document.title = "Home | Number Theory Fundamentals";
    },
  };

</script>
