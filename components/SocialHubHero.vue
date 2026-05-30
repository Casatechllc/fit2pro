<template>
  <section class="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-pro-black px-4 sm:px-6 lg:px-8 pt-24 mt-24 pb-16">
    
    <!-- BACKGROUND TEXTURED IMAGE LAYER WITH PREMIUM MIX-BLEND FILTER -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <NuxtImg 
        src="/images/social-hero.png" 
        alt="FIT2PRO Content Matrix"
        class="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.25] brightness-[1.5] saturate-[0.7]"
        loading="eager"
      />
      <!-- Premium Dual Gradient Mask: Onyx into Royal Purple -->
      <div class="absolute inset-0 bg-gradient-to-tr from-pro-black via-pro-black/75 to-pro-purple/30 mix-blend-multiply z-10"></div>
      <!-- Radial Vignette to keep focus entirely on the core text -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#090a0f_90%)] z-10"></div>
    </div>

    <!-- MAIN CONTENT MATRIX -->
    <div 
      class="max-w-4xl mx-auto text-center relative z-20 space-y-6"
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
    >
      <!-- Premium Target Badge -->
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pro-dark-gray/80 backdrop-blur-md border border-pro-mid-gray/60 text-xs font-semibold uppercase tracking-widest text-pro-purple-light drop-shadow-[0_0_15px_rgba(109,40,217,0.2)]">
        <i class="fa-solid fa-photo-film text-[10px]"></i>
        Media Command
      </div>

      <!-- Main Central Header -->
      <h1 class="text-4xl sm:text-6xl font-display font-black tracking-tight text-white uppercase leading-none">
        THE SOCIAL <br />
        <span class="text-gradient-purple">HUB</span>
      </h1>

      <!-- Concept Strategy Text -->
      <p class="text-gray-400 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
        Step directly into the lab with Coach Michael Billups. Explore real-time training videos, tactical programming posts, and faith-driven mindset breakdowns engineered to elevate your daily physical execution.
      </p>

      <!-- Multi-Platform Media Indicators (Clean, non-numerical utility icons) -->
      <div class="pt-2 flex justify-center items-center gap-6 text-gray-500 text-lg">
        <span class="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-gray-400">
          <i class="fa-solid fa-circle-play text-pro-purple-light"></i> Video Drops
        </span>
        <span class="text-pro-mid-gray text-xs">•</span>
        <span class="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-gray-400">
          <i class="fa-solid fa-newspaper text-pro-gold"></i> Tactical Posts
        </span>
      </div>

    </div>
  </section>
</template>

<script setup>
// Streamlined, media-agnostic layout for a generalized content feed
</script>