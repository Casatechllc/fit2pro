<template>
  <section id="latest-posts" class="py-16 bg-pro-black px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-pro-mid-gray/20">
    <div class="absolute top-1/4 right-0 w-[400px] h-[400px] bg-pro-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto space-y-10">
      
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-pro-mid-gray/20 pb-6">
        <div class="space-y-1 text-center sm:text-left">
          <span class="text-xs font-display font-bold uppercase tracking-widest text-pro-gold">
            Visual Grid
          </span>
          <h3 class="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
            RECENT TRANSMISSIONS
          </h3>
        </div>
        <div class="flex justify-center">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            class="px-4 py-2 bg-pro-dark-gray border border-pro-mid-gray hover:border-pro-purple-light hover:text-pro-purple-light rounded-xl text-xs font-display font-bold uppercase tracking-wider text-white transition-all flex items-center gap-2"
          >
            <i class="fa-brands fa-instagram text-sm"></i>
            Open Live Feed
          </a>
        </div>
      </div>

      <div v-if="pending" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 py-12">
        <div 
          v-for="n in 6" 
          :key="n" 
          class="aspect-square rounded-2xl bg-pro-dark-gray/40 border border-pro-mid-gray/20 animate-pulse flex items-center justify-center"
        >
          <i class="fa-solid fa-image text-pro-mid-gray text-xl"></i>
        </div>
      </div>

      <div v-else-if="error || !staticFeedArray.length" class="text-center py-16 bg-pro-dark-gray/25 border border-pro-mid-gray/20 rounded-3xl p-6">
        <div class="w-12 h-12 rounded-2xl bg-pro-black/40 border border-pro-mid-gray flex items-center justify-center text-gray-500 mx-auto mb-4">
          <i class="fa-solid fa-border-all"></i>
        </div>
        <p class="font-display font-bold text-white text-base uppercase tracking-wide">Static Feed Map Initialized</p>
        <p class="text-xs text-gray-500 font-sans mt-1 max-w-sm mx-auto">
          Connect your Instagram Developer token credentials to stream active grid media layers natively onto the dashboard interface.
        </p>
      </div>

      <div v-else class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <a 
          v-for="(post, index) in staticFeedArray" 
          :key="post.id"
          :href="post.permalink"
          target="_blank"
          rel="noopener"
          class="group relative aspect-square rounded-2xl overflow-hidden bg-pro-dark-gray border border-pro-mid-gray/40 shadow-xl transition-all duration-500 hover:scale-[1.03] hover:border-pro-purple-light/60"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 400, delay: index * 50 } }"
        >
          <img 
            :src="post.media_url" 
            :alt="post.caption || 'FIT2PRO Intelligence Drop'"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.8] group-hover:brightness-[0.5]"
            loading="lazy"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-pro-black via-pro-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10 pointer-events-none">
            <div class="flex justify-end text-white text-xs drop-shadow">
              <i v-if="post.media_type === 'CAROUSEL_ALBUM'" class="fa-solid fa-images"></i>
              <i v-else class="fa-solid fa-camera"></i>
            </div>
            
            <p class="text-[11px] text-gray-200 font-sans line-clamp-3 leading-snug">
              {{ post.caption || 'View full operational analysis drop on Instagram.' }}
            </p>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

// 1. CONFIGURATION CORE: Connect Michael's live generation token here
const instagramAccessToken = 'YOUR_LONG_LIVED_ACCESS_TOKEN_HERE'

// 2. META DATA PIPELINE FETCH
const { data: rawMediaFeed, pending, error } = await useFetch('https://graph.instagram.com/me/media', {
  query: {
    fields: 'id,caption,media_type,media_url,permalink',
    access_token: instagramAccessToken
  },
  server: false
})

// 3. MEDIA PARSER: Filters down to the latest 6 standard images/carousels (skipping video tags if needed)
const staticFeedArray = computed(() => {
  if (!rawMediaFeed.value?.data) return []
  
  return rawMediaFeed.value.data
    .filter(item => item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM')
    .slice(0, 6)
})
</script>