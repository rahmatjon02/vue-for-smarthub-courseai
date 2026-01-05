<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
  >
    <StepHeader />
    <ProgressSteps />

    <main class="max-w-7xl mx-auto px-4 md:px-6 pb-12">
      <div
        class="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 md:p-8 mb-8"
      >
        <div class="mb-4 md:mb-8">
          <h2 class="text-xl md:text-2xl font-bold text-white mb-2">Обзор и генерация</h2>
          <p class="text-sm md:text-base text-gray-400">
            Просмотрите детали вашего курса и сгенерируйте структуру курса.
          </p>
        </div>

        <div class="mb-4 md:mb-8">
          <div
            class="text-base md:text-lg font-bold text-white mb-4 md:mb-5 pb-2 md:pb-3 border-b border-white/10"
          >
            Сводка курса
          </div>
          <div class="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-4 md:gap-6">
            <div class="text-sm text-gray-400">Название:</div>
            <div class="text-sm font-medium text-gray-300">
              {{ courseSummary.title || "Введение в тестирование программного обеспечения" }}
            </div>

            <div class="text-sm text-gray-400">Тема:</div>
            <div class="text-sm font-medium text-gray-300">
              {{ courseSummary.topic || "Тестирование программного обеспечения" }}
            </div>

            <div class="text-sm text-gray-400">Целевая аудитория:</div>
            <div class="text-sm font-medium text-gray-300">
              {{ courseSummary.targetAudience || "Начинающие разработчики" }}
            </div>

            <div class="text-sm text-gray-400">Результаты обучения:</div>
            <div class="text-sm font-medium text-gray-300">
              {{
                courseSummary.learningOutcomes ||
                "Понимание основ тестирования"
              }}
            </div>

            <div class="text-sm text-gray-400">Предварительные требования:</div>
            <div class="text-sm font-medium text-gray-300">
              {{ courseSummary.prerequisites || "Базовые знания программирования" }}
            </div>

            <div class="text-sm text-gray-400">Основной язык:</div>
            <div class="text-sm font-medium text-gray-300">
              {{ courseSummary.primaryLanguage || "Английский" }}
            </div>

            <div class="text-sm text-gray-400">Модули:</div>
            <div class="text-sm font-medium text-gray-300">
              {{ courseSummary.modules || 3 }}
            </div>

            <div class="text-sm text-gray-400">Уроков в модуле:</div>
            <div class="text-sm font-medium text-gray-300">
              {{ courseSummary.lessonsPerModule || 3 }}
            </div>

            <div class="text-sm text-gray-400">Всего уроков:</div>
            <div class="text-sm font-medium text-gray-300">
              {{ courseSummary.totalLessons || 9 }}
            </div>
          </div>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 mb-4 md:mb-8">
          <div class="text-base md:text-lg font-bold text-white mb-2">
            Обзор качества курса
          </div>
          <div class="text-sm text-gray-400 mb-4 md:mb-5">
            Пожалуйста, просмотрите и подтвердите следующие аспекты дизайна вашего курса.
            Все поля обязательны для заполнения.
          </div>

          <div class="space-y-2 md:space-y-3">
            <label
              v-for="(item, index) in qualityChecks"
              :key="index"
              class="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                :id="`q${index + 1}`"
                v-model="item.checked"
                class="w-5 h-5 accent-[var(--brand-from)] bg-white/5 border-white/10 rounded"
              />
              <span class="text-sm text-gray-300">{{ item.label }}</span>
            </label>
          </div>
        </div>

        <div
          class="bg-[color-mix(in_srgb,var(--brand-to)_5%,transparent)] border border-[color-mix(in_srgb,var(--brand-to)_20%,transparent)] rounded-xl p-4 md:p-6"
        >
          <div class="text-base md:text-lg font-bold text-[var(--brand-to)] mb-4 md:mb-5">
            Сгенерированная структура курса
          </div>

          <div
            v-for="(module, moduleIndex) in courseStructure"
            :key="moduleIndex"
            class="bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 mb-2 md:mb-3"
          >
            <div class="text-base font-semibold text-white mb-2">
              Модуль {{ moduleIndex + 1 }}: {{ module.title }}
            </div>
            <div class="text-xs text-gray-400 mb-3">
              {{ module.description }}
            </div>

            <div
              v-for="(lesson, lessonIndex) in module.lessons"
              :key="lessonIndex"
              class="flex items-center gap-2 p-1.5 md:p-2 bg-white/5 rounded mb-1"
            >
              <span
                class="w-1.5 h-1.5 bg-[var(--brand-from)] rounded-full"
              ></span>
              <span class="text-xs text-gray-400 flex-1">{{
                lesson.title
              }}</span>
              <div class="flex gap-1">
                <span
                  v-for="type in lesson.contentTypes"
                  :key="type"
                  class="text-[10px] px-2 py-0.5 bg-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] text-[var(--brand-from)] rounded"
                  >{{ type }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between md:flex-row flex-col gap-3">
        <router-link
          to="/step-4"
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
        <button
          type="button"
          @click="startGeneration"
          class="group w-full md:w-1/4 flex justify-center relative px-8 py-4 rounded-xl font-bold md:text-lg text-base overflow-hidden bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-xl"
        >
          <span class="relative flex items-center gap-2">
            Сгенерировать контент
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
              />
            </svg>
          </span>
        </button>
      </div>
    </main>

    <!-- Generating Modal -->
    <div
      :class="[
        'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300',
        showGeneratingModal ? 'opacity-100 visible' : 'opacity-0 invisible',
      ]"
    >
      <div
        :class="[
          'bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 md:p-10 max-w-md w-[90%] h-[90vh] scrollbar-hide overflow-y-scroll text-center shadow-2xl transition-transform duration-300',
          showGeneratingModal ? 'scale-100' : 'scale-90',
        ]"
      >
        <div
          class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] rounded-full flex items-center justify-center animate-pulse"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">
          Генерация вашего курса
        </h3>
        <p class="text-gray-400 mb-8">
          Пожалуйста, подождите, пока мы создаем удивительный контент для вас
        </p>

        <div class="mb-6">
          <div class="flex justify-between mb-2">
            <span class="text-sm text-gray-400">Прогресс</span>
            <span class="text-sm font-semibold text-[var(--brand-from)]"
              >{{ progressPercent }}%</span
            >
          </div>
          <div class="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-full transition-all duration-500"
              :style="{ width: progressPercent + '%' }"
            ></div>
          </div>
          <div class="text-xs text-gray-500 text-right mt-1">
            {{ completedSteps }} из 4 шагов завершено
          </div>
        </div>

        <div
          class="bg-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] rounded-lg p-4 mb-6"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 bg-[var(--brand-from)] rounded-full flex items-center justify-center"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"
                />
              </svg>
            </div>
            <div class="text-left flex-1">
              <div class="text-xs text-gray-500">Текущий шаг</div>
              <div class="text-sm font-semibold text-white">
                {{ currentStepName }}
              </div>
            </div>
          </div>
        </div>

        <div class="text-left mb-6">
          <div class="text-sm font-semibold text-gray-300 mb-3">
            Шаги генерации
          </div>
          <div class="space-y-2">
            <div
              v-for="(step, index) in generationSteps"
              :key="index"
              :class="[
                'flex items-center gap-3 p-3 rounded-lg',
                step.status === 'active'
                  ? 'bg-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)]'
                  : step.status === 'completed'
                  ? 'bg-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-to)_30%,transparent)]'
                  : 'bg-white/5 border border-white/10',
              ]"
            >
              <div
                :class="[
                  'w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold',
                  step.status === 'active'
                    ? 'bg-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] text-[var(--brand-from)]'
                    : step.status === 'completed'
                    ? 'bg-[color-mix(in_srgb,var(--brand-to)_20%,transparent)] text-[var(--brand-to)]'
                    : 'bg-white/10 text-gray-500',
                ]"
              >
                <svg
                  v-if="step.status === 'completed'"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span v-else>{{ index + 1 }}</span>
              </div>
              <span
                :class="[
                  'text-xs flex-1',
                  step.status === 'active'
                    ? 'text-[var(--brand-from)] font-medium'
                    : step.status === 'completed'
                    ? 'text-[var(--brand-to)]'
                    : 'text-gray-500',
                ]"
                >{{ step.name }}</span
              >
              <div
                v-if="step.status === 'active'"
                class="w-4 h-4 border-2 border-[var(--brand-from)] border-t-transparent rounded-full animate-spin"
              ></div>
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-center gap-2 text-xs text-gray-500"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="w-4 h-4"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Оставшееся время: {{ timeRemaining }}с
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div
      :class="[
        'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300',
        showSuccessModal ? 'opacity-100 visible' : 'opacity-0 invisible',
      ]"
    >
      <div
        :class="[
          'bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 md:p-10 max-w-md w-[90%] h-[90vh] scrollbar-hide overflow-y-scroll text-center shadow-2xl transition-transform duration-300',
          showSuccessModal ? 'scale-100' : 'scale-90',
        ]"
      >
        <div
          class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[var(--brand-to)] to-[var(--brand-from)] rounded-full flex items-center justify-center"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-[var(--brand-to)] mb-2">
          Курс успешно сгенерирован!
        </h3>
        <p class="text-gray-400 mb-8">Ваш курс готов к изучению</p>

        <div class="mb-6">
          <div class="flex justify-between mb-2">
            <span class="text-sm text-gray-400">Прогресс</span>
            <span class="text-sm font-semibold text-[var(--brand-to)]"
              >100%</span
            >
          </div>
          <div class="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-[var(--brand-to)] to-[var(--brand-from)] rounded-full w-full"
            ></div>
          </div>
          <div class="text-xs text-gray-500 text-right mt-1">
            4 из 4 шагов завершено
          </div>
        </div>

        <div
          class="bg-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-to)_20%,transparent)] rounded-lg p-4 mb-6"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 bg-[var(--brand-to)] rounded-full flex items-center justify-center"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div class="text-left flex-1">
              <div class="text-xs text-gray-500">Текущий шаг</div>
              <div class="text-sm font-semibold text-white">
                Генерация курса успешно завершена!
              </div>
            </div>
          </div>
        </div>

        <div class="text-left mb-6">
          <div class="text-sm font-semibold text-gray-300 mb-3">
            Шаги генерации
          </div>
          <div class="space-y-2">
            <div
              v-for="(step, index) in generationSteps"
              :key="index"
              class="flex items-center gap-3 p-3 rounded-lg bg-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-to)_30%,transparent)]"
            >
              <div
                class="w-6 h-6 rounded-full flex items-center justify-center bg-[color-mix(in_srgb,var(--brand-to)_20%,transparent)] text-[var(--brand-to)]"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span class="text-xs text-[var(--brand-to)] flex-1">{{
                step.name
              }}</span>
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-center gap-2 text-sm text-[var(--brand-to)] mb-6"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Курс сгенерирован за {{ generationTime }}с
        </div>

        <router-link
          to="/"
          class="block w-full px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white hover:opacity-90 transition-opacity"
        >
          <span class="flex items-center justify-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            Перейти к моим курсам
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProgressSteps from "../components/ProgressSteps.vue";
import StepHeader from "../components/StepHeader.vue";

const showGeneratingModal = ref(false);
const showSuccessModal = ref(false);
const progressPercent = ref(0);
const completedSteps = ref(0);
const currentStepName = ref("Инициализация...");
const timeRemaining = ref(0);
const generationTime = ref(0);

const courseSummary = ref({
  title: "Введение в тестирование программного обеспечения",
  topic: "Тестирование программного обеспечения",
  targetAudience: "Начинающие разработчики",
  learningOutcomes: "Понимание основ тестирования",
  prerequisites: "Базовые знания программирования",
  primaryLanguage: "Английский",
  modules: 3,
  lessonsPerModule: 3,
  totalLessons: 9,
});

const courseStructure = ref([
  {
    title: "Введение в тестирование",
    description:
      "Этот модуль знакомит с концепцией тестирования, его важностью и различными типами тестирования.",
    lessons: [
      {
        title: "Понимание основ тестирования",
        contentTypes: ["Изображение", "Текст"],
      },
      {
        title: "Типы тестирования программного обеспечения",
        contentTypes: ["Изображение", "Текст"],
      },
      { title: "Лучшие практики тестирования", contentTypes: ["Изображение", "Текст"] },
    ],
  },
  {
    title: "Основы автоматизации тестирования",
    description:
      "Этот модуль охватывает основы автоматизации тестирования, включая инструменты, фреймворки и лучшие практики.",
    lessons: [
      {
        title: "Введение в автоматизацию тестирования",
        contentTypes: ["Изображение", "Текст"],
      },
    ],
  },
  {
    title: "Продвинутые техники тестирования",
    description:
      "Изучите продвинутые техники тестирования, включая тестирование производительности, безопасности и непрерывное тестирование.",
    lessons: [
      {
        title: "Стратегии тестирования производительности",
        contentTypes: ["Изображение", "Текст"],
      },
    ],
  },
]);

const qualityChecks = ref([
  {
    label: "Все цели курса покрыты модулями/уроками (Да/Нет)",
    checked: true,
  },
  { label: "Каждая цель урока имеет оценку (Да/Нет)", checked: true },
  { label: "Измеримость: Цели сформулированы измеримо", checked: true },
  {
    label: "В более чем 50% уроков есть практические задания",
    checked: true,
  },
  {
    label:
      "В каждом модуле есть минимум 1 активность (проекты, ролевые игры, кейсы)",
    checked: true,
  },
]);

const generationSteps = ref([
  { name: "Подготовка генерации курса", status: "pending" },
  { name: "Очистка существующего контента", status: "pending" },
  { name: "Генерация контента курса", status: "pending" },
  { name: "Завершение курса", status: "pending" },
]);

const steps = [
  { name: "Подготовка генерации курса", time: 2000 },
  { name: "Очистка существующего контента", time: 3000 },
  { name: "Генерация контента курса", time: 4000 },
  { name: "Завершение курса", time: 2000 },
];

const startGeneration = () => {
  showGeneratingModal.value = true;
  const startTime = Date.now();

  let currentStepIndex = 0;
  const totalTime = steps.reduce((a, b) => a + b.time, 0);
  let elapsedTime = 0;

  const updateStep = () => {
    if (currentStepIndex >= steps.length) {
      generationTime.value = Math.round((Date.now() - startTime) / 1000);
      setTimeout(() => {
        showGeneratingModal.value = false;
        showSuccessModal.value = true;
      }, 500);
      return;
    }

    const step = steps[currentStepIndex];

    currentStepName.value = step.name;
    completedSteps.value = currentStepIndex;

    generationSteps.value.forEach((s, i) => {
      if (i < currentStepIndex) {
        s.status = "completed";
      } else if (i === currentStepIndex) {
        s.status = "active";
      } else {
        s.status = "pending";
      }
    });

    const startProgress = (elapsedTime / totalTime) * 100;
    const stepProgress = (step.time / totalTime) * 100;
    const endProgress = startProgress + stepProgress;

    let progress = startProgress;
    const progressInterval = setInterval(() => {
      progress += 1;
      if (progress >= endProgress) {
        progress = endProgress;
        clearInterval(progressInterval);
      }
      progressPercent.value = Math.round(progress);
    }, step.time / stepProgress);

    const remainingTime = Math.max(
      0,
      Math.round((totalTime - elapsedTime - step.time) / 1000)
    );
    timeRemaining.value = remainingTime;

    elapsedTime += step.time;
    currentStepIndex++;

    setTimeout(updateStep, step.time);
  };

  updateStep();
};

</script>
