<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-pro-black px-4 sm:px-6 lg:px-8 py-20">
    
    <!-- Background Gradients / Grid Overlay for Depth -->
    <div class="absolute inset-0 z-0 bg-[linear-gradient(to_right,#12141c_1px,transparent_1px),linear-gradient(to_bottom,#12141c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
    
    <!-- Dynamic Purple Ambient Light Glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pro-purple/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

    <div class="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 items-center relative z-10">
      
      <!-- LEFT COLUMN: Brand Copy & CTAs -->
      <div 
        class="lg:col-span-7 space-y-6 text-center lg:text-left"
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 800, ease: 'easeOut' } }"
      >
        <!-- Elite Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pro-dark-gray border border-pro-mid-gray text-xs font-semibold uppercase tracking-widest text-gray-300">
          <span class="flex h-2 w-2 rounded-full bg-pro-gold animate-pulse"></span>
          Professional Grade Fitness
        </div>

        <!-- Main Title with Split Color / Gold Gradient -->
        <h1 class="text-5xl sm:text-6xl xl:text-7xl font-display font-bold tracking-tight text-white leading-none">
          TRAIN TO BE <br />
          <span class="text-gradient-purple">FIT</span>. 
          EXECUTE LIKE<br class="hidden sm:inline" />
          A <span class="text-gradient-gold">PRO</span>.
        </h1>

        <!-- Subtitle describing his premium vision -->
        <p class="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed">
          Stop guessing. Stop compromising. FIT2PRO delivers elite-level athletic training engineered for high-performers who demand absolute results. 
        </p>

        <!-- CTA Button Group with Metallic Glow Effects -->
        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
          <NuxtLink 
            to="/programs" 
            class="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pro-purple to-pro-purple-light text-white font-display font-bold rounded-lg tracking-wider uppercase transition-transform hover:scale-105 active:scale-95 glow-purple text-center"
          >
            Claim Your Program
          </NuxtLink>
          
          <NuxtLink 
            to="#about" 
            class="w-full sm:w-auto px-8 py-4 bg-pro-dark-gray text-white border border-pro-mid-gray font-display font-bold rounded-lg tracking-wider uppercase transition-all hover:bg-pro-mid-gray hover:border-pro-gold text-center"
          >
            Meet The Trainer
          </NuxtLink>
        </div>

        <!-- Social Proof Grid / Quick Stats -->
        <div class="grid grid-cols-3 gap-4 pt-4 border-t border-pro-dark-gray max-w-md mx-auto lg:mx-0">
          <div>
            <p class="font-display text-2xl sm:text-3xl font-bold text-white">100%</p>
            <p class="text-xs text-gray-500 uppercase tracking-wider">Custom Built</p>
          </div>
          <div>
            <p class="font-display text-2xl sm:text-3xl font-bold text-pro-gold">1-ON-1</p>
            <p class="text-xs text-gray-500 uppercase tracking-wider">Elite Coaching</p>
          </div>
          <div>
            <p class="font-display text-2xl sm:text-3xl font-bold text-white">10k+</p>
            <p class="text-xs text-gray-500 uppercase tracking-wider">Hours Tracked</p>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN: Visual Column Shell holding both your custom Typo Component and Image Card Frame -->
      <div 
        class="lg:col-span-5 flex flex-col items-center gap-8 relative"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200, ease: 'easeOut' } }"
      >
        <!-- HomeBrandTypo component instance placed directly above image container -->
        <HomeBrandTypo />

        <!-- Interactive Glowing Frame Container -->
        <div class="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-full lg:h-[450px] max-w-md group">
          
          <!-- Outer Gold/Purple Accent Rim Shadow -->
          <div class="absolute inset-0 bg-gradient-to-tr from-pro-purple to-pro-gold opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500 rounded-full"></div>
          
          <!-- Geometric Frame Border to lock in that hard look -->
          <div class="absolute inset-0 border-2 border-pro-mid-gray rounded-3xl transform rotate-3 scale-95 group-hover:rotate-0 transition-transform duration-500"></div>
          <div class="absolute inset-0 border border-pro-purple/40 rounded-3xl transform -rotate-3 scale-100 group-hover:rotate-0 transition-transform duration-500"></div>

          <!-- Main Profile Photo Wrapper using NuxtImg -->
          <div class="absolute inset-0 bg-pro-dark-gray rounded-3xl overflow-hidden border border-pro-mid-gray shadow-2xl">
            <NuxtImg 
              src="/images/hero-image1-crop.png" 
              alt="FIT2PRO Elite Trainer"
              class="w-full h-full object-cover object-center transform filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
              placeholder
              loading="eager"
            />
            
            <!-- Dark Vignette overlay onto image to make typography hit cleanly -->
            <div class="absolute inset-0 bg-gradient-to-t from-pro-black via-transparent to-transparent opacity-80"></div>
            
            <!-- Floating Achievement Tag built inside the picture frame -->
            <div class="absolute bottom-4 left-4 right-4 bg-pro-black/80 backdrop-blur-md border border-pro-mid-gray p-3 rounded-xl flex items-center justify-between">
              <div>
                <p class="text-xs text-gray-400 font-sans uppercase">Trainer Brand</p>
                <p class="font-display font-bold text-pro-gold tracking-wide">FIT2PRO UNLOCKED</p>
              </div>
              <span class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-pro-purple text-white rounded">
                PRO LEVEL
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
// Main view structure mapping layer
</script>