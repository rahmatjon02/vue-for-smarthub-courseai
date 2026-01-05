<template>
  <section id="testimonials" class="relative py-20 md:py-32 px-4 md:px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <div
          class="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] mb-4"
        >
          <span
            class="text-sm font-mono text-[color-mix(in_srgb,var(--brand-from)_70%,white)] tracking-wider"
            >ОТЗЫВЫ</span
          >
        </div>
        <h2 class="text-3xl md:text-5xl lg:text-7xl font-black mb-6 uppercase">
          <span class="block">Любимо</span>
          <span
            class="block text-transparent bg-clip-text bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_70%,white)] to-[color-mix(in_srgb,var(--brand-to)_70%,white)]"
            >создателями курсов</span
          >
        </h2>
        <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Присоединяйтесь к тысячам преподавателей, которые изменили свое
          преподавание с помощью Coursebox.
        </p>
      </div>

      <div class="md:grid md:grid-cols-3 md:gap-8 flex gap-4 overflow-x-scroll scrollbar-hide">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="min-w-80 md:min-w-full bg-white/5 flex flex-col justify-between backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative hover:border-[var(--brand-from)]/30 transition-all"
        >
          <div>
            <span
              class="absolute top-6 right-6 text-5xl text-[var(--brand-from)]/20 font-serif"
              >"</span
            >
            <div class="flex gap-1 mb-4">
              <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">
                <Star class="w-4 h-4"
              /></span>
            </div>
            <p class="text-gray-300 mb-6 leading-relaxed relative z-10">
              "{{ testimonial.text }}"
            </p>
          </div>

          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-full flex items-center justify-center text-white font-bold text-lg"
            >
              {{ testimonial.initials }}
            </div>
            <div>
              <div class="font-semibold text-white">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-400">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Star } from "lucide-vue-next";

const testimonials = [
  {
    text: "Coursebox сократил время создания курса на 80%. То, что раньше занимало недели, теперь занимает часы. Контент, сгенерированный ИИ, удивительно хорош и требует лишь небольших корректировок.",
    name: "Сара Ким",
    role: "Преподаватель науки о данных",
    initials: "СК",
  },
  {
    text: "Функция аналитики студентов помогла мне точно понять, где учащиеся испытывают трудности. Я улучшил процент завершения курса с 23% до 67% всего за 3 месяца.",
    name: "Михаил Джонсон",
    role: "Бизнес-коуч",
    initials: "МД",
  },
  {
    text: "Как человек без технических знаний, я была поражена тем, насколько легко было создавать профессионально выглядящие курсы. Редактор с перетаскиванием невероятно интуитивен.",
    name: "Эмили Родригес",
    role: "Маркетинговый консультант",
    initials: "ЭР",
  },
];
</script>
