<script setup lang="ts">
import { RouterView } from 'vue-router'
import CustomHeader from '@/components/header.vue'
import CustomFooter from '@/components/footer.vue'
</script>

<template>
  <CustomHeader />

  <!-- Actual page content starts here -->
  <main style="margin-top: 120px !important">
    <!-- Adjust `mt` to match header height -->
    <RouterView />
  </main>

  <CustomFooter />
</template>

<style scoped></style>
