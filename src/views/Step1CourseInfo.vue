<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
  >
    <StepHeader />
    <ProgressSteps />

    <main class="max-w-7xl mx-auto px-4 md:px-6 pb-12">
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">
          Информация о курсе
        </h2>
        <p class="text-sm md:text-base text-gray-400">
          Расскажите нам о теме вашего курса и о том, чему вы хотите научить.
        </p>
      </div>

      <div class="space-y-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center"
                >
                  <BookOpen class="w-5 h-5 text-white" />
                </div>
                <label
                  class="text-sm font-semibold text-gray-300"
                  for="courseTitle"
                  >Название курса</label
                >
              </div>
              <input
                type="text"
                id="courseTitle"
                placeholder="Введите название курса"
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all"
              />
            </div>
          </div>

          <div
            class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center"
                >
                  <Tag class="w-5 h-5 text-white" />
                </div>
                <label
                  class="text-sm font-semibold text-gray-300"
                  for="courseTopic"
                  >Тема курса</label
                >
              </div>
              <input
                type="text"
                id="courseTopic"
                placeholder="Какая основная тема вашего курса?"
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all"
              />
            </div>
          </div>
        </div>

        <div
          class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div class="relative">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center"
              >
                <FileText class="w-5 h-5 text-white" />
              </div>
              <label
                class="text-sm font-semibold text-gray-300"
                for="courseDescription"
                >Описание курса</label
              >
            </div>
            <textarea
              id="courseDescription"
              placeholder="Опишите, что студенты узнают в этом курсе..."
              rows="4"
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all resize-vertical"
            ></textarea>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center"
                >
                  <Users class="w-5 h-5 text-white" />
                </div>
                <label
                  class="text-sm font-semibold text-gray-300"
                  for="targetAudience"
                  >Целевая аудитория</label
                >
              </div>
              <textarea
                id="targetAudience"
                placeholder="Опишите вашего ученика (возраст, уровень, опыт и т.д.)..."
                rows="3"
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all resize-vertical"
              ></textarea>
            </div>
          </div>

          <div
            class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center"
                >
                  <Target class="w-5 h-5 text-white" />
                </div>
                <label
                  class="text-sm font-semibold text-gray-300"
                  for="learningOutcomes"
                  >Результаты обучения</label
                >
              </div>
              <textarea
                id="learningOutcomes"
                placeholder="Что должны знать/уметь/анализировать ваши ученики после завершения этого курса?..."
                rows="3"
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all resize-vertical"
              ></textarea>
            </div>
          </div>
        </div>

        <div
          class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div class="relative">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center"
              >
                <CheckCircle class="w-5 h-5 text-white" />
              </div>
              <label
                class="text-sm font-semibold text-gray-300"
                for="prerequisites"
                >Предварительные требования</label
              >
            </div>
            <textarea
              id="prerequisites"
              placeholder="Что студенты должны знать перед прохождением этого курса?..."
              rows="3"
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all resize-vertical"
            ></textarea>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center"
                >
                  <Globe class="w-5 h-5 text-white" />
                </div>
                <label
                  class="text-sm font-semibold text-gray-300"
                  for="primaryLanguage"
                  >Основной язык</label
                >
              </div>
              <select
                id="primaryLanguage"
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all"
              >
                <option value="english" class="bg-gray-900">Английский</option>
                <option value="russian" class="bg-gray-900">Русский</option>
                <option value="tajik" class="bg-gray-900">Таджикский</option>
              </select>
            </div>
          </div>

          <div
            class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center"
                >
                  <Languages class="w-5 h-5 text-white" />
                </div>
                <span class="text-sm font-semibold text-gray-300"
                  >Поддержка локализации</span
                >
              </div>
              <p class="text-xs text-gray-500 mb-3">
                Выберите дополнительные языки для будущего перевода:
              </p>
              <div class="flex flex-col gap-2">
                <label
                  class="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <input
                    type="checkbox"
                    class="w-4 h-4 accent-[var(--brand-from)] bg-white/5 border-white/10 rounded"
                  />
                  <span class="text-sm text-gray-400">Русский</span>
                </label>
                <label
                  class="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
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

        <div
          class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div class="relative">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-14 lg:w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center"
              >
                <Layers class="w-5 h-5 text-white" />
              </div>
              <div>
                <div class="text-sm font-semibold text-gray-300">
                  Типы контента курса
                </div>
                <p class="text-xs text-gray-500 mt-1">
                  Выберите типы контента, которые вы хотите включить в свой
                  курс.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
              <label
                v-for="type in contentTypes"
                :key="type.value"
                class="flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 md:p-4 rounded-xl border cursor-pointer transition-all bg-white/5 border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_40%,transparent)] hover:scale-105 has-[:checked]:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] has-[:checked]:bg-[color-mix(in_srgb,var(--brand-from)_15%,transparent)]"
              >
                <input
                  type="checkbox"
                  :value="type.value"
                  v-model="typeActive.contentTypes"
                  class="w-4 h-4 sm:w-5 sm:h-5 accent-[var(--brand-from)] bg-white/5 border-white/10 rounded"
                />
                <span class="text-[10px] sm:text-xs text-center text-gray-300 leading-tight">{{
                  type.label
                }}</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <router-link
          to="/step-2"
          class="group w-full sm:w-auto md:w-1/4 flex justify-center relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base md:text-lg overflow-hidden bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]"
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
import {
  BookOpen,
  Tag,
  FileText,
  Users,
  Target,
  CheckCircle,
  Globe,
  Languages,
  Layers,
} from "lucide-vue-next";
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
