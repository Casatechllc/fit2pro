<template>
    <main class="bg-pro-black min-h-screen">
    <!-- Pass a method or handle the state variable globally across siblings -->
    <ProgramsHero />
    <ProgramsTierGrid />
    <ProgramsDashboardStats />
    <ProgramsNutrition />
  </main>
</template>

<script setup>
import { ref } from 'vue'
const selectedCategory = ref('all')
</script>