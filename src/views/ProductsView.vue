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
  <div class="min-h-screen bg-[#ffccd3]">
    <!-- Mobile Top Bar (visible on screens < md) -->
    <div class="md:hidden bg-white p-4">
      <div ref="scrollContainer" class="flex space-x-2 gap-1.5 overflow-x-auto scrollbar-hide">
        <button
          v-for="item in menuItems"
          :key="item.id"
          :ref="(el) => (buttonRefs[item.id] = el)"
          @click="handleClick(item.id)"
          :class="[
            'px-4 py-2 rounded-[100rem] text-sm font-medium whitespace-nowrap transition-colors',
            activeCategory === item.id
              ? 'bg-[#cc4156] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
          ]"
        >
          {{ item.name }}
        </button>
      </div>
    </div>

    <div class="flex">
      <!-- Desktop Sidebar (visible on screens >= md) -->
      <div class="hidden md:block w-48 bg-white min-h-screen">
        <nav class="p-6">
          <ul class="space-y-4">
            <li v-for="item in menuItems" :key="item.id">
              <button
                @click="activeCategory = item.id"
                :class="[
                  'w-full text-left py-2 px-4 rounded-lg transition-colors',
                  activeCategory === item.id
                    ? 'bg-red-100 text-red-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-100',
                ]"
              >
                {{ item.name }}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Main Content -->
      <div class="flex-1 p-6">
        <div class="mx-auto">
          <!-- Loading State -->
          <div v-if="loading" class="text-center py-12">
            <div class="inline-block animate-spin rounded-full h-8 w-8 mb-4"></div>
            <p class="text-gray-600">Loading menu...</p>
          </div>

          <!-- Error State -->
          <div v-else-if="error" class="text-center py-12">
            <div class="text-red-500 mb-4">
              <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <p class="text-gray-600 mb-4">Fallo al cargar los datos del menu</p>
            <button
              @click="retryFetch"
              class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Retry
            </button>
          </div>

          <!-- Menu Content -->
          <div v-else>
            <!-- All Categories View -->
            <div v-if="activeCategory === 'all'">
              <div
                v-for="category in getCurrentCategoryItems()"
                :key="category.categoryId"
                class="mb-12"
              >
                <h2 class="text-center text-2xl font-bold text-gray-800 mb-6 py-6">
                  {{ category.categoryName }}
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
                  <div v-for="item in category.items" :key="item.id" class="overflow-hidden">
                    <div class="aspect-square flex items-center justify-center">
                      <img
                        :src="item.image"
                        :alt="item.name"
                        class="base-image w-full h-full object-cover"
                      />
                    </div>
                    <div
                      class="flex flex-col gap-2 p-4 w-full min-h-[4rem] items-center justify-between"
                    >
                      <h4 class="min-h-[3.5rem] mt-4 mb-2 line-clamp-3 w-[97%] text-center">
                        {{ item.name }}
                      </h4>
                      <!-- <p
                        v-if="item.description"
                        class="text-sm text-gray-600 mb-3 line-clamp-2 h-10 w-[97%]"
                      >
                        {{ item.description }}
                      </p>
                      <span v-if="item.price" class="text-lg font-bold text-red-500 h-6">
                        {{ item.price }}
                      </span> -->
                      <div class="flex-1"></div>
                      <button
                        class="bg-[#9BCCA3] hover:bg-pink-700 text-white w-[87%] py-1 rounded-full transition-colors"
                        style="font-size: 0.9rem; font-weight: 700"
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Single Category View -->
            <div v-else>
              <h1 class="text-3xl font-bold text-red-500 text-center mb-8 mb-6 py-6">
                {{ getCurrentCategoryName() }}
              </h1>
              <div
                class="grid grid-cols-1 sm:grid-cols-2 [@media(min-width:1200px)]:grid-cols-5 [@media(min-width:790px)]:grid-cols-3 gap-6"
              >
                <div
                  v-for="item in getCurrentCategoryItems()"
                  :key="item.id"
                  class="overflow-hidden"
                >
                  <div class="aspect-square flex items-center justify-center">
                    <img
                      :src="item.image"
                      :alt="item.name"
                      class="base-image w-full h-full object-cover"
                    />
                  </div>
                  <div
                    class="flex flex-col gap-2 p-4 w-full min-h-[4rem] items-center justify-between"
                  >
                    <h4 class="min-h-[3.5rem] mt-4 mb-2 line-clamp-3 w-[97%] text-center">
                      {{ item.name }}
                    </h4>
                    <!-- <p
                        v-if="item.description"
                        class="text-sm text-gray-600 mb-3 line-clamp-2 h-10 w-[97%]"
                      >
                        {{ item.description }}
                      </p>
                      <span v-if="item.price" class="text-lg font-bold text-red-500 h-6">
                        {{ item.price }}
                      </span> -->
                    <div class="flex-1"></div>
                    <button
                      class="bg-[#9BCCA3] hover:bg-pink-700 text-white w-[87%] py-1 rounded-full transition-colors"
                      style="font-size: 0.9rem; font-weight: 700"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>

              <!-- Empty State for Single Category -->
              <div v-if="getCurrentCategoryItems().length === 0" class="text-center py-12">
                <p class="text-gray-600">No items available in this category.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieMenu',
  data() {
    return {
      activeCategory: 'all',
      menuItems: [],
      products: {},
      loading: true,
      error: null,
      dataUrl: '/src/assets/data.json',
      buttonRefs: {},
    }
  },
  async mounted() {
    await this.fetchMenuData()
  },
  methods: {
    handleClick(id) {
      this.activeCategory = id

      this.$nextTick(() => {
        const button = this.buttonRefs[id]
        const container = this.$refs.scrollContainer

        if (!button || !container) return

        // Get container and button dimensions
        const containerRect = container.getBoundingClientRect()
        const buttonRect = button.getBoundingClientRect()

        // Calculate container's scrollable area
        const containerScrollWidth = container.scrollWidth
        const containerClientWidth = container.clientWidth
        const maxScrollLeft = containerScrollWidth - containerClientWidth

        // Calculate button's position relative to container
        const buttonOffsetLeft = button.offsetLeft
        const buttonWidth = button.offsetWidth

        // Calculate desired scroll position with offset
        const offset = 40 // pixels to the right of start
        let targetScrollLeft = buttonOffsetLeft - offset

        // Handle edge cases
        if (targetScrollLeft < 0) {
          // Button is at the beginning, don't scroll past start
          targetScrollLeft = 0
        } else if (targetScrollLeft > maxScrollLeft) {
          // Button is at the end, don't scroll past end
          targetScrollLeft = maxScrollLeft
        } else {
          // Check if button would be fully visible with offset
          const buttonEndPosition = buttonOffsetLeft + buttonWidth
          const visibleEndPosition = targetScrollLeft + containerClientWidth

          if (buttonEndPosition > visibleEndPosition) {
            // Button would be cut off, adjust to show full button
            targetScrollLeft = buttonEndPosition - containerClientWidth + offset

            // Ensure we don't exceed max scroll
            if (targetScrollLeft > maxScrollLeft) {
              targetScrollLeft = maxScrollLeft
            }
          }
        }

        // Smooth scroll to calculated position
        container.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth',
        })
      })
    },
    async fetchMenuData() {
      try {
        this.loading = true
        this.error = null

        const response = await fetch(this.dataUrl)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        // Add "All" option at the beginning
        this.menuItems = [{ id: 'all', name: 'All' }, ...(data.menuItems || [])]
        this.products = data.products || {}

        // Set default category to "all"
        this.activeCategory = 'all'
      } catch (error) {
        console.error('Error fetching menu data:', error)
        this.error = error.message

        // Fallback to default data if fetch fails
        this.loadFallbackData()
      } finally {
        this.loading = false
      }
    },

    loadFallbackData() {
      // Fallback data in case the external JSON fails to load
      this.menuItems = [
        { id: 'all', name: 'All' },
        { id: 'cookies', name: 'Cookies' },
        { id: 'waffles', name: 'Waffles' },
        { id: 'macaroons', name: 'Macaroons' },
        { id: 'snacks', name: 'Snacks' },
        { id: 'beverage', name: 'Beverage' },
      ]

      this.products = {
        cookies: [
          {
            id: 1,
            name: 'Chocolate Chip Cookies',
            description: 'Classic homemade chocolate chip cookies',
            price: '$12.99',
            image:
              'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=300&fit=crop',
          },
        ],
      }
    },

    getCurrentCategoryName() {
      const category = this.menuItems.find((item) => item.id === this.activeCategory)
      return category ? category.name : 'Menu'
    },

    getCurrentCategoryItems() {
      if (this.activeCategory === 'all') {
        // Return organized data by categories for "All" view
        const organizedData = []
        this.menuItems.forEach((menuItem) => {
          if (menuItem.id !== 'all' && this.products[menuItem.id]) {
            organizedData.push({
              categoryId: menuItem.id,
              categoryName: menuItem.name,
              items: this.products[menuItem.id],
            })
          }
        })
        return organizedData
      }
      return this.products[this.activeCategory] || []
    },

    async retryFetch() {
      await this.fetchMenuData()
    },
  },
}
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
/* Custom scrollbar for mobile top bar */
.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
