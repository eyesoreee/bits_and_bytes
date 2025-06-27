<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
</script>

<template>
  <section class="min-h-screen flex relative">
    <section
      class="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center justify-center"
    >
      <h1 class="text-2xl font-bold mb-4">Featured Products</h1>
      <h3 class="text-md mb-8">
        Discover our handpicked selection of the latest and greatest computer
        components
      </h3>

      <!-- Products -->
      <ul class="flex flex-row items-center justify-center gap-6">
        <li v-for="n in 4" key="n">
          <ProductCard />
        </li>
      </ul>

      <NuxtLink to="/products" class="absolute bottom-5 text-lg">
        Load More
      </NuxtLink>
    </section>
  </section>
</template>
