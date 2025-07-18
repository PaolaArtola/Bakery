<template>
  <div class="min-h-screen flex items-center justify-center bg-pink-200 px-4 py-16">
    <div class="max-w-6xl w-full flex flex-col md:flex-row items-stretch gap-12">
      <!-- IZQUIERDA: Texto alineado con parte superior del formulario -->
      <div class="w-full md:w-1/2 flex flex-col items-start bg-pink-200 p-8 rounded-xl gap-4">
        <h2 class="text-5xl font-bold text-gray-800 leading-snug text-left">
          Pongámonos en contacto
        </h2>
        <div class="flex flex-col gap-3 text-justify text-lg text-gray-700">
          <p>
            En Sunny Bakery, valoramos cada palabra que nuestros clientes comparten con nosotros. Ya
            sea una duda, sugerencia o mensaje de aliento, estamos felices de leerte y ayudarte en
            lo que necesites.
          </p>
          <p>
            Nuestro compromiso es ofrecerte no solo los mejores productos, sino también una atención
            cálida y cercana. Puedes contactarnos para pedidos especiales, eventos o cualquier otra
            consulta relacionada con nuestra panadería.
          </p>
          <p>
            Completa el formulario y uno de nuestros miembros del equipo se comunicará contigo
            dentro de las próximas 24 horas. ¡Estamos aquí para ti y con muchas ganas de escucharte!
          </p>
        </div>
      </div>

      <!-- DERECHA: Formulario -->
      <form class="w-full md:w-1/2 bg-white p-8 rounded-xl flex flex-col gap-6 shadow-lg">
        <input
          type="text"
          placeholder="Tu nombre"
          class="w-full p-4 h-14 text-lg border border-gray-300 rounded-[5px]"
        />
        <input
          type="email"
          placeholder="Tu email"
          class="w-full p-4 h-14 text-lg border border-gray-300 rounded-[5px]"
        />
        <textarea
          placeholder="Tu mensaje"
          rows="6"
          class="w-full p-4 text-lg border border-gray-300 rounded-[5px] resize-none"
        ></textarea>
        <button
          type="submit"
          class="w-full p-4 h-14 bg-[#9BCCA3] hover:bg-pink-700 text-white text-lg font-semibold rounded-[5px] transition duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>
