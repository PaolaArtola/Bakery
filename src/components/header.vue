<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <div>
      <nav class="flex items-center justify-between px-14 py-1">
        <RouterLink to="/" class="flex items-center">
          <img src="../assets/sunnybackery.png" alt="test" class="h-22 w-auto" />
        </RouterLink>
        <ul class="flex gap-8 font-medium pb-4">
          <li><RouterLink to="/about" class="hover:underline">About us</RouterLink></li>
          <li><RouterLink to="/products" class="hover:underline">Products</RouterLink></li>
          <li><RouterLink to="/products" class="hover:underline">Special Orders</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:underline">Contact</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
