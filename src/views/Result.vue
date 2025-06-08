<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900"
  >
    <h1 class="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200">
      Apply for Number Theory & Cryptography
    </h1>

    <img
      src="../assets/option1.png"
      alt="option1"
      class="max-w-3/5 h-auto mb-6 rounded-lg shadow-lg"
    />

    <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
      This option is for those who want to apply for Number Theory &
      Cryptography.
    </p>

    <p>
      🔗 Original (human-friendly):
      <span class="text-blue-500 break-all">
        https://ite-year2-cryptography.vercel.app/demos/{{ basePath }}/option1
      </span>
    </p>

    <p>
      🔒 Encrypted URL:
      <span class="text-blue-500 break-all">
        https://ite-year2-cryptography.vercel.app/demos/{{ basePath }}/{{
          hashHex
        }}
      </span>
    </p>
    <button
      class="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
      @click="goBack"
    >
      Back
    </button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();

const basePath = computed(() => route.params.basePath || "unknown");
const hashHex = computed(() => route.params.hash || "no-hash-found");

function goBack() {
  router.push("/demos");
}
</script>
