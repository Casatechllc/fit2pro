<template>
  <section id="about-hero" class="relative min-h-[70vh] sm:min-h-[80vh] flex items-center bg-pro-black px-4 sm:px-6 lg:px-8 overflow-hidden pt-24">
    <!-- Premium Grid Mask Background Overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>
    
    <!-- Dynamic Ambient Radial Glows -->
    <div class="absolute top-0 right-1/4 w-[600px] h-[600px] bg-pro-purple/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
    <div class="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-pro-gold/5 blur-[130px] rounded-full pointer-events-none z-0"></div>

    <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
      
      <!-- HERO TEXT BLOCK (Left Column) -->
      <div class="lg:col-span-7 space-y-6 text-center lg:text-left" v-motion-fade-visible>
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pro-purple/30 bg-pro-purple/10 text-[10px] font-display font-black uppercase tracking-widest text-pro-purple-light">
          <span class="w-1.5 h-1.5 rounded-full bg-pro-purple-light animate-pulse"></span>
          The Blueprint Architecture
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight leading-[0.95]">
          ENGINEERED FOR <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-pro-gold via-white to-pro-gold-dark">
            ELITE EXECUTION
          </span>
        </h1>
        
        <p class="text-sm sm:text-base text-gray-400 font-sans max-w-xl mx-auto lg:mx-0 leading-relaxed">
          FIT2PRO eliminates casual gym routines and replaces them with systemic, professional-grade biomechanical design. We translate raw internal discipline into unyielding physical sovereignty under heavy bars.
        </p>

        <!-- Metrics Ticker Row -->
        <div class="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto lg:mx-0 border-t border-pro-mid-gray/20">
          <div class="space-y-1">
            <p class="text-2xl sm:text-3xl font-display font-black text-white">100%</p>
            <p class="text-[9px] font-sans uppercase tracking-widest text-gray-500 font-bold">Custom Coding</p>
          </div>
          <div class="space-y-1">
            <p class="text-2xl sm:text-3xl font-display font-black text-pro-gold">NATIVE</p>
            <p class="text-[9px] font-sans uppercase tracking-widest text-gray-500 font-bold">API Streams</p>
          </div>
          <div class="space-y-1">
            <p class="text-2xl sm:text-3xl font-display font-black text-white">PRO</p>
            <p class="text-[9px] font-sans uppercase tracking-widest text-gray-500 font-bold">Biometrics</p>
          </div>
        </div>

        <!-- Action Target Anchors -->
        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
          <a 
            href="#philosophy" 
            class="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pro-gold to-pro-gold-dark text-pro-black font-display font-black text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-transform duration-300 glow-gold text-center"
          >
            Explore Philosophy
          </a>
          <a 
            href="#contact" 
            class="w-full sm:w-auto px-8 py-4 border border-pro-mid-gray bg-pro-dark-gray/40 text-white font-display font-black text-xs uppercase tracking-widest rounded-xl hover:bg-pro-purple/10 hover:border-pro-purple-light/40 transition-all text-center"
          >
            Initiate Briefing
          </a>
        </div>
      </div>

      <!-- HERO VISUAL FRAMING (Right Column) -->
      <div 
        class="lg:col-span-5 flex justify-center relative select-none"
        v-motion="{
          initial: { opacity: 0, x: 50 },
          enter: { opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }
        }"
      >
        <!-- Decorative Ambient Frame Accents -->
        <div class="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-pro-purple/20 via-transparent to-pro-gold/10 opacity-60 blur-sm pointer-events-none"></div>

        <!-- Main Portrait Aspect Visual Wrap -->
        <div class="w-full max-w-[360px] aspect-[9/14] rounded-3xl overflow-hidden border border-pro-mid-gray/40 relative shadow-2xl bg-pro-dark-gray/30 group">
          <NuxtImg 
            src="/images/mike-image3.jpg" 
            alt="Coach Michael Billups - FIT2PRO Executive Performance"
            class="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] grayscale-[20%] transition-transform duration-700 group-hover:scale-102"
            loading="eager"
          />
          
          <!-- Bottom Vignette and Badge Layer Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-pro-black via-transparent to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-white/10 bg-pro-black/60 backdrop-blur-md">
            <p class="text-[10px] font-display font-bold text-pro-gold uppercase tracking-widest">Head of System Operations</p>
            <p class="text-sm font-display font-black text-white uppercase tracking-wide">Coach Michael Billups</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Utilizing Nuxt's auto-imported template directive helpers for transition logic
</script>

<style scoped>
.glow-gold {
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.15);
}
.glow-gold:hover {
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
}
</style>