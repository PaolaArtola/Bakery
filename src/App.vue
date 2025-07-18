<script setup lang="ts">
import { RouterView } from 'vue-router'
import CustomHeader from '@/components/header.vue'
import CustomFooter from '@/components/footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <CustomHeader />

    <!-- Main content takes remaining space -->
    <main class="flex-grow" style="margin-top: 120px !important">
      <RouterView />
    </main>

    <CustomFooter />
  </div>
</template>

<style scoped></style>
