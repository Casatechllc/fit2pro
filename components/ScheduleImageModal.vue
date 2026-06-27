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
      v-if="isOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pro-black/90 backdrop-blur-md"
      @click.self="closeModal"
    >
      <div 
        class="w-full max-w-3xl bg-pro-dark-gray/95 border border-pro-mid-gray/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-300"
      >
        <div class="flex items-center justify-between p-4 sm:p-6 border-b border-pro-mid-gray/20 bg-pro-black/40">
          <div>
            <h4 class="text-base font-display font-black text-white uppercase tracking-wide">
              {{ session.title }}
            </h4>
            <p class="text-[10px] font-mono text-pro-gold uppercase tracking-wider mt-0.5">
              {{ session.type }} Location Map Visual
            </p>
          </div>
          <button 
            @click="closeModal"
            class="w-8 h-8 rounded-xl border border-pro-mid-gray/20 bg-pro-dark-gray/40 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close image layout"
          >
            <i class="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>

        <div class="bg-black relative overflow-hidden flex justify-center items-center max-h-[50vh] sm:max-h-[60vh]">
          <NuxtImg 
            :src="session.imageSrc" 
            :alt="session.title"
            class="w-full h-full object-contain"
          />
        </div>

        <div class="p-6 bg-pro-black/60 border-t border-pro-mid-gray/20 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          <div class="sm:col-span-7 space-y-1">
            <p class="text-xs font-display font-black text-white uppercase tracking-wide flex items-center gap-1.5">
              <i class="fa-solid fa-location-dot text-pro-purple-light text-[11px]"></i>
              {{ session.locationName }}
            </p>
            <p class="text-[11px] text-gray-400 font-sans leading-normal">
              {{ session.address }}
            </p>
          </div>

          <div class="sm:col-span-5 flex justify-end">
            <a 
              :href="session.mapLink" 
              target="_blank"
              rel="noopener"
              class="w-full py-3.5 bg-gradient-to-r from-pro-gold to-pro-gold-dark text-pro-black font-display font-black text-xs uppercase tracking-widest rounded-xl hover:scale-[1.02] transition-transform duration-300 text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <i class="fa-solid fa-map-location-dot text-[11px]"></i>
              Get Field Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isOpen: { type: Boolean, required: true },
  session: { type: Object, required: true }
})

const emit = defineEmits(['close'])
const closeModal = () => emit('close')
</script>