<template>
  <div class="w-full">
    <!-- HERO SECTION -->
    <section class="bg-white py-20 px-4 flex justify-center">
      <div
        class="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left"
      >
        <div class="flex-1 flex flex-col items-center md:items-start gap-4">
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
          <div v-for="n in 4" :key="n" class="flex flex-col items-center">
            <img
              src="@/assets/about/filler.png"
              alt="item"
              class="mb-4 w-full h-64 object-cover rounded-xl transform transition-transform duration-300 hover:scale-105"
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

    <!-- FEEDBACK -->
    <section class="bg-pink-200 py-20 px-4 flex justify-center">
      <div class="w-full max-w-4xl flex flex-col items-center text-center gap-8">
        <h2 class="text-4xl font-bold">Opiniones de nuestros clientes</h2>
        <p class="text-lg text-gray-700 max-w-2xl">
          Nos encanta escuchar a nuestros clientes. Aquí hay algunas de sus opiniones sobre nuestros
          postres.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div class="bg-white p-6 rounded-xl shadow text-center text-base">
            <p>"¡Increíble sabor y presentación impecable!"</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow text-center text-base">
            <p>"El mejor postre que he probado. 100% recomendado."</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow text-center text-base">
            <p>"Siempre llega a tiempo y con una sonrisa. ¡Amo esta cafetería!"</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
