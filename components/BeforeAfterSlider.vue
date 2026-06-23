<template>
  <div 
    class="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-pro-mid-gray/40 bg-pro-black shadow-2xl select-none"
    @mousemove="handleMove"
    @touchmove="handleMove"
  >
    <!-- AFTER IMAGE (Base Layer) -->
    <div class="absolute inset-0 w-full h-full">
      <img 
        :src="afterImg" 
        alt="After Transformation" 
        class="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
        draggable="false"
      />
      <!-- Dynamic Brand Indicator Badges -->
      <span class="absolute bottom-4 right-4 z-10 px-2 py-1 rounded bg-pro-black/80 border border-pro-purple/30 text-[9px] font-mono uppercase tracking-widest text-pro-purple-light backdrop-blur-sm">
        AFTER SYSTEM ACCAPTANCE
      </span>
    </div>

    <!-- BEFORE IMAGE (Overlay Layer - Clipped) -->
    <div 
      class="absolute inset-0 w-full h-full overflow-hidden"
      :style="{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }"
    >
      <img 
        :src="beforeImg" 
        alt="Before Transformation" 
        class="w-full h-full object-cover filter brightness-[0.75] contrast-[0.95]"
        draggable="false"
      />
      <span class="absolute bottom-4 left-4 z-10 px-2 py-1 rounded bg-pro-black/80 border border-pro-mid-gray/30 text-[9px] font-mono uppercase tracking-widest text-gray-400 backdrop-blur-sm">
        BASELINE ORIGIN
      </span>
    </div>

    <!-- VISUAL SLIDER BAR & CONTROLLER BUTTON -->
    <div 
      class="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-pro-purple-light via-pro-gold to-pro-purple-light pointer-events-none z-20"
      :style="{ left: `${sliderPosition}%` }"
    >
      <div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-xl bg-pro-black border border-pro-gold flex items-center justify-center text-white text-xs shadow-xl backdrop-blur-md">
        <i class="fa-solid fa-arrows-left-right text-[10px] text-pro-gold"></i>
      </div>
    </div>

    <!-- INVISIBLE NATIVE INPUT SLIDER FOR MOBILE/ACCESSIBILITY INTERACTION -->
    <input 
      type="range" 
      min="0" 
      max="100" 
      v-model="sliderPosition"
      class="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
      aria-label="Before and after transformation slider"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  beforeImg: { type: String, required: true },
  afterImg: { type: String, required: true }
})

const sliderPosition = ref(50) // Starts perfectly dead-centered at 50% split

// Optional: Fallback touch tracking utility logic if the input range layer experiences standard bubble event traps
const handleMove = (event) => {
  if (event.type === 'mousemove' && event.buttons !== 1) return
  const rect = event.currentTarget.getBoundingClientRect()
  const x = event.touches ? event.touches[0].clientX : event.clientX
  const position = ((x - rect.left) / rect.width) * 100
  sliderPosition.value = Math.max(0, Math.min(100, position))
}
</script>

<style scoped>
/* Ensure the input element swallows click boxes cleanly without custom rendering artifacts */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 40px;
  height: 100%;
}
</style>