<template>
  <section class="py-4 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center justify-center border-t border-pro-mid-gray/20">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#141021_1px,transparent_1px),linear-gradient(to_bottom,#141021_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none z-0"></div>
    <div class="absolute w-[400px] h-[400px] blur-[130px] rounded-full pointer-events-none z-0"></div>

    <div class="text-center relative z-10 cinematic-zoom-box w-full">
      
      <h2 class="text-5xl sm:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight select-none flex items-center justify-center master-brand-trigger mx-auto">
        <span class="text-gradient-purple">FIT</span>
        
        <span class="text-gradient-gray logo-number-two mr-2 sm:mr-4">2</span>
        
        <span class="relative inline-flex items-center text-gradient-gold min-w-[160px] sm:min-w-[280px] text-left">
          <span class="word-sequence"></span>
          <span class="w-1 sm:w-2 h-[45px] sm:h-[70px] bg-pro-purple-light ml-1 animate-pulse tracking-tighter"></span>
        </span>
      </h2>

    </div>
  </section>
</template>

<script setup>
// Pure automated CSS styling orchestrates this lifecycle cleanly
</script>

<style scoped>
/* ==========================================================================
   1. USER ACCENT BRAND GRADIENT STYLES
   ========================================================================== */
.text-gradient-purple {
  background: linear-gradient(135deg, var(--color-pro-purple-light) 0%, var(--color-pro-purple) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-gray {
  background: linear-gradient(180deg, #4b5563 0%, #111827 80%, #030712 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 1px 1px rgba(255, 255, 255, 0.15));
}

.logo-number-two {
  position: relative;
  display: inline-block;
  z-index: 1;
}

.text-gradient-gold {
  background: linear-gradient(135deg, #FFE259 0%, var(--color-pro-gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ==========================================================================
   2. CINEMATIC SCALE OUT ENGINE
   ========================================================================== */
.cinematic-zoom-box {
  animation: scaleOut 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes scaleOut {
  0% { transform: scale(1.15); filter: blur(4px); opacity: 0; }
  15% { filter: blur(0px); opacity: 1; }
  100% { transform: scale(1); }
}

/* ==========================================================================
   3. BRAND SCALE/GLOW HOOKS (Re-calibrated dynamically for the 12s loop)
   ========================================================================== */
.master-brand-trigger {
  animation: brandSovereignty 12s cubic-bezier(.25, 1, 0.5, 1) infinite;
}

@keyframes brandSovereignty {
  /* Keep standard text behavior static until PRO hits at 56% */
  0%, 55.0% {
    transform: scale(1);
    filter: drop-shadow(0 0 0px rgba(212,175,55,0));
  }
  /* Scale pop matches perfectly when PRO types out and holds */
  56.5%, 97.0% {
    transform: scale(1.03);
    filter: drop-shadow(0 4px 20px rgba(212,175,55,0.25)) drop-shadow(0 2px 4px rgba(0,0,0,0.4));
  }
  98.5%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0px rgba(212,175,55,0));
  }
}

/* ==========================================================================
   4. NEW 4-WORD SEQUENCER TIMELINE (12s Total Loop / ~5s Pure Hold on PRO)
   ========================================================================== */
.word-sequence::after {
  content: "";
  animation: textMutationSequence 12s steps(1) infinite;
}

@keyframes textMutationSequence {
  /* --- WORD 1: WORK (~1.8s hold) --- */
  0.0%  { content: "W"; }
  0.8%  { content: "WO"; }
  1.6%  { content: "WOR"; }
  2.4%  { content: "WORK"; }
  15.0% { content: "WORK"; }
  
  /* Quick Erase */
  15.8% { content: "WOR"; }
  16.6% { content: "WO"; }
  17.4% { content: "W"; }
  18.2% { content: ""; }

  /* --- WORD 2: FEEL (~1.8s hold) --- */
  19.5% { content: "F"; }
  20.3% { content: "FE"; }
  21.1% { content: "FEE"; }
  21.9% { content: "FEEL"; }
  34.5% { content: "FEEL"; }
  
  /* Quick Erase */
  35.3% { content: "FEE"; }
  36.1% { content: "FE"; }
  36.9% { content: "F"; }
  37.7% { content: ""; }

  /* --- WORD 3: LIVE (~1.8s hold) --- */
  39.0% { content: "L"; }
  39.8% { content: "LI"; }
  40.6% { content: "LIV"; }
  41.4% { content: "LIVE"; }
  54.0% { content: "LIVE"; }
  
  /* Quick Erase */
  54.8% { content: "LIV"; }
  55.6% { content: "LI"; }
  56.4% { content: "L"; }
  57.2% { content: ""; }

  /* --- WORD 4: PRO (FULL ~5.0s IMMOBILE FREEZE) --- */
  58.5% { content: "P"; }
  59.5% { content: "PR"; }
  60.5% { content: "PRO"; } 
  97.0% { content: "PRO"; } /* Holds perfectly solid for 36.5% of the 12s runtime (~4.4s) */
  
  /* Smooth wind down erase step right before loop point restarts at 0% */
  97.8% { content: "PR"; }
  98.8% { content: "P"; }
  100%  { content: ""; }
}
</style>