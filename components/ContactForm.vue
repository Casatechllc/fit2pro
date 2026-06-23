<template>
  <form @submit.prevent="handleSubmit" class="space-y-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <!-- FIRST & LAST NAME -->
      <div class="space-y-1.5">
        <label class="text-[10px] font-display font-black uppercase tracking-widest text-gray-400">First Name</label>
        <input 
          v-model="formData.firstName" 
          type="text" 
          required
          placeholder="First Name"
          class="w-full px-4 py-3 rounded-xl border border-pro-mid-gray/40 bg-pro-black/40 text-white text-xs font-sans placeholder-gray-600 focus:outline-none focus:border-pro-purple-light/60 transition-colors"
        />
      </div>
      <div class="space-y-1.5">
        <label class="text-[10px] font-display font-black uppercase tracking-widest text-gray-400">Last Name</label>
        <input 
          v-model="formData.lastName" 
          type="text" 
          required
          placeholder="Last Name"
          class="w-full px-4 py-3 rounded-xl border border-pro-mid-gray/40 bg-pro-black/40 text-white text-xs font-sans placeholder-gray-600 focus:outline-none focus:border-pro-purple-light/60 transition-colors"
        />
      </div>
    </div>

    <!-- EMAIL CONTACT -->
    <div class="space-y-1.5">
      <label class="text-[10px] font-display font-black uppercase tracking-widest text-gray-400">Email Address</label>
      <input 
        v-model="formData.email" 
        type="email" 
        required
        placeholder="your@email.com"
        class="w-full px-4 py-3 rounded-xl border border-pro-mid-gray/40 bg-pro-black/40 text-white text-xs font-sans placeholder-gray-600 focus:outline-none focus:border-pro-purple-light/60 transition-colors"
      />
    </div>

    <!-- OBJECTIVE / GOAL SELECTOR -->
    <div class="space-y-1.5">
      <label class="text-[10px] font-display font-black uppercase tracking-widest text-gray-400">Primary Objective</label>
      <select 
        v-model="formData.objective"
        class="w-full px-4 py-3 rounded-xl border border-pro-mid-gray/40 bg-pro-black/40 text-white text-xs font-sans focus:outline-none focus:border-pro-purple-light/60 transition-colors appearance-none cursor-pointer"
      >
        <option value="hiit">HIIT &amp; Track Conditioning</option>
        <option value="biomechanics">Biomechanical Mechanics Alignment</option>
        <option value="strength">Progressive Force &amp; Weightlifting</option>
        <option value="other">Custom Tactical Consultation</option>
        <option value="other">Personal Training</option>
        <option value="other">Other</option>
      </select>
    </div>

    <!-- BRIEFING TEXT AREA -->
    <div class="space-y-1.5">
      <label class="text-[10px] font-display font-black uppercase tracking-widest text-gray-400">Intel / Message Briefing</label>
      <textarea 
        v-model="formData.message" 
        rows="4"
        placeholder="Outline your current fitness parameters or structural goals..."
        class="w-full px-4 py-3 rounded-xl border border-pro-mid-gray/40 bg-pro-black/40 text-white text-xs font-sans placeholder-gray-600 focus:outline-none focus:border-pro-purple-light/60 transition-colors resize-none"
      ></textarea>
    </div>

    <!-- SUBMIT CTA -->
    <button 
      type="submit"
      :disabled="isSubmitting"
      class="w-full py-4 bg-gradient-to-r from-pro-gold to-pro-gold-dark text-pro-black font-display font-black text-xs uppercase tracking-widest rounded-xl hover:scale-[1.01] transition-transform duration-300 disabled:opacity-50 select-none flex items-center justify-center gap-2 shadow-lg"
    >
      <i v-if="isSubmitting" class="fa-solid fa-circle-notch animate-spin"></i>
      <i v-else class="fa-solid fa-paper-plane text-[11px]"></i>
      Transmit Intelligence Briefing
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  objective: 'hiit',
  message: ''
})

const emit = defineEmits(['submitBriefing'])

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Emitting data upward so parent views can attach custom database/API pipelines smoothly
  emit('submitBriefing', { ...formData.value })
  
  // Clean Form Simulation
  await new Promise(resolve => setTimeout(resolve, 1000))
  isSubmitting.value = false
  
  // Clear fields cleanly
  formData.value = { firstName: '', lastName: '', email: '', objective: 'hiit', message: '' }
  alert('Briefing securely routed to Coach Michael.')
}
</script>