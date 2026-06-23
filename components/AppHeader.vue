<template>
  <header class="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
    <!-- Glassmorphic Container -->
    <div class="max-w-7xl mx-auto bg-pro-dark-gray/60 backdrop-blur-md border border-pro-mid-gray/40 rounded-2xl px-4 sm:px-8 py-4 transition-all duration-300 shadow-xl shadow-black/40">
      <div class="flex items-center justify-between">
        
        <!-- BRAND LOGO -->
        <NuxtLink to="/" class="flex items-center gap-2 group transition-transform duration-300 hover:scale-105">
            <span class="font-display text-2xl font-black tracking-tighter uppercase select-none">
                <!-- FIT: Purple Gradient -->
                <span class="text-gradient-purple">FIT</span>
                
                <!-- 2: Dark Metallic with a Bold Gold Border Rim -->
                <span class="logo-number-two mx-1">2</span>
                
                <!-- PRO: Gold Gradient -->
                <span class="text-gradient-gold">PRO</span>
            </span>
        </NuxtLink>

        <!-- DESKTOP NAVIGATION (Hidden on mobile) -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink 
            v-for="page in navigationPages" 
            :key="page.name"
            :to="page.path"
            class="font-display text-sm font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors relative py-2 group"
            active-class="text-white font-bold"
          >
            {{ page.name }}
            <!-- Premium Underline Accent on Hover/Active -->
            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pro-purple to-pro-gold transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
        </nav>

        <!-- DESKTOP CALL TO ACTION -->
        <div class="hidden md:flex items-center">
          <NuxtLink 
            to="#contact" 
            class="px-5 py-2.5 bg-gradient-to-r from-pro-purple/20 to-pro-purple-light/20 border border-pro-purple text-white font-display text-xs font-bold uppercase tracking-widest rounded-xl hover:from-pro-purple hover:to-pro-purple-light transition-all duration-300 glow-purple"
          >
            Join Elite
          </NuxtLink>
        </div>

        <!-- MOBILE HAMBURGER BUTTON (Hidden on desktop) -->
        <div class="md:hidden flex items-center">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="text-gray-400 hover:text-white focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
              <path v-else fill-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.83 4.828 4.829z" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- MOBILE DROPDOWN NAVIGATION -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden mt-2 mx-auto max-w-7xl bg-pro-black/95 backdrop-blur-lg border border-pro-mid-gray p-6 rounded-2xl shadow-2xl flex flex-col gap-4"
      >
        <NuxtLink 
          v-for="page in navigationPages" 
          :key="page.name"
          :to="page.path"
          @click="isMobileMenuOpen = false"
          class="font-display text-lg font-medium uppercase tracking-wide text-gray-300 hover:text-pro-gold transition-colors py-2 border-b border-pro-mid-gray/40 last:border-none"
          active-class="text-pro-gold font-bold"
        >
          {{ page.name }}
        </NuxtLink>
        
        <NuxtLink 
          to="#contact"
          @click="isMobileMenuOpen = false"
          class="w-full text-center mt-2 px-6 py-3 bg-gradient-to-r from-pro-purple to-pro-purple-light text-white font-display font-bold uppercase tracking-wider rounded-xl glow-purple"
        >
          Join Elite
        </NuxtLink>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// Control state for responsive menu
const isMobileMenuOpen = ref(false)

// Modular Navigation List — Easily add or remove pages here!
const navigationPages = ref([
  { name: 'Home', path: '/' },
  { name: 'Social Hub', path: '/social-hub' },
  { name: 'Programs', path: '/programs' },
  { name: 'About', path: '/about' }
])
</script>