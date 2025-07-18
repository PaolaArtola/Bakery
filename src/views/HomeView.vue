<template>
  <div class="w-full">
    <!-- HERO SECTION -->
    <section class="bg-white py-20 px-4 flex justify-center">
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
          <img src="@/assets/about/filler.png" alt="dessert" class="w-full max-w-md rounded-lg" />
        </div>
      </div>
    </section>

    <!-- BEST SELLERS -->
    <section class="bg-pink-200 py-20 px-4 flex justify-center">
      <div class="w-full max-w-6xl flex flex-col items-center text-center gap-10">
        <h2 class="text-4xl font-bold">Descubre nuestros más vendidos</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
          <div v-for="n in 4" :key="n" class="flex flex-col items-center gap-2">
            <img
              src="@/assets/about/filler.png"
              alt="item"
              class="mb-2 w-full h-64 object-cover rounded-xl transform transition-transform duration-300 hover:scale-105"
            />
            <h3 class="text-lg font-semibold">Producto {{ n }}</h3>
          </div>
        </div>
        <button
          class="bg-[#9BCCA3] hover:bg-pink-700 text-white py-4 px-8 rounded-xl text-lg transition duration-300"
        >
          Ver más
        </button>
      </div>
    </section>

    <!-- SPECIAL ORDERS -->
    <section class="bg-pink-200 py-24 px-4 flex justify-center">
      <div
        class="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-16 text-center md:text-left"
      >
        <div class="flex-1 flex justify-center">
          <img
            src="@/assets/about/filler.png"
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
    <section class="bg-pink-200 py-24 px-4 flex justify-center">
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
          <h3 class="text-2xl font-semibold mb-4">{{ currentFeedback.name }}</h3>
          <p class="text-xl text-gray-700 leading-relaxed">{{ currentFeedback.comment }}</p>

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
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
      feedbackList: [
        {
          name: 'Lucía Fernández',
          comment:
            'Los postres son simplemente espectaculares. El sabor y la presentación siempre me sorprenden. ¡Totalmente recomendado!',
        },
        {
          name: 'Carlos Méndez',
          comment:
            'Pedí una torta personalizada y quedó mejor de lo que imaginaba. La atención fue excelente desde el primer contacto.',
        },
        {
          name: 'Andrea Torres',
          comment:
            'Me encanta el servicio de delivery, llega puntual y los empaques son súper lindos. Siempre que puedo, hago un pedido.',
        },
        {
          name: 'Javier Gómez',
          comment:
            'Es la primera vez que pido y ya me hice fan. Sin duda volveré a comprar. Todo estuvo delicioso.',
        },
        {
          name: 'Valeria Rivas',
          comment:
            'La calidad y frescura de los productos es incomparable. ¡Un postre de Sunny Bakery siempre me alegra el día!',
        },
      ],
    }
  },
  computed: {
    currentFeedback() {
      return this.feedbackList[this.currentIndex]
    },
  },
  methods: {
    nextFeedback() {
      this.currentIndex = (this.currentIndex + 1) % this.feedbackList.length
    },
    prevFeedback() {
      this.currentIndex =
        (this.currentIndex - 1 + this.feedbackList.length) % this.feedbackList.length
    },
  },
  mounted() {
    this.intervalId = setInterval(this.nextFeedback, 5000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  },
}
</script>
