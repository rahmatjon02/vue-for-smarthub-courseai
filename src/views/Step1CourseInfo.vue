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
          <h2 class="text-xl md:text-2xl font-bold text-white mb-2">Информация о курсе</h2>
          <p class="text-sm md:text-base text-gray-400">
            Расскажите нам о теме вашего курса и о том, чему вы хотите научить.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label
              class="block text-sm font-semibold text-gray-300 mb-2"
              for="courseTitle"
              >Название курса</label
            >
            <input
              type="text"
              id="courseTitle"
              placeholder="Введите название курса"
              class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all text-sm md:text-base"
            />
          </div>

          <div>
            <label
              class="block text-sm font-semibold text-gray-300 mb-2"
              for="courseTopic"
              >Тема курса</label
            >
            <input
              type="text"
              id="courseTopic"
              placeholder="Какая основная тема вашего курса?"
              class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all text-sm md:text-base"
            />
          </div>

          <div class="md:col-span-2">
            <label
              class="block text-sm font-semibold text-gray-300 mb-2"
              for="courseDescription"
              >Описание курса</label
            >
            <textarea
              id="courseDescription"
              placeholder="Опишите, что студенты узнают в этом курсе..."
              rows="4"
              class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all resize-vertical text-sm md:text-base"
            ></textarea>
          </div>

          <div class="md:col-span-2">
            <label
              class="block text-sm font-semibold text-gray-300 mb-2"
              for="targetAudience"
              >Целевая аудитория</label
            >
            <textarea
              id="targetAudience"
              placeholder="Опишите вашего ученика (возраст, уровень, опыт и т.д.)..."
              rows="3"
              class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all resize-vertical text-sm md:text-base"
            ></textarea>
          </div>

          <div class="md:col-span-2">
            <label
              class="block text-sm font-semibold text-gray-300 mb-2"
              for="learningOutcomes"
              >Основные результаты обучения</label
            >
            <textarea
              id="learningOutcomes"
              placeholder="Что должны знать/уметь/анализировать ваши ученики после завершения этого курса?..."
              rows="3"
              class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all resize-vertical text-sm md:text-base"
            ></textarea>
          </div>

          <div class="md:col-span-2">
            <label
              class="block text-sm font-semibold text-gray-300 mb-2"
              for="prerequisites"
              >Предварительные требования</label
            >
            <textarea
              id="prerequisites"
              placeholder="Что студенты должны знать перед прохождением этого курса?..."
              rows="3"
              class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all resize-vertical text-sm md:text-base"
            ></textarea>
          </div>

          <div>
            <label
              class="block text-sm font-semibold text-gray-300 mb-2"
              for="primaryLanguage"
              >Основной язык</label
            >
            <select
              id="primaryLanguage"
              class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all text-sm md:text-base"
            >
              <option value="english" class="bg-gray-900">Английский</option>
              <option value="russian" class="bg-gray-900">Русский</option>
              <option value="tajik" class="bg-gray-900">Таджикский</option>
            </select>
          </div>

          <div>
            <div class="flex flex-col gap-3">
              <span class="text-sm font-semibold text-gray-300"
                >Поддержка локализации</span
              >
              <span class="text-xs text-gray-500"
                >Выберите дополнительные языки для будущего перевода:</span
              >
              <div class="flex flex-col gap-2">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    class="w-4 h-4 accent-[var(--brand-from)] bg-white/5 border-white/10 rounded"
                  />
                  <span class="text-sm text-gray-400">Русский</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    class="w-4 h-4 accent-[var(--brand-from)] bg-white/5 border-white/10 rounded"
                  />
                  <span class="text-sm text-gray-400">Таджикский</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 md:mt-8 pt-4 md:pt-8 border-t border-white/10">
          <div class="text-sm font-semibold text-gray-300 mb-2">
            Типы контента курса
          </div>
          <div class="text-xs text-gray-500 mb-3 md:mb-4">
            Выберите типы контента, которые вы хотите включить в свой курс.
            В настоящее время для генерации контента поддерживаются только Изображение и Текст.
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
            <label
              v-for="type in contentTypes"
              :key="type.value"
              class="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg border cursor-pointer transition-all bg-white/5 border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] focus-within:border-[color-mix(in_srgb,var(--brand-from)_40%,transparent)] has-[:checked]:border-[color-mix(in_srgb,var(--brand-from)_40%,transparent)] has-[:checked]:bg-[color-mix(in_srgb,var(--brand-from)_10%,transparent)]"
            >
              <input
                type="checkbox"
                :value="type.value"
                v-model="typeActive.contentTypes"
                class="w-5 h-5 accent-[var(--brand-from)] bg-white/5 border-white/10 rounded"
              />
              <span class="text-sm text-gray-300">{{ type.label }}</span>
            </label>
          </div>
        </div>
      </form>

      <div class="flex md:justify-end">
        <router-link
          to="/step-2"
          class="group w-full md:w-1/4 flex justify-center flex justify-center relative px-8 py-4 rounded-xl font-bold md:text-lg text-base overflow-hidden bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-xl"
        >
          <span class="relative flex items-center gap-2">
            Далее
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
import { ref } from "vue";
import ProgressSteps from "../components/ProgressSteps.vue";
import StepHeader from "../components/StepHeader.vue";

const typeActive = ref({
  contentTypes: ["imageText"],
});

const contentTypes = [
  { value: "imageText", label: "Изображение и Текст" },
  { value: "video", label: "Видео" },
  { value: "audio", label: "Аудио" },
  { value: "quiz", label: "Викторина" },
  { value: "assignments", label: "Задания" },
];
</script>
