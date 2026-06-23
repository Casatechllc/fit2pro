<template>
  <section id="testimonials" class="py-20 bg-pro-black px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-pro-mid-gray/20">
    <!-- Dynamic Ambient Grid Overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#141021_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-40 pointer-events-none z-0"></div>
    <div class="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-pro-gold/5 blur-[140px] rounded-full pointer-events-none z-0"></div>

    <div class="max-w-7xl mx-auto space-y-12 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-pro-mid-gray/20 pb-6">
        <div class="space-y-1 text-center md:text-left">
          <span class="text-xs font-display font-bold uppercase tracking-widest text-pro-gold">
            System Diagnostics
          </span>
          <h3 class="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
            VERIFIED PROOF LOGS
          </h3>
        </div>
        <p class="text-xs text-gray-400 font-sans text-center md:text-right max-w-xs">
          Uncut physiological verification data drops derived directly from the active client blueprint records.
        </p>
      </div>

      <!-- Testimonial Showcase List Loop -->
      <div class="space-y-12">
        <div 
          v-for="(log, idx) in testimonialsData" 
          :key="idx"
          class="premium-card rounded-3xl p-6 sm:p-10 border border-pro-mid-gray/40 bg-gradient-to-br from-pro-dark-gray via-pro-black to-pro-black grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          v-motion-fade-visible
        >
          <!-- IMAGE MODALITY VIEWER SIDE (Left Column: 4/12 Grid width) -->
          <div class="lg:col-span-4 w-full max-w-[340px] mx-auto lg:mx-0">
            <!-- Render custom split-slider if flag condition matches -->
            <BeforeAfterSlider 
              v-if="log.hasSlider"
              :before-img="log.beforeImg"
              :after-img="log.afterImg"
            />

            <!-- Standard Fallback static graphic presentation frame -->
            <div v-else class="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-pro-mid-gray/40 bg-black relative group">
              <NuxtImg 
                :src="log.imageSrc" 
                :alt="log.name"
                class="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05] transition-transform duration-500 group-hover:scale-102"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-pro-black to-transparent"></div>
            </div>
          </div>

          <!-- QUOTE/METADATA CONTENT SIDE (Right Column: 8/12 Grid width) -->
          <div class="lg:col-span-8 flex flex-col justify-between space-y-6 h-full py-2">
            <div class="space-y-4">
              <!-- Header Badges Line -->
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center gap-1 text-[9px] font-display font-black uppercase tracking-widest text-pro-black px-2.5 py-1 rounded bg-gradient-to-r from-pro-gold to-pro-gold-dark shadow-sm">
                  <i class="fa-solid fa-shield-halved text-[9px]"></i> {{ log.badge }}
                </span>
                <span class="text-[9px] font-mono text-gray-500 uppercase tracking-wider">verified_log_0{{ idx + 1 }}</span>
              </div>

              <!-- Main Transformation Quote Block -->
              <div class="relative">
                <span class="absolute -top-6 -left-4 text-5xl text-pro-purple-light/10 font-serif leading-none select-none">“</span>
                <blockquote class="text-sm sm:text-base text-gray-200 font-sans leading-relaxed tracking-wide italic relative z-10 pl-2">
                  "{{ log.quote }}"
                </blockquote>
              </div>
            </div>

            <!-- Profile Signature Footer Meta Blocks -->
            <div class="pt-6 border-t border-pro-mid-gray/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 class="text-base font-display font-black text-white uppercase tracking-wide leading-none">
                  {{ log.name }}
                </h4>
                <p class="text-[11px] font-sans text-pro-purple-light font-bold uppercase tracking-wider pt-1">
                  {{ log.role }}
                </p>
              </div>
              
              <!-- Subtle API Integrity Badge Signature -->
              <div class="text-[9px] font-mono text-gray-600 uppercase tracking-widest bg-pro-black/40 border border-pro-mid-gray/20 px-3 py-1.5 rounded-lg flex items-center gap-2 self-start sm:self-center">
                <span class="w-1 h-1 rounded-full bg-pro-gold animate-ping"></span>
                biometric_load_confirmed
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { testimonialsInfo } from '~/utils/testimonialsInfo'

const testimonialsData = ref(testimonialsInfo)
</script>