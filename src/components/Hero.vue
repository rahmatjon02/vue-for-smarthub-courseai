<template>
  <section class="max-w-7xl mx-auto text-center relative py-24 px-6">
    <div
      class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] mb-8 animate-float"
    >
      <div class="relative">
        <div
          class="absolute inset-0 bg-[var(--brand-from)] rounded-full animate-ping opacity-20"
        ></div>
        <div
          class="relative w-2 h-2 bg-[color-mix(in_srgb,var(--brand-from)_80%,white)] rounded-full"
        ></div>
      </div>
      <span
        class="text-sm font-mono text-[color-mix(in_srgb,var(--brand-from)_70%,white)] tracking-wider"
        >ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ</span
      >
    </div>

    <h1
      class="text-3xl md:text-5xl lg:text-7xl font-black mb-6 leading-none tracking-tight"
    >
      <span
        class="block text-transparent bg-clip-text bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_70%,white)] via-white 
        to-[color-mix(in_srgb,var(--brand-to)_70%,white)] animate-shimmer bg-[length:200%_100%]"
      >
        ИНТЕЛЛЕКТУАЛЬНОЕ
      </span>
      <span
        class="block text-transparent bg-clip-text bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_70%,white)] via-white 
        to-[color-mix(in_srgb,var(--brand-to)_70%,white)] animate-shimmer bg-[length:200%_100%] animation-delay-1000"
      >
        СОЗДАНИЕ КУРСОВ
      </span>
    </h1>

    <p class="text-xl md:text-2xl text-gray-400 mb-4">
      Трансформируйте идеи в
      <span
        class="font-semibold text-[color-mix(in_srgb,var(--brand-from)_80%,white)]"
      >
        профессиональные курсы
      </span>
      <br />
      <span class="opacity-80"> с помощью искусственного интеллекта </span>
    </p>

    <div class="flex flex-wrap justify-center gap-4 mb-16">
      <button class="group relative px-8 py-4 rounded-xl font-bold text-lg">
        <div
          class="absolute inset-0 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-xl"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_80%,white)] to-[color-mix(in_srgb,var(--brand-to)_80%,white)] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
        <div
          class="absolute -inset-1 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
        ></div>
        <span class="relative flex items-center gap-2">
          <Download class="w-5 h-5" />
          Начать сейчас
          <ArrowRight
            class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
          />
        </span>
      </button>

      <button
        class="group relative px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm border border-gray-700 hover:border-[color-mix(in_srgb,var(--brand-from)_40%,transparent)] transition-all duration-300"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] group-hover:from-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] group-hover:to-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] rounded-xl transition-all duration-300"
        ></div>
        <span class="relative flex items-center gap-2">
          <Play class="w-5 h-5 fill-current" />

          Смотреть демо
        </span>
      </button>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      <div
        v-for="(stat, i) in stats"
        :key="i"
        class="group relative p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300 hover:scale-105"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] group-hover:from-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] group-hover:to-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] rounded-2xl transition-all duration-300"
        ></div>
        <div class="relative">
          <div class="mb-4 flex justify-center">
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] rounded-xl blur-md opacity-50"
              ></div>
              <component
                :is="stat.icon"
                class="relative w-10 h-10 p-2 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] text-white shadow-lg"
              />
            </div>
          </div>
          <div
            class="text-4xl font-black bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_70%,white)] to-[color-mix(in_srgb,var(--brand-to)_70%,white)] bg-clip-text text-transparent mb-2 text-center"
          >
            {{ stat.value }}
          </div>
          <div
            class="text-sm text-gray-400 font-medium text-center tracking-wide"
          >
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  ArrowRight,
  Download,
  BookOpen,
  Zap,
  Users,
  Star,
  Play,
} from "lucide-vue-next";

const stats = [
  {
    value: "50K+",
    label: "СОЗДАННЫХ КУРСОВ",
    icon: BookOpen,
  },
  {
    value: "99.9%",
    label: "ДОСТУПНОСТЬ",
    icon: Zap,
  },
  {
    value: "2M+",
    label: "ОХВАЧЕННЫХ СТУДЕНТОВ",
    icon: Users,
  },
  {
    value: "4.9/5",
    label: "РЕЙТИНГ",
    icon: Star,
  },
];
</script>
