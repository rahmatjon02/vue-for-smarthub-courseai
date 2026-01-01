<template>
  <div class="fixed inset-0 z-0 pointer-events-none">
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] via-black to-transparent"
    ></div>
      <div class="particles-container">
        <div
          v-for="n in 50"
          :key="n"
          class="particle"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 7}s`,
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
          }"
        ></div>
      </div>
  </div>
</template>
