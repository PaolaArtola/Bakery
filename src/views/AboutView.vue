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
    <h1 class="">Sobre Nosotros</h1>
    <p class="w-[70%] text-center text-base text-gray-70 leading-relaxed">
      En Sunny Bakery, horneamos con el corazón. Somos una panadería artesanal inspirada en la
      calidez del hogar y el amor incondicional de Sunny, nuestra perrita y alma de este proyecto.
      Cada pan, pastel y dulce que sale de nuestro horno está hecho con ingredientes frescos,
      recetas caseras y una gran dosis de cariño. Nos encanta ver cómo nuestras creaciones forman
      parte de tus momentos más especiales.
    </p>

    <!-- Segunda sección con imagen a la derecha en pantallas grandes -->
    <div
      class="w-[87%] flex flex-col at520:flex-row-reverse items-center gap-6 py-6 max-w-7xl mx-auto"
    >
      <img
        src="@/assets/about/filler.png"
        alt="A nice cake"
        class="base-image w-full at520:w-1/2 rounded-lg shadow-md aspect-[8/5] object-cover"
      />
      <div class="text-center at520:text-left at520:w-1/2 space-y-4">
        <h2 class="text-3xl font-bold text-gray-800">Nuestra Misión</h2>
        <p class="text-gray-600 leading-relaxed text-pretty">
          Nuestra misión es brindar productos de panadería frescos, deliciosos y honestos que hagan
          sonreír a quienes los disfrutan. Creemos en el poder de lo simple: una masa bien
          fermentada, un bizcocho suave, una galleta crujiente, hechos con tiempo y dedicación.
          Queremos que cada visita a Sunny Bakery sea una experiencia acogedora que despierte
          recuerdos y cree nuevos.
        </p>
      </div>
    </div>
    <!-- Primera sección -->
    <div
      class="w-[87%] flex aspect-[5/2] flex-col at520:flex-row items-center gap-6 py-6 max-w-7xl mx-auto"
    >
      <img
        src="@/assets/about/header1.png"
        alt="A nice cake"
        class="base-image w-full at520:w-1/2 rounded-lg shadow-md aspect-[8/5] object-cover"
      />
      <div class="text-center at520:text-left at520:w-1/2 space-y-4">
        <h2>Nuestra Promesa</h2>
        <p class="text-gray-600 leading-relaxed text-pretty">
          Te prometemos calidad, frescura y un trato cercano. En Sunny Bakery nos comprometemos a
          mantener altos estándares en cada detalle: desde la elección de los ingredientes hasta la
          atención que recibes al entrar por nuestra puerta. Así como Sunny nos inspira con su
          alegría diaria, queremos compartir esa misma alegría contigo en cada mordisco.
        </p>
      </div>
    </div>
  </div>
  <div class="relative w-full max-w-4xl mx-auto">
    <!-- Image -->
    <img
      src="@/assets/about/buttom.jpeg"
      class="w-full aspect-[5/2] object-cover"
      alt="Promotional image or banner"
      loading="lazy"
    />

    <!-- Overlay content -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 gap-6"
    >
      <h2 class="text-2xl md:text-3xl font-semibold mb-4">Want To Know More About Us?</h2>
      <button
        class="base-button text-white px-8 py-4 rounded-full shadow"
        style="font-weight: 700 !important"
      >
        Contact Us
      </button>
    </div>
  </div>
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
