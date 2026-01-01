<template>
  <section id="process" class="relative py-20 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <div
          class="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] mb-4"
        >
          <span
            class="text-sm font-mono text-[color-mix(in_srgb,var(--brand-to)_70%,white)] tracking-wider"
            >ПРОЦЕСС</span
          >
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6">
          <span class="text-white">ПРОСТОЙ</span>
          <span
            class="block text-transparent bg-clip-text bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_70%,white)] to-[color-mix(in_srgb,var(--brand-to)_70%,white)]"
            >ПУТЬ К УСПЕХУ</span
          >
        </h2>
        <p class="text-xl text-gray-400 font-light">
          Шесть шагов от идеи до готового курса
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="group relative p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300 hover:scale-105"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] group-hover:from-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] group-hover:to-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] rounded-2xl transition-all duration-300"
          ></div>

          <div class="relative">
            <div class="flex items-center gap-4 mb-6">
              <div class="relative">
                <div
                  class="absolute inset-0 bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] rounded-2xl blur-lg opacity-50"
                ></div>
                <div class="">
                  <component
                    :is="step.icon"
                    class="w-10 h-10 p-2 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
              </div>
              <div
                class="text-5xl font-black text-gray-600 group-hover:text-gray-500 transition-colors duration-300"
              >
                {{ step.num }}
              </div>
            </div>

            <h3
              class="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[color-mix(in_srgb,var(--brand-from)_70%,white)] group-hover:to-[color-mix(in_srgb,var(--brand-to)_70%,white)] transition-all duration-300"
            >
              {{ step.title }}
            </h3>

            <p class="text-gray-400 leading-relaxed font-light">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Rocket,
  Upload,
  Search,
  Sparkles,
  SlidersHorizontal,
  BarChart3,
} from "lucide-vue-next";

const steps = [
  {
    num: "01",
    title: "ИМПОРТ ЗНАНИЙ",
    desc: "Загружайте документы, видео или вставляйте существующий контент",
    icon: Upload,
  },
  {
    num: "02",
    title: "АНАЛИЗ ИИ",
    desc: "Наш искусственный интеллект анализирует и интеллектуально структурирует ваш контент",
    icon: Search,
  },
  {
    num: "03",
    title: "УМНАЯ ГЕНЕРАЦИЯ",
    desc: "Полный курс с уроками, тестами и материалами",
    icon: Sparkles,
  },
  {
    num: "04",
    title: "НАСТРОЙКА И ПОЛИРОВКА",
    desc: "Тонкая настройка с помощью интуитивного редактора и предпросмотра",
    icon: SlidersHorizontal,
  },
  {
    num: "05",
    title: "РАЗВЕРТЫВАНИЕ",
    desc: "Публикуйте в LMS или экспортируйте в различных форматах",
    icon: Rocket,
  },
  {
    num: "06",
    title: "МОНИТОРИНГ",
    desc: "Отслеживайте аналитику и оптимизируйте на основе данных",
    icon: BarChart3,
  },
];
</script>
