<template>
  <section id="contact" class="py-20 bg-pro-black px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-pro-mid-gray/20">
    <!-- Ambient Layout Glow System Accents -->
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pro-purple/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
    <div class="absolute top-1/4 left-0 w-[300px] h-[300px] bg-pro-gold/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
      
      <!-- BUSINESS INFO / CHANNELS PANEL (Left Side: 5 Columns) -->
      <div class="lg:col-span-5 space-y-8" v-motion-fade-visible>
        <div class="space-y-2 text-center sm:text-left">
          <span class="text-xs font-display font-bold uppercase tracking-widest text-pro-purple-light">
            Communications Control
          </span>
          <h3 class="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
            INITIATE CONTACT
          </h3>
          <p class="text-xs text-gray-400 font-sans leading-relaxed max-w-sm pt-1">
            Connect directly with our operations team to secure your enrollment slot or map target tracking coordinates.
          </p>
        </div>

        <!-- Contact Links Group -->
        <div class="space-y-4">
          <!-- PHONE LINK (Using rawPhone for mobile execution hooks) -->
          <a 
            :href="`tel:${info.rawPhone}`"
            class="premium-card flex items-center gap-4 p-4 rounded-2xl border border-pro-mid-gray/40 bg-pro-dark-gray/20 hover:border-pro-gold/40 hover:bg-pro-black transition-all group"
          >
            <div class="w-10 h-10 rounded-xl bg-pro-gold/10 border border-pro-gold/20 flex items-center justify-center text-pro-gold text-sm group-hover:bg-pro-gold/20 transition-colors">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div>
              <p class="text-[10px] font-display font-black uppercase tracking-widest text-gray-500">Secure Comms Line</p>
              <p class="text-xs font-mono font-bold text-white tracking-wide pt-0.5">{{ info.phone }}</p>
            </div>
          </a>

          <!-- EMAIL CONNECTION -->
          <a 
            :href="`mailto:${info.email}`"
            class="premium-card flex items-center gap-4 p-4 rounded-2xl border border-pro-mid-gray/40 bg-pro-dark-gray/20 hover:border-pro-purple-light/40 hover:bg-pro-black transition-all group"
          >
            <div class="w-10 h-10 rounded-xl bg-pro-purple/10 border border-pro-purple/20 flex items-center justify-center text-pro-purple-light text-sm group-hover:bg-pro-purple/20 transition-colors">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div>
              <p class="text-[10px] font-display font-black uppercase tracking-widest text-gray-500">Digital Transmission</p>
              <p class="text-xs font-mono font-bold text-white tracking-wide pt-0.5">{{ info.email }}</p>
            </div>
          </a>

          <!-- GEOGRAPHIC DEPLOYMENT LOCATION -->
          <a 
            :href="info.mapLink"
            target="_blank"
            rel="noopener"
            class="premium-card flex items-center gap-4 p-4 rounded-2xl border border-pro-mid-gray/40 bg-pro-dark-gray/20 hover:border-pro-purple-light/40 hover:bg-pro-black transition-all group"
          >
            <div class="w-10 h-10 rounded-xl bg-pro-purple/10 border border-pro-purple/20 flex items-center justify-center text-pro-purple-light text-sm group-hover:bg-pro-purple/20 transition-colors">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-[10px] font-display font-black uppercase tracking-widest text-gray-500">Operations Field Grounds</p>
              <p class="text-xs font-display font-bold text-white uppercase truncate pt-0.5">Wilbur Cross Track</p>
              <p class="text-[10px] text-gray-500 font-sans truncate">{{ info.address }}</p>
            </div>
          </a>

          <!-- INSTAGRAM HUB LINK -->
          <a 
            :href="info.instagramLink"
            target="_blank"
            rel="noopener"
            class="premium-card flex items-center gap-4 p-4 rounded-2xl border border-pro-mid-gray/40 bg-pro-dark-gray/20 hover:border-pro-gold/40 hover:bg-pro-black transition-all group"
          >
            <div class="w-10 h-10 rounded-xl bg-pro-gold/10 border border-pro-gold/20 flex items-center justify-center text-pro-gold text-sm group-hover:bg-pro-gold/20 transition-colors">
              <i class="fa-brands fa-instagram text-base"></i>
            </div>
            <div>
              <p class="text-[10px] font-display font-black uppercase tracking-widest text-gray-500">Live Intel Stream</p>
              <p class="text-xs font-mono font-bold text-pro-gold tracking-wide pt-0.5">{{ info.instagramHandle }}</p>
            </div>
          </a>
        </div>
      </div>

      <!-- REUSABLE FORM INTERFACE GRID (Right Side: 7 Columns) -->
      <div 
        class="lg:col-span-7 premium-card rounded-3xl p-6 sm:p-10 border border-pro-mid-gray/40 bg-gradient-to-br from-pro-dark-gray to-pro-black/80 shadow-2xl relative"
        v-motion-fade-visible
      >
        <div class="mb-6 space-y-1">
          <h4 class="text-base font-display font-black text-white uppercase tracking-wider">Submit Enrollment Briefing</h4>
          <p class="text-[11px] text-gray-500 font-sans">All submitted diagnostic data fields are routed directly to central coaching staff profiles.</p>
        </div>

        <!-- Instantiating the clean, decoupled form input component layout block -->
        <ContactForm @submitBriefing="handleFormSubmission" />
      </div>

    </div>
  </section>
</template>

<script setup>
// Importing your dynamic business metadata mapping layer securely
import { businessInfo } from '~/utils/businessInfo'

const info = businessInfo

const handleFormSubmission = (payload) => {
  // Capture data structure emitted from child component for future SQL database/API setups
  console.log('Secure Contact Briefing Received:', payload)
}
</script>