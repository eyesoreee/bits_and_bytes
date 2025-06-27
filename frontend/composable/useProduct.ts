import type { Product } from "~/types/Product";

export const useProduct = () => {
  const config = useRuntimeConfig();
  const products = useState<Product[]>("global-products", () => []);

  const { error, pending, refresh } = useFetch<Product[]>("/product", {
    baseURL: config.public.apiBase,
    key: "products",
    onResponse({ response }) {
      if (response._data) products.value = response._data;
    },
  });

  const displayedCount = ref(8);
  const itemsPerLoad = 8;

  const displayedProducts = computed(() =>
    products.value.slice(0, displayedCount.value)
  );

  const hasMore = computed(() => displayedCount.value < products.value.length);

  const loadMore = () => {
    if (hasMore.value) {
      displayedCount.value = Math.min(
        displayedCount.value + itemsPerLoad,
        products.value.length
      );
    }
  };

  return {
    products,
    displayedProducts,
    loadMoreProducts: loadMore,
    hasMoreProducts: hasMore,
    loading: pending,
    error,
    refresh,
  };
};
