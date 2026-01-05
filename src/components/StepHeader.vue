<template>
  <header class="bg-black/50 backdrop-blur-sm border-b border-white/10 py-4 md:py-6 mb-4 md:mb-8">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="md:text-2xl text-xl font-bold text-white mb-1">Создать новый курс</h1>
          <p class="md:text-sm text-xs text-gray-400">Давайте создадим ваш курс шаг за шагом</p>
        </div>
        <router-link to="/" class="flex items-center gap-3">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-xl blur-lg opacity-70"></div>
            <div class="relative w-10 h-10 bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] rounded-xl flex items-center justify-center font-black text-lg backdrop-blur-sm border border-white/10">
              C
            </div>
          </div>
          <span class="font-bold md:text-lg text-base bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_80%,white)] to-[color-mix(in_srgb,var(--brand-to)_80%,white)] bg-clip-text text-transparent">
            Coursebox
          </span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

