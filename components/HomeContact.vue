<template>
  <section id="contact" class="py-24 bg-pro-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative">
      
      <!-- Ambient backing graphic highlights for extra depth -->
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-pro-gold/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <!-- MAIN PURPLE GRADIENT CARD -->
      <div class="relative z-10 w-full rounded-3xl overflow-hidden bg-gradient-to-br from-pro-purple via-[#4c1d95] to-[#2e1065] border border-pro-purple-light/30 px-6 py-16 sm:p-20 text-center shadow-2xl glow-purple">
        
        <!-- Subtle background mesh overlay -->
        <div class="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        
        <!-- Content wrapper layered above the background mesh -->
        <div class="relative z-10 max-w-2xl mx-auto space-y-6">
          
          <!-- Section Badge Icon -->
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-pro-black/40 border border-white/10 text-pro-gold text-lg mb-2">
            <i class="fa-solid fa-envelope-open-text"></i>
          </div>

          <!-- Main Call Out Header -->
          <h2 class="text-4xl sm:text-5xl font-display font-black tracking-tight text-white leading-none">
            READY TO TAKE YOUR TRAINING <br class="hidden sm:inline"/>
            <span class="text-gradient-gold">TO THE NEXT LEVEL?</span>
          </h2>

          <!-- Descriptive Copy -->
          <p v-if="!showSuccess" class="text-purple-100 font-sans text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Spaces in Michael Billups’ elite 1-on-1 coaching program are strictly limited. Drop your email below to get your application blueprint sent straight to your inbox.
          </p>
          <p v-else class="text-pro-gold font-display font-bold text-base sm:text-lg max-w-md mx-auto uppercase tracking-wide animate-pulse">
            ✓ Thank you! Check your inbox.
          </p>

          <!-- INTERACTIVE FORM STATE -->
          <div v-if="!showSuccess" class="space-y-4">
            <form @submit.prevent="handleEmailSubmission" class="mt-8 max-w-md mx-auto w-full flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-pro-black/40 border border-white/10 backdrop-blur-md">
              
              <!-- Input Field Group -->
              <div class="relative w-full flex-grow">
                <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-purple-300 text-sm">
                  <i class="fa-solid fa-at"></i>
                </div>
                <input 
                  v-model="email"
                  type="email" 
                  placeholder="Enter your primary email" 
                  class="w-full bg-transparent pl-10 pr-4 py-3 text-sm font-sans text-white placeholder-purple-400 rounded-xl focus:outline-none focus:ring-1 focus:ring-pro-gold/50"
                  required
                  :disabled="isSubmitting"
                />
              </div>

              <!-- Button Component -->
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-pro-gold to-pro-gold-dark text-pro-black font-display font-black text-xs uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 glow-gold cursor-pointer whitespace-nowrap disabled:opacity-40 flex items-center justify-center gap-2"
              >
                <i v-if="isSubmitting" class="fa-solid fa-circle-notch animate-spin"></i>
                {{ isSubmitting ? 'Sending...' : 'Get Started' }}
              </button>
            </form>

            <!-- Inline Error Messaging -->
            <div v-if="errorMessage" class="text-xs font-sans font-bold text-red-400 bg-red-950/40 border border-red-900/50 p-2.5 rounded-xl max-w-md mx-auto">
              {{ errorMessage }}
            </div>
          </div>

          <!-- SOFTENED SUCCESS PRESENTATION LAYER -->
          <div v-else class="p-6 bg-pro-black/30 border border-pro-gold/20 rounded-2xl max-w-md mx-auto space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <p class="text-sm font-sans text-purple-100 leading-relaxed">
              We've sent the blueprint link to your email. Mike will be reaching out to you shortly via email with more details to help get you set up.
            </p>
            
            <!-- NEW CTA HOOK FOR ADDITIONAL ACTION -->
            <div class="pt-2">
              <a 
                href="/about#contact" 
                class="inline-flex items-center gap-2 text-xs font-display font-black text-pro-gold hover:text-white uppercase tracking-widest group transition-colors"
              >
                Want to book a call instead? 
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          <!-- Scriptural Footnote -->
          <p class="text-[10px] text-purple-300/60 font-sans tracking-wider uppercase pt-4">
            <i class="fa-solid fa-cross text-[8px] mr-1 text-pro-gold/40"></i> For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline. — 2 Timothy 1:7
          </p>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const isSubmitting = ref(false)
const showSuccess = ref(false)
const errorMessage = ref('')

const handleEmailSubmission = async () => {
  isSubmitting.value = true
  errorMessage.value = ''
  
  try {
    const response = await $fetch('/api/submit-application', {
      method: 'POST',
      body: { email: email.value.trim() }
    })

    if (response && response.success) {
      showSuccess.value = true
    } else {
      throw new Error('Server error handling email signup.')
    }
  } catch (err) {
    console.error('Submission failure:', err)
    errorMessage.value = 'We couldn\'t send your request right now. Please check your connection and try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>