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
        <div class="md:col-span-7 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[500px] group/media">
          <video 
            v-if="post.media_type === 'VIDEO'"
            ref="videoPlayer"
            :key="`vid-${post.id}`"
            :src="post.media_url"
            autoplay
            controls
            playsinline
            loop
            class="w-full h-full object-contain max-h-[45vh] md:max-h-[80vh]"
          ></video>

          <img 
            v-else
            :key="`img-${post.id}`"
            :src="post.media_url" 
            :alt="post.caption || 'FIT2PRO Intelligence Drop'" 
            class="w-full h-full object-contain max-h-[45vh] md:max-h-[80vh]"
          />

          <button
            v-if="hasPrev"
            @click.stop="navigateFeed(-1)"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-pro-black/80 border border-pro-mid-gray/40 text-white hover:text-pro-gold hover:border-pro-gold/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover/media:opacity-100 transition-all z-20 backdrop-blur-sm shadow-xl"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>

          <button
            v-if="hasNext"
            @click.stop="navigateFeed(1)"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-pro-black/80 border border-pro-mid-gray/40 text-white hover:text-pro-gold hover:border-pro-gold/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover/media:opacity-100 transition-all z-20 backdrop-blur-sm shadow-xl"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>

          <div class="absolute top-4 left-4 px-2.5 py-1 rounded bg-pro-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono uppercase tracking-widest text-white z-20">
            <i v-if="post.media_type === 'VIDEO'" class="fa-solid fa-video text-pro-purple-light mr-1"></i>
            <i v-else-if="post.media_type === 'CAROUSEL_ALBUM'" class="fa-solid fa-images text-pro-gold mr-1"></i>
            <i v-else class="fa-solid fa-camera text-gray-400 mr-1"></i>
            {{ post.media_type }}
          </div>
        </div>

        <div class="md:col-span-5 flex flex-col justify-between max-h-[45vh] md:max-h-[80vh] bg-pro-black/40 border-t md:border-t-0 md:border-l border-pro-mid-gray/20">
          
          <div class="p-4 border-b border-pro-mid-gray/20 flex items-center justify-between bg-pro-black/20">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-pro-purple via-pro-gold to-pro-purple-light p-[1.5px] shadow-lg">
                <div class="w-full h-full rounded-full bg-slate-800 overflow-hidden flex items-center justify-center">
                  <img 
                    src="/images/fit2pro-logo-small.png" 
                    alt="FIT2PRO Logo" 
                    class="w-full h-full object-cover filter contrast-[1.1]"
                  />
                </div>
              </div>
              <div>
                <p class="text-xs font-display font-black text-white tracking-wide uppercase">@fit2pro</p>
                <p class="text-[9px] font-sans text-gray-500">Verified Feed Data Stream</p>
              </div>
            </div>
            <button @click="closeModal" class="text-gray-500 hover:text-white transition-colors p-1">
              <i class="fa-solid fa-xmark text-sm"></i>
            </button>
          </div>

          <div class="flex border-b border-pro-mid-gray/10 text-center bg-pro-black/10">
            <button 
              @click="activeTab = 'comments'"
              :class="activeTab === 'comments' ? 'border-b-2 border-pro-gold text-white font-black' : 'text-gray-500'"
              class="flex-1 py-2.5 text-[10px] font-display uppercase tracking-wider transition-colors"
            >
              <i class="fa-solid fa-comments mr-1 text-[11px]"></i> Comments ({{ post.comments_count || computedComments.length }})
            </button>
            <button 
              @click="activeTab = 'likes'"
              :class="activeTab === 'likes' ? 'border-b-2 border-pro-gold text-white font-black' : 'text-gray-500'"
              class="flex-1 py-2.5 text-[10px] font-display uppercase tracking-wider transition-colors"
            >
              <i class="fa-solid fa-heart mr-1 text-[11px]"></i> Likes ({{ post.like_count || dynamicLikeSeed }})
            </button>
          </div>

          <div class="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            
            <div v-if="activeTab === 'comments'" class="space-y-4">
              <div class="flex items-start gap-3 pb-4 border-b border-pro-mid-gray/10">
                <div class="w-7 h-7 rounded-full bg-pro-dark-gray overflow-hidden flex-shrink-0 border border-pro-mid-gray/40">
                  <img src="/images/fit2pro-logo-small.png" class="w-full h-full object-cover bg-slate-800" />
                </div>
                <div class="text-xs font-sans text-gray-300 leading-relaxed pt-0.5">
                  <span class="font-display font-black text-white uppercase tracking-wide mr-1.5">@fit2pro</span>
                  {{ post.caption || 'Operational tracking drop launched from central control.' }}
                </div>
              </div>

              <div class="space-y-3">
                <div 
                  v-for="(comment, cIdx) in computedComments" 
                  :key="cIdx"
                  class="flex items-start gap-3 bg-pro-dark-gray/20 p-3 rounded-xl border border-pro-mid-gray/10"
                >
                  <div class="w-7 h-7 rounded-full bg-gradient-to-br from-pro-purple/20 to-pro-dark-gray border border-pro-purple/30 flex items-center justify-center text-[9px] text-pro-purple-light font-mono font-bold flex-shrink-0 uppercase">
                    {{ comment.username.charAt(0) }}
                  </div>
                  <div class="flex-1 min-w-0 font-sans text-xs">
                    <div class="flex items-center justify-between">
                      <p class="text-[10px] font-display font-black text-pro-gold uppercase tracking-wider truncate">{{ comment.username }}</p>
                      <span class="text-[8px] font-mono text-gray-600 uppercase whitespace-nowrap">{{ comment.time }}</span>
                    </div>
                    <p class="text-gray-400 mt-0.5 leading-normal">{{ comment.text }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div v-else-if="activeTab === 'likes'" class="space-y-2.5 pt-1">
              <p class="text-[9px] font-display font-black text-pro-purple-light uppercase tracking-widest mb-2">Registered Athlete Profile Signals</p>
              
              <div 
                v-for="(user, lIdx) in computedLikesList" 
                :key="lIdx"
                class="flex items-center gap-3 p-2 rounded-xl bg-pro-dark-gray/20 border border-pro-mid-gray/10"
              >
                <div class="w-7 h-7 rounded-full bg-gradient-to-br from-pro-dark-gray to-pro-black border border-pro-mid-gray/40 flex items-center justify-center text-[10px] text-gray-400 font-mono font-bold uppercase">
                  {{ user.charAt(0) }}
                </div>
                <div>
                  <p class="text-[11px] font-display font-bold text-white uppercase tracking-wide leading-none">{{ user }}</p>
                  <p class="text-[9px] font-sans text-gray-600">Marked as active athlete</p>
                </div>
              </div>
            </div>

          </div>

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
  post: { type: Object, required: true },
  feed: { type: Array, required: true }
})

const emit = defineEmits(['close', 'update:post'])

const videoPlayer = ref(null)
const activeTab = ref('comments')
const dynamicLikeSeed = ref(34)

const mockCommentsPool = [
  { username: 'athlete_alpha', text: 'This interval sequence completely transformed my running mechanics on track turns.', time: '2h' },
  { username: 'biomech_crew', text: 'Clean progressive output load here Michael! Absolute textbook form.', time: '4h' },
  { username: 'track_sovereign', text: 'Shattered my baseline pacing parameter timings following this conditioning map.', time: '1d' },
  { username: 'elite_engine', text: 'Unbelievable structural control during your hinge phases coach.', time: '2d' },
  { username: 'haven_runner', text: 'Are these running sessions open enrollment for next Saturday as well?', time: '3d' }
]

// Expanded pool to handle a wider variation of rendered names cleanly
const mockUsersPool = [
  'athlete_alpha', 'biomech_crew', 'track_sovereign', 'elite_engine', 'haven_runner', 
  'connecticut_shred', 'power_volume', 'force_mechanics', 'pacing_lead', 'tactical_loadout',
  'speed_mechanic', 'apex_athlete', 'run_hnh', 'steel_alignment', 'cardio_beast',
  'newhaven_crew', 'vitals_track', 'alpha_hinge', 'kinetic_chain', 'pacing_strategy'
]

const computedComments = computed(() => {
  if (!props.post?.id) return []
  const shiftIndex = parseInt(props.post.id.slice(-1)) || 0
  const count = (props.post.comments_count) ? Math.max(2, props.post.comments_count) : 3
  
  const selectedComments = []
  for (let i = 0; i < count; i++) {
    selectedComments.push(mockCommentsPool[(shiftIndex + i) % mockCommentsPool.length])
  }
  return selectedComments
})

// RE-ENGINEERED: Generates a complete list matching the high count values without a small math cap
const computedLikesList = computed(() => {
  if (!props.post?.id) return []
  
  // Use a fallback number if the API hasn't populated data (e.g. 45-80 likes)
  const totalLikesCount = props.post.like_count || dynamicLikeSeed.value
  
  // Cap the visual scrolling list at a reasonable UI length (e.g., max 25 users) 
  // so the container doesn't scroll endlessly, while still looking heavily populated
  const displayLimit = Math.min(25, totalLikesCount)
  
  const shiftIndex = parseInt(props.post.id.slice(-2)) || 0
  const likedUsers = []
  
  for (let i = 0; i < displayLimit; i++) {
    // Cycles seamlessly through user pools based on unique post keys
    likedUsers.push(mockUsersPool[(shiftIndex + i) % mockUsersPool.length])
  }
  return likedUsers
})

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
  if (videoPlayer.value && props.post?.media_type === 'VIDEO') {
    videoPlayer.value.load()
    videoPlayer.value.play().catch(err => {
      console.warn('Native video autoplay rule intercepted:', err)
    })
  }
}

watch(() => props.post, (newPost) => {
  if (newPost?.id) {
    // Generate a higher dynamic baseline for the fallback number (e.g., between 40 and 110 likes)
    dynamicLikeSeed.value = (parseInt(newPost.id.slice(-2)) || 42) + 45
    activeTab.value = 'comments'
    handleVideoPlayback()
  }
})

watch(() => props.isOpen, (newVal) => {
  if (newVal) handleVideoPlayback()
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.1); }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 9px; }
</style>