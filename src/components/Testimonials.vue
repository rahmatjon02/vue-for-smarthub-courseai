<template>
  <section id="testimonials" class="relative py-20 md:py-32 px-4 md:px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <div
          class="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] mb-4"
        >
          <span
            class="text-sm font-mono text-[color-mix(in_srgb,var(--brand-from)_70%,white)] tracking-wider"
            >ОТЗЫВЫ КЛИЕНТОВ</span
          >
        </div>
        <h2 class="text-3xl md:text-5xl lg:text-7xl font-black mb-6">
          <span class="text-white">Что говорят</span>
          <span
            class="block text-transparent bg-clip-text bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_70%,white)] to-[color-mix(in_srgb,var(--brand-to)_70%,white)]"
            >наши пользователи</span
          >
        </h2>
        <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Реальные истории успеха от преподавателей и тренеров, которые используют нашу платформу для создания выдающихся курсов.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[var(--brand-from)]/40 transition-all duration-300 hover:scale-[1.02]"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="relative z-10 mb-6 pb-6 border-b border-white/10">
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-16 h-16 bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0"
              >
                {{ testimonial.initials }}
              </div>
              <div class="flex-1">
                <div class="font-bold text-white text-lg mb-1">{{ testimonial.name }}</div>
                <div class="text-sm text-gray-400 mb-2">{{ testimonial.role }}</div>
                <div class="flex gap-1">
                  <span v-for="i in 5" :key="i" class="text-yellow-400">
                    <Star class="w-4 h-4 fill-yellow-400" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="relative z-10">
            <p class="text-gray-300 leading-relaxed relative z-10 text-base">
              "{{ testimonial.text }}"
            </p>
          </div>

          <div class="relative z-10 mt-6 pt-6 border-t border-white/10">
            <div class="flex items-center justify-between text-sm">
              <div>
                <div class="text-xs text-gray-500 mb-1">Создано курсов</div>
                <div class="font-bold text-[var(--brand-from)]">{{ testimonial.courses }}</div>
              </div>
              <div>
                <div class="text-xs text-gray-500 mb-1">Студентов</div>
                <div class="font-bold text-[var(--brand-to)]">{{ testimonial.students }}</div>
              </div>
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
    text: "Благодаря Coursebox я сократил время разработки образовательных программ почти в 5 раз. Инструменты искусственного интеллекта создают качественный контент, который требует минимальной правки.",
    name: "Сара Ким",
    role: "Эксперт по Data Science",
    initials: "СК",
    courses: 12,
    students: "2.5K",
  },
  {
    text: "Аналитические инструменты платформы позволили мне выявить проблемные зоны в обучении. Благодаря этому я смог повысить успеваемость учащихся более чем в два раза всего за квартал.",
    name: "Михаил Джонсон",
    role: "Бизнес-тренер",
    initials: "МД",
    courses: 8,
    students: "1.8K",
  },
  {
    text: "Не имея опыта в программировании, я смогла разработать профессиональные обучающие программы. Drag-and-drop редактор настолько прост, что с ним справится любой пользователь.",
    name: "Эмили Родригес",
    role: "Консультант по маркетингу",
    initials: "ЭР",
    courses: 15,
    students: "3.2K",
  },
];
</script>
