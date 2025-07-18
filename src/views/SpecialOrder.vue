<template>
  <div class="about flex flex-col gap-6 justify-between items-center">
    <h1 class="text-2xl font-semibold">Pedidos Especiales</h1>
    <p class="w-[70%] text-center text-base text-gray-700 leading-relaxed">
      Por favor, completa el formulario y alguien de nuestro equipo se pondrá en contacto contigo
      dentro de las próximas 24 horas.
    </p>

    <!-- FORMULARIO -->
    <div class="form bg-pink-200 w-full max-w-[600px] p-6 rounded-lg flex flex-col gap-4">
      <!-- FILAS SIMPLES -->
      <input
        type="text"
        placeholder="Nombre"
        class="w-full p-3 h-12 border border-gray-300 bg-white rounded-[5px]"
      />
      <input
        type="email"
        placeholder="Email"
        class="w-full p-3 h-12 border border-gray-300 bg-white rounded-[5px]"
      />
      <input
        type="tel"
        placeholder="Número"
        class="w-full p-3 h-12 border border-gray-300 bg-white rounded-[5px]"
      />

      <!-- SELECT para tipo de delivery -->
      <select class="w-full p-3 h-12 border border-gray-300 bg-white rounded-[5px]">
        <option disabled selected>Selecciona tipo de delivery</option>
        <option>Envío Express</option>
        <option>Envío Normal</option>
        <option>Recojo en Tienda</option>
      </select>

      <!-- SECCIÓN 2x2 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Dirección 1"
          class="w-full p-3 h-12 border border-gray-300 bg-white rounded-[5px]"
        />
        <input
          type="text"
          placeholder="Dirección 2"
          class="w-full p-3 h-12 border border-gray-300 bg-white rounded-[5px]"
        />
        <input
          type="text"
          placeholder="Ciudad"
          class="w-full p-3 h-12 border border-gray-300 bg-white rounded-[5px]"
        />
        <input
          type="text"
          placeholder="Código Postal"
          class="w-full p-3 h-12 border border-gray-300 bg-white rounded-[5px]"
        />
      </div>

      <!-- OTROS DETALLES -->
      <textarea
        rows="4"
        placeholder="Otros detalles"
        class="w-full p-3 border border-gray-300 bg-white rounded-[5px]"
      ></textarea>

      <!-- BOTÓN -->
      <div class="text-center">
        <button
          type="submit"
          class="bg-[#9BCCA3] hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-[5px]"
        >
          Enviar
        </button>
      </div>
    </div>
  </div>
</template>
