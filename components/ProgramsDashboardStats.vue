<template>
  <section id="program-analytics" class="py-16 bg-pro-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Ambient subtle backing layout glow -->
    <div class="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-pro-purple/5 blur-[160px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto space-y-12">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs font-display font-bold uppercase tracking-widest text-gradient-gold">
          System Analytics
        </span>
        <h2 class="text-3xl sm:text-4xl font-display font-black tracking-tight text-white uppercase">
          METRIC SPECIFICATIONS
        </h2>
        <p class="text-gray-400 font-sans text-sm max-w-xl mx-auto">
          Deep-dive into the calculated operational breakdowns for each track. Check the structural balances of training type, energy targets, and clean whole-food requirements.
        </p>
      </div>

      <!-- 3-Column Dashboard Matrix -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- DASHBOARD WIDGET PANEL LOOP -->
        <div 
          v-for="(dashboard, index) in dashboardData" 
          :key="dashboard.id"
          class="premium-card rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden border border-pro-mid-gray/40 shadow-2xl flex flex-col justify-between"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 150 } }"
        >
          <!-- Dynamic Accent Glow Ring inside the background layer -->
          <div 
            :class="[
              'absolute -top-10 -right-10 w-32 h-32 blur-2xl rounded-full pointer-events-none',
              dashboard.accent === 'gold' ? 'bg-pro-gold/10' : 'bg-pro-purple/10'
            ]"
          ></div>

          <div class="space-y-6">
            <!-- 1. WIDGET HEADER -->
            <div class="flex items-center justify-between border-b border-pro-mid-gray/30 pb-4">
              <div>
                <p class="text-[10px] text-gray-500 font-sans uppercase tracking-widest">Active Phase</p>
                <h4 class="font-display font-bold text-white text-base uppercase tracking-wider mt-0.5">
                  {{ dashboard.programName }}
                </h4>
              </div>
              <span 
                :class="[
                  'px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md font-display',
                  dashboard.accent === 'gold' ? 'bg-pro-gold text-pro-black' : 'bg-pro-purple text-white'
                ]"
              >
                {{ dashboard.phaseTag }}
              </span>
            </div>

            <!-- 2. PURE CSS BLUEPRINT PERFORMANCE BARS -->
            <div class="space-y-4">
              <div v-for="macro in dashboard.macros" :key="macro.name" class="space-y-1.5">
                <div class="flex justify-between text-xs font-display tracking-wide uppercase">
                  <span class="text-white font-bold">{{ macro.name }}</span>
                  <span :class="macro.colorClass">{{ macro.percentage }}% / {{ macro.grams }}g</span>
                </div>
                <div class="h-2 w-full bg-pro-black rounded-full overflow-hidden p-[1px] border border-pro-mid-gray/40">
                  <div 
                    :class="['h-full rounded-full transition-all duration-1000', macro.barClass]"
                    :style="{ width: macro.percentage + '%' }"
                  ></div>
                </div>
              </div>
            </div>

            <!-- 3. TRAINING TYPE FIELD -->
            <div class="pt-2 space-y-2">
              <p class="text-[10px] text-gray-500 font-sans uppercase tracking-wider">Training Protocol</p>
              <div class="bg-pro-black/40 border border-pro-mid-gray/40 rounded-xl p-3 flex items-center gap-3">
                <div :class="['w-8 h-8 rounded-lg flex items-center justify-center text-xs', dashboard.accent === 'gold' ? 'bg-pro-gold/10 text-pro-gold' : 'bg-pro-purple/10 text-pro-purple-light']">
                  <i :class="dashboard.trainingIcon"></i>
                </div>
                <div>
                  <p class="font-display font-bold text-white text-sm uppercase tracking-wide leading-tight">
                    {{ dashboard.trainingTitle }}
                  </p>
                  <p class="text-[11px] text-gray-400 font-sans mt-0.5">{{ dashboard.trainingDesc }}</p>
                </div>
              </div>
            </div>

            <!-- 4. WHOLE-FOOD FUEL REQS -->
            <div class="space-y-2">
              <p class="text-[10px] text-gray-500 font-sans uppercase tracking-wider">Recommended Whole Foods</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="food in dashboard.foods" 
                  :key="food" 
                  class="text-[11px] font-sans bg-pro-dark-gray border border-pro-mid-gray/60 px-2.5 py-1 rounded-lg text-gray-300"
                >
                  {{ food }}
                </span>
              </div>
            </div>
          </div>

          <!-- 5. BOTTOM METADATA BAR -->
          <div class="bg-pro-black/50 border border-pro-mid-gray/30 rounded-2xl p-4 grid grid-cols-2 gap-4 text-center mt-6">
            <div>
              <p class="text-[10px] text-gray-500 uppercase font-sans tracking-wider">Target Intake</p>
              <p class="font-display font-bold text-base text-white mt-0.5">{{ dashboard.calories }} kcal</p>
            </div>
            <div>
              <p class="text-[10px] text-gray-500 uppercase font-sans tracking-wider">Hydration Base</p>
              <p :class="['font-display font-bold text-base mt-0.5', dashboard.accent === 'gold' ? 'text-pro-gold' : 'text-pro-purple-light']">
                {{ dashboard.hydration }}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const dashboardData = ref([
  {
    id: 'dash-weight-loss',
    programName: 'Fat Oxidation Blueprint',
    phaseTag: 'Composition Shift',
    accent: 'purple',
    calories: '1,950',
    hydration: '1.25 Gal / Day',
    trainingIcon: 'fa-solid fa-person-running',
    trainingTitle: 'High-Density Interval & Resistance',
    trainingDesc: 'Lactate threshold circuits mapped alongside strategic tissue preservation lifts.',
    foods: ['Salmon', 'Broccoli', 'Eggs', 'Avocado', 'Spinach', 'Chicken Breast'],
    macros: [
      { name: 'Protein', percentage: 45, grams: '220', colorClass: 'text-pro-purple-light', barClass: 'bg-gradient-to-r from-pro-purple to-pro-purple-light' },
      { name: 'Carbohydrates', percentage: 25, grams: '120', colorClass: 'text-gray-400', barClass: 'bg-pro-mid-gray' },
      { name: 'Healthy Fats', percentage: 30, grams: '65', colorClass: 'text-pro-gold', barClass: 'bg-gradient-to-r from-pro-gold-dark to-pro-gold' }
    ]
  },
  {
    id: 'dash-muscle-gain',
    programName: 'Anabolic Mass Build',
    phaseTag: 'Hypertrophy Matrix',
    accent: 'gold',
    calories: '3,200',
    hydration: '1 Gallon / Day',
    trainingIcon: 'fa-solid fa-dumbbell',
    trainingTitle: 'Progressive Mechanical Tension',
    trainingDesc: 'Heavy compound mechanical loading designed to force muscular cross-section adaptations.',
    foods: ['Lean Beef', 'Pasta', 'Rice', 'Oatmeal', 'Eggs', 'Sweet Potatoes'],
    macros: [
      { name: 'Protein', percentage: 35, grams: '280', colorClass: 'text-pro-gold', barClass: 'bg-gradient-to-r from-pro-gold-dark to-pro-gold' },
      { name: 'Carbohydrates', percentage: 45, grams: '360', colorClass: 'text-pro-purple-light', barClass: 'bg-gradient-to-r from-pro-purple to-pro-purple-light' },
      { name: 'Healthy Fats', percentage: 20, grams: '70', colorClass: 'text-gray-400', barClass: 'bg-pro-mid-gray' }
    ]
  },
  {
    id: 'dash-advanced',
    programName: 'Advanced Tactical Pro',
    phaseTag: 'Elite Conditioning',
    accent: 'purple',
    calories: '2,800',
    hydration: '1.5 Gal / Day',
    trainingIcon: 'fa-solid fa-shield-halved',
    trainingTitle: 'Explosive Force & Longevity',
    trainingDesc: 'Ballistic power parameters paired with neural recovery tracking cycles.',
    foods: ['Salmon', 'Quinoa', 'Blueberries', 'Stir-Fry Turkey', 'Almonds', 'Avocado'],
    macros: [
      { name: 'Protein', percentage: 40, grams: '250', colorClass: 'text-pro-purple-light', barClass: 'bg-gradient-to-r from-pro-purple to-pro-purple-light' },
      { name: 'Carbohydrates', percentage: 35, grams: '215', colorClass: 'text-pro-gold', barClass: 'bg-gradient-to-r from-pro-gold-dark to-pro-gold' },
      { name: 'Healthy Fats', percentage: 25, grams: '75', colorClass: 'text-gray-400', barClass: 'bg-pro-mid-gray' }
    ]
  }
])
</script>