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
        class="w-full max-w-5xl bg-pro-dark-gray border border-pro-mid-gray/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[85vh] animate-in fade-in zoom-in-95 duration-300"
      >
        <div class="flex items-center justify-between p-4 sm:p-6 border-b border-pro-mid-gray/20 bg-pro-black/40">
          <div>
            <h4 class="text-base font-display font-black text-white uppercase tracking-wide">
              THE TACTICAL FUEL BLUEPRINT
            </h4>
            <p class="text-[10px] font-mono text-pro-gold uppercase tracking-wider mt-0.5">
              FIT2PRO Operations Manual v1.0 • Core Intel
            </p>
          </div>
          <button 
            @click="closeModal"
            class="w-8 h-8 rounded-xl border border-pro-mid-gray/20 bg-pro-dark-gray/40 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close nutrition guide"
          >
            <i class="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>

        <div class="flex-1 bg-zinc-900 relative">
          <iframe 
            src="/f2p-nutrition-guide.pdf#toolbar=1" 
            class="w-full h-full border-0"
            title="FIT2PRO Tactical Nutrition Blueprint Guide"
          ></iframe>
        </div>

        <div class="p-4 sm:p-6 bg-pro-black/60 border-t border-pro-mid-gray/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p class="text-[11px] text-gray-400 font-sans leading-relaxed max-w-md text-center sm:text-left">
            If the interactive tracking map viewer isn't loading natively on your mobile framework device, click the action hub button to drop the asset straight into your local file system.
          </p>

          <a 
            href="/f2p-nutrition-guide.pdf"
            download="FIT2PRO-Tactical-Nutrition-Guide.pdf"
            class="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-pro-gold to-pro-gold-dark text-pro-black font-display font-black text-xs uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 text-center flex items-center justify-center gap-2 shadow-lg cursor-pointer select-none"
          >
            <i class="fa-solid fa-cloud-arrow-down text-sm"></i>
            Download PDF File
          </a>
        </div>

      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isOpen: { type: Boolean, required: true }
})

const emit = defineEmits(['close'])
const closeModal = () => emit('close')
</script>