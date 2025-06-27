import type { Product } from "~/types/Product";

export const useProduct = () => {
  const config = useRuntimeConfig();
  const products = useState<Product[]>("global-products", () => []);
  const route = useRoute();

  const { error, pending, refresh } = useFetch<Product[]>("/product", {
    baseURL: config.public.apiBase,
    key: "products",
    onResponse({ response }) {
      if (response._data) products.value = response._data;
    },
  });

  const filters = reactive({
    search: route.query.search?.toString() || "",
    category: route.query.category?.toString() || "",
    manufacturer: route.query.manufacturer?.toString() || "",
    inStock: route.query.inStock === "true" || false,
    sort: route.query.sort?.toString() || "name",
  });

  const filteredProducts = computed(() => {
    let result = [...products.value];

    // search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      );
    }

    // category filter
    if (filters.category) {
      result = result.filter(
        (product) => product.category.name === filters.category
      );
    }

    // manufacturer filter
    if (filters.manufacturer) {
      result = result.filter(
        (product) => product.manufacturer.name === filters.manufacturer
      );
    }

    // inStock filter
    if (filters.inStock) {
      result = result.filter((product) => product.stock > 0);
    }

    // sorting
    result = result.sort((a, b) => {
      switch (filters.sort) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return result;
  });

  const displayedCount = ref(8);
  const itemsPerLoad = 8;

  const displayedProducts = computed(() =>
    filteredProducts.value.slice(0, displayedCount.value)
  );

  const hasMore = computed(
    () => displayedCount.value < filteredProducts.value.length
  );

  const loadMore = () => {
    if (hasMore.value) {
      displayedCount.value = Math.min(
        displayedCount.value + itemsPerLoad,
        filteredProducts.value.length
      );
    }
  };

  return {
    products,
    filteredProducts,
    filters,
    displayedProducts,
    loadMoreProducts: loadMore,
    hasMoreProducts: hasMore,
    loading: pending,
    error,
    refresh,
  };
};
