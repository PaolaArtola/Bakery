<template>
  <div class="bg-gray-50 py-12 px-4 md:px-16">
    <div class="max-w-6xl mx-auto">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 snap-center"
      >
        <!-- Left Section - Visit Us Info -->
        <div class="flex flex-col gap-4">
          <h3 class="text-3xl font-bold text-gray-900 mb-6">Visítanos</h3>

          <div class="space-y-6 flex flex-col gap-3">
            <!-- Address -->
            <div class="flex items-start gap-1">
              <svg
                class="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-gray-700">55555, Villa El Salvador 03581</span>
            </div>

            <!-- Phone -->
            <div class="flex items-start gap-2">
              <svg
                class="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="text-gray-700">999-999-999</span>
            </div>
          </div>
        </div>

        <!-- Right Section - Social Media -->
        <div class="flex-shrink-0">
          <div class="flex items-center gap-4">
            <span class="text-gray-700 font-medium">Síguenos</span>
            <div class="flex gap-3">
              <!-- Facebook -->
              <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center">
                <img
                  src="../assets/icons/facebook.webp"
                  alt="facebook"
                  class="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </a>

              <!-- LinkedIn -->
              <a href="#" class="w-10 h-10 flex items-center justify-center">
                <img
                  src="../assets/icons/linkedin.webp"
                  alt="Linkedin"
                  class="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </a>

              <!-- Instagram -->
              <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center">
                <img
                  src="../assets/icons/instagram.webp"
                  alt="Instagram"
                  class="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'VisitUs',
})
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
