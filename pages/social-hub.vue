<template>
  <SocialHubHero />
  <div class="social-hub-container">
    <!-- Wrap third-party asynchronous feed components inside ClientOnly -->
    <ClientOnly>
      <SocialHubFeed />
      <SocialHubLatestFeed />
      
      <!-- Optional: Provide a fallback slot for SSR rendering -->
      <template #fallback>
        <div class="w-full aspect-[9/16] rounded-2xl bg-pro-black/40 border border-pro-mid-gray/20 flex items-center justify-center text-gray-500 text-xs gap-3">
          <i class="fa-solid fa-spinner animate-spin text-pro-gold"></i>
          <span>Loading Instagram Feed...</span>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>