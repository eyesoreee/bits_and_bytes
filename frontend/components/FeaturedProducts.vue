<script setup lang="ts">
import { useProduct } from "~/composable/useProduct";
import ProductCard from "~/components/ProductCard.vue";
import { NuxtLink } from "#components";

const { featuredProducts } = useProduct();
</script>

<template>
  <section
    class="max-w-7xl mx-auto px-4 py-24 flex flex-col items-center justify-center relative"
  >
    <h1 class="text-2xl font-bold mb-4">Featured Products</h1>
    <h3 class="text-md mb-8">
      Discover our handpicked selection of the latest and greatest computer
      components
    </h3>

    <!-- Products -->
    <ul class="w-full grid grid-cols-4 gap-6 gap-y-8">
      <li
        v-for="product in featuredProducts"
        :key="product.id"
        class="flex justify-center"
      >
        <div class="w-full">
          <ProductCard :product="product" />
        </div>
      </li>
    </ul>

    <NuxtLink to="/products" class="absolute bottom-5 text-lg">
      Load More
    </NuxtLink>
  </section>
</template>
