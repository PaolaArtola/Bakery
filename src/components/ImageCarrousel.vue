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

    <!-- PREV Navigation Control
    <div
      @click="prev"
      class="absolute left-0 top-0 h-full w-[15%] cursor-pointer group z-10 transition-all duration-300 ease-in-out hover:bg-black/10 focus:outline-none"
      aria-label="Previous image"
      role="button"
      tabindex="0"
      @keydown.enter="prev"
      @keydown.space="prev"
    >
      <div
        class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl font-extrabold select-none opacity-0 group-hover:opacity-90 group-focus:opacity-90 transition-opacity duration-300 ease-in-out flex items-center justify-center drop-shadow-lg"
      >
        ‹
      </div>
    </div>
    <div
      @click="next"
      class="absolute right-0 top-0 h-full w-[15%] cursor-pointer group z-10 transition-all duration-300 ease-in-out hover:bg-gradient-to-l hover:from-white/40 hover:to-white/20 focus:outline-none"
      aria-label="Next image"
      role="button"
      tabindex="0"
      @keydown.enter="next"
      @keydown.space="next"
    >
      <div
        class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl font-extrabold select-none opacity-0 group-hover:opacity-90 group-focus:opacity-90 transition-opacity duration-300 ease-in-out flex items-center justify-center drop-shadow-lg"
      >
        ›
      </div>
    </div>

    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative h-1 bg-white/30 rounded-full transition-all duration-300 cursor-pointer"
        :class="index === current ? 'w-8' : 'w-4'"
        @click="current = index"
      >
        <div
          v-if="index === current"
          class="absolute inset-0 bg-white rounded-full animate-pulse"
        ></div>
      </div>
    </div>
    -->
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
