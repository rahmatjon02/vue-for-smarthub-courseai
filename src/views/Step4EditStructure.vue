<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
  >
    <StepHeader />
    <ProgressSteps />

    <main class="max-w-7xl mx-auto px-4 md:px-6 pb-12">
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">
          Редактирование структуры курса
        </h2>
        <p class="text-sm md:text-base text-gray-400">
          Просмотрите и измените сгенерированную структуру курса перед продолжением.
        </p>
      </div>

      <div class="mb-6 flex gap-2 sm:gap-3 flex-wrap">
        <button
          v-for="(module, index) in modules"
          :key="index"
          type="button"
          :class="[
            'group relative px-3 sm:px-5 py-2 sm:py-3 rounded-xl font-medium text-xs sm:text-sm transition-all overflow-hidden',
            currentModuleIndex === index
              ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white shadow-lg shadow-[var(--brand-from)]/30'
              : 'bg-white/5 border border-white/10 text-gray-400 hover:border-[color-mix(in_srgb,var(--brand-from)_40%,transparent)] hover:text-white',
          ]"
          @click="showModule(index)"
        >
          <div v-if="currentModuleIndex !== index" class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span class="relative flex items-center gap-2">
            <Layers class="w-4 h-4" />
            Модуль {{ index + 1 }}
          </span>
        </button>
      </div>

      <div v-if="currentModule" class="space-y-6 mb-8">
        <div class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center">
                <Layers class="w-5 h-5 text-white" />
              </div>
              <div class="text-lg font-bold text-white">
                Модуль {{ currentModuleIndex + 1 }}
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <label class="block text-xs font-semibold text-gray-400 mb-2">
                  Название модуля
                </label>
                <input
                  type="text"
                  v-model="currentModule.title"
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-gray-400 mb-2">
                  Описание модуля
                </label>
                <textarea
                  v-model="currentModule.description"
                  rows="3"
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all resize-vertical"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-to)] to-[var(--brand-from)] flex items-center justify-center">
              <BookOpen class="w-5 h-5 text-white" />
            </div>
            <div class="text-lg font-bold text-white">Уроки</div>
          </div>

          <div
            v-for="(lesson, lessonIndex) in currentModule.lessons"
            :key="`${currentModuleIndex}-${lessonIndex}`"
            class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-8 h-8 rounded-lg bg-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] flex items-center justify-center">
                  <span class="text-xs font-bold text-[var(--brand-from)]">{{ lessonIndex + 1 }}</span>
                </div>
                <span class="text-sm font-semibold text-gray-300">Урок {{ lessonIndex + 1 }}</span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="block text-xs font-semibold text-gray-400 mb-2">
                    Название урока
                  </label>
                  <input
                    type="text"
                    v-model="lesson.title"
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-400 mb-2">
                    Описание урока
                  </label>
                  <textarea
                    v-model="lesson.description"
                    rows="3"
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all resize-vertical"
                  ></textarea>
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-gray-400 mb-2">
                  Типы контента
                </label>
                <div class="flex flex-wrap gap-2">
                  <label
                    v-for="type in contentTypes"
                    :key="type.value"
                    class="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all bg-white/5 border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] has-[:checked]:border-[color-mix(in_srgb,var(--brand-from)_40%,transparent)] has-[:checked]:bg-[color-mix(in_srgb,var(--brand-from)_10%,transparent)]"
                  >
                    <input
                      type="checkbox"
                      :value="type.value"
                      v-model="lesson.contentTypes"
                      class="w-4 h-4 accent-[var(--brand-from)] bg-white/5 border-white/10 rounded"
                    />
                    <span class="text-xs text-gray-300">{{ type.label }}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between flex-col sm:flex-row gap-3">
        <div class="flex justify-between gap-3 flex-col sm:flex-row w-full sm:w-auto">
          <router-link
            to="/step-3"
            class="group w-full sm:w-auto md:w-[32%] flex justify-center relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base md:text-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
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
          <button
            v-if="currentModuleIndex < modules.length - 1"
            type="button"
            @click="nextModule"
            class="group w-full sm:w-auto md:w-1/4 flex justify-center relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base md:text-lg overflow-hidden bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]"
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
          </button>
        </div>
        <router-link
          to="/step-5"
          class="group w-full sm:w-auto md:w-1/4 flex justify-center relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base md:text-lg overflow-hidden bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]"
        >
          <span class="relative flex items-center gap-2">
            Перейти к обзору
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
import { ref, computed, onMounted } from "vue";
import { Layers, BookOpen } from "lucide-vue-next";
import ProgressSteps from "../components/ProgressSteps.vue";
import StepHeader from "../components/StepHeader.vue";

const currentModuleIndex = ref(0);

const contentTypes = [
  { value: "imageText", label: "Изображение и Текст" },
  { value: "video", label: "Видео" },
  { value: "audio", label: "Аудио" },
  { value: "quiz", label: "Викторина" },
  { value: "assignment", label: "Задание" },
];

const modules = ref([]);

const currentModule = computed(() => {
  return modules.value[currentModuleIndex.value];
});

const showModule = (index) => {
  currentModuleIndex.value = index;
};

const nextModule = () => {
  if (currentModuleIndex.value < modules.value.length - 1) {
    currentModuleIndex.value++;
  }
};

const initializeModules = () => {
  const numModules = 4;
  const lessonsPerModule = 2;

  const defaultTitles = [
    "Introduction to Testing",
    "Test Automation Fundamentals",
    "Advanced Testing Techniques",
    "Performance Testing",
    "Security Testing",
    "Continuous Testing",
    "Test Management",
    "Quality Assurance",
    "Testing Tools",
    "Best Practices",
  ];

  const defaultDescriptions = [
    "This module introduces the concept of testing, its importance, and the different types of testing.",
    "This module covers the fundamentals of test automation, including tools, frameworks, and best practices.",
    "Explore advanced testing techniques including performance testing, security testing, and continuous testing.",
    "Learn about performance testing strategies and tools.",
    "Understand security testing methodologies and practices.",
    "Discover continuous testing in DevOps environments.",
    "Master test management and planning.",
    "Learn quality assurance principles and practices.",
    "Explore various testing tools and frameworks.",
    "Discover best practices for effective testing.",
  ];

  const lessonTemplates = [
    { title: "Introduction", description: "Overview and goals" },
    { title: "Core Concepts", description: "Main ideas explained" },
    { title: "Practice", description: "Hands-on examples" },
    { title: "Summary", description: "Key takeaways" },
    { title: "Introduction", description: "Overview and goals" },
    { title: "Core Concepts", description: "Main ideas explained" },
    { title: "Practice", description: "Hands-on examples" },
    { title: "Summary", description: "Key takeaways" },
  ];

  modules.value = Array.from({ length: numModules }, (_, i) => ({
    title: defaultTitles[i] || `Модуль ${i + 1}`,
    description: defaultDescriptions[i] || `Описание для модуля ${i + 1}`,
    lessons: Array.from({ length: lessonsPerModule }, (_, j) => {
      const lessonIndex = i * lessonsPerModule + j;
      return {
        title: lessonTemplates[lessonIndex]?.title || `Урок ${j + 1}`,
        description:
          lessonTemplates[lessonIndex]?.description ||
          `Описание для урока ${j + 1}`,
        contentTypes: ["imageText"],
      };
    }),
  }));
};

onMounted(() => {
  initializeModules();
});
</script>
