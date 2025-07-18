<template>
  <div
    class="relative w-full max-w-2xl aspect-[16/9] overflow-hidden rounded-lg shadow-lg mx-auto"
    @mouseenter="stopAutoPlay"
    @mouseleave="startAutoPlay"
  >
    <!-- Image container that slides -->
    <div
      class="flex transition-transform duration-500 ease-in-out h-full"
      :style="{ transform: `translateX(-${current * 100}%)` }"
    >
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="Carousel image"
        class="w-full h-full object-cover flex-shrink-0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  images: string[]
  autoPlayInterval?: number
}

const props = withDefaults(defineProps<Props>(), {
  autoPlayInterval: 3000,
})

const current = ref(0)
let intervalId: number | null = null

function next() {
  current.value = (current.value + 1) % props.images.length
}

function prev() {
  current.value = (current.value - 1 + props.images.length) % props.images.length
}

function startAutoPlay() {
  if (intervalId) clearInterval(intervalId)
  intervalId = setInterval(next, props.autoPlayInterval)
}

function stopAutoPlay() {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.group:hover {
  background-color: rgba(0, 0, 0, 0.05); /* Very subtle dark overlay */
}
</style>
