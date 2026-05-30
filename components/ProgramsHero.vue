<template>
  <section class="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-pro-black px-4 sm:px-6 lg:px-8 pt-32 pb-12 mt-24">
    
    <!-- BACKGROUND TEXTURED IMAGE LAYER WITH PREMIUM MIX-BLEND FILTER -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <NuxtImg 
        src="/images/hero-image.png" 
        alt="FIT2PRO Training Matrix"
        class="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.2] brightness-[0.7] saturate-[0.75]"
        loading="eager"
      />
      <div class="absolute inset-0 bg-gradient-to-tr from-pro-black via-pro-black/70 to-pro-purple/35 mix-blend-multiply z-10"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#090a0f_90%)] z-10"></div>
    </div>

    <!-- MAIN HERO CONTENT CONTAINER -->
    <div 
      class="max-w-4xl mx-auto text-center relative z-20 space-y-6"
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
    >
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pro-dark-gray/80 backdrop-blur-md border border-pro-mid-gray/60 text-xs font-semibold uppercase tracking-widest text-pro-gold drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]">
        <i class="fa-solid fa-bolt text-[10px]"></i>
        Elite Blueprints
      </div>

      <h1 class="text-4xl sm:text-6xl font-display font-black tracking-tight text-white uppercase leading-none">
        CHOOSE YOUR <br class="sm:hidden" />
        <span class="text-gradient-purple">BATTLEGROUND</span>
      </h1>

      <p class="text-gray-400 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
        Michael Billups’ coaching systems are engineered mathematically around individual physical limits. Select the programmatic track designed to radically overhaul your body composition, optimize baseline strength, or unlock peak physical execution.
      </p>
    </div>
  </section>
</template>