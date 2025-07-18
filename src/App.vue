<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterView } from 'vue-router'
import CustomHeader from '@/components/header.vue'
import CustomFooter from '@/components/footer.vue'

const route = useRoute()

const style = computed(() => {
  return route.meta.topPadding ? 'padding-top: 120px !important;' : 'padding-top: 95px !important;'
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <CustomHeader />

    <!-- Main content takes remaining space -->
    <main class="flex-grow" :style="style">
      <RouterView />
    </main>

    <CustomFooter />
  </div>
</template>

<style scoped></style>
