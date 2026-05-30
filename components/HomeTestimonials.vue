<template>
  <section id="testimonials" class="py-24 bg-pro-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Background Design Elements -->
    <div class="absolute top-1/4 right-0 w-[500px] h-[500px] bg-pro-purple/5 blur-[150px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-pro-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto space-y-12">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="text-xs font-display font-bold uppercase tracking-widest text-gradient-gold">
          Elite Transformations
        </span>
        <h2 class="text-4xl sm:text-5xl font-display font-black tracking-tight text-white">
          PROVED IN THE <span class="text-gradient-purple">TRENCHES</span>
        </h2>
        <p class="text-gray-400 font-sans text-base max-w-xl mx-auto">
          Hear from high-performers who dedicated themselves to the framework, executed with discipline, and achieved professional-grade results.
        </p>
      </div>

      <!-- Swiper Carousel Container -->
      <div class="relative px-4 sm:px-8">
        <div class="swiper testimonials-swiper !pb-14">
          <div class="swiper-wrapper">
            
            <!-- Slides -->
            <div 
              v-for="(review, index) in testimonialsList" 
              :key="index" 
              class="swiper-slide h-auto"
            >
              <!-- Testimonial Card Frame -->
              <div class="premium-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden border border-pro-mid-gray/40">
                <!-- Top Layout: Quote Icon & Rating -->
                <div class="flex items-center justify-between gap-4 mb-6">
                  <span class="text-3xl text-pro-purple-light/30 font-serif">“</span>
                  <div class="flex items-center gap-1 text-pro-gold text-xs">
                    <i v-for="star in 5" :key="star" class="fa-solid fa-star"></i>
                  </div>
                </div>

                <!-- Middle Layout: The Review text -->
                <p class="text-gray-300 font-sans text-sm leading-relaxed flex-grow italic">
                  {{ review.text }}
                </p>

                <!-- Bottom Layout: User Profile info -->
                <div class="mt-8 pt-6 border-t border-pro-mid-gray/30 flex items-center gap-4">
                  <!-- Initials Badge Placeholder (Replaces complex user imagery setup) -->
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-pro-purple/30 to-pro-black border border-pro-purple/40 flex items-center justify-center text-white font-display font-bold text-sm tracking-wide">
                    {{ review.initials }}
                  </div>
                  <div>
                    <h4 class="font-display font-bold text-white text-base uppercase tracking-wider leading-none">
                      {{ review.name }}
                    </h4>
                    <p class="text-xs text-gradient-gold font-sans font-medium mt-1">
                      {{ review.achievement }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Swiper Pagination Dots -->
          <div class="swiper-pagination !bottom-0"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// Import Swiper core and required modules directly
import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'

// Import core Swiper styles safely for Vite mapping
import 'swiper/css'
import 'swiper/css/pagination'

// Mock Data List for Review Cards
const testimonialsList = ref([
  {
    name: 'Marcus Vance',
    initials: 'MV',
    achievement: 'Dropped 24lbs & Built Lean Power',
    text: 'Coach Michael completely shifted my perspective on training. His combination of metric tracking and constant faith-driven motivation pushed me to limits I did not know I had. FIT2PRO is the gold standard.'
  },
  {
    name: 'Sarah Jenkins',
    initials: 'SJ',
    achievement: 'Elite Athletic Conditioning',
    text: 'The 1-on-1 coaching program changed everything. The layout of my athletic blocks and structural stability metrics bulletproofed my joints. Absolute game-changer for high-performing execution.'
  },
  {
    name: 'David Cho',
    initials: 'DC',
    achievement: 'Added 45lbs to Main Lifts',
    text: 'If you want cookie-cutter routines, go somewhere else. Michael delivers professional-grade, calculated systems. The nutrition periodization alone unlocked massive recovery phases for me.'
  },
  {
    name: 'Elena Rostova',
    initials: 'ER',
    achievement: 'Body Composition Overhaul',
    text: 'Unapologetic discipline and deep execution. The tracking sheets leave zero room for guessing. I saw structural transformations within the first 6 weeks of starting my program.'
  }
])

onMounted(() => {
  // Initialize Swiper carefully on the client side mount cycle
  new Swiper('.testimonials-swiper', {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    // Breakpoints map columns beautifully based on mobile up to desktop widths
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  })
})
</script>

<style>
/* Custom overwrites to match Swiper dots into your brand color palette */
.testimonials-swiper .swiper-pagination-bullet {
  background: var(--color-pro-mid-gray) !important;
  opacity: 1;
}

.testimonials-swiper .swiper-pagination-bullet-active {
  background: linear-gradient(to right, var(--color-pro-purple-light), var(--color-pro-gold)) !important;
  width: 20px !important;
  border-radius: 4px !important;
}
</style>