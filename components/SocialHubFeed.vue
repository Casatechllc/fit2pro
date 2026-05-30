<template>
  <section id="social-feed" class="py-16 bg-pro-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-pro-purple/5 blur-[140px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto space-y-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div class="lg:col-span-4 premium-card rounded-3xl p-4 border border-pro-mid-gray/40 bg-pro-dark-gray/20 flex flex-col justify-center relative overflow-hidden min-h-[580px]">
          <span class="w-full flex items-center gap-2 text-[10px] font-display font-black uppercase tracking-widest text-pro-gold mb-3 px-2">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Live High-Performance Feed
          </span>
          
          <div v-if="pending" class="w-full aspect-[9/16] rounded-2xl bg-pro-black/40 border border-pro-mid-gray/20 flex flex-col items-center justify-center text-gray-500 text-xs gap-3">
            <i class="fa-solid fa-circle-notch animate-spin text-xl text-pro-purple-light"></i>
            Syncing Intel Stream...
          </div>

          <div v-else-if="error || !videoStreamUrl" class="w-full aspect-[9/16] rounded-2xl bg-pro-black border border-pro-mid-gray/50 overflow-hidden relative flex flex-col justify-end p-6 group">
            <div class="absolute inset-0 z-0">
              <NuxtImg 
                src="/watermarked_img_13735354226153548343.png" 
                class="w-full h-full object-cover filter brightness-[0.3] contrast-[1.1]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-pro-black to-transparent"></div>
            </div>
            <div class="relative z-10 space-y-2 text-center sm:text-left">
              <p class="text-xs font-display font-bold text-white uppercase">API Link Initialized</p>
              <p class="text-[11px] text-gray-400 font-sans">Connect your Long-Lived User Token to stream raw portrait source fields natively.</p>
              <a :href="fallbackInstagramLink" target="_blank" class="inline-flex items-center gap-1.5 text-[11px] font-display font-bold uppercase tracking-wider text-pro-gold pt-2 hover:underline">
                View On Instagram <i class="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
              </a>
            </div>
          </div>

          <div v-else class="w-full aspect-[9/16] overflow-hidden rounded-2xl bg-black border border-pro-mid-gray/40 flex justify-center shadow-2xl relative group">
            <video
              :src="videoStreamUrl"
              class="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
              controls
              playsinline
              preload="metadata"
            ></video>
          </div>
        </div>

        <div class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 self-stretch h-full">
          
          <div class="premium-card rounded-3xl p-6 sm:p-8 border border-pro-mid-gray/40 flex flex-col justify-between bg-gradient-to-b from-pro-dark-gray to-pro-black/80 relative overflow-hidden min-h-[270px]">
            <span class="text-4xl text-pro-purple-light/20 font-serif leading-none select-none">“</span>
            <div class="space-y-4 my-auto">
              <blockquote class="font-display font-bold text-lg sm:text-xl text-white tracking-wide uppercase italic leading-snug">
                "Your physical state is the hard proof of your internal discipline. You cannot fake alignment under a heavy bar."
              </blockquote>
              <cite class="block font-sans text-xs uppercase tracking-widest text-pro-gold font-bold not-italic">
                — Coach Michael Billups
              </cite>
            </div>
            <div class="pt-4 border-t border-pro-mid-gray/20 flex items-center gap-2 text-[10px] text-gray-500 font-sans uppercase tracking-widest">
              <i class="fa-solid fa-cross text-[9px] text-pro-purple-light"></i> Faith &amp; Iron Series
            </div>
          </div>

          <div class="premium-card rounded-3xl p-6 sm:p-8 border border-pro-mid-gray/40 flex flex-col justify-between group min-h-[270px]">
            <div class="space-y-3">
              <span class="text-[10px] font-display font-bold uppercase tracking-widest text-pro-purple-light px-2 py-0.5 rounded bg-pro-purple/10">
                Briefing Caption
              </span>
              <h4 class="text-base font-display font-black text-white uppercase tracking-wide">
                Dynamic Transmission
              </h4>
              <p class="text-xs text-gray-400 font-sans leading-relaxed line-clamp-5">
                {{ videoCaption || 'Coach Michael breaks down raw tension leaks happening at the bottom range of your hinge phase. Stop starving your system down to baseline targets while attempting to push progressive force sets.' }}
              </p>
            </div>
            <div class="pt-4 flex items-center justify-between text-xs font-display font-bold tracking-wider uppercase text-gray-500 border-t border-pro-mid-gray/20">
              <span class="text-[11px]">Dynamic Analysis Logs</span>
              <i class="fa-solid fa-arrow-right text-pro-purple-light transform group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>

          <div class="sm:col-span-2 premium-card rounded-3xl p-6 sm:p-8 border border-pro-purple/30 bg-gradient-to-r from-pro-black via-[#161224] to-pro-black overflow-hidden relative flex flex-col justify-center min-h-[140px] group">
            <div class="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-pro-purple/10 to-transparent pointer-events-none"></div>
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center relative z-10">
              <div class="sm:col-span-8 space-y-1.5 text-center sm:text-left">
                <h4 class="text-lg sm:text-xl font-display font-black text-white uppercase tracking-wide">
                  Join The Blueprint Live On Instagram
                </h4>
                <p class="text-xs text-gray-400 font-sans leading-relaxed max-w-md">
                  Get instant access to Michael's daily story logs, active execution snapshots, and quick technique breakdowns right from the smartphone feed.
                </p>
              </div>
              <div class="sm:col-span-4 flex justify-center sm:justify-end">
                <a 
                  :href="fallbackInstagramLink"
                  target="_blank" 
                  rel="noopener"
                  class="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-pro-gold to-pro-gold-dark text-pro-black font-display font-black text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-transform duration-300 glow-gold text-center flex items-center justify-center gap-2"
                >
                  <i class="fa-brands fa-instagram text-sm"></i>
                  View on Instagram
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

// 1. CONFIGURATION BLOCK: Add Michael's long-lived Instagram Access Token here
// When transitioning to a local video later, swap videoStreamUrl computed variable to your local source file string.
const instagramAccessToken = 'YOUR_LONG_LIVED_ACCESS_TOKEN_HERE'
const fallbackInstagramLink = 'https://www.instagram.com/reel/DYlI_jfOcSD/'

// 2. FETCH PIPELINE: Queries the Meta graph endpoint safely for basic account node lists
const { data: feedData, pending, error } = await useFetch(`https://graph.instagram.com/me/media`, {
  query: {
    fields: 'id,caption,media_type,media_url,permalink,thumbnail_url',
    access_token: instagramAccessToken
  },
  server: false // Ensures processing executes safely on the client view window layout
})

// 3. COMPUTED TRANSFORMATION PARSERS
// Automatically falls back gracefully if token is missing or if the latest item isn't a video/Reel
const videoStreamUrl = computed(() => {
  if (!feedData.value?.data) return null
  // Find the first available raw video resource in his content history
  const latestVideo = feedData.value.data.find(item => item.media_type === 'VIDEO')
  return latestVideo ? latestVideo.media_url : null
})

const videoCaption = computed(() => {
  if (!feedData.value?.data) return null
  const latestVideo = feedData.value.data.find(item => item.media_type === 'VIDEO')
  return latestVideo ? latestVideo.caption : null
})
</script>