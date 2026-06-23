<template>
  <section id="social-feed" class="py-16 bg-pro-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-pro-purple/5 blur-[140px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto space-y-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div class="lg:col-span-4 premium-card rounded-3xl p-4 border border-pro-mid-gray/40 bg-pro-dark-gray/20 flex flex-col justify-center relative overflow-hidden min-h-[580px]">
          <span class="w-full flex items-center justify-between text-[10px] font-display font-black uppercase tracking-widest text-pro-gold mb-3 px-2">
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Live Intel Stream
            </span>
            <span v-if="videos.length > 0" class="text-gray-500">
              LOG {{ currentVideoIndex + 1 }} / {{ videos.length }}
            </span>
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

          <div v-else class="w-full flex flex-col gap-4">
            <div 
              ref="swipeTarget" 
              class="w-full aspect-[9/16] overflow-hidden rounded-2xl bg-black border border-pro-mid-gray/40 flex justify-center shadow-2xl relative group touch-pan-y"
            >
              <video
                ref="videoPlayer"
                :key="videoStreamUrl"
                :src="videoStreamUrl"
                class="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
                controls
                playsinline
                preload="auto"
              ></video>
            </div>

            <div class="flex items-center justify-between px-2">
              <button 
                @click="prevVideo" 
                :disabled="currentVideoIndex === 0"
                class="w-10 h-10 rounded-xl border border-pro-mid-gray/40 bg-pro-dark-gray/40 text-white flex items-center justify-center hover:bg-pro-purple/20 hover:border-pro-purple-light/40 active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none group"
                aria-label="Previous newer video"
              >
                <i class="fa-solid fa-arrow-left text-xs transform group-hover:-translate-x-0.5 transition-transform"></i>
              </button>

              <span class="text-[10px] font-display font-bold text-gray-400 tracking-widest uppercase select-none">
                Swipe or Browse
              </span>

              <button 
                @click="nextVideo" 
                :disabled="currentVideoIndex === videos.length - 1"
                class="w-10 h-10 rounded-xl border border-pro-mid-gray/40 bg-pro-dark-gray/40 text-white flex items-center justify-center hover:bg-pro-purple/20 hover:border-pro-purple-light/40 active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none group"
                aria-label="Next older video"
              >
                <i class="fa-solid fa-arrow-right text-xs transform group-hover:translate-x-0.5 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 self-stretch h-full">
          
          <div class="premium-card rounded-3xl p-6 sm:p-8 border border-pro-mid-gray/40 flex flex-col justify-between group min-h-[270px] relative overflow-hidden bg-gradient-to-br from-pro-dark-gray via-pro-black to-pro-black">
            <div class="absolute -top-6 -right-6 text-pro-mid-gray/5 text-8xl pointer-events-none font-black">
              <i class="fa-brands fa-instagram"></i>
            </div>

            <div class="space-y-3 relative z-10">
              <div class="flex items-center justify-between">
                <span class="inline-flex items-center gap-1.5 text-[10px] font-display font-black uppercase tracking-widest text-white px-2.5 py-1 rounded-lg bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#cc2366] shadow-sm">
                  <i class="fa-brands fa-instagram text-xs"></i>
                  Instagram Feed
                </span>
                <span class="text-[9px] font-mono text-gray-500 uppercase tracking-wider">@fit2pro</span>
              </div>
              
              <h4 class="text-base font-display font-black text-white uppercase tracking-wide pt-1">
                Dynamic Transmission
              </h4>
              <p class="text-xs text-gray-300 font-sans leading-relaxed line-clamp-5">
                {{ videoCaption || 'Coach Michael breaks down raw tension leaks happening at the bottom range of your hinge phase. Stop starving your system down to baseline targets while attempting to push progressive force sets.' }}
              </p>
            </div>
            
            <div class="pt-4 flex items-center justify-between text-xs font-display font-bold tracking-wider uppercase text-gray-500 border-t border-pro-mid-gray/20 relative z-10">
              <span class="text-[10px] font-sans lowercase tracking-tight text-pro-purple-light flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-pro-purple-light"></span>
                meta.graph_api_stream
              </span>
              <a :href="videoPermalink || fallbackInstagramLink" target="_blank" class="text-gray-400 hover:text-pro-purple-light transition-colors flex items-center gap-1.5 text-[11px]">
                Open Post <i class="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
              </a>
            </div>
          </div>

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
                  :href="videoPermalink || fallbackInstagramLink"
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
import { ref, computed, nextTick } from 'vue'
import { useSwipe } from '@vueuse/core'

// 1. DYNAMIC CONFIGURATION LAYER
const config = useRuntimeConfig()
const instagramAccessToken = config.public.instagramAccessToken
const fallbackInstagramLink = 'https://www.instagram.com/fit2pro/'

// 2. STATE LOGIC & DOM REFS
const currentVideoIndex = ref(0)
const videoPlayer = ref(null)
const swipeTarget = ref(null)

// 3. FETCH PIPELINE
const { data: feedData, pending, error } = await useFetch(`https://graph.instagram.com/me/media`, {
  query: {
    fields: 'id,caption,media_type,media_url,permalink,thumbnail_url',
    access_token: instagramAccessToken
  },
  server: false 
})

// 4. COMPUTED SOURCE PARSERS
const videos = computed(() => {
  if (!feedData.value?.data) return []
  return feedData.value.data.filter(item => item.media_type === 'VIDEO')
})

const videoStreamUrl = computed(() => {
  if (videos.value.length === 0) return null
  return videos.value[currentVideoIndex.value]?.media_url || null
})

const videoCaption = computed(() => {
  if (videos.value.length === 0) return null
  return videos.value[currentVideoIndex.value]?.caption || null
})

const videoPermalink = computed(() => {
  if (videos.value.length === 0) return null
  return videos.value[currentVideoIndex.value]?.permalink || null
})

// 5. AUTO-PLAY TRACKING UTILITY
const handleVideoAutoplay = async () => {
  await nextTick()
  if (videoPlayer.value) {
    try {
      videoPlayer.value.load()
      await videoPlayer.value.play()
    } catch (err) {
      console.warn("Autoplay execution blocked:", err)
    }
  }
}

// 6. NAVIGATION METHODS
const nextVideo = () => {
  if (currentVideoIndex.value < videos.value.length - 1) {
    currentVideoIndex.value++
    handleVideoAutoplay()
  }
}

const prevVideo = () => {
  if (currentVideoIndex.value > 0) {
    currentVideoIndex.value--
    handleVideoAutoplay()
  }
}

// 7. TOUCH GESTURE INTERCEPTION LAYER
const { isSwiping, direction } = useSwipe(swipeTarget, {
  threshold: 40,
  onSwipeEnd: (e, direction) => {
    if (direction === 'left') {
      nextVideo()
    } else if (direction === 'right') {
      prevVideo()
    }
  }
})
</script>