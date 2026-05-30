<template>
  <section id="about" class="py-24 bg-pro-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Ambient branding background flares -->
    <div class="absolute top-1/2 left-0 w-[500px] h-[500px] bg-pro-purple/5 blur-[130px] rounded-full pointer-events-none -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pro-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      
      <!-- LEFT COLUMN: The Visual Feature Frame -->
      <div class="lg:col-span-5 relative flex justify-center order-last lg:order-first">
        <div class="relative w-full max-w-md aspect-[4/5] sm:aspect-[3/4] group">
          
          <!-- Cyberpunk/Chiseled Outer Frames -->
          <div class="absolute inset-0 border-2 border-pro-mid-gray rounded-3xl transform -rotate-2 scale-98 group-hover:rotate-0 transition-transform duration-500"></div>
          <div class="absolute inset-0 border border-pro-gold/30 rounded-3xl transform rotate-3 scale-100 group-hover:rotate-0 transition-transform duration-500"></div>

          <!-- Main Image Container -->
          <div class="absolute inset-0 bg-pro-dark-gray rounded-3xl overflow-hidden border border-pro-mid-gray/60 shadow-2xl">
            
            <!-- LAYER 1: The Base Image (z-10) -->
            <NuxtImg 
              src="/images/mike-image2.png" 
              alt="Michael Billups - FIT2PRO Elite Trainer"
              class="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.1] brightness-[0.6] transition-transform duration-700 group-hover:scale-105 z-10"
              loading="lazy"
            />
            
            <!-- LAYER 2: Premium Gradient Filter Overlay (z-20) -->
            <!-- Transitions from solid black to translucent royal purple using multiply blend -->
            <div class="absolute inset-0 bg-gradient-to-tr from-pro-black via-pro-black/60 to-pro-purple/40 mix-blend-multiply z-20 pointer-events-none"></div>
            
            <!-- LAYER 3: Dark Stacking Base Shadow for Typography Safety (z-20) -->
            <div class="absolute inset-0 bg-gradient-to-t from-pro-black via-transparent to-transparent opacity-95 z-20 pointer-events-none"></div>
            
            <!-- LAYER 4: Floating Scriptural Quote Tag (z-30 to stay crisp over all filters) -->
            <div class="absolute bottom-4 left-4 right-4 bg-pro-black/85 backdrop-blur-md border border-pro-mid-gray/50 p-4 rounded-xl text-center z-30">
              <p class="font-display text-sm font-bold tracking-wider text-pro-gold uppercase">
                "I can do all things through Christ who strengthens me."
              </p>
              <p class="text-[10px] text-gray-500 font-sans mt-0.5 uppercase tracking-widest">Philippians 4:13</p>
            </div>

          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN: Biography & Vision -->
      <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
        <!-- Sub-Header Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pro-dark-gray border border-pro-mid-gray text-xs font-semibold uppercase tracking-widest text-gray-300">
          <i class="fa-solid fa-cross text-pro-gold text-[10px]"></i>
          Built on Faith &amp; Discipline
        </div>

        <!-- Main Title -->
        <h2 class="text-4xl sm:text-5xl font-display font-black tracking-tight text-white">
          MEET COACH <br />
          <span class="text-gradient-purple">MICHAEL</span> <span class="text-gradient-gold">BILLUPS</span>
        </h2>

        <!-- Core Philosophy Paragraphs -->
        <div class="space-y-4 text-gray-400 font-sans text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
          <p>
            Physical mastery is more than just lifting weight—it is an act of stewardship over the temple you were given. As an elite strength specialist and devout Christian, Coach Michael Billups built <span class="text-white font-semibold">FIT2PRO</span> on a foundation of absolute integrity, purpose-driven work, and spiritual alignment.
          </p>
          <p>
            Michael doesn't believe in temporary fitness fads or short-cuts. His training methods approach human performance through a calculated, metric-driven lens designed to forge mental resilience and physical longevity. It’s an elite framework forged to help you fulfill your highest personal calling.
          </p>
        </div>

        <!-- Mini Value Badges Stack -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-xl mx-auto lg:mx-0">
          <!-- Item 1 -->
          <div class="flex items-start gap-3 p-4 rounded-2xl bg-pro-dark-gray border border-pro-mid-gray/40">
            <div class="text-pro-gold pt-0.5">
              <i class="fa-solid fa-crown text-base"></i>
            </div>
            <div>
              <h4 class="font-display font-bold text-white text-sm uppercase tracking-wider">Kingdom Mindset</h4>
              <p class="text-xs text-gray-500 font-sans mt-0.5">Training standard engineered to build deep spiritual integrity alongside physical power.</p>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="flex items-start gap-3 p-4 rounded-2xl bg-pro-dark-gray border border-pro-mid-gray/40">
            <div class="text-pro-purple-light pt-0.5">
              <i class="fa-solid fa-shield-halved text-base"></i>
            </div>
            <div>
              <h4 class="font-display font-bold text-white text-sm uppercase tracking-wider">Pro-Grade Execution</h4>
              <p class="text-xs text-gray-500 font-sans mt-0.5">Precision blueprints built for athletes and high-performers seeking elite status.</p>
            </div>
          </div>
        </div>

        <!-- Action Call Out -->
        <div class="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <NuxtLink 
            to="#contact" 
            class="px-8 py-4 bg-gradient-to-r from-pro-purple to-pro-purple-light text-white font-display font-bold rounded-xl tracking-wider uppercase transition-transform hover:scale-105 glow-purple text-center"
          >
            Apply For Coaching
          </NuxtLink>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
// Fully functional structural UI component
</script>