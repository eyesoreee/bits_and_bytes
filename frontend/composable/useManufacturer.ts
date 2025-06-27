import type { Manufacturer } from "~/types/Manufacturer";

export const useManufacturer = () => {
  const config = useRuntimeConfig();

  const showManufacturers = ref(false);

  const { data, error, pending, refresh } = useFetch<Manufacturer[]>(
    "/manufacturer",
    {
      baseURL: config.public.apiBase,
      key: "manufacturers",
    }
  );

  function toggleManufacturers() {
    showManufacturers.value = !showManufacturers.value;
  }

  return {
    showManufacturers,
    toggleManufacturers,
    manufacturers: data,
    error,
    loading: pending,
    refresh,
  };
};
