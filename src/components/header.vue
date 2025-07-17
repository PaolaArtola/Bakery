<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)

// Close menu when clicking outside
const closeMenu = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('nav') && isOpen.value) {
    isOpen.value = false
  }
}

// Close menu on escape key
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeMenu)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenu)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <header class="absolute top-0 left-0 w-full z-50">
    <nav class="flex items-center justify-between px-6 py-4 bg-white shadow-md backdrop-blur-sm">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center group">
        <img
          src="../assets/sunnybackery.png"
          alt="Sunny Bakery"
          class="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
        />
      </RouterLink>

      <!-- Hamburger Button (only on small screens) -->
      <button
        class="md:hidden relative flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
        @click="isOpen = !isOpen"
        :aria-label="isOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="isOpen"
      >
        <!-- Animated hamburger lines -->
        <span
          class="block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out transform origin-center"
          :class="{ 'rotate-45 translate-y-[2px]': isOpen, 'translate-y-3': !isOpen }"
        ></span>
        <span
          class="block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out my-1"
          :class="{ 'opacity-0 scale-0': isOpen, 'opacity-100 scale-100': !isOpen }"
        ></span>
        <span
          class="block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out transform origin-center"
          :class="{ '-rotate-45 -translate-y-[2px]': isOpen, ' -translate-y-3': !isOpen }"
        ></span>
      </button>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-8 font-medium">
        <li>
          <RouterLink
            to="/about"
            class="text-gray-700 hover:text-amber-600 transition-colors duration-200 relative group py-2"
          >
            About us
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/products"
            class="text-gray-700 hover:text-amber-600 transition-colors duration-200 relative group py-2"
          >
            Products
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/special-orders"
            class="text-gray-700 hover:text-amber-600 transition-colors duration-200 relative group py-2"
          >
            Special Orders
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="text-gray-700 hover:text-amber-600 transition-colors duration-200 relative group py-2"
          >
            Contact
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isOpen" class="md:hidden bg-white shadow-lg border-t border-gray-100">
        <ul class="flex flex-col font-medium">
          <li>
            <RouterLink
              to="/about"
              @click="isOpen = false"
              class="block px-6 py-4 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200 border-b border-gray-100"
            >
              About us
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/products"
              @click="isOpen = false"
              class="block px-6 py-4 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200 border-b border-gray-100"
            >
              Products
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/special-orders"
              @click="isOpen = false"
              class="block px-6 py-4 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200 border-b border-gray-100"
            >
              Special Orders
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/contact"
              @click="isOpen = false"
              class="block px-6 py-4 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200"
            >
              Contact
            </RouterLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Custom font import - add this to your main CSS file */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

/* Apply custom font */
nav {
  font-family: 'Poppins', sans-serif;
}

/* Active route styling */
.router-link-active {
  color: #d97706; /* amber-600 */
}

.router-link-active span {
  width: 100%;
}

/* Smooth focus transitions */
button:focus {
  outline: none;
}

/* Mobile menu backdrop blur effect */
.md\:hidden.bg-white {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
}
</style>
