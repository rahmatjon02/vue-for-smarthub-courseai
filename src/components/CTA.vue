<template>
  <section class="relative py-20 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="relative p-8 md:p-20 rounded-3xl overflow-hidden">
        <div
          class="absolute inset-0 bg-gradient-to-br from-[var(--brand-from)] via-[color-mix(in_srgb,var(--brand-from)_80%,black)] to-[var(--brand-to)]"
        ></div>
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"
        ></div>

        <div class="relative text-center">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-float"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-white"
              ></span>
            </span>
            <span class="text-sm font-semibold text-white"
              >ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ</span
            >
          </div>

          <h2 class="text-3xl md:text-5xl lg:text-7xl font-black mb-6">
            <span class="text-white">ГОТОВЫ К</span>
            <span
              class="block text-transparent bg-clip-text bg-gradient-to-r from-white to-[color-mix(in_srgb,var(--brand-to)_70%,white)]"
              >ИЗМЕНЕНИЯМ?</span
            >
          </h2>

          <p class="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            Присоединяйтесь к сообществу инноваторов в образовании. Начните свой
            путь к созданию курсов будущего прямо сейчас.
          </p>

          <button
            class="group px-10 py-5 rounded-xl font-bold text-sm lg:text-lg bg-white text-[var(--brand-from)] hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105"
          >
            <span class="flex items-center gap-2">
              НАЧАТЬ БЕСПЛАТНО
              <ArrowRight
                class="w-5 h-5 stroke-[3] group-hover:translate-x-1 transition-transform duration-300"
              />
            </span>
          </button>

          <div
            class="mt-12 flex flex-wrap justify-center gap-8 text-sm text-white/70"
          >
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>БЕЗ КРЕДИТНОЙ КАРТЫ</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>БЕСПЛАТНЫЙ ТАРИФ НАВСЕГДА</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>ОТМЕНА В ЛЮБОЕ ВРЕМЯ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from "lucide-vue-next";
</script>
