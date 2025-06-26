<template>
  <article
    class="bg-white shadow rounded-2xl flex flex-col p-4 transform transition duration-200 ease-out hover:scale-105 hover:shadow-lg"
  >
    <!-- Image -->
    <figure
      class="relative h-64 w-64 mb-4 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400"
    >
      <!-- placeholder box -->
      <span class="text-xs uppercase">Image</span>

      <!-- Sale badge -->
      <span
        class="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold uppercase px-2 py-1 rounded-full"
      >
        Sale
      </span>
    </figure>

    <!-- Category & Title -->
    <header class="mb-2 w-64">
      <a href="/category/cpu" class="text-xs font-medium text-gray-600">
        CPU
      </a>
      <h2 class="text-lg font-semibold text-gray-800 mt-1 truncate">
        AMD Ryzen 7 7700X
      </h2>
    </header>

    <!-- Rating -->
    <div class="flex items-center text-sm text-gray-500 mb-3">
      <Icon name="material-symbols:star" class="text-yellow-300 mr-1" />
      <span class="font-medium text-gray-800">4.8</span>
      <span class="ml-2 text-gray-500">(1247 reviews)</span>
    </div>

    <!-- Prices -->
    <div class="flex items-baseline space-x-2 mb-4">
      <!-- Current Price -->
      <ins class="text-xl font-bold text-blue-600"> $299.99 </ins>
      <!-- Original Price -->
      <del class="text-sm text-gray-400 line-through"> $349.99 </del>
    </div>

    <!-- Add to Cart -->
    <button
      class="bg-black text-white rounded-lg py-2 flex items-center justify-center hover:bg-gray-800 transition"
    >
      <Icon name="mdi:cart-outline" class="mr-2" />
      Add to Cart
    </button>
  </article>
</template>
