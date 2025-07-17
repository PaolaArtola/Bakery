<template>
  <div
    class="relative overflow-hidden rounded-lg shadow-lg"
    :class="containerClass"
    @mouseenter="stopAutoPlay"
    @mouseleave="startAutoPlay"
  >
    <!-- Image container with fade transitions -->
    <div class="relative h-full">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="Carousel image"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        :class="index === current ? 'opacity-100' : 'opacity-0'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  images: string[]
  autoPlayInterval?: number
  containerClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  autoPlayInterval: 3000,
  containerClass: 'w-full max-w-2xl aspect-[16/9] mx-auto',
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
