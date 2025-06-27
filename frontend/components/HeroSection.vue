<template>
  <section class="min-h-screen flex flex-col">
    <section class="flex-grow-3 flex items-center justify-center bg-blue-600">
      <div class="text-center px-4 text-white">
        <h1 class="text-5xl font-extrabold mb-4">
          Build the Ultimate PC, One Part at a Time
        </h1>

        <p class="text-lg mb-12 text-gray-200">
          From motherboards to cooling fans—power up your rig here.
        </p>

        <!-- Primary action buttons -->
        <div class="flex justify-center space-x-4">
          <a
            href="/products/"
            class="px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg text-lg font-medium"
          >
            Shop now
          </a>

          <a
            href="/products/gaming"
            class="px-6 py-3 border border-white hover:bg-white hover:text-gray-900 rounded-lg text-lg font-medium text-white"
          >
            Browse Gaming Gear
          </a>
        </div>
      </div>
    </section>

    <!-- Feature Highlights -->
    <section
      class="flex-grow bg-gray-100 flex items-center justify-center py-8"
    >
      <ul class="max-w-7xl mx-auto flex flex-row gap-24 px-4">
        <li class="flex flex-col items-center text-center">
          <Icon
            name="tabler:truck-delivery"
            class="text-7xl text-blue-600 mb-2"
          />
          <h2 class="text-xl font-semibold text-gray-800">Free Shipping</h2>
          <p class="text-gray-600">Free shipping on orders over $50</p>
        </li>

        <li class="flex flex-col items-center text-center">
          <Icon
            name="tabler:shield-check"
            class="text-7xl text-blue-600 mb-2"
          />
          <h2 class="text-xl font-semibold text-gray-800">2-Year Warranty</h2>
          <p class="text-gray-600">Comprehensive warranty on all products</p>
        </li>

        <li class="flex flex-col items-center text-center">
          <Icon name="tabler:headphones" class="text-7xl text-blue-600 mb-2" />
          <h2 class="text-xl font-semibold text-gray-800">24/7 Support</h2>
          <p class="text-gray-600">Expert technical support available</p>
        </li>
      </ul>
    </section>
  </section>
</template>
