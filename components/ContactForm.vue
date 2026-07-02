<template>
  <form @submit.prevent="handleSubmit" class="space-y-5">
    
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="space-y-1.5">
        <label for="firstName" class="text-[10px] font-display font-black uppercase tracking-widest text-gray-400">First Name</label>
        <input 
          id="firstName"
          name="firstName"
          v-model="formData.firstName" 
          type="text" 
          required
          placeholder="First Name"
          class="w-full px-4 py-3 rounded-xl border border-pro-mid-gray/40 bg-pro-black/40 text-white text-xs font-sans placeholder-gray-600 focus:outline-none focus:border-pro-purple-light/60 transition-colors"
        />
      </div>
      <div class="space-y-1.5">
        <label for="lastName" class="text-[10px] font-display font-black uppercase tracking-widest text-gray-400">Last Name</label>
        <input 
          id="lastName"
          name="lastName"
          v-model="formData.lastName" 
          type="text" 
          required
          placeholder="Last Name"
          class="w-full px-4 py-3 rounded-xl border border-pro-mid-gray/40 bg-pro-black/40 text-white text-xs font-sans placeholder-gray-600 focus:outline-none focus:border-pro-purple-light/60 transition-colors"
        />
      </div>
    </div>

    <div class="space-y-1.5">
      <label for="email" class="text-[10px] font-display font-black uppercase tracking-widest text-gray-400">Email Address</label>
      <input 
        id="email"
        name="email"
        v-model="formData.email" 
        type="email" 
        required
        placeholder="your@email.com"
        class="w-full px-4 py-3 rounded-xl border border-pro-mid-gray/40 bg-pro-black/40 text-white text-xs font-sans placeholder-gray-600 focus:outline-none focus:border-pro-purple-light/60 transition-colors"
      />
    </div>

    <div class="space-y-1.5">
      <label for="phone" class="text-[10px] font-display font-black uppercase tracking-widest text-gray-400">Phone Number</label>
      <input 
        id="phone"
        name="phone"
        v-model="formData.phone" 
        type="tel" 
        required
        placeholder="540-000-0000"
        class="w-full px-4 py-3 rounded-xl border border-pro-mid-gray/40 bg-pro-black/40 text-white text-xs font-sans placeholder-gray-600 focus:outline-none focus:border-pro-purple-light/60 transition-colors"
      />
    </div>

    <div class="space-y-1.5">
      <label for="objective" class="text-[10px] font-display font-black uppercase tracking-widest text-gray-400">Primary Objective</label>
      <div class="relative">
        <select 
          id="objective"
          name="objective"
          v-model="formData.objective"
          class="w-full px-4 py-3 rounded-xl border border-pro-mid-gray/40 bg-pro-black/40 text-white text-xs font-sans focus:outline-none focus:border-pro-purple-light/60 transition-colors appearance-none cursor-pointer text-left"
        >
          <option value="HIIT &amp; Track Conditioning">HIIT &amp; Track Conditioning</option>
          <option value="Biomechanical Mechanics Alignment">Biomechanical Mechanics Alignment</option>
          <option value="Progressive Force &amp; Weightlifting">Progressive Force &amp; Weightlifting</option>
          <option value="Custom Tactical Consultation">Custom Tactical Consultation</option>
          <option value="Personal Training">Personal Training</option>
          <option value="Other / Not Listed">Other</option>
        </select>
        <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </div>

    <div class="space-y-1.5">
      <label for="message" class="text-[10px] font-display font-black uppercase tracking-widest text-gray-400">Intel / Message Briefing</label>
      <textarea 
        id="message"
        name="message"
        v-model="formData.message" 
        rows="4"
        placeholder="Outline your current fitness parameters or structural goals..."
        class="w-full px-4 py-3 rounded-xl border border-pro-mid-gray/40 bg-pro-black/40 text-white text-xs font-sans placeholder-gray-600 focus:outline-none focus:border-pro-purple-light/60 transition-colors resize-none"
      ></textarea>
    </div>

    <div v-if="errorMessage" class="text-xs font-bold text-red-500 bg-red-950/20 border border-red-900/40 p-3 rounded-xl">
      ⚠️ {{ errorMessage }}
    </div>

    <div v-if="showSuccess" class="text-xs font-bold text-green-400 bg-green-950/20 border border-green-900/40 p-3 rounded-xl text-center">
      ✓ Briefing securely routed directly to Coach Michael. Check your inbox.
    </div>

    <button 
      type="submit"
      :disabled="isSubmitting"
      class="w-full py-4 bg-gradient-to-r from-pro-gold to-pro-gold-dark text-pro-black font-display font-black text-xs uppercase tracking-widest rounded-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50 select-none flex items-center justify-center gap-2 shadow-lg cursor-pointer"
    >
      <i v-if="isSubmitting" class="fa-solid fa-circle-notch animate-spin text-pro-black"></i>
      <i v-else class="fa-solid fa-paper-plane text-[10px] text-pro-black"></i>
      {{ isSubmitting ? 'Transmitting intel...' : 'Transmit Intelligence Briefing' }}
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)
const showSuccess = ref(false)
const errorMessage = ref('')

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '', 
  objective: 'HIIT & Track Conditioning',
  message: ''
})

const emit = defineEmits(['submitBriefing'])

const handleSubmit = async () => {
  isSubmitting.value = true
  errorMessage.value = ''
  showSuccess.value = false
  
  const unifiedPayload = {
    name: `${formData.value.firstName.trim()} ${formData.value.lastName.trim()}`,
    email: formData.value.email,
    phone: formData.value.phone.trim(), 
    serviceType: formData.value.objective,
    homeSize: 'Athletic Intake Blueprint',
    message: formData.value.message
  }

  try {
    const response = await $fetch('/api/submit-quote', {
      method: 'POST',
      body: unifiedPayload
    })
    
    if (response && response.success) {
      showSuccess.value = true
      emit('submitBriefing', { ...unifiedPayload })
      
      formData.value = { 
        firstName: '', 
        lastName: '', 
        email: '', 
        phone: '', 
        objective: 'HIIT & Track Conditioning', 
        message: '' 
      }
    } else {
      throw new Error('Pipeline returned invalid server response tokens.')
    }
  } catch (err) {
    console.error('Submission pipeline error:', err)
    errorMessage.value = 'Failed to transmit briefing. Check your local connection or try again directly.'
  } finally {
    isSubmitting.value = false
  }
}
</script>