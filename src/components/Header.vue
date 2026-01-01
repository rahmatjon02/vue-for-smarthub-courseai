<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3 group cursor-pointer">
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-2xl blur-lg opacity-70"
            ></div>
            <div
              class="relative w-12 h-12 bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] rounded-2xl flex items-center justify-center font-black text-xl backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_rgba(var(--brand-from-rgb),0.3)] group-hover:shadow-[0_8px_32px_rgba(var(--brand-from-rgb),0.6)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg]"
            >
              C
            </div>
          </div>
          <div>
            <span
              class="font-black text-xl bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_80%,white)] to-[color-mix(in_srgb,var(--brand-to)_80%,white)] bg-clip-text text-transparent drop-shadow-lg"
              >Coursebox</span
            >
            <div class="text-[10px] text-gray-400 font-mono tracking-wider">
              AI ДВИЖОК КУРСОВ
            </div>
          </div>
        </div>

        <nav class="hidden md:flex items-center gap-8">
          <a
            v-for="item in ['Возможности', 'Процесс', 'Цены']"
            :key="item"
            :href="`#${item.toLowerCase()}`"
            class="relative group"
          >
            <div
              class="absolute -inset-1 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"
            ></div>
            <span
              class="relative text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg backdrop-blur-sm border border-white/5 group-hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)]"
            >
              {{ item }}
            </span>
          </a>
        </nav>

        <button
          class="relative group overflow-hidden px-6 py-3 rounded-xl font-semibold"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]"
          ></div>
          <div
            class="absolute inset-0 bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_80%,white)] to-[color-mix(in_srgb,var(--brand-to)_80%,white)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div
            class="absolute inset-0 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] group-hover:scale-110 transition-transform duration-300"
          ></div>
          <span class="relative flex items-center gap-2">
            Начать бесплатно
            <ArrowRight
              class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            />
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ArrowRight } from "lucide-vue-next";
</script>
