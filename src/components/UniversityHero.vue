<template>
  <section
    class="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 py-12 text-center duration-300 ease-in-out"
  >
    <div
      class="relative w-full border-2 border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 shadow-lg"
    >
      <!-- Background image layer -->
      <div
        class="absolute inset-0 bg-[url('./src/assets/bg-rupp.png')] bg-cover bg-center opacity-40 dark:opacity-20"
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non a
          repudiandae, explicabo nulla eaque sequi amet, sunt eius architecto,
          magnam sapiente ipsam quibusdam voluptatibus at quos? Dicta hic
          perferendis pariatur ipsam, minima ut dolorum similique accusantium
          vero ex, est inventore laboriosam esse molestiae explicabo numquam
          quidem recusandae totam suscipit molestias maiores natus quasi
          blanditiis. Adipisci ut esse sunt doloribus dolores unde, commodi
          eveniet? At facilis ab iure odio. Dolorem consequuntur cum, odit
          deleniti velit ipsam. Eius saepe minima vitae similique, ipsam
          voluptatum tempora ipsum qui delectus? Enim, assumenda sit! Quam, eius
          fuga! Esse molestias est cumque nam, eaque corporis neque!
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
</template>
