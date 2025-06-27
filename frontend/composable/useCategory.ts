import type { Category } from "~/types/Category";

export const useCategory = () => {
  const config = useRuntimeConfig();
  const showCategories = ref(false);

  const categoriesState = useState<Category[]>("global-categories", () => []);
  const shouldFetch = computed(() => categoriesState.value.length === 0);

  const { error, pending, refresh } = useFetch<Category[]>("/category", {
    baseURL: config.public.apiBase,
    key: "categories",
    immediate: shouldFetch.value,
    watch: [shouldFetch],
    onResponse({ response }) {
      if (response._data) categoriesState.value = response._data;
    },
  });

  function toggleCategories() {
    showCategories.value = !showCategories.value;
  }

  return {
    showCategories,
    toggleCategories,
    categories: categoriesState,
    error,
    loading: pending,
    refresh,
  };
};
