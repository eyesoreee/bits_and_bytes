<script setup lang="ts">
import Footer from "~/components/MainFooter.vue";
import Header from "~/components/MainHeader.vue";
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
