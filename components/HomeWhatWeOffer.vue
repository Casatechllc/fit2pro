<template>
  <section id="offers" class="py-24 bg-pro-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Ambient subtle background glow to frame the grid -->
    <div class="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pro-purple/5 blur-[150px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto space-y-12">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <h2 class="text-4xl sm:text-5xl font-display font-black tracking-tight">
          BUILD YOUR <span class="text-gradient-purple">LEGACY</span>
        </h2>
        <p class="text-gray-400 font-sans text-base max-w-xl mx-auto">
          No cookie-cutter routines. Choose the elite pathway engineered specifically for your body, your discipline, and your performance goals.
        </p>
      </div>

      <!-- Asymmetrical Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] sm:auto-rows-[320px]">
        
        <!-- ROW 1, CELL 1: Flagship Training (Spans 2 Columns with Angled Top-Left Dumbbell) -->
        <div class="md:col-span-2 relative premium-card rounded-3xl overflow-hidden group flex flex-col justify-between p-8 border border-pro-mid-gray/40">
          <!-- Background Trainer Feature Image -->
          <div class="absolute inset-0 z-0">
            <!-- Background Trainer Feature Image Wrapper -->
            <div class="absolute inset-0 z-0 overflow-hidden rounded-3xl">
            <!-- 1. The Image Layer (Explicitly z-10) -->
            <NuxtImg 
                src="/images/mike-image1.png" 
                alt="FIT2PRO Elite Training"
                class="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.5] contrast-[1.1] saturate-[0.8] transition-transform duration-700 scale-100 group-hover:scale-110 z-10"
                loading="lazy"
            />
            
            <!-- 2. The Premium Gradient Filter Layer (Explicitly z-20 to lock it ON TOP of the image) -->
            <div class="absolute inset-0 bg-gradient-to-tr from-pro-black via-pro-black/70 to-pro-purple/40 mix-blend-multiply z-20 pointer-events-none"></div>
            
            <!-- 3. The Typography Safety Shadow Layer (Explicitly z-20) -->
            <div class="absolute inset-0 bg-gradient-to-t from-pro-black via-transparent to-transparent opacity-95 z-20 pointer-events-none"></div>
          </div>
            <!-- High-Contrast Gradient Mask to guarantee absolute text readability -->
            <div class="absolute inset-0 bg-gradient-to-t from-pro-black via-pro-black/50 to-transparent"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-pro-black/80 via-transparent to-transparent hidden md:block"></div>
          </div>

          <!-- TOP LEFT: Angled Font Awesome Dumbbell Icon -->
          <div class="relative z-10 w-12 h-12 rounded-2xl bg-pro-black/60 backdrop-blur-md border border-pro-mid-gray flex items-center justify-center text-pro-gold drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]">
            <i class="fa-solid fa-dumbbell text-xl transform -rotate-45 group-hover:scale-110 transition-transform duration-300"></i>
          </div>

          <!-- BOTTOM CONTENT (Layered safely over the filtered image) -->
          <div class="relative z-10 space-y-2 max-w-xl pt-12">
            <div class="space-y-1">
              <span class="text-xs font-display font-bold uppercase tracking-widest text-pro-gold">
                Flagship Coaching System
              </span>
              <h3 class="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide">
                1-on-1 Elite Athletic Coaching
              </h3>
            </div>
            <p class="text-sm text-gray-300 font-sans line-clamp-2 md:line-clamp-none">
              The exact blueprint. Complete biomechanical tracking, real-time adjustments, and elite programming built around your lifestyle for unstoppable progression.
            </p>
          </div>
        </div>

        <!-- ROW 1, CELL 2: Nutrition Hub (Spans 1 Column) -->
        <div class="premium-card rounded-3xl p-8 flex flex-col justify-between group">
          <div class="space-y-4">
            <h3 class="text-xl font-display font-bold text-white pt-2">The Blueprint Story</h3>
            <p class="text-sm text-gray-400 font-sans leading-relaxed">
              Engineered out of raw necessity. Learn how Coach Michael reconstructed his own biomechanical alignment, built unyielding physical sovereignty, and refined the elite execution methodologies driving our training standard.
            </p>
          </div>
          
          <NuxtLink to="/about#testimonials" class="text-xs font-display font-bold uppercase tracking-wider text-pro-gold flex items-center gap-1 hover:underline pt-4">
            Meet The Trainer &rarr;
          </NuxtLink>
        </div>

        <!-- ROW 2, CELL 1: Programs (Spans 1 Column) -->
        <div class="premium-card rounded-3xl p-8 flex flex-col justify-between group">
          <div class="space-y-4">
            <h3 class="text-xl font-display font-bold text-white pt-2">Training Programs</h3>
            <p class="text-sm text-gray-400 font-sans leading-relaxed">
              Explore dynamic conditioning setups, power frameworks, and performance-grade systems forged to transform casual efforts into pro results.
            </p>
          </div>
          <NuxtLink to="/programs" class="text-xs font-display font-bold uppercase tracking-wider text-pro-purple-light flex items-center gap-1 hover:underline pt-4">
            View Programs →
          </NuxtLink>
        </div>

        <!-- ROW 2, CELL 2: Social Hub (Spans 2 Columns) -->
        <div class="md:col-span-2 premium-card rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
          <!-- Subtle purple lighting flare behind the button action field -->
          <div class="absolute -right-20 -bottom-20 w-60 h-60 bg-pro-purple/10 blur-3xl rounded-full group-hover:bg-pro-purple/20 transition-colors duration-500"></div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            <div class="md:col-span-8 space-y-3">
              <span class="text-xs font-display font-bold uppercase tracking-widest text-gradient-purple">
                Community Integration
              </span>
              <h3 class="text-2xl font-display font-bold text-white tracking-wide">
                The FIT2PRO Social Hub
              </h3>
              <p class="text-sm text-gray-400 font-sans leading-relaxed">
                Connect directly with the community pipeline. Dive into live technique breakdowns, tactical feedback channels, and real-time execution drops.
              </p>
            </div>
            
            <div class="md:col-span-4 flex md:justify-end">
              <NuxtLink 
                to="/social-hub" 
                class="w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-pro-purple to-pro-purple-light text-white font-display font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pro-purple/20 text-center"
              >
                Enter Social Hub
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Structured modular UI component
</script>