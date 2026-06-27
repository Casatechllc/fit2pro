<template>
  <section id="philosophy" class="py-20 bg-pro-black px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-pro-mid-gray/20">
    <!-- Geometric Background Grid Accents -->
    <div class="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:2rem_2rem] opacity-30 pointer-events-none z-0"></div>
    <div class="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-pro-purple/5 blur-[130px] rounded-full pointer-events-none z-0"></div>

    <div class="max-w-7xl mx-auto space-y-12 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl space-y-2 text-center sm:text-left" v-motion-fade-visible>
        <span class="text-xs font-display font-bold uppercase tracking-widest text-pro-gold">
          Core Methodology
        </span>
        <h3 class="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
          THE IRON ARCHITECTURE
        </h3>
        <p class="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed pt-2">
          We reject the culture of casual maintenance. Real progression is a structural puzzle solved with biomechanical intent, clean tension loads, and cognitive alignment.
        </p>
      </div>

      <!-- Core Pillars Grid Layer -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- PILLAR 01 -->
        <div 
          class="premium-card rounded-3xl p-6 sm:p-8 border border-pro-mid-gray/40 bg-gradient-to-b from-pro-dark-gray to-pro-black/60 relative overflow-hidden group"
          v-motion-fade-visible
        >
          <div class="absolute top-4 right-6 font-display font-black text-5xl text-pro-mid-gray/5 select-none transition-colors duration-500 group-hover:text-pro-purple/10">
            01
          </div>
          
          <div class="space-y-4">
            <div class="w-10 h-10 rounded-xl bg-pro-purple/10 border border-pro-purple/20 flex items-center justify-center text-pro-purple-light text-sm">
              <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <h4 class="text-lg font-display font-black text-white uppercase tracking-wide">
              Biomechanical Intent
            </h4>
            <p class="text-xs text-gray-400 font-sans leading-relaxed">
              Stop moving weight aimlessly down to random target baselines. Every single sequence we program treats your joint geometry and lever physics as an absolute engineering blueprint.
            </p>
          </div>
        </div>

        <!-- PILLAR 02 -->
        <div 
          class="premium-card rounded-3xl p-6 sm:p-8 border border-pro-mid-gray/40 bg-gradient-to-b from-pro-dark-gray to-pro-black/60 relative overflow-hidden group"
          v-motion-fade-visible
        >
          <div class="absolute top-4 right-6 font-display font-black text-5xl text-pro-mid-gray/5 select-none transition-colors duration-500 group-hover:text-pro-gold/10">
            02
          </div>
          
          <div class="space-y-4">
            <div class="w-10 h-10 rounded-xl bg-pro-gold/10 border border-pro-gold/20 flex items-center justify-center text-pro-gold text-sm">
              <i class="fa-solid fa-gauge-high"></i>
            </div>
            <h4 class="text-lg font-display font-black text-white uppercase tracking-wide">
              Progressive Force Sets
            </h4>
            <p class="text-xs text-gray-400 font-sans leading-relaxed">
              True strength isn't built on sweat alone—it is driven by systematic overload. We measure raw internal tension leaks and isolate target vulnerabilities so your system adapts rapidly under load.
            </p>
          </div>
        </div>

        <!-- PILLAR 03 -->
        <div 
          class="premium-card rounded-3xl p-6 sm:p-8 border border-pro-purple/20 bg-gradient-to-b from-pro-dark-gray via-[#141021]/60 to-pro-black overflow-hidden relative group"
          v-motion-fade-visible
        >
          <div class="absolute top-4 right-6 font-display font-black text-5xl text-pro-purple-light/5 select-none transition-colors duration-500 group-hover:text-pro-purple-light/10">
            03
          </div>
          
          <div class="space-y-4">
            <div class="w-10 h-10 rounded-xl bg-pro-purple/20 border border-pro-purple/40 flex items-center justify-center text-pro-purple-light text-sm">
              <i class="fa-solid fa-cross"></i>
            </div>
            <h4 class="text-lg font-display font-black text-white uppercase tracking-wide">
              Internal Alignment
            </h4>
            <p class="text-xs text-gray-400 font-sans leading-relaxed">
              Your structural state is physical proof of internal discipline. You cannot fake execution under a heavy barbell; we train the mindset and internal fortitude required to stand tall beneath it.
            </p>
          </div>
        </div>

      </div>

      <!-- Extended Blueprint Manifest Block -->
      <div 
        class="premium-card rounded-3xl p-6 sm:p-10 border border-pro-mid-gray/40 bg-gradient-to-r from-pro-dark-gray via-pro-black to-pro-black flex flex-col md:flex-row gap-6 justify-between items-center"
        v-motion-fade-visible
      >
        <div class="space-y-2 max-w-2xl text-center sm:text-left">
          <h4 class="text-base font-display font-black text-white uppercase tracking-wider">
            Ready to rewrite your physical parameters?
          </h4>
          <p class="text-xs text-gray-400 font-sans leading-relaxed">
            Our training protocols are built explicitly for high-performance execution. No shortcuts, no baseline guessing—just pure biological development.
          </p>
        </div>
        
        <a 
          href="/#schedule" 
          class="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-pro-gold to-pro-gold-dark text-pro-black font-display font-black text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-transform duration-300 text-center select-none"
        >
          View Field Schedule
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
// Exposes id="philosophy" anchor directly onto the layout grid shell context cleanly
</script>