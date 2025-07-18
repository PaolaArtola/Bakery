<script setup>
import waveDivider from '@/components/waveDivider.vue'
import { ref, computed } from 'vue'

// Lista de productos para Best Sellers
const productos = [
  {
    nombre: 'Panes',
    imagen: new URL('@/assets/home/product1.png', import.meta.url).href,
  },
  {
    nombre: 'Cupcakes',
    imagen: new URL('@/assets/home/product2.png', import.meta.url).href,
  },
  {
    nombre: 'Macarrones',
    imagen: new URL('@/assets/home/product3.png', import.meta.url).href,
  },
  {
    nombre: 'Pasteles',
    imagen: new URL('@/assets/home/product4.png', import.meta.url).href,
  },
]

// Lista de feedbacks
const feedbackList = [
  {
    name: 'Camila López',
    comment: 'Los pasteles son deliciosos y el servicio es excelente.',
  },
  {
    name: 'Renato Díaz',
    comment: 'Siempre compro aquí para celebraciones. ¡Recomendado!',
  },
  {
    name: 'Lucía Torres',
    comment: 'Rápidos, frescos y con muy buena presentación.',
  },
  {
    name: 'Sofía García',
    comment: 'El cheesecake fue el favorito de la fiesta. ¡Gracias!',
  },
]

// Estado del carrusel
const currentIndex = ref(0)

const currentFeedback = computed(() => feedbackList[currentIndex.value])

const nextFeedback = () => {
  currentIndex.value = (currentIndex.value + 1) % feedbackList.length
}

const prevFeedback = () => {
  currentIndex.value = (currentIndex.value - 1 + feedbackList.length) % feedbackList.length
}
</script>
<template>
  <div class="w-full flex flex-col justify-centerjustify-between items-center">
    <!-- HERO SECTION -->
    <section class="bg-white py-12 px-4 lg:w-[85%] lg:px-18 flex justify-center">
      <div
        class="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left"
      >
        <div class="flex-1 flex flex-col items-center md:items-start gap-6">
          <h1 class="text-5xl font-bold">Llevamos un postre delicioso en cada bocado</h1>
          <p class="text-xl text-gray-700 max-w-md">
            Te llevamos un postre delicioso en cada bocado, preparado con amor y los mejores
            ingredientes.
          </p>
          <router-link
            to="/about"
            class="bg-[#9BCCA3] hover:bg-pink-700 text-white py-4 px-8 rounded-xl text-lg transition duration-300"
          >
            Sobre nosotros
          </router-link>
        </div>
        <div class="flex-1 flex justify-center">
          <img src="@/assets/home/home1.png" alt="dessert" class="w-full max-w-md rounded-lg" />
        </div>
      </div>
    </section>
    <div class="w-full aspect-[15/2] overflow-hidden">
      <waveDivider />
    </div>
    <div class="w-full">
      <!-- BEST SELLERS -->
      <section class="bg-[#ffccd3] py-20 px-4 flex justify-center">
        <div class="w-full max-w-6xl flex flex-col items-center text-center gap-10">
          <h2 class="text-4xl font-bold">Descubre nuestros más vendidos</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
            <div
              v-for="(producto, index) in productos"
              :key="index"
              class="flex flex-col items-center gap-2"
            >
              <img
                :src="producto.imagen"
                :alt="producto.nombre"
                class="mb-2 w-full h-64 object-cover rounded-xl transform transition-transform duration-300 hover:scale-105"
              />
              <h3 class="text-lg font-semibold">{{ producto.nombre }}</h3>
            </div>
          </div>

          <!-- Botón de Ver Más -->
          <router-link
            to="/products"
            class="bg-[#9BCCA3] hover:bg-pink-700 text-white py-4 px-8 rounded-xl text-lg transition duration-300"
          >
            Ver más
          </router-link>
        </div>
      </section>

      <!-- SPECIAL ORDERS -->
      <section class="bg-[#ffccd3] py-24 px-4 flex justify-center">
        <div
          class="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-16 text-center md:text-left"
        >
          <div class="flex-1 flex justify-center">
            <img
              src="@/assets/home/home3.svg"
              alt="special order"
              class="w-full max-w-xl rounded-2xl"
            />
          </div>
          <div class="flex-1 flex flex-col items-center md:items-start gap-6">
            <h2 class="text-5xl font-bold">Pedidos Especiales</h2>
            <p class="text-xl text-gray-700 max-w-lg">
              Si tienes un evento o una ocasión especial, déjanos prepararte algo único y delicioso,
              hecho a tu medida.
            </p>
            <button
              class="bg-[#9BCCA3] hover:bg-pink-700 text-white py-5 px-10 rounded-xl text-xl transition duration-300"
            >
              Realizar un pedido
            </button>
          </div>
        </div>
      </section>

      <!-- FEEDBACK SECTION -->
      <section class="bg-[#ffccd3] py-24 px-4 flex justify-center">
        <div class="w-full flex flex-col items-center text-center px-4 gap-16">
          <!-- TÍTULO Y DESCRIPCIÓN -->
          <div class="flex flex-col items-center gap-6">
            <h2 class="text-4xl font-bold">Opiniones de nuestros clientes</h2>
            <p class="max-w-2xl text-xl text-gray-800">
              Descubre lo que dicen nuestros clientes sobre la experiencia dulce que ofrece Sunny
              Bakery. ¡Tu satisfacción es nuestro mejor postre!
            </p>
          </div>

          <!-- OPINIÓN ACTUAL -->
          <div class="relative px-8 w-full max-w-2xl">
            <p class="text-2xl font-semibold mb-4">{{ currentFeedback.comment }}</p>
            <p class="text-xl text-gray-700 leading-relaxed">{{ currentFeedback.name }}</p>

            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <button @click="prevFeedback" class="text-3xl text-pink-600 hover:text-pink-800">
                ‹
              </button>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <button @click="nextFeedback" class="text-3xl text-pink-600 hover:text-pink-800">
                ›
              </button>
            </div>
          </div>

          <!-- INDICADORES DE PUNTOS -->
          <div class="flex gap-3 mt-4">
            <span
              v-for="(item, index) in feedbackList"
              :key="index"
              :class="[
                'h-3 w-3 rounded-full',
                index === currentIndex ? 'bg-pink-700' : 'bg-pink-400',
              ]"
            ></span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
