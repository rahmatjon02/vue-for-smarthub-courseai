<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
  >
    <StepHeader />
    <ProgressSteps />

    <main class="max-w-7xl mx-auto px-4 md:px-6 pb-12">
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">Структура курса</h2>
        <p class="text-sm md:text-base text-gray-400">
          Определите, сколько модулей и уроков вы хотите в своем курсе.
        </p>
      </div>

      <div class="space-y-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300">
            <div class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center">
                  <Layers class="w-5 h-5 text-white" />
                </div>
                <label class="text-sm font-semibold text-gray-300" for="numModules">
                  Количество модулей
                </label>
              </div>
              <select
                id="numModules"
                v-model="formData.numModules"
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all"
              >
                <option v-for="n in 10" :key="n" :value="n" class="bg-gray-900">
                  {{ n }} {{ n === 1 ? 'Модуль' : n < 5 ? 'Модуля' : 'Модулей' }}
                </option>
              </select>
            </div>
          </div>

          <div class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300">
            <div class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center">
                  <BookOpen class="w-5 h-5 text-white" />
                </div>
                <label class="text-sm font-semibold text-gray-300" for="lessonsPerModule">
                  Уроков в модуле
                </label>
              </div>
              <select
                id="lessonsPerModule"
                v-model="formData.lessonsPerModule"
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all"
              >
                <option v-for="n in 8" :key="n" :value="n" class="bg-gray-900">
                  {{ n }} {{ n === 1 ? 'Урок' : n < 5 ? 'Урока' : 'Уроков' }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_5%,transparent)] border border-[color-mix(in_srgb,var(--brand-to)_30%,transparent)]">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-to)] to-[var(--brand-from)] flex items-center justify-center">
              <Eye class="w-5 h-5 text-white" />
            </div>
            <span class="text-sm font-semibold text-[var(--brand-to)]">
              Предпросмотр структуры курса
            </span>
          </div>
          <div class="text-sm text-gray-300 space-y-2">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-[var(--brand-from)]"></div>
              <span>
                <strong class="text-[var(--brand-from)]">{{ formData.numModules }}</strong>
                {{ formData.numModules === 1 ? 'модуль' : formData.numModules < 5 ? 'модуля' : 'модулей' }}
              </span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-[var(--brand-from)]"></div>
              <span>
                По <strong class="text-[var(--brand-from)]">{{ formData.lessonsPerModule }}</strong>
                {{ formData.lessonsPerModule === 1 ? 'урок' : formData.lessonsPerModule < 5 ? 'урока' : 'уроков' }} в каждом
              </span>
            </div>
            <div class="flex items-center gap-2 pt-2 border-t border-white/10">
              <div class="w-2 h-2 rounded-full bg-[var(--brand-to)]"></div>
              <span>
                Всего уроков: <strong class="text-[var(--brand-to)] text-lg">{{ totalLessons }}</strong>
              </span>
            </div>
          </div>
        </div>

        <div class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-14 lg:w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center">
              <FileText class="w-5 h-5 text-white" />
            </div>
            <div>
              <div class="text-sm font-semibold text-gray-300">
                Включить загруженные ресурсы
              </div>
              <p class="text-xs text-gray-500 mt-1">
                Выберите, какие загруженные ресурсы должны учитываться при генерации курса.
              </p>
            </div>
          </div>
          <div class="border border-white/10 rounded-xl p-6 sm:p-8 text-center bg-white/5">
            <FileText class="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 text-gray-500" />
            <p class="text-xs sm:text-sm text-gray-400 mb-1">Ресурсы не загружены</p>
            <span class="text-[10px] sm:text-xs text-gray-500">Загрузите файлы на шаге "Ссылки", чтобы включить их здесь</span>
          </div>
        </div>
      </div>

      <div class="flex justify-between flex-col sm:flex-row gap-3">
        <router-link
          to="/step-2"
          class="group w-full sm:w-auto md:w-1/4 flex justify-center relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base md:text-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
        >
          <div
            class="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
          ></div>
          <span class="relative flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Назад
          </span>
        </router-link>
        <router-link
          to="/step-4"
          class="group w-full sm:w-auto flex justify-center relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg overflow-hidden bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] before:absolute before:inset-0 before:bg-white/5 before:rounded-xl before:opacity-0 before:group-hover:opacity-100 before:transition-opacity"
        >
          <span class="relative flex items-center gap-2 text-center">
            <span class="hidden sm:inline">Сгенерировать структуру курса</span>
            <span class="sm:hidden">Сгенерировать</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Layers, BookOpen, Eye, FileText } from "lucide-vue-next";
import ProgressSteps from "../components/ProgressSteps.vue";
import StepHeader from "../components/StepHeader.vue";

const formData = ref({
  numModules: 3,
  lessonsPerModule: 3,
});

const totalLessons = computed(
  () => formData.value.numModules * formData.value.lessonsPerModule
);
</script>
