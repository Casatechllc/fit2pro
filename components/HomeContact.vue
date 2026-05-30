<template>
  <section id="contact" class="py-24 bg-pro-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Outer Container wrapping the main purple gradient block -->
    <div class="max-w-7xl mx-auto relative">
      
      <!-- Ambient backing graphic highlights for extra depth -->
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-pro-gold/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <!-- MAIN PURPLE GRADIENT CARD -->
      <div class="relative z-10 w-full rounded-3xl overflow-hidden bg-gradient-to-br from-pro-purple via-[#4c1d95] to-[#2e1065] border border-pro-purple-light/30 px-6 py-16 sm:p-20 text-center shadow-2xl glow-purple">
        
        <!-- Subtle digital background mesh overlay to make it look "hard" and textured -->
        <div class="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        
        <!-- Content wrapper layered above the background mesh -->
        <div class="relative z-10 max-w-2xl mx-auto space-y-6">
          
          <!-- Section Badge Icon -->
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-pro-black/40 border border-white/10 text-pro-gold text-lg mb-2">
            <i class="fa-solid fa-envelope-open-text"></i>
          </div>

          <!-- Main Call Out Header -->
          <h2 class="text-4xl sm:text-5xl font-display font-black tracking-tight text-white leading-none">
            READY TO CLAIM YOUR <br class="hidden sm:inline"/>
            <span class="text-gradient-gold">PRO-LEVEL STATUS?</span>
          </h2>

          <!-- Descriptive Copy -->
          <p class="text-purple-100 font-sans text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Spaces in Michael Billups’ elite 1-on-1 coaching program are strictly limited. Drop your email below to receive your application blueprint instantly.
          </p>

          <!-- Email Submission Box (Layout Only, No JavaScript functionality wired yet) -->
          <form @submit.prevent class="mt-8 max-w-md mx-auto w-full flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-pro-black/40 border border-white/10 backdrop-blur-md">
            
            <!-- Input Field Group -->
            <div class="relative w-full flex-grow">
              <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-500 text-sm">
                <i class="fa-solid fa-at"></i>
              </div>
              <input 
                type="email" 
                placeholder="Enter your primary email" 
                class="w-full bg-transparent pl-10 pr-4 py-3 text-sm font-sans text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-pro-gold/50"
                required
              />
            </div>

            <!-- Button Component -->
            <button 
              type="submit" 
              class="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-pro-gold to-pro-gold-dark text-pro-black font-display font-black text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-transform duration-300 glow-gold cursor-pointer whitespace-nowrap"
            >
              Get Started
            </button>
            
          </form>

          <!-- Scriptural Footnote to tie it back to Michael's story -->
          <p class="text-[10px] text-purple-300/60 font-sans tracking-wider uppercase pt-4">
            <i class="fa-solid fa-cross text-[8px] mr-1 text-pro-gold/40"></i> For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline. — 2 Timothy 1:7
          </p>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Purely structural UI presentation component. 
// Functionality hooks can be placed inside an asynchronous handler later.
</script>