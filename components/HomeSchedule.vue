<template>
  <section id="schedule" class="py-16 bg-pro-black px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-pro-mid-gray/20">
    <div class="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-pro-purple/5 blur-[160px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto space-y-12">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-pro-mid-gray/20 pb-6">
        <div class="space-y-1 text-center md:text-left">
          <span class="text-xs font-display font-bold uppercase tracking-widest text-pro-gold">
            Training Operations
          </span>
          <h3 class="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
            DEPLOYMENT SCHEDULE
          </h3>
        </div>
        <p class="text-xs text-gray-400 font-sans text-center md:text-right max-w-sm">
          Cross-reference your availability with our active field operations. Open-floor sessions are engineered to push physical boundaries.
        </p>
      </div>

      <div class="space-y-8">
        <div 
          v-for="(session, index) in activeSchedule" 
          :key="index"
          class="premium-card rounded-3xl border border-pro-mid-gray/40 bg-gradient-to-br from-pro-dark-gray via-pro-black to-pro-black overflow-hidden relative group grid grid-cols-1 lg:grid-cols-12 min-h-[400px]"
          v-motion-fade-visible
        >
          <div 
            @click="openImageModal(session)"
            class="lg:col-span-5 relative aspect-video lg:aspect-auto bg-pro-black overflow-hidden border-b lg:border-b-0 lg:border-r border-pro-mid-gray/40 cursor-pointer group/img"
          >
            <NuxtImg 
              :src="session.imageSrc" 
              :alt="session.title"
              class="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] grayscale-[30%] transition-transform duration-700 group-hover/img:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-pro-black via-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-pro-black/80"></div>
            
            <div class="absolute inset-0 bg-pro-purple/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
              <div class="w-12 h-12 rounded-full bg-pro-black/80 border border-pro-gold/40 flex items-center justify-center text-pro-gold text-sm backdrop-blur-sm shadow-xl">
                <i class="fa-solid fa-magnifying-glass-plus"></i>
              </div>
            </div>

            <div class="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-pro-black/70 border border-white/10 backdrop-blur-md text-[9px] font-mono font-bold text-white uppercase tracking-widest z-20">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              {{ session.statusTag }}
            </div>
          </div>

          <div class="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 relative z-10">
            <div class="space-y-4">
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-[9px] font-display font-black uppercase tracking-widest text-pro-black px-2.5 py-1 rounded-md bg-gradient-to-r from-pro-gold to-pro-gold-dark shadow-md">
                  <i class="fa-solid fa-fire text-[10px] mr-0.5"></i> {{ session.crowdBadge }}
                </span>
                <span class="text-[9px] font-display font-black uppercase tracking-widest text-pro-purple-light px-2.5 py-1 rounded-md bg-pro-purple/10 border border-pro-purple/20">
                  {{ session.type }}
                </span>
              </div>

              <div class="space-y-1">
                <h4 class="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-wide leading-none">
                  {{ session.title }}
                </h4>
                <p class="text-xs font-display font-bold text-pro-gold tracking-widest uppercase flex items-center gap-1.5 pt-1">
                  <i class="fa-solid fa-calendar-days text-[10px]"></i>
                  {{ session.recurrence }} <span class="text-pro-mid-gray text-[10px] font-sans">|</span> {{ session.time }}
                </p>
              </div>

              <p class="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed max-w-xl">
                {{ session.description }}
              </p>

              <div v-if="session.directions" class="pt-2">
                <button 
                  @click="toggleDirections(index)"
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-pro-mid-gray/40 bg-pro-black/40 text-white hover:text-pro-gold hover:border-pro-gold/40 transition-all text-xs font-display font-bold uppercase tracking-wider select-none"
                >
                  <i class="fa-solid fa-map-signs text-[11px]"></i>
                  {{ expandedDirections[index] ? 'Hide Route Intel' : 'View Mission Directions' }}
                  <i 
                    class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300"
                    :class="{ 'rotate-180 text-pro-gold': expandedDirections[index] }"
                  ></i>
                </button>

                <div 
                  class="grid transition-all duration-300 ease-in-out"
                  :class="expandedDirections[index] ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 pointer-events-none'"
                >
                  <div class="overflow-hidden space-y-3">
                    <ol class="space-y-2 bg-pro-black/60 p-4 rounded-2xl border border-pro-mid-gray/20">
                      <li 
                        v-for="(step, sIdx) in session.directions" 
                        :key="sIdx"
                        class="flex items-start justify-between gap-4 text-[11px] font-sans leading-tight text-gray-400 border-b border-pro-mid-gray/10 pb-2 last:border-0 last:pb-0"
                      >
                        <span class="truncate">
                          <span class="text-pro-purple-light font-mono font-bold mr-1">{{ sIdx + 1 }}.</span> 
                          {{ step.instruction }}
                        </span>
                        <span class="text-[10px] font-mono font-bold text-pro-gold whitespace-nowrap bg-pro-dark-gray px-1.5 py-0.5 rounded border border-pro-mid-gray/20">
                          {{ step.distance }}
                        </span>
                      </li>
                    </ol>
                    
                    <p v-if="session.disclaimer" class="text-[10px] text-gray-500 font-sans italic leading-tight pl-2">
                      ⚠️ Note: {{ session.disclaimer }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-6 border-t border-pro-mid-gray/20 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div class="sm:col-span-7 space-y-1">
                <p class="text-xs font-display font-black text-white uppercase tracking-wide flex items-center gap-1.5">
                  <i class="fa-solid fa-location-dot text-pro-purple-light text-[11px]"></i>
                  {{ session.locationName }}
                </p>
                <p class="text-[11px] text-gray-500 font-sans leading-snug pl-4">
                  {{ session.address }}
                </p>
              </div>

              <div class="sm:col-span-5 flex justify-end">
                <a 
                  :href="session.mapLink" 
                  target="_blank"
                  rel="noopener"
                  class="w-full sm:w-auto px-5 py-3 bg-pro-dark-gray border border-pro-mid-gray hover:border-pro-purple-light hover:text-pro-purple-light rounded-xl text-xs font-display font-black uppercase tracking-wider text-white transition-all flex items-center justify-center gap-2"
                >
                  <i class="fa-solid fa-map-location-dot text-[11px]"></i>
                  Lock Location
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <ScheduleImageModal 
      :is-open="isModalOpen"
      :session="selectedSession"
      @close="closeImageModal"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Accordion Toggles
const expandedDirections = ref({})
const toggleDirections = (index) => {
  expandedDirections.value[index] = !expandedDirections.value[index]
}

// MODAL REACTIVE MANAGEMENT ARCHITECTURE
const isModalOpen = ref(false)
const selectedSession = ref({})

const openImageModal = (sessionTarget) => {
  selectedSession.value = sessionTarget
  isModalOpen.value = true
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closeImageModal = () => {
  isModalOpen.value = false
  selectedSession.value = {}
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

// DATA LAYER CONFIGURATION MAP
const activeSchedule = ref([
  {
    title: 'High-Intensity Interval Training',
    type: 'HIIT Class',
    crowdBadge: 'OPEN RECRUITMENT',
    statusTag: 'Active Mission',
    recurrence: 'Every Thursday',
    time: '6:30 PM - 9:00 PM',
    description: 'Transform your running mechanics and structural endurance under the lights. This isn\'t a basic cardio class—it is an explosive high-output tracking routine utilizing progressive interval conditioning, speed drills, and community energy. Open to all athletes looking to shatter baseline performance metrics.',
    locationName: 'Wilbur Cross High School Track',
    address: 'Wilbur Cross High School, 181 Mitchell Dr, New Haven, CT 06511',
    imageSrc: '/images/hiit-class.png', 
    mapLink: 'https://maps.google.com/?q=Wilbur+Cross+High+School+181+Mitchell+Dr+New+Haven+CT+06511'
  },
  {
    title: 'East Rock Summit Run',
    type: 'Group Run',
    crowdBadge: 'COMMUNITY PACK',
    statusTag: 'Active Mission',
    recurrence: 'Every Saturday',
    time: '9:30 AM - 11:00 AM',
    description: 'A high-yield 3.1-mile tactical road route hitting the base pacing loops of East Rock. We launch clean from Orange and Cold Spring, pushing down through local pacing loops before hitting our high-intensity finish at the iconic staircase leading up into East Rock Park. Engineered to build structural aerobic volume alongside the crew. In collaberation with Godspeed',
    locationName: 'Orange St & Cold Spring Rd Intersection',
    address: 'Corner of Orange St & Cold Spring Rd, New Haven, CT 06511',
    imageSrc: '/images/east-rock-run-map.png', 
    mapLink: 'https://maps.google.com/?q=Orange+St+and+Cold+Spring+Rd+New+Haven+CT+06511',
    
    directions: [
      { instruction: 'Take off / Launch directly at the corner of Orange St & Cold Spring Rd', distance: 'Start' },
      { instruction: 'Go straight onto Orange St', distance: '1.0 mi' },
      { instruction: 'Turn right onto Trumbull St', distance: '0.1 mi' },
      { instruction: 'Turn right onto Whitney Ave', distance: '1.0 mi' },
      { instruction: 'Turn right onto Cold Spring St', distance: '0.2 mi' },
      { instruction: 'Turn left onto Livingston St', distance: '0.4 mi' },
      { instruction: 'Turn right onto East Rock Rd', distance: '459 ft' },
      { instruction: 'Turn right onto Farnam Dr', distance: '0.2 mi' },
      { instruction: 'Turn right onto Orange St', distance: '0.1 mi' },
      { instruction: 'Finish at the main stone staircase leading up to East Rock Park', distance: 'End' }
    ],
    disclaimer: 'Use caution – walking/running directions may not always reflect real-world road conditions.'
  }
])
</script>