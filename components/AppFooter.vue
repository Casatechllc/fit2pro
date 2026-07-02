<template>
  <footer class="bg-pro-black border-t border-pro-mid-gray/40 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Subtle purple accent glow tracking the bottom right corner -->
    <div class="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pro-purple/5 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-pro-mid-gray/20">
        
        <!-- COLUMN 1: Brand Info -->
        <div class="md:col-span-4 space-y-4">
          <NuxtLink to="/" class="flex items-center gap-2">
            <span class="font-display text-2xl font-black tracking-tighter uppercase select-none">
              <span class="text-gradient-purple">FIT</span>
              <span class="logo-number-two mx-1">2</span>
              <span class="text-gradient-gold">PRO</span>
            </span>
          </NuxtLink>
          <p class="text-gray-500 font-sans text-xs sm:text-sm leading-relaxed max-w-xs">
            Professional grade fitness systems engineered by Coach Michael Billups. Built on faith, absolute discipline, and metric-driven physical execution.
          </p>
          <!-- Social Icons Line -->
          <div class="flex items-center gap-4 text-gray-500 pt-2">
            <a href="https://www.instagram.com/fit2pro/" class="hover:text-pro-purple-light transition-colors text-base" aria-label="Instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <!-- COLUMN 2: Quick Links Navigation (Added Contact page item to list configuration below) -->
        <div class="md:col-span-3 space-y-4">
          <h4 class="font-display font-bold text-sm text-white uppercase tracking-wider">Navigation</h4>
          <ul class="space-y-2.5">
            <li v-for="link in footerLinks" :key="link.name">
              <NuxtLink 
                :to="link.path" 
                class="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors uppercase font-display tracking-wide"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- COLUMN 3: Intel Pipeline Newsletter Catchment Box -->
        <div class="md:col-span-5 space-y-4">
          <h4 class="font-display font-bold text-sm text-white uppercase tracking-wider">Intel Pipeline</h4>
          <p class="text-gray-500 font-sans text-xs sm:text-sm leading-relaxed">
            Subscribe to receive direct tactical breakdowns, training methodologies, and macro adjustments straight from Coach Michael.
          </p>
          
          <!-- CONDITIONAL FORM / SHORT SUCCESS MESSAGING HUB -->
          <ClientOnly>
            <div v-if="!showSuccess" class="space-y-2">
              <form @submit.prevent="handleNewsletterSubmit" class="w-full flex items-center p-1.5 rounded-xl bg-pro-dark-gray border border-pro-mid-gray/60 max-w-md">
                <input 
                  v-model="email"
                  type="email" 
                  placeholder="Your email address" 
                  class="w-full bg-transparent pl-3 pr-2 py-2 text-xs font-sans text-white placeholder-gray-600 focus:outline-none"
                  required
                  :disabled="isSubmitting"
                />
                <button 
                  type="submit" 
                  :disabled="isSubmitting"
                  class="px-4 py-2 bg-pro-mid-gray text-white border border-transparent font-display font-bold text-[10px] uppercase tracking-widest rounded-lg hover:border-pro-purple-light hover:text-pro-purple-light transition-all cursor-pointer whitespace-nowrap min-w-[65px] flex items-center justify-center"
                >
                  <i v-if="isSubmitting" class="fa-solid fa-circle-notch animate-spin"></i>
                  <span v-else>Join</span>
                </button>
              </form>
              <p v-if="errorMessage" class="text-[11px] font-sans text-red-400 font-bold pl-1">
                {{ errorMessage }}
              </p>
            </div>

            <!-- COMPACT THANK YOU & CONTACT REDIRECT BLOCK -->
            <div v-else class="p-3 bg-pro-dark-gray/40 border border-pro-gold/20 rounded-xl max-w-md animate-in fade-in zoom-in-95 duration-200">
              <p class="text-xs font-sans text-purple-200">
                ✓ Thanks for joining! Have specific questions? 
                <NuxtLink to="/about#contact" class="text-pro-gold hover:underline font-bold font-display uppercase tracking-wider ml-1">
                  Contact Mike Directly →
                </NuxtLink>
              </p>
            </div>
          </ClientOnly>
        </div>

      </div>

      <!-- BOTTOM ROW: Copyright & Studio Attribution -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans tracking-wide text-gray-600">
        <p>© {{ new Date().getFullYear() }} FIT2PRO. All Rights Reserved.</p>
        
        <!-- Casatech LLC Attribution Hook -->
        <p class="flex items-center gap-1">
          Powered by 
          <a 
            href="https://casatechllc.com" 
            target="_blank" 
            rel="noopener" 
            class="text-gray-400 hover:text-pro-gold transition-colors font-medium font-display tracking-wider uppercase"
          >
            Casatech LLC
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const isSubmitting = ref(false)
const showSuccess = ref(false)
const errorMessage = ref('')

// Keeps navigation links modularly tied to the footer matrix (Included direct Contact route link)
const footerLinks = ref([
  { name: 'Home', path: '/' },
  { name: 'Social Hub', path: '/social-hub' },
  { name: 'Programs', path: '/programs' },
  { name: 'Contact', path: '/about#contact' }
])

const handleNewsletterSubmit = async () => {
  isSubmitting.value = true
  errorMessage.value = ''
  
  try {
    const response = await $fetch('/api/submit-application', {
      method: 'POST',
      body: { email: email.value.trim() }
    })
    
    if (response && response.success) {
      showSuccess.value = true
      email.value = ''
    } else {
      throw new Error('Pipeline error processing newsletter email ingestion.')
    }
  } catch (err) {
    console.error('Newsletter processing failure:', err)
    errorMessage.value = 'Failed to submit email. Please try again directly.'
  } finally {
    isSubmitting.value = false
  }
}
</script>