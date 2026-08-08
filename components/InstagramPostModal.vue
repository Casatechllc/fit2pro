<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isOpen && post" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pro-black/90 backdrop-blur-md"
      @click.self="closeModal"
    >
      <div 
        class="w-full max-w-4xl bg-pro-dark-gray/95 border border-pro-mid-gray/40 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[80vh] animate-in fade-in zoom-in-95 duration-300 relative"
      >
        <!-- MEDIA DISPLAY CONTAINER -->
        <div class="md:col-span-7 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[500px] group/media">
          
          <!-- MODE A: Direct MP4 exists -> Play Native Video -->
          <video 
            v-if="post.hasDirectMp4 || (post.media_type === 'VIDEO' && post.videoUrl)"
            ref="videoPlayer"
            :key="`vid-${post.id}`"
            :src="post.videoUrl || post.media_url"
            :poster="post.posterUrl || post.thumbnail_url"
            autoplay
            controls
            muted
            playsinline
            loop
            class="w-full h-full object-contain max-h-[45vh] md:max-h-[80vh]"
          ></video>

          <!-- MODE B: Fallback Image or Reel Poster -->
          <div v-else class="relative w-full h-full flex items-center justify-center group/reel bg-pro-black">
            <img 
              :key="`img-${post.id}`"
              :src="post.posterUrl || post.media_url" 
              :alt="post.caption || 'FIT2PRO Post'" 
              class="w-full h-full object-contain max-h-[45vh] md:max-h-[80vh] filter brightness-[0.85]"
            />
            <a 
              v-if="post.media_type === 'VIDEO' && !post.hasDirectMp4"
              :href="post.permalink || fallbackInstagramLink" 
              target="_blank" 
              rel="noopener"
              class="absolute inset-0 bg-pro-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 text-white transition-all group-hover/reel:bg-pro-black/60"
            >
              <div class="w-14 h-14 rounded-full bg-pro-gold text-pro-black flex items-center justify-center text-xl shadow-2xl group-hover/reel:scale-110 transition-transform">
                <i class="fa-solid fa-play ml-1"></i>
              </div>
              <span class="text-xs font-display font-black uppercase tracking-widest text-pro-gold bg-pro-black/80 px-3 py-1.5 rounded-xl border border-pro-gold/30 shadow-lg">
                Watch Reel on Instagram <i class="fa-solid fa-arrow-up-right-from-square ml-1 text-[10px]"></i>
              </span>
            </a>
          </div>

          <!-- Feed Navigation Controls -->
          <button
            v-if="hasPrev"
            @click.stop="navigateFeed(-1)"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-pro-black/80 border border-pro-mid-gray/40 text-white hover:text-pro-gold hover:border-pro-gold/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover/media:opacity-100 transition-all z-20 backdrop-blur-sm shadow-xl cursor-pointer"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>

          <button
            v-if="hasNext"
            @click.stop="navigateFeed(1)"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-pro-black/80 border border-pro-mid-gray/40 text-white hover:text-pro-gold hover:border-pro-gold/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover/media:opacity-100 transition-all z-20 backdrop-blur-sm shadow-xl cursor-pointer"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>

          <div class="absolute top-4 left-4 px-2.5 py-1 rounded bg-pro-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono uppercase tracking-widest text-white z-20">
            <i v-if="post.media_type === 'VIDEO'" class="fa-solid fa-video text-pro-purple-light mr-1"></i>
            <i v-else-if="post.media_type === 'CAROUSEL_ALBUM'" class="fa-solid fa-images text-pro-gold mr-1"></i>
            <i v-else class="fa-solid fa-camera text-gray-400 mr-1"></i>
            {{ post.media_type || 'POST' }}
          </div>
        </div>

        <!-- SIDEBAR DETAILS -->
        <div class="md:col-span-5 flex flex-col justify-between max-h-[45vh] md:max-h-[80vh] bg-pro-black/40 border-t md:border-t-0 md:border-l border-pro-mid-gray/20">
          
          <!-- Header Bar -->
          <div class="p-4 border-b border-pro-mid-gray/20 flex items-center justify-between bg-pro-black/20">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-pro-purple via-pro-gold to-pro-purple-light p-[1.5px] shadow-lg">
                <div class="w-full h-full rounded-full bg-slate-800 overflow-hidden flex items-center justify-center">
                  <img 
                    src="/fit2pro-logo.png" 
                    alt="FIT2PRO Logo" 
                    class="w-full h-full object-cover filter contrast-[1.1]"
                  />
                </div>
              </div>
              <div>
                <p class="text-xs font-display font-black text-white tracking-wide uppercase">@fit2pro</p>
                <p class="text-[9px] font-sans text-gray-500">Verified Instagram Feed</p>
              </div>
            </div>
            <button @click="closeModal" class="text-gray-500 hover:text-white transition-colors p-1 cursor-pointer">
              <i class="fa-solid fa-xmark text-sm"></i>
            </button>
          </div>

          <!-- Scrollable Content View -->
          <div class="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            
            <!-- Engagement Metrics Bar -->
            <div class="p-3 bg-pro-dark-gray/30 rounded-2xl border border-pro-mid-gray/20 flex items-center justify-around text-xs font-display font-bold">
              <div class="flex items-center gap-2 text-white">
                <i class="fa-solid fa-heart text-pro-gold"></i>
                <span>{{ actualLikesCount }} Likes</span>
              </div>
              <div class="w-px h-4 bg-pro-mid-gray/30"></div>
              <div class="flex items-center gap-2 text-white">
                <i class="fa-solid fa-comments text-pro-purple-light"></i>
                <span>{{ actualCommentsCount }} Comments</span>
              </div>
            </div>

            <!-- Original Post Caption -->
            <div class="flex items-start gap-3 pt-2">
              <div class="w-7 h-7 rounded-full bg-pro-dark-gray overflow-hidden flex-shrink-0 border border-pro-mid-gray/40">
                <img src="/fit2pro-logo.png" class="w-full h-full object-cover bg-slate-800" />
              </div>
              <div class="text-xs font-sans text-gray-300 leading-relaxed pt-0.5">
                <span class="font-display font-black text-white uppercase tracking-wide mr-1.5">@fit2pro</span>
                {{ post.caption || 'No caption provided.' }}
              </div>
            </div>

          </div>

          <!-- Footer CTAs -->
          <div class="p-4 border-t border-pro-mid-gray/20 bg-pro-black/60 space-y-3">
            <div class="grid grid-cols-2 gap-2">
              <a 
                :href="post.permalink"
                target="_blank"
                rel="noopener"
                class="px-3 py-2.5 bg-pro-dark-gray hover:bg-pro-mid-gray border border-pro-mid-gray/60 text-white rounded-xl text-[10px] font-display font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 text-center"
              >
                <i class="fa-solid fa-comment text-[10px] text-pro-purple-light"></i>
                Add Comment
              </a>
              <a 
                :href="post.permalink"
                target="_blank"
                rel="noopener"
                class="px-3 py-2.5 bg-gradient-to-r from-pro-gold to-pro-gold-dark text-pro-black rounded-xl text-[10px] font-display font-black uppercase tracking-wider transition-transform hover:scale-[1.02] duration-300 flex items-center justify-center gap-1.5 text-center shadow-md"
              >
                <i class="fa-brands fa-instagram text-xs"></i>
                View Post
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, nextTick, computed } from 'vue'

const props = defineProps({
  isOpen: { type: Boolean, required: true },
  post: { type: [Object, null], default: null },
  feed: { type: Array, required: true }
})

const emit = defineEmits(['close', 'update:post'])

const fallbackInstagramLink = 'https://www.instagram.com/fit2pro/'
const videoPlayer = ref(null)

// ACCURATE COUNTS FROM API
const actualLikesCount = computed(() => props.post?.like_count ?? 0)
const actualCommentsCount = computed(() => props.post?.comments_count ?? 0)

const currentIndex = computed(() => {
  if (!props.feed || !props.post) return -1
  return props.feed.findIndex(item => item.id === props.post.id)
})

const hasPrev = computed(() => currentIndex.value > 0)
const hasNext = computed(() => props.feed && currentIndex.value < props.feed.length - 1)

const closeModal = () => emit('close')

const navigateFeed = (direction) => {
  const nextTargetIndex = currentIndex.value + direction
  if (props.feed && nextTargetIndex >= 0 && nextTargetIndex < props.feed.length) {
    emit('update:post', props.feed[nextTargetIndex])
  }
}

const handleVideoPlayback = async () => {
  await nextTick()
  if (videoPlayer.value && (props.post?.hasDirectMp4 || props.post?.videoUrl)) {
    try {
      videoPlayer.value.muted = true
      const playPromise = videoPlayer.value.play()
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          if (err.name !== 'AbortError') {
            console.warn('Native video autoplay rule intercepted:', err)
          }
        })
      }
    } catch (e) {}
  }
}

watch(() => props.post, (newPost) => {
  if (newPost?.id) {
    handleVideoPlayback()
  }
}, { immediate: true })

watch(() => props.isOpen, (newVal) => {
  if (newVal && props.post) {
    handleVideoPlayback()
  }
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.1); }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 9px; }
</style>