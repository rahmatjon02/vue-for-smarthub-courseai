<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <div
          class="flex items-center gap-3 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg backdrop-blur-sm border border-white/5 group-hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)]"
        >
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-2xl blur-lg opacity-70"
            ></div>
            <div
              class="relative w-12 h-12 bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] rounded-2xl flex items-center justify-center font-black text-xl backdrop-blur-sm border border-white/10"
            >
              C
            </div>
          </div>
          <div>
            <span
              class="font-black text-xl bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_80%,white)] to-[color-mix(in_srgb,var(--brand-to)_80%,white)] bg-clip-text text-transparent"
              >Coursebox</span
            >
            <div class="text-[10px] text-gray-400 font-mono tracking-wider">
              AI ДВИЖОК КУРСОВ
            </div>
          </div>
        </div>

        <nav class="hidden md:flex items-center gap-8">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            @click="scrollToSection(item.id, $event)"
            class="relative group"
          >
            <div
              class="absolute -inset-1 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"
            ></div>
            <span
              class="relative text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg backdrop-blur-sm border border-white/5 group-hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)]"
            >
              {{ item.label }}
            </span>
          </a>
        </nav>

        <router-link
          to="/step-1"
          class="hidden md:flex relative group overflow-hidden px-6 py-3 rounded-xl font-semibold"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]"
          ></div>
          <span class="relative flex items-center gap-2">
            Начать бесплатно
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition" />
          </span>
        </router-link>

        <button
          @click="open = true"
          class="md:hidden p-2 rounded-xl backdrop-blur-sm border border-white/10"
        >
          <Menu class="w-6 h-6 text-white" />
        </button>
      </div>
    </div>

 
    <div
      class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      :class="open ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    >
      <div
        class="absolute top-0 right-0 w-80 h-full bg-gradient-to-br from-gray-900 to-black transition-transform duration-300 ease-out"
        :class="open ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-8">
            <span class="font-bold text-white">Меню</span>
            <button @click="open = false">
              <X class="w-6 h-6 text-white" />
            </button>
          </div>

          <nav class="flex flex-col gap-6">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="`#${item.id}`"
              @click="scrollToSection(item.id, $event); open = false"
              class="text-xl text-gray-300 hover:text-white transition-colors duration-200"
            >
              {{ item.label }}
            </a>
          </nav>

          <router-link
            to="/step-1"
            @click="open = false"
            class="mt-10 w-full px-6 py-4 rounded-xl font-bold bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white text-center block"
          >
            Начать бесплатно
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";
import { ArrowRight, Menu, X } from "lucide-vue-next";

const open = ref(false);

const navItems = [
  { id: "features", label: "Возможности" },
  { id: "process", label: "Процесс" },
  { id: "preview", label: "Предпросмотр" },
  { id: "pricing", label: "Цены" },
  { id: "faq", label: "FAQ" },
];

const scrollToSection = (id, event) => {
  event.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const headerHeight = 20;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
</script>
