<script setup lang="ts">
import Footer from "~/components/Footer.vue";
import Header from "~/components/Header.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="sticky top-0 z-10">
      <Header />
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped></style>
