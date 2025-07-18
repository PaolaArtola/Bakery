<template>
  <div class="relative w-full h-[10rem] overflow-hidden">
    <!-- Image -->
    <img
      src="@/assets/menu/header.jpg"
      class="w-full h-full object-cover"
      alt="Promotional image or banner"
      loading="lazy"
    />
    <!-- White overlay -->
    <div class="absolute inset-0 bg-white/20 pointer-events-none"></div>

    <!-- Overlay content -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 gap-6"
    >
      <h2 class="text-2xl md:text-3xl font-semibold">¿Quieres saber más sobre nosotros?</h2>
    </div>
  </div>
</template>
