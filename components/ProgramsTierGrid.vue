<template>
  <section class="py-12 bg-pro-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-pro-purple/5 blur-[140px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- CARD LOOP -->
        <div 
          v-for="(program, index) in programsCollection" 
          :key="program.id"
          class="premium-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group border border-pro-mid-gray/40 shadow-2xl"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
        >
          <!-- Accent Border Highlights -->
          <div 
            :class="[
              'absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r',
              program.accent === 'gold' ? 'from-pro-gold to-pro-gold-dark' : 'from-pro-purple to-pro-purple-light'
            ]"
          ></div>

          <div class="space-y-6">
            <!-- Header Status -->
            <div class="flex items-center justify-between">
              <span 
                :class="[
                  'text-[10px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-md',
                  program.accent === 'gold' ? 'bg-pro-gold/10 text-pro-gold' : 'bg-pro-purple/10 text-pro-purple-light'
                ]"
              >
                {{ program.tag }}
              </span>
              <span class="text-xs font-sans text-gray-500 font-semibold tracking-wider">
                {{ program.level }}
              </span>
            </div>

            <!-- Title & Description -->
            <div class="space-y-2">
              <h3 class="text-2xl font-display font-black text-white tracking-wide uppercase group-hover:text-pro-gold transition-colors duration-300">
                {{ program.title }}
              </h3>
              <p class="text-sm text-gray-400 font-sans leading-relaxed">
                {{ program.description }}
              </p>
            </div>

            <!-- Metrics Matrix Panel -->
            <div class="bg-pro-black/40 border border-pro-mid-gray/40 rounded-2xl p-4 grid grid-cols-2 gap-4">
              <div v-for="(metric, mIndex) in program.metrics" :key="mIndex" class="space-y-0.5">
                <p class="text-[10px] text-gray-500 font-sans uppercase tracking-wider">{{ metric.label }}</p>
                <p class="font-display font-bold text-sm text-white tracking-wide uppercase">{{ metric.value }}</p>
              </div>
            </div>

            <!-- Deliverables -->
            <div class="space-y-2.5 pt-2">
              <p class="text-xs font-display font-bold text-gray-300 uppercase tracking-wider">Core Deliverables:</p>
              <ul class="space-y-2">
                <li v-for="(point, pIndex) in program.deliverables" :key="pIndex" class="flex items-start gap-2.5 text-xs text-gray-400 font-sans">
                  <i 
                    :class="[
                      'fa-solid fa-square-check text-[11px] mt-0.5',
                      program.accent === 'gold' ? 'text-pro-gold' : 'text-pro-purple-light'
                    ]"
                  ></i>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- CTA CTA Action -->
          <div class="pt-8">
            <NuxtLink 
            to="/about#contact"
              :class="[
                'w-full py-3.5 font-display font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 cursor-pointer text-center border px-3.5',
                program.accent === 'gold' 
                  ? 'bg-gradient-to-r from-pro-gold-dark to-pro-gold text-pro-black border-transparent hover:shadow-lg hover:shadow-pro-gold/10' 
                  : 'bg-pro-dark-gray text-white border-pro-mid-gray hover:border-pro-purple-light hover:bg-pro-mid-gray/40'
              ]"
            >
              Apply For This Track
            </NuxtLink>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const programsCollection = [
  {
    id: 'program-weight-loss',
    tag: 'Composition Shift',
    accent: 'purple',
    level: 'TRACK 01',
    title: 'Fat Oxidation Blueprint',
    description: 'A precise metabolic protocol engineered to drop body fat levels, strip stubborn cellular tissue, and lock in raw muscular baseline visibility.',
    metrics: [
      { label: 'Target Output', value: 'Fat Loss' },
      { label: 'Frequency', value: '4 Days / Wk' },
      { label: 'Nutrition', value: 'Caloric Deficit' },
      { label: 'Cardio Focus', value: 'Lactate Interval' }
    ],
    deliverables: [
      'High-velocity metabolic conditioning phases',
      'Custom carbohydrate & fat rotation charts',
      'Lean mass preservation resistance blocks'
    ]
  },
  {
    id: 'program-muscle-gain',
    tag: 'Hypertrophy Matrix',
    accent: 'gold',
    level: 'TRACK 02',
    title: 'Anabolic Mass Build',
    description: 'Engineered entirely for maximum lean skeletal density. Focused mechanical tension schemes built to explode structural load sizes safely.',
    metrics: [
      { label: 'Target Output', value: 'Hypertrophy' },
      { label: 'Frequency', value: '5 Days / Wk' },
      { label: 'Nutrition', value: 'Caloric Surplus' },
      { label: 'Volume Shift', value: 'Progressive Load' }
    ],
    deliverables: [
      'High-tension compound movement tracking templates',
      'Target amino & dense protein periodization systems',
      'CNS central nerve management recovery cycles'
    ]
  },
  {
    id: 'program-advanced',
    tag: 'Elite Conditioning',
    accent: 'purple',
    level: 'TRACK 03',
    title: 'Advanced Tactical Pro',
    description: 'The ultimate performance-grade pathway. Fuses ballistic speed metrics, max power thresholds, and zero-compromise physical longevity.',
    metrics: [
      { label: 'Target Output', value: 'Pro Athletics' },
      { label: 'Frequency', value: '5-6 Days / Wk' },
      { label: 'Nutrition', value: 'Performance Fuel' },
      { label: 'Biometrics', value: 'VO2 Max / Velocity' }
    ],
    deliverables: [
      'Explosive reactive force production training',
      'Anti-inflammatory metabolic cell stabilization plans',
      '1-on-1 biomechanical lifting video review diagnostics'
    ]
  }
]
</script>