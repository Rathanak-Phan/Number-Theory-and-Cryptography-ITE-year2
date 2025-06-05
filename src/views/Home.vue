<template>
  <main
    class="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 ease-in-out"
  >
    <!-- label Section -->
    <div class="max-w-7xl mx-auto px-4 py-12 text-center">
      <div
        class="relative w-full border-2 border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden py-6 sm:py-8 md:py-12 lg:py-16 shadow-md"
      >
        <!-- Background image layer -->
        <div
          class="absolute inset-0 bg-[url('https://th.bing.com/th/id/R.77377b033da7e65208486a42e99b1915?rik=8JP1GrPiBVYTZg&riu=http%3a%2f%2f3.bp.blogspot.com%2f_UkrggvWyhFY%2fRpradWn9KWI%2fAAAAAAAAAAM%2fFcxn6T_9rrU%2fw1200-h630-p-k-no-nu%2fDV00001.jpg&ehk=Apj66QhYTtIuIyZWlNLMzigWzT2Fb%2fv3ufCac4boVZo%3d&risl=&pid=ImgRaw&r=0')] bg-cover bg-center opacity-50 dark:opacity-30"
        ></div>

        <!-- Content layer -->
        <div
          class="relative w-full sm:w-10/12 md:w-8/12 lg:w-10/12 mx-auto text-black dark:text-white z-10"
        >
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <img
              class="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
              src="/logo.png"
              alt="RUPP logo"
            />
            <div class="text-center sm:text-left">
              <p
                class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl khmer-moul font-bold"
              >
                សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ
              </p>
              <p
                class="text-xl sm:text-2xl md:text-3xl lg:text-4xl eb-garamond font-bold mt-2"
              >
                Royal University of Phnom Penh
              </p>
            </div>
          </div>
          <hr class="border-t-2 border-gray-700 dark:border-gray-200 mt-4" />
          <div class="mt-4 text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sed
            atque... Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Delectus eos expedita mollitia eaque ipsa hic libero perferendis
            aliquam incidunt pariatur quis ratione rem, velit repellendus
            facere, aut laborum repellat cupiditate? Cum nemo, quaerat esse quo
            minus itaque voluptas aliquam molestias reprehenderit. Id atque
            maxime eius ducimus, vero reiciendis labore, ut voluptatem
            accusantium minus sapiente, ex facilis. Dolorum dolorem temporibus
            numquam nesciunt cupiditate ea laborum consectetur voluptatibus
            placeat libero officia minima, quos blanditiis, enim sunt
            consequuntur necessitatibus culpa fugiat velit maiores corrupti
            nihil explicabo adipisci! Eum, soluta reiciendis quaerat dolore,
            voluptate quidem eveniet in perspiciatis expedita est eius
            cupiditate illum necessitatibus?
          </div>
          <hr class="border-t-2 border-gray-700 dark:border-gray-200 mt-4" />
        </div>
      </div>
    </div>

    <!-- Main Content Section -->
    <div class="max-w-4xl mx-auto px-4 py-12 text-center">
      <h1
        class="text-4xl sm:text-5xl font-bold text-indigo-700 dark:text-indigo-400 mb-6"
      >
        Welcome to Number Theory & Cryptography 🔐
      </h1>
      <p class="text-lg sm:text-xl mb-8 leading-relaxed">
        Explore the mathematical foundations and applications of number theory
        in cryptography. Learn how prime numbers, modular arithmetic, and
        algorithms secure digital communication.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <router-link
          to="/description"
          class="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors duration-300"
        >
          Learn More
        </router-link>
        <router-link
          to="/demo"
          class="px-6 py-3 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
        >
          Try Demo
        </router-link>
      </div>
    </div>

    
  </main>
</template>
