<template>
  <footer class="relative border-t border-gray-800/50 py-16 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-4 gap-12 mb-12">
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-6">
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-2xl blur-lg opacity-50"
              ></div>
              <div
                class="relative w-12 h-12 bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] rounded-2xl flex items-center justify-center font-black text-xl backdrop-blur-sm border border-white/10"
              >
                S
              </div>
            </div>
            <div>
              <span
                class="font-black text-xl bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_80%,white)] to-[color-mix(in_srgb,var(--brand-to)_80%,white)] bg-clip-text text-transparent"
                >Coursebox</span
              >
              <div class="text-xs text-gray-500 font-mono tracking-wider">
                AI ДВИЖОК КУРСОВ
              </div>
            </div>
          </div>
          <p class="text-gray-400 mb-6 leading-relaxed font-light max-w-md">
            Мы создаем будущее образования с помощью искусственного интеллекта,
            предоставляя инструменты для создания исключительных образовательных
            материалов.
          </p>
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.name"
              href="#"
              class="group w-10 h-10 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-[var(--brand-from)] hover:to-[var(--brand-to)] hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <component
                :is="social.icon"
                class="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          </div>
        </div>

        <div v-for="(col, i) in footerColumns" :key="i">
          <h4 class="font-bold mb-4 text-gray-300">{{ col.title }}</h4>
          <ul class="space-y-3">
            <li v-for="link in col.links" :key="link">
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors duration-200 font-light"
              >
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="pt-8 border-t border-gray-800/50 flex flex-wrap justify-between items-center gap-4 text-sm text-gray-500"
      >
        <p class="font-light">
          © 2024 Coursebox. Все права защищены. |
          <a
            href="https://www.coursebox.ai/"
            class="text-[color-mix(in_srgb,var(--brand-from)_80%,white)] hover:underline"
            >Coursebox</a
          >
        </p>
        <div class="flex gap-6 font-light">
          <a href="#" class="hover:text-white transition-colors duration-200"
            >Политика конфиденциальности</a
          >
          <a href="#" class="hover:text-white transition-colors duration-200"
            >Условия использования</a
          >
          <a href="#" class="hover:text-white transition-colors duration-200"
            >Политика использования cookie</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Twitter, Github, Linkedin, MessageCircle } from "lucide-vue-next";

const footerColumns = [
  { title: "ПРОДУКТ", links: ["Возможности", "Цены", "API", "Интеграции"] },
  {
    title: "РЕСУРСЫ",
    links: ["Документация", "Блог", "Руководства", "Сообщество"],
  },
];

const socials = [
  { icon: Twitter, name: "Twitter" },
  { icon: Github, name: "GitHub" },
  { icon: Linkedin, name: "LinkedIn" },
  { icon: MessageCircle, name: "Discord" },
];
</script>
