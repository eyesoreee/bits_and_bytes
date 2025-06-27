import type { Category } from "~/types/Category";

export const useCategory = () => {
  const config = useRuntimeConfig();
  const show = ref(false);
  const categories = useState<Category[]>("global-categories", () => []);

  const { error, pending, refresh } = useFetch<Category[]>("/category", {
    baseURL: config.public.apiBase,
    key: "categories",
    onResponse({ response }) {
      if (response._data) categories.value = response._data;
    },
  });

  const toggle = () => {
    show.value = !show.value;
  };

  return {
    showCategories: show,
    toggleCategories: toggle,
    categories,
    error,
    loading: pending,
    refresh,
  };
};
