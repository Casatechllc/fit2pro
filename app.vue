<template>
  <div class="relative w-full min-h-screen mt-16">

    <!-- <AppSplashScreen /> -->
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  meta: [
    { name: 'referrer', content: 'no-referrer' }
  ]
})
</script>