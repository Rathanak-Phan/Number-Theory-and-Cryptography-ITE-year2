<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 ease-in-out"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 duration-300 ease-in-out"
    >
      <h1
        class="text-4xl text-center font-bold mb-8 text-blue-600 dark:text-blue-400"
      >
        About This Website
      </h1>

      <!-- Header Section -->
      <UniversityHero />

      <!-- Introduction -->
      <section class="mb-12">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          Purpose & Vision
        </h2>
        <p class="leading-relaxed text-gray-800 dark:text-gray-300 mb-4">
          This site is designed to provide a clear and interactive introduction
          to
          <strong class="dark:text-white">Number Theory</strong> and its
          applications in <strong class="dark:text-white">Cryptography</strong>.
          Whether you're a student, a hobbyist, or just curious, our goal is to
          make complex mathematical ideas understandable and engaging.
        </p>

        <div
          class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded"
        >
          <h3 class="font-semibold mb-2 text-blue-800 dark:text-blue-300">
            What You'll Learn:
          </h3>
          <ul
            class="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-1"
          >
            <li>Basic Number Theory concepts</li>
            <li>How prime numbers work</li>
            <li>Modular arithmetic and congruence</li>
            <li>GCD, LCM, and algorithms like Euclidean algorithm</li>
            <li>Applications in real-world cryptography</li>
          </ul>
        </div>
      </section>

      <!-- Technologies -->
      <section class="mb-12">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          Technologies Used
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded"
          >
            <h3 class="font-semibold mb-2 text-green-800 dark:text-green-300">
              Frontend
            </h3>
            <ul
              class="list-disc list-inside text-sm text-gray-700 dark:text-gray-400 space-y-1"
            >
              <li>Vue.js for reactive UI</li>
              <li>Tailwind CSS for modern styling and dark mode</li>
            </ul>
          </div>
          <div
            class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded"
          >
            <h3 class="font-semibold mb-2 text-yellow-800 dark:text-yellow-300">
              Features
            </h3>
            <ul
              class="list-disc list-inside text-sm text-gray-700 dark:text-gray-400 space-y-1"
            >
              <li>Dark/light theme switching</li>
              <li>Responsive layout for desktop and mobile</li>
              <li>Interactive number theory tools</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Author Info -->
      <section class="mb-12">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          About the Creator
        </h2>
        <div
          class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded"
        >
          <p class="leading-relaxed text-gray-800 dark:text-gray-300">
            Hi! I'm <strong class="dark:text-white">Rathanak Phan</strong>, a
            second-year Information Technology Engineering student<strong
              class="dark:text-white"
              > (ITE)</strong
            >
            at the
            <strong class="dark:text-white"
              >Royal University of Phnom Penh</strong
            >. I created this website as a way to explore the mathematical
            foundations of cryptography while learning modern web development
            with Vue.js.
          </p>
          <p class="mt-3 text-sm text-gray-700 dark:text-gray-400">
            I hope this site inspires you to dive deeper into the beauty of
            mathematics and its role in technology!
          </p>
        </div>
      </section>

      <!-- Closing -->
      <section class="text-center">
        <p class="text-gray-700 dark:text-gray-400">
          Thank you for visiting. Stay curious, and keep exploring! 
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import UniversityHero from "../components/UniversityHero.vue";

export default {
  name: "About",
  components: {
    UniversityHero,
  },
  mounted() {
    document.title = "About | Number Theory Fundamentals";
  },
};
</script>
