<template>
  <section id="features" class="relative py-20 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <div
          class="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] mb-4"
        >
          <span
            class="text-sm font-mono text-[color-mix(in_srgb,var(--brand-from)_70%,white)] tracking-wider"
            >ВОЗМОЖНОСТИ</span
          >
        </div>
        <h2 class="text-3xl md:text-5xl lg:text-7xl font-black mb-6">
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_70%,white)] to-[color-mix(in_srgb,var(--brand-to)_70%,white)]"
            >ИННОВАЦИОННЫЕ</span
          >
          <span class="block text-white">ТЕХНОЛОГИИ</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Мощные инструменты для создания контента следующего поколения
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(feature, i) in features"
          :key="i"
          class="group relative p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-500 hover:scale-105"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] group-hover:from-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] group-hover:to-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] rounded-2xl transition-all duration-500"
          ></div>
          <div
            class="absolute -inset-1 bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          ></div>

          <div class="relative">
            <div class="relative mb-6">
              <div
                class="absolute inset-0 bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] rounded-xl blur-lg opacity-50"
              ></div>
              <div
                class="relative w-16 h-16 rounded-xl flex items-center justify-center text-4xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
              >
                <component
                  :is="feature.icon"
                  class="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            <h3
              class="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[color-mix(in_srgb,var(--brand-from)_70%,white)] group-hover:to-[color-mix(in_srgb,var(--brand-to)_70%,white)] transition-all duration-300"
            >
              {{ feature.title }}
            </h3>

            <p class="text-gray-400 leading-relaxed font-light">
              {{ feature.desc }}
            </p>

            <div
              class="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-[color-mix(in_srgb,var(--brand-from)_70%,white)] transition-colors duration-300"
            >
              Исследовать
              <ArrowRight
                class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  ArrowRight,
  Zap,
  Brain,
  Rocket,
  Target,
  Flame,
  Gem,
} from "lucide-vue-next";

const features = [
  {
    icon: Zap,
    title: "МОЛНИЕНОСНЫЙ ИИ",
    desc: "Генерируйте полные структуры курсов за секунды с помощью продвинутых алгоритмов искусственного интеллекта.",
  },
  {
    icon: Brain,
    title: "УМНОЕ ОБУЧЕНИЕ",
    desc: "Адаптивный контент, который развивается вместе с вашим стилем преподавания и потребностями студентов.",
  },
  {
    icon: Rocket,
    title: "МГНОВЕННОЕ РАЗВЕРТЫВАНИЕ",
    desc: "Публикация на нескольких платформах одним кликом. Без технических знаний.",
  },
  {
    icon: Target,
    title: "ТОЧНАЯ АНАЛИТИКА",
    desc: "Отслеживайте прогресс студентов с помощью аналитики в реальном времени и прогнозных моделей.",
  },
  {
    icon: Flame,
    title: "ГОРЯЧАЯ ПЕРЕЗАГРУЗКА",
    desc: "Живой предпросмотр и мгновенные обновления при создании контента курса.",
  },
  {
    icon: Gem,
    title: "ПРЕМИУМ КАЧЕСТВО",
    desc: "Профессиональные курсы с красивыми шаблонами и дизайнами.",
  },
];
</script>
