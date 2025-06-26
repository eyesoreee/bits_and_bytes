import type { Category } from "~/types/Category";

export const useClickCategory = () => {
  const showCategories = ref(false);

  const categories = ref<Category[]>([
    { name: "CPUs", icon: "mdi:cpu-64-bit" },
    { name: "Graphic Cards", icon: "mdi:gpu" },
    { name: "RAM", icon: "material-symbols:memory-alt-outline" },
    { name: "Storage", icon: "mdi:hdd" },
    { name: "Power Supplies", icon: "mdi:car-battery" },
    { name: "Gaming", icon: "mdi:gamepad-variant-outline" },
  ]);

  function toggleCategories() {
    showCategories.value = !showCategories.value;
  }

  return { showCategories, categories, toggleCategories };
};
