import type { Product } from "~/types/Product";

export const useProduct = () => {
  const config = useRuntimeConfig();

  const productsState = useState<Product[]>("global-products", () => []);
  const shouldFetch = computed(() => productsState.value.length === 0);

  const { error, pending, refresh } = useFetch<Product[]>("/product", {
    baseURL: config.public.apiBase,
    key: "products",
    immediate: shouldFetch.value,
    watch: [shouldFetch],
    onResponse({ response }) {
      if (response._data) productsState.value = response._data;
    },
  });

  const initialValue = 8;
  const itemsPerLoad = 8;
  const displayedItemCount = ref(initialValue);

  const totalItems = computed(() => productsState.value?.length || 0);

  const displayedProducts = computed(
    () => productsState.value?.slice(0, displayedItemCount.value) || []
  );

  const hasMoreProducts = computed(
    () => displayedItemCount.value < totalItems.value
  );

  const onLoadMore = () => {
    if (hasMoreProducts.value) {
      displayedItemCount.value = Math.min(
        displayedItemCount.value + itemsPerLoad,
        totalItems.value
      );
    }
  };

  return {
    products: productsState,
    displayedProducts,
    onLoadMore,
    hasMoreProducts,
    totalItems,
    displayedItemCount,
    loading: pending,
    error,
    refresh,
  };
};
