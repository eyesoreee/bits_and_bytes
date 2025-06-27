<script setup lang="ts">
import type { Product } from "~/types/Product";

interface Props {
  product?: Product;
}

const props = withDefaults(defineProps<Props>(), {
  product: undefined,
});
</script>

<template>
  <article
    v-if="props.product"
    class="bg-white shadow rounded-2xl border border-gray-300 flex flex-col p-4 transform transition duration-200 ease-out hover:scale-105 hover:shadow-lg"
  >
    <!-- Image -->
    <figure
      class="relative h-64 w-full mb-4 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400"
    >
      <!-- placeholder box -->
      <span class="text-xs uppercase">Image</span>

      <!-- Sale badge - only show if product is on sale -->
      <span
        v-if="props.product?.isSale"
        class="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold uppercase px-2 py-1 rounded-full"
      >
        Sale
      </span>
    </figure>

    <!-- Category & Title -->
    <header class="mb-2">
      <a href="/category/cpu" class="text-xs font-medium text-gray-600">
        {{ props.product?.category?.name || "Unknown Category" }}
      </a>
      <h2 class="text-lg font-semibold text-gray-800 mt-1 truncate">
        {{ props.product?.name || "Product Name" }}
      </h2>
    </header>

    <!-- Rating -->
    <div class="flex items-center text-sm text-gray-500 mb-3">
      <Icon name="material-symbols:star" class="text-yellow-300 mr-1" />
      <span class="font-medium text-gray-800">{{
        props.product?.rating || 0
      }}</span>
      <span class="ml-2 text-gray-500"
        >({{ props.product?.reviews || 0 }} reviews)</span
      >
    </div>

    <!-- Prices -->
    <div class="flex items-baseline space-x-2 mb-4">
      <!-- Current Price -->
      <ins class="text-xl font-bold text-blue-600">
        ${{ props.product?.price || 0 }}
      </ins>
      <!-- Original Price - only show if different from current price -->
      <del
        v-if="
          props.product?.originalPrice &&
          props.product.originalPrice > props.product.price
        "
        class="text-sm text-gray-400 line-through"
      >
        ${{ props.product.originalPrice }}
      </del>
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
