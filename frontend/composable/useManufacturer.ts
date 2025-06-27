import type { Manufacturer } from "~/types/Manufacturer";

export const useManufacturer = () => {
  const config = useRuntimeConfig();
  const show = ref(false);
  const manufacturers = useState<Manufacturer[]>(
    "global-manufacturers",
    () => []
  );

  const { error, pending, refresh } = useFetch<Manufacturer[]>(
    "/manufacturer",
    {
      baseURL: config.public.apiBase,
      key: "manufacturers",
      onResponse({ response }) {
        if (response._data) manufacturers.value = response._data;
      },
    }
  );

  const toggle = () => {
    show.value = !show.value;
  };

  return {
    show,
    toggle,
    manufacturers,
    error,
    loading: pending,
    refresh,
  };
};
