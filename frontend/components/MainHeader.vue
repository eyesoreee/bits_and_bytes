<script setup lang="ts">
import { useCategory } from "~/composable/useCategory";

const cartItemCount = ref<number>(3);
const { categories, showCategories, error, loading, toggleCategories } =
  useCategory();
</script>

<template>
  <header class="bg-white shadow-md">
    <!-- Top Row -->
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2"
    >
      <!-- Title -->
      <NuxtLink to="/" class="flex items-center gap-1">
        <Icon name="tabler:binary" class="text-2xl text-blue-400" />
        <span class="text-xl font-bold">Bits & Bytes</span>
      </NuxtLink>

      <!-- Home, Products, and Categories -->
      <nav>
        <ul class="flex items-center justify-center gap-8 text-gray-600">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
          <li>
            <button class="cursor-pointer" @click="toggleCategories">
              Categories
            </button>
          </li>
        </ul>
      </nav>

      <!-- Search Bar -->
      <form role="search" class="relative flex items-center w-md">
        <input
          type="search"
          placeholder="Search..."
          class="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Icon
          name="material-symbols:search"
          class="absolute right-4 h-5 w-5 text-gray-400"
        />
      </form>

      <!-- Account & Cart -->
      <nav>
        <ul class="flex items-center justify-center text-gray-600 gap-8">
          <li>
            <NuxtLink to="/account" class="flex items-center gap-1">
              <Icon name="line-md:account" class="w-4 h-4" /> Account
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/cart" class="flex items-center gap-1">
              <Icon name="mdi:cart-outline" class="w-4 h-4" />
              <span>Cart</span>
              <span
                v-if="cartItemCount > 0"
                class="ml-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs"
              >
                {{ cartItemCount }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Bottom Row -->
    <nav v-if="showCategories" class="border-t border-gray-300">
      <nav v-if="loading" class="px-4 py-2 text-gray-500 italic">
        Loading categories...
      </nav>

      <nav v-else-if="error" class="px-4 py-2 text-red-500">
        Failed to load categories. Please try again.
      </nav>

      <ul v-else class="max-w-7xl mx-auto flex items-center px-4 py-1">
        <li v-for="category in categories" :key="category.name">
          <NuxtLink
            :to="`/products/${category.name.toLowerCase().replace(' ', '-')}`"
            class="flex items-center gap-2 mr-8 hover:text-blue-500"
          >
            <Icon :name="category.icon" class="w-4 h-4" />
            <span>{{ category.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
