<script></script>

<template>
  <header class="relative w-full border-2 py-20">
    <!-- Background image layer -->
    <div
      class="absolute inset-0 bg-[url('https://th.bing.com/th/id/R.77377b033da7e65208486a42e99b1915?rik=8JP1GrPiBVYTZg&riu=http%3a%2f%2f3.bp.blogspot.com%2f_UkrggvWyhFY%2fRpradWn9KWI%2fAAAAAAAAAAM%2fFcxn6T_9rrU%2fw1200-h630-p-k-no-nu%2fDV00001.jpg&ehk=Apj66QhYTtIuIyZWlNLMzigWzT2Fb%2fv3ufCac4boVZo%3d&risl=&pid=ImgRaw&r=0')] bg-cover bg-center opacity-50"
    ></div>

    <!-- Content layer -->
    <div class="relative w-6/10 mx-auto text-black">
      <div class="flex items-center justify-center mb-10">
        <img class="w-[150px] h-[150px]" src="/logo.png" alt="RUPP logo" />
        <div>
          <p class="text-5xl moul-regular font-bold">
            សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ
          </p>
          <p class="text-4xl playwrite font-bold mx-15">
            Royal University of Phnom Penh
          </p>
        </div>
      </div>
      <hr />
      <div>
        <!-- Your content here -->
        Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Magni sed atque quibusdam veritatis amet quisquam
        voluptas perferendis quos. In sed facilis, dolores totam incidunt magni
        mollitia beatae id sequi est dolorem alias quae optio laborum. Saepe hic
        vero quae placeat provident beatae dolore facere quas asperiores veniam
        autem minima pariatur, quibusdam magnam, nisi ipsum reiciendis animi rem
        delectus expedita alias tempora laudantium. Tenetur nisi, corporis modi
        aut officia magnam, natus nostrum magni totam itaque adipisci nihil
        doloremque sapiente quibusdam! Maiores debitis odit omnis incidunt id
        quos quia porro. Omnis vero dignissimos quaerat doloribus assumenda
        fugiat, totam asperiores nam vitae! Earum illum voluptate ad, incidunt
        adipisci voluptates quas fugiat quam molestias sed doloremque corrupti
        qui molestiae, assumenda ipsam. Saepe vel quasi facere aut esse nam
        eligendi. Sunt explicabo optio, repellat soluta expedita ipsa aut ut hic
        alias id porro numquam eaque modi ea dicta voluptas? Temporibus
        quibusdam animi eveniet non vitae quasi soluta, quisquam consequuntur
        modi, enim id perspiciatis amet neque quam? Culpa maxime distinctio
        cupiditate suscipit veniam recusandae reiciendis, odit perspiciatis
        accusamus consequatur quam in, quae officiis reprehenderit dolorum autem
        cumque voluptate eos beatae, perferendis dignissimos. Odit, laudantium?
        Praesentium mollitia repudiandae quasi dignissimos magni repellendus, at
        consequatur eveniet quos ratione ipsam est quod eligendi tempore atque
        enim, nesciunt amet sed illum nobis aspernatur ipsa deleniti iste
        labore. Eum incidunt quasi, harum quo ipsam molestias corporis
        voluptatibus quis fuga, expedita explicabo error. Cum nostrum deleniti,
        minima omnis necessitatibus tempora accusantium blanditiis nulla,
        voluptatum atque labore incidunt id doloremque, nam itaque consectetur
        culpa magnam ducimus voluptatem praesentium odit animi harum saepe! Nemo
        quae dolore ad aspernatur fugit quo aliquid architecto rem ratione ipsa
        ea, odio, consequatur quibusdam ipsam. Itaque similique praesentium esse
        repellat quod! Recusandae a temporibus necessitatibus, similique iste
        quibusdam assumenda obcaecati iusto, exercitationem ipsum laborum modi
        quisquam, quod debitis nesciunt!
      </div>
      <hr />
    </div>
  </header>

  <main class="w-full px-auto border-2 mt-7 p-10">
    <h1 class="text-4xl font-bold text-gray-800 flex items-start my-5">
      Number Theory & Cryptography — (Interactive Demo Guide)
    </h1>
    <hr />

    <!-- description about number theory and crytography -->
    <div>
      <p class="text-2xl font-bold text-gray-800 text-center my-5">
        Welcome to the Number Theory and Cryptography Demo!
      </p>
      <p class="text-lg text-gray-800 text-start my-5">
        This website lets you explore and test important cryptographic concepts
        with interactive tools. Whether you're a beginner or just curious about
        how cryptography works, you can try algorithms yourself, see the
        calculations behind the scenes, and understand the magic of secure
        communication.
      </p>

      <!-- I.Classical Cryptography -->
      <div>
        <h3 class="text-2xl font-bold">
          I. Classical Cryptography (Caesar Cipher)
        </h3>
        <div class="ml-10">
          <p class="text-lg text-gray-800 text-start my-5">
            In this section, you can explore the Caesar cipher, a simple and
            ancient encryption technique. The Caesar cipher shifts each letter
            in a message by a fixed number of positions down the alphabet. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti
            maiores tempore aperiam. Accusantium itaque quos, sapiente ab aut,
            magnam aliquid ea ipsum officia repudiandae laudantium officiis,
            asperiores vero eligendi incidunt! Est sequi molestias voluptate
            explicabo provident nulla, odit deserunt dolorum hic pariatur iusto
            eos ea saepe eaque quas maiores perspiciatis earum dolor at corporis
            praesentium aspernatur placeat aperiam fuga? Accusantium aut, veniam
            laboriosam obcaecati nihil maiores dicta in harum voluptates qui
            nostrum minus modi, reiciendis officiis eos. Libero quae amet dicta
            repudiandae provident cupiditate a est minima? Ipsam, corrupti optio
            perspiciatis ab itaque asperiores modi. Dolorem ad expedita
            delectus!
          </p>
          <!-- Caesar Cipher Demo -->
          <div class="ml-10">
            <h4 class="text-xl font-bold">Caesar Cipher Demo</h4>
            <div class="flex items-center space-x-4">
              <input
                type="text"
                v-model="message"
                placeholder="Enter a message"
                class="border border-gray-300 px-4 py-2 rounded"
              />
              <input
                type="number"
                v-model="shift"
                placeholder="Enter a shift value"
                class="border border-gray-300 px-4 py-2 rounded"
              />
              <button
                @click="encryptMessage"
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Encrypt
              </button>
              <button
                @click="decryptMessage"
                class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Decrypt
              </button>
            </div>
            <p class="text-lg text-gray-800 text-start my-5">
              Encrypted Message: {{ encryptedMessage }}
            </p>
            <p class="text-lg text-gray-800 text-start my-5">
              Decrypted Message: {{ decryptedMessage }}
            </p>
          </div>
        </div>
      </div>

      <!-- II.RSA Algorithm -->
      <div>
        <h3 class="text-2xl font-bold">II. RSA Algorithm (RSA Encryption)</h3>
      </div>

      <!-- III.Digital Signature -->
      <div>
        <h3 class="text-2xl font-bold">
          III. Digital Signature (Digital Signature)
        </h3>
      </div>

      <!-- IV. Elliptic Curve Cryptography -->
      <div>
        <h3 class="text-2xl font-bold">
          IV. Elliptic Curve Cryptography (Elliptic Curve)
        </h3>
      </div>

      <!-- V. Hash Functions -->
    </div>
  </main>

  <footer class="bg-gray-800 text-white py-4 text-center">
    <div class="container mx-auto px-4">
      <p class="text-sm">&copy; 2025 Rathanak Phan. All rights reserved.</p>
      <div class="mt-2 flex justify-center space-x-4">
        <a href="#" class="hover:text-gray-400 transition">Privacy Policy</a>
        <a href="#" class="hover:text-gray-400 transition">Terms of Service</a>
        <a href="#" class="hover:text-gray-400 transition">Contact</a>
      </div>
    </div>
  </footer>
</template>
