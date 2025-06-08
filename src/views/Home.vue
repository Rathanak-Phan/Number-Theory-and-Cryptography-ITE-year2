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
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        class="max-w-7xl mx-auto"
      >
        <h1
          class="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-700 dark:text-blue-400 mb-6"
        >
          Welcome to Number Theory & Cryptography
        </h1>
        <p
          class="text-lg sm:text-xl max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
        >
          Explore the fascinating intersection where mathematical elegance meets
          digital security. Number theory, the mother of modern cryptography,
          provides the mathematical foundation that protects our digital world
          through secure communication, data privacy, and authentication
          systems.
        </p>
        <p
          class="text-3xl sm:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-4"
        >
          Practical Applications of Mathematical Security
        </p>
      </div>
      <Carousel data-aos="zoom-in" />
    </section>

    <!-- About Number Theory -->
    <section
      class="py-16 px-4 sm:px-6 md:px-20 bg-white dark:bg-gray-900 duration-300 ease-in-out"
    >
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h2
            class="text-3xl sm:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-4"
          >
            Number Theory: The Foundation of Cryptography
          </h2>
          <p
            class="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6"
          >
            Number theory is the branch of mathematics relating to numbers and
            the rules governing them. It serves as the foundation for modern
            cryptographic algorithms that ensure data privacy, integrity, and
            authenticity in digital communications. Key mathematical concepts
            include:
          </p>
          <ul
            class="list-disc ml-6 mt-4 text-gray-700 dark:text-gray-300 space-y-2"
          >
            <li>
              <strong>Prime Numbers:</strong> Used in RSA encryption and key
              generation algorithms
            </li>
            <li>
              <strong>Modular Arithmetic:</strong> Essential for secure
              encryption and decryption processes
            </li>
            <li>
              <strong>Discrete Logarithms:</strong> Foundation for elliptic
              curve cryptography and digital signatures
            </li>
            <li>
              <strong>Greatest Common Divisors (GCD):</strong> Critical for key
              exchange protocols
            </li>
            <li>
              <strong>Euler's Theorem:</strong> Powers RSA algorithm and
              public-key cryptography
            </li>
          </ul>
        </div>
        <img
          data-aos="fade-up"
          src="/src/assets/number.png"
          alt="Mathematical concepts used in cryptography"
          class="rounded-lg shadow-md w-full h-auto"
          loading="lazy"
        />
      </div>
    </section>

    <!-- Real-World Applications -->
    <section
      class="py-16 px-4 sm:px-6 md:px-20 bg-gray-50 dark:bg-gray-800 duration-300 ease-in-out"
    >
      <div class="max-w-7xl mx-auto">
        <h2
          class="text-3xl sm:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-12 text-center"
        >
          Real-Life Applications of Number Theory in Cryptography
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Secure Online Transactions -->
          <div
            data-aos="zoom-in-right"
            data-aos-delay="300"
            data-aos-duration="500"
            class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-transparent hover:border-gray-300 dark:hover:border-gray-500 "
          >
            <div
              class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4"
            >
              <span class="text-white text-xl">🛒</span>
            </div>
            <h3
              class="text-xl font-semibold mb-3 text-gray-800 dark:text-white"
            >
              Secure Online Transactions
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              SSL/TLS protocols use number theory-based cryptographic algorithms
              to protect e-commerce transactions, keeping credit card
              information and personal details safe from unauthorized access
              during online purchases.
            </p>
          </div>

          <!-- Digital Identity Verification -->
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="500"
            class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-transparent hover:border-gray-300 dark:hover:border-gray-500"
          >
            <div
              class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4"
            >
              <span class="text-white text-xl">🔐</span>
            </div>
            <h3
              class="text-xl font-semibold mb-3 text-gray-800 dark:text-white"
            >
              Digital Identity Verification
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Digital signatures and Public Key Infrastructure (PKI) systems use
              number theory to verify digital identities, ensuring document
              authenticity and preventing tampering in electronic contracts and
              transactions.
            </p>
          </div>

          <!-- Secure Messaging -->
          <div
            data-aos="zoom-in-left"
            data-aos-delay="300"
            data-aos-duration="500"
            class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-transparent hover:border-gray-300 dark:hover:border-gray-500"
          >
            <div
              class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4"
            >
              <span class="text-white text-xl">💬</span>
            </div>
            <h3
              class="text-xl font-semibold mb-3 text-gray-800 dark:text-white"
            >
              Secure Messaging
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              End-to-end encryption protocols like Signal and WhatsApp use
              number theory-based algorithms to ensure private communication,
              protecting conversations from unauthorized access by third
              parties.
            </p>
          </div>

          <!-- Data Integrity -->
          <div
            data-aos="zoom-in-right"
            data-aos-delay="300"
            data-aos-duration="500"
            class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-transparent hover:border-gray-300 dark:hover:border-gray-500"
          >
            <div
              class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4"
            >
              <span class="text-white text-xl">⛓️</span>
            </div>
            <h3
              class="text-xl font-semibold mb-3 text-gray-800 dark:text-white"
            >
              Data Integrity & Blockchain
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Cryptographic hash functions based on number theory principles
              ensure data integrity in blockchain transactions, creating
              immutable records for cryptocurrencies like Bitcoin and Ethereum.
            </p>
          </div>

          <!-- Password Security -->
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="500"
            class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-transparent hover:border-gray-300 dark:hover:border-gray-500"
          >
            <div
              class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4"
            >
              <span class="text-white text-xl">🔑</span>
            </div>
            <h3
              class="text-xl font-semibold mb-3 text-gray-800 dark:text-white"
            >
              Password Security
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Advanced password hashing algorithms like bcrypt and Argon2 use
              number theory concepts to protect against brute force attacks and
              secure user authentication systems across web platforms.
            </p>
          </div>

          <!-- Access Control -->
          <div
            data-aos="zoom-in-left"
            data-aos-delay="300"
            data-aos-duration="500"
            class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-transparent hover:border-gray-300 dark:hover:border-gray-500"
          >
            <div
              class="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-4"
            >
              <span class="text-white text-xl">🏢</span>
            </div>
            <h3
              class="text-xl font-semibold mb-3 text-gray-800 dark:text-white"
            >
              Secure Access Control
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Biometric systems and smart card authentication use number
              theory-based cryptography to secure physical and digital access to
              buildings, networks, and confidential information systems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Cryptography -->
    <section
      class="py-16 px-4 sm:px-6 md:px-20 bg-white dark:bg-gray-900 duration-300 ease-in-out"
    >
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <!-- Text first on mobile, second on desktop -->
        <div data-aos="fade-up-left" class="order-1 md:order-1">
          <h2
            class="text-3xl sm:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-4"
          >
            Modern Cryptography in Practice
          </h2>
          <p
            class="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6"
          >
            Cryptography protects digital communication through sophisticated
            mathematical techniques rooted in number theory. Modern
            cryptographic systems secure everything from online banking to
            government communications through:
          </p>
          <ul
            class="list-disc ml-6 mt-4 text-gray-700 dark:text-gray-300 space-y-2"
          >
            <li>
              <strong>RSA Encryption:</strong> Uses large prime numbers for
              secure key exchange and digital signatures
            </li>
            <li>
              <strong>Elliptic Curve Cryptography (ECC):</strong> Provides
              strong security with smaller key sizes
            </li>
            <li>
              <strong>Advanced Encryption Standard (AES):</strong> Symmetric
              encryption for high-speed data protection
            </li>
            <li>
              <strong>Hash Functions:</strong> Ensure data integrity and digital
              fingerprinting
            </li>
            <li>
              <strong>Digital Certificates:</strong> Authenticate identities in
              secure communications
            </li>
          </ul>
        </div>

        <!-- Image second on mobile, first on desktop -->
        <img
          data-aos="fade-down-right"
          src="/src/assets/cryptography.png"
          alt="Modern cryptographic systems and algorithms"
          class="order-2 md:order-first rounded-lg shadow-md w-full h-auto"
          loading="lazy"
        />
      </div>
    </section>

    <!-- Key Algorithms Section -->
    <section
      class="py-16 px-4 sm:px-6 md:px-20 bg-gray-50 dark:bg-gray-800 duration-300 ease-in-out"
    >
      <div class="max-w-7xl mx-auto">
        <h2
          class="text-3xl sm:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-12 text-center"
        >
          Core Cryptographic Algorithms
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            data-aos="flip-left"
            class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto"
            >
              <span class="text-white font-bold text-2xl">RSA</span>
            </div>
            <h3
              class="text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-white"
            >
              RSA Algorithm
            </h3>
            <p
              class="text-gray-700 dark:text-gray-300 text-center leading-relaxed"
            >
              Uses the mathematical difficulty of factoring large prime numbers
              to create secure public-key encryption, forming the backbone of
              internet security and digital signatures.
            </p>
          </div>

          <div
            data-aos="zoom-in-up"
            class="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto"
            >
              <span class="text-white font-bold text-2xl">ECC</span>
            </div>
            <h3
              class="text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-white"
            >
              Elliptic Curve Cryptography
            </h3>
            <p
              class="text-gray-700 dark:text-gray-300 text-center leading-relaxed"
            >
              Leverages discrete logarithms on elliptic curves to provide
              equivalent security with smaller key sizes, making it perfect for
              mobile devices and IoT applications.
            </p>
          </div>

          <div
            data-aos="flip-right"
            class="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto"
            >
              <span class="text-white font-bold text-2xl">DH</span>
            </div>
            <h3
              class="text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-white"
            >
              Diffie-Hellman Key Exchange
            </h3>
            <p
              class="text-gray-700 dark:text-gray-300 text-center leading-relaxed"
            >
              Uses modular arithmetic and discrete logarithms to enable secure
              key exchange over insecure channels, fundamental to modern secure
              communication protocols.
            </p>
          </div>
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
        Start Your Journey into Mathematical Security
      </h2>
      <p
        class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-base sm:text-lg leading-relaxed"
      >
        Whether you're a student, developer, or security professional,
        understanding the mathematical foundations of cryptography is essential
        in our digital age. Explore how number theory protects everything from
        your online banking to social media messages.
      </p>
      <div class="flex justify-center flex-wrap gap-4">
        <router-link
          to="/number-theory"
          class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-md transition-colors duration-300 font-semibold"
          aria-label="Learn about number theory foundations"
        >
          Explore Number Theory
        </router-link>
        <router-link
          to="/cryptography"
          class="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg shadow-md transition-colors duration-300 font-semibold"
          aria-label="Discover cryptographic applications"
        >
          Discover Cryptography
        </router-link>
        <router-link
          to="/demos"
          class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg shadow-md transition-colors duration-300 font-semibold"
          aria-label="Try interactive demonstrations"
        >
          Interactive Demos
        </router-link>
      </div>
    </section>

    <!-- Future of Number Theory in Cryptography -->
    <section class="py-20 px-4 sm:px-6 md:px-20 relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-500/20"
      ></div>
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <h1
            class="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            The Quantum-Safe Future
          </h1>
          <p
            class="text-xl text-start text-gray-700 dark:text-gray-300 max-w-7xl mx-auto leading-relaxed"
          >
            The future of number theory in cryptography is being reshaped by
            both the threats posed by quantum computing and groundbreaking
            mathematical discoveries. Standing at the intersection of classical
            mathematics and quantum mechanics, we are witnessing the emergence
            of new cryptographic paradigms that will define digital security for
            decades to come.
          </p>
        </div>
        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div class="order-2 lg:order-1">
            <div class="space-y-6">
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                class="flex items-start space-x-4 group"
              >
                <div
                  class="w-3 h-3 bg-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"
                ></div>
                <div>
                  <h4
                    class="font-semibold text-gray-800 dark:text-white text-lg"
                  >
                    Quantum-Resistant Algorithms
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    Mathematics-based solutions that remain secure even against
                    quantum attacks
                  </p>
                </div>
              </div>

              <div
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                class="flex items-start space-x-4 group"
              >
                <div
                  class="w-3 h-3 bg-purple-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"
                ></div>
                <div>
                  <h4
                    class="font-semibold text-gray-800 dark:text-white text-lg"
                  >
                    Post-Quantum Cryptography
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    New mathematical foundations based on lattices, codes, and
                    multivariate equations
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                class="flex items-start space-x-4 group"
              >
                <div
                  class="w-3 h-3 bg-green-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"
                ></div>
                <div>
                  <h4
                    class="font-semibold text-gray-800 dark:text-white text-lg"
                  >
                    Privacy-Enhancing Technologies
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    Zero-knowledge proofs and homomorphic encryption advancing
                    data privacy
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                class="flex items-start space-x-4 group"
              >
                <div
                  class="w-3 h-3 bg-red-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"
                ></div>
                <div>
                  <h4
                    class="font-semibold text-gray-800 dark:text-white text-lg"
                  >
                    Blockchain & Distributed Systems
                  </h4>
                  <p class="text-gray-600 dark:text-gray-400">
                    Cryptographic consensus mechanisms and decentralized trust
                    protocols
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in-up" class="order-1 lg:order-2 relative">
            <div
              class="relative transition-transform duration-[3000ms] ease-in-out hover:-translate-y-3"
            >
              <div
                class="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl shadow-2xl flex items-center justify-center"
              >
                <div class="text-white text-center p-8">
                  <div class="text-6xl mb-4">🔐</div>
                  <h3 class="text-2xl font-bold mb-2">Quantum-Safe Future</h3>
                  <p class="text-blue-100">
                    Mathematical elegance meets quantum resilience
                  </p>
                </div>
              </div>

              <!-- Decorative elements -->
              <div
                class="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 rounded-full animate-pulse opacity-75"
              ></div>
              <div
                class="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-green-400 rounded-full animate-bounce opacity-75"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NIST Post-Quantum Standards -->
    <section class="py-16 px-4 sm:px-6 md:px-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto">
        <h2
          class="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          NIST Post-Quantum Cryptography Standards (2024)
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            class="bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg"
          >
            <h3
              class="text-2xl font-semibold mb-4 text-cyan-700 dark:text-cyan-400"
            >
              ML-KEM (FIPS 203)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Module-Lattice-Based Key Encapsulation Mechanism derived from
              CRYSTALS-KYBER, providing quantum-resistant key exchange based on
              the mathematical complexity of lattice problems.
            </p>
            <div class="bg-cyan-100 dark:bg-gray-600 p-3 rounded-lg">
              <span class="text-sm font-medium text-cyan-800 dark:text-cyan-300"
                >Foundation: Learning With Errors (LWE) problem</span
              >
            </div>
          </div>

          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            class="bg-gradient-to-br from-violet-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg"
          >
            <h3
              class="text-2xl font-semibold mb-4 text-violet-700 dark:text-violet-400"
            >
              ML-DSA (FIPS 204)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Module-Lattice-Based Digital Signature Algorithm from
              CRYSTALS-Dilithium, ensuring authentic digital signatures that
              remain secure against both classical and quantum attacks.
            </p>
            <div class="bg-violet-100 dark:bg-gray-600 p-3 rounded-lg">
              <span
                class="text-sm font-medium text-violet-800 dark:text-violet-300"
                >Foundation: Module-SIS and Module-LWE problems</span
              >
            </div>
          </div>

          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            class="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg"
          >
            <h3
              class="text-2xl font-semibold mb-4 text-amber-700 dark:text-amber-400"
            >
              SLH-DSA (FIPS 205)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Stateless Hash-Based Digital Signature Algorithm derived from
              SPHINCS+, offering security based on the fundamental properties of
              cryptographic hash functions.
            </p>
            <div class="bg-amber-100 dark:bg-gray-600 p-3 rounded-lg">
              <span
                class="text-sm font-medium text-amber-800 dark:text-amber-300"
                >Foundation: One-way functions and Merkle trees</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Challenges Section -->
    <section
      class="py-16 px-4 sm:px-6 md:px-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 dark:from-blue-900/20 dark:to-purple-900/20"
      ></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <h2 class="text-4xl font-bold text-center mb-16">
          Emerging Challenges & Opportunities
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            class="text-center group"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="text-3xl">⚡</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">Performance Optimization</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Balancing quantum resistance with computational efficiency and
              resource constraints
            </p>
          </div>

          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            class="text-center group"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="text-3xl">🔄</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">Migration Strategies</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Seamlessly transitioning existing systems to post-quantum
              cryptographic standards
            </p>
          </div>

          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            class="text-center group"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="text-3xl">🧮</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">Mathematical Innovation</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Discovering new mathematical structures for next-generation
              cryptographic algorithms
            </p>
          </div>

          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            class="text-center group"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="text-3xl">🌍</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">Global Standardization</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Achieving worldwide consensus on cryptographic standards and
              implementation practices
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Conclusion Section -->
    <section
      class="py-20 px-4 sm:px-6 md:px-20 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 text-white"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8">
          Securing Tomorrow's Digital World
        </h2>
        <p class="text-xl leading-relaxed mb-8 opacity-90">
          From ancient mathematical theorems to cutting-edge quantum-resistant
          algorithms, number theory remains the cornerstone of digital security.
          As we advance into an era of quantum computing and artificial
          intelligence, the elegant mathematics that protects our digital lives
          continues to evolve, ensuring that privacy, security, and trust remain
          fundamental pillars of our connected world.
        </p>
        <div
          class="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4"
        >
          <span class="text-2xl">🔐</span>
          <span class="text-lg font-medium"
            >Mathematics. Security. Innovation.</span
          >
          <span class="text-2xl">🚀</span>
        </div>
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
    document.title =
      "Number Theory & Cryptography | Mathematical Foundations of Digital Security";
  },
};
</script>
