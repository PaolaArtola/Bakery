<script setup lang="ts">
import fadeCarrousel from '../components/fadeCarrousel.vue'

const cakeImages = [
  '/src/assets/about/filler.png',
  '/src/assets/about/header1.jpg',
  '/src/assets/about/header1.png',
]
</script>
<template>
  <div class="about flex flex-col gap-6 justify-between items-center">
    <div class="base-image w-[86%] aspect-[16/9] relative rounded-lg shadow-md overflow-hidden">
      <fadeCarrousel
        :images="cakeImages"
        container-class="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    <h1 class="">About Us</h1>
    <p class="w-[70%] text-center text-base text-gray-70 leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptate quod! Quis, quod
      totam perspiciatis natus minima quisquam laborum unde nisi eaque aspernatur quia aliquam,
      dolorum impedit quos. Eaque, minus?
    </p>

    <!-- Segunda sección con imagen a la derecha en pantallas grandes -->
    <div
      class="w-[87%] flex flex-col at520:flex-row-reverse items-center gap-6 py-6 max-w-7xl mx-auto"
    >
      <img
        src="@/assets/about/filler.png"
        alt="A nice cake"
        class="base-image w-full at520:w-1/2 rounded-lg shadow-md"
      />
      <div class="text-center at520:text-left at520:w-1/2 space-y-4">
        <h2 class="text-3xl font-bold text-gray-800">Our Mission</h2>
        <p class="text-gray-600 leading-relaxed text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, commodi quas tempora
          consequuntur, dolorum, enim quidem praesentium labore molestiae inventore nisi officia ea?
          Sapiente reprehenderit sunt iure, et qui incidunt.
        </p>
      </div>
    </div>
    <!-- Primera sección -->
    <div class="w-[87%] flex flex-col at520:flex-row items-center gap-6 py-6 max-w-7xl mx-auto">
      <img
        src="@/assets/about/filler.png"
        alt="A nice cake"
        class="base-image w-full at520:w-1/2 rounded-lg shadow-md"
      />
      <div class="text-center at520:text-left at520:w-1/2 space-y-4">
        <h2>Our Promise</h2>
        <p class="text-gray-600 leading-relaxed text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, commodi quas tempora
          consequuntur, dolorum, enim quidem praesentium labore molestiae inventore nisi officia ea?
          Sapiente reprehenderit sunt iure, et qui incidunt.
        </p>
      </div>
    </div>
  </div>
  <img
    src="@/assets/about/buttom.jpeg"
    class="w-full max-w-4xl aspect-[5/2] mx-auto object-cover"
    alt="Promotional image or banner"
    loading="lazy"
  />
</template>

<style scoped>
@media (min-width: 520px) {
  .at520\:flex-row {
    flex-direction: row;
  }

  .at520\:flex-row-reverse {
    flex-direction: row-reverse;
  }

  .at520\:w-1\/2 {
    width: 50%;
  }
}
</style>
