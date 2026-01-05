<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
  >
    <StepHeader />
    <ProgressSteps />

    <main class="max-w-7xl mx-auto px-4 md:px-6 pb-12">
      <form
        class="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 md:p-8 mb-8"
      >
        <div class="mb-4 md:mb-8">
          <h2 class="text-xl md:text-2xl font-bold text-white mb-2">Структура курса</h2>
          <p class="text-sm md:text-base text-gray-400">
            Определите, сколько модулей и уроков вы хотите в своем курсе.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-8">
          <div>
            <label
              class="block text-sm font-semibold text-gray-300 mb-2"
              for="numModules"
              >Количество модулей</label
            >
            <select
              id="numModules"
              v-model="formData.numModules"
              class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all text-sm md:text-base"
            >
              <option v-for="n in 10" :key="n" :value="n" class="bg-gray-900">
                {{ n }} {{ n === 1 ? 'Модуль' : n < 5 ? 'Модуля' : 'Модулей' }}
              </option>
            </select>
          </div>

          <div>
            <label
              class="block text-sm font-semibold text-gray-300 mb-2"
              for="lessonsPerModule"
              >Уроков в модуле</label
            >
            <select
              id="lessonsPerModule"
              v-model="formData.lessonsPerModule"
              class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all text-sm md:text-base"
            >
              <option v-for="n in 8" :key="n" :value="n" class="bg-gray-900">
                {{ n }} {{ n === 1 ? 'Урок' : n < 5 ? 'Урока' : 'Уроков' }}
              </option>
            </select>
          </div>
        </div>

        <div
          class="bg-[color-mix(in_srgb,var(--brand-to)_8%,transparent)] border border-[color-mix(in_srgb,var(--brand-to)_20%,transparent)] rounded-lg p-3 md:p-4 mb-4 md:mb-8"
        >
          <div class="flex items-center gap-2 mb-2">
            <svg
              class="w-5 h-5 text-[var(--brand-to)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span class="text-sm font-semibold text-[var(--brand-to)]"
              >Предпросмотр структуры курса</span
            >
          </div>
          <div class="text-sm text-gray-300 pl-7">
            Ваш курс будет содержать
            <strong class="text-[var(--brand-from)]"
              >{{ formData.numModules }} {{ formData.numModules === 1 ? 'модуль' : formData.numModules < 5 ? 'модуля' : 'модулей' }}</strong
            >
            по
            <strong class="text-[var(--brand-from)]"
              >{{ formData.lessonsPerModule }} {{ formData.lessonsPerModule === 1 ? 'урок' : formData.lessonsPerModule < 5 ? 'урока' : 'уроков' }}</strong
            >
            в каждом.<br />
            Всего уроков:
            <strong class="text-[var(--brand-from)]">{{ totalLessons }}</strong>
          </div>
        </div>

        <div class="mt-4 md:mt-8 pt-4 md:pt-8 border-t border-white/10">
          <div class="text-sm font-semibold text-gray-300 mb-2">
            Включить загруженные ресурсы
          </div>
          <div class="text-xs text-gray-500 mb-3 md:mb-4">
            Выберите, какие загруженные ресурсы должны учитываться при генерации
            курса.
          </div>

          <div
            class="border border-white/10 rounded-lg p-6 md:p-12 text-center bg-white/5"
          >
            <svg
              class="w-12 h-12 mx-auto mb-4 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <p class="text-sm text-gray-400 mb-1">
              Ресурсы не загружены
            </p>
            <span class="text-xs text-gray-500"
              >Загрузите файлы на шаге "Ссылки", чтобы включить их здесь</span
            >
          </div>
        </div>
      </form>

      <div class="flex justify-between md:flex-row flex-col gap-3">
        <router-link
          to="/step-2"
          class="group w-full md:w-1/4 flex justify-center relative px-8 py-4 rounded-xl font-bold md:text-lg text-base backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
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
          class="group w-full md:w-auto flex justify-center relative px-8 py-4 rounded-xl font-bold md:text-lg text-base overflow-hidden bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-xl before:absolute before:inset-0 before:bg-white/5 before:rounded-xl before:opacity-0 before:group-hover:opacity-100 before:transition-opacity"
        >
          <span class="relative flex items-center gap-2">
            Сгенерировать структуру курса
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
