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
          <h2 class="text-xl md:text-2xl font-bold text-white mb-2">
            Редактирование структуры курса
          </h2>
          <p class="text-sm md:text-base text-gray-400">
            Просмотрите и измените сгенерированную структуру курса перед продолжением.
          </p>
        </div>

        <div class="flex gap-2 mb-6 flex-wrap">
          <button
            v-for="(module, index) in modules"
            :key="index"
            type="button"
            :class="[
              'px-4 py-2 rounded-lg font-medium text-sm transition-all',
              currentModuleIndex === index
                ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] hover:text-white',
            ]"
            @click="showModule(index)"
          >
            Модуль {{ index + 1 }}
          </button>
        </div>

        <div
          v-if="currentModule"
          class="border border-white/10 rounded-xl p-3 md:p-6 bg-white/5"
        >
          <div
            class="text-base md:text-lg font-bold text-white mb-4 md:mb-6 pb-3 md:pb-4 border-b border-white/10"
          >
            Модуль {{ currentModuleIndex + 1 }}
          </div>

          <div class="mb-4 md:mb-6">
            <label class="block text-xs font-semibold text-gray-400 mb-2"
              >Название модуля</label
            >
            <input
              type="text"
              v-model="currentModule.title"
              class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all text-sm md:text-base"
            />
          </div>

          <div class="mb-4 md:mb-6">
            <label class="block text-xs font-semibold text-gray-400 mb-2"
              >Описание модуля</label
            >
            <textarea
              v-model="currentModule.description"
              rows="3"
              class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all resize-vertical text-sm md:text-base"
            ></textarea>
          </div>

          <div class="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/10">
            <div class="text-sm md:text-base font-bold text-white mb-3 md:mb-4">Уроки</div>

            <div
              v-for="(lesson, lessonIndex) in currentModule.lessons"
              :key="`${currentModuleIndex}-${lessonIndex}`"
              class="bg-white/5 border border-white/10 rounded-lg p-3 md:p-5 mb-3 md:mb-4"
            >
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                <div>
                  <label class="block text-xs font-semibold text-gray-400 mb-2"
                    >Название урока</label
                  >
                  <input
                    type="text"
                    v-model="lesson.title"
                    class="w-full px-2 md:px-3 py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all text-sm"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-400 mb-2"
                    >Описание урока</label
                  >
                  <textarea
                    v-model="lesson.description"
                    rows="3"
                    class="w-full px-2 md:px-3 py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all resize-vertical text-sm"
                  ></textarea>
                </div>
              </div>

              <div class="mt-3 md:mt-4">
                <label class="block text-xs font-semibold text-gray-400 mb-1"
                  >Типы контента</label
                >
                <div class="text-xs text-gray-500 mb-2 md:mb-3">
                  Выберите типы контента для включения в этот урок.
                </div>
                <div class="flex flex-wrap gap-2 md:gap-3">
                  <label
                    v-for="type in contentTypes"
                    :key="type.value"
                    class="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      :value="type.value"
                      v-model="lesson.contentTypes"
                      class="w-4 h-4 accent-[var(--brand-from)] bg-white/5 border-white/10 rounded"
                    />
                    <span class="text-xs text-gray-400">{{ type.label }}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div class="flex justify-between md:flex-nowrap flex-wrap gap-3">
        <div class="flex justify-between gap-3 flex-wrap w-full">
          <router-link
            to="/step-3"
            class="group w-full md:w-[32%] flex justify-center relative px-8 py-4 rounded-xl font-bold md:text-lg text-base backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
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
            class="group w-full md:w-1/4 flex justify-center relative px-8 py-4 rounded-xl font-bold md:text-lg text-base overflow-hidden bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-xl"
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
          class="group w-full md:w-1/4 flex justify-center relative px-8 py-4 rounded-xl font-bold md:text-lg text-base overflow-hidden bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-xl"
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
