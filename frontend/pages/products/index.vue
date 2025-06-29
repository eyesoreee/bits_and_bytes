<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";
import { useCategory } from "~/composable/useCategory";
import { useManufacturer } from "~/composable/useManufacturer";
import { useProduct } from "~/composable/useProduct";

const { categories } = useCategory();
const { manufacturers } = useManufacturer();
const {
  displayedProducts,
  loadMoreProducts,
  hasMoreProducts,
  error,
  loading,
  filters,
} = useProduct();

const route = useRoute();
const router = useRouter();

onMounted(() => {
  filters.search = route.query.search?.toString() || "";
  filters.category = route.query.category?.toString() || "";
  filters.manufacturer = route.query.manufacturer?.toString() || "";
  filters.inStock = route.query.inStock === "true" || false;
  filters.sort = route.query.sort?.toString() || "name";
});

const updateQuery = useDebounceFn(() => {
  const query = {
    search: filters.search || undefined,
    category: filters.category || undefined,
    manufacturer: filters.manufacturer || undefined,
    inStock: filters.inStock ? "true" : undefined,
    sort: filters.sort || undefined,
  };
  router.push({ query });
}, 300);

watch(filters, () => {
  updateQuery();
});
</script>

<template>
  <section class="max-w-7xl mx-auto p-4">
    <div class="mb-4">
      <h1 class="text-3xl font-bold">Computer Parts and Components</h1>
      <p class="mt-2">Find the perfect components for your build</p>
    </div>

    <!-- Filter and Sort section -->
    <section class="flex flex-col gap-6 border border-gray-400 rounded-2xl p-4">
      <div class="flex items-center gap-1 text-lg">
        <Icon name="mdi:filter-outline" />
        <span>Filters</span>
      </div>

      <div class="flex flex-row items-center gap-4">
        <!-- Search Bar -->
        <form role="search" class="flex items-center flex-grow">
          <input
            v-model="filters.search"
            type="search"
            placeholder="Search..."
            class="w-full pl-3 pr-10 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </form>

        <!-- Categories -->
        <div class="flex-grow">
          <select
            v-model="filters.category"
            class="w-full px-3 py-2 border border-gray-400 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All</option>
            <option
              v-for="category in categories"
              :key="category.name"
              :value="category.name"
            >
              {{ category.name }}
            </option>
          </select>
        </div>

        <!-- manufacturers -->
        <div class="flex-grow">
          <select
            v-model="filters.manufacturer"
            class="w-full px-3 py-2 border border-gray-400 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All</option>
            <option
              v-for="manufacturer in manufacturers"
              :key="manufacturer.name"
              :value="manufacturer.name"
            >
              {{ manufacturer.name }}
            </option>
          </select>
        </div>

        <!-- Sort -->
        <div class="flex-grow">
          <select
            v-model="filters.sort"
            class="w-full px-3 py-2 border border-gray-400 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="name">Name</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <!-- In Stocks Checkbox -->
        <div class="flex items-center">
          <input v-model="filters.inStock" type="checkbox" class="mr-1" />
          <span>In Stock Only</span>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section class="my-4">
      <div v-if="loading" class="text-center">Loading products...</div>
      <div v-else-if="error" class="text-center text-red-500">
        Error loading products: {{ error.message }}
      </div>
      <ul v-else class="grid grid-cols-4 gap-6 gap-y-8">
        <li v-for="product in displayedProducts" :key="product.id">
          <ProductCard :product="product" />
        </li>
      </ul>
    </section>

    <div class="flex justify-center mt-8">
      <button
        v-if="hasMoreProducts"
        class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        @click="loadMoreProducts"
      >
        Load More
      </button>

      <p v-else class="text-gray-600">No more products to load.</p>
    </div>
  </section>
</template>
