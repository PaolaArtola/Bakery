<template>
  <div class="bg-gray-50 py-12 px-4 md:px-16">
    <div class="max-w-6xl mx-auto">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 snap-center"
      >
        <!-- Left Section - Visit Us Info -->
        <div class="flex flex-col gap-4">
          <h3 class="text-3xl font-bold text-gray-900 mb-6">Visit Us</h3>

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
              <span class="text-gray-700">9998 Hayes Isle, Manterfurt 03581</span>
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
              <span class="text-gray-700">505-418-0415</span>
            </div>
          </div>
        </div>

        <!-- Right Section - Social Media -->
        <div class="flex-shrink-0">
          <div class="flex items-center gap-4">
            <span class="text-gray-700 font-medium">Follow Us</span>
            <div class="flex gap-3">
              <!-- Facebook -->
              <a
                href="#"
                class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>

              <!-- LinkedIn -->
              <a
                href="#"
                class="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>

              <!-- Instagram -->
              <a
                href="#"
                class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C24.003 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.291C4.198 14.81 3.51 13.617 3.51 12.262c0-1.355.688-2.548 1.611-3.435C5.999 7.925 7.15 7.435 8.449 7.435c1.297 0 2.448.49 3.328 1.292.922.887 1.611 2.08 1.611 3.435 0 1.355-.689 2.548-1.611 3.435-.88.801-2.031 1.291-3.328 1.291zm7.83-6.405c-.314 0-.569-.255-.569-.569 0-.314.255-.569.569-.569.314 0 .569.255.569.569 0 .314-.255.569-.569.569z"
                  />
                </svg>
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
