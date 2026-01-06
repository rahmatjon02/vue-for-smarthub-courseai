<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
  >
    <StepHeader />
    <ProgressSteps />

    <main class="max-w-7xl mx-auto px-4 md:px-6 pb-12">
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">Обзор и генерация</h2>
        <p class="text-sm md:text-base text-gray-400">
          Просмотрите детали вашего курса и сгенерируйте структуру курса.
        </p>
      </div>

      <div class="space-y-6 mb-8">    
        <div class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center">
                <FileText class="w-5 h-5 text-white" />
              </div>
              <div class="text-lg font-bold text-white">Сводка курса</div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-3 bg-white/5 rounded-xl border border-white/10">
                <div class="text-xs text-gray-500 mb-1">Название</div>
                <div class="text-sm font-medium text-white">
                  {{ courseSummary.title || "Введение в тестирование программного обеспечения" }}
                </div>
              </div>
              <div class="p-3 bg-white/5 rounded-xl border border-white/10">
                <div class="text-xs text-gray-500 mb-1">Тема</div>
                <div class="text-sm font-medium text-white">
                  {{ courseSummary.topic || "Тестирование программного обеспечения" }}
                </div>
              </div>
              <div class="p-3 bg-white/5 rounded-xl border border-white/10">
                <div class="text-xs text-gray-500 mb-1">Целевая аудитория</div>
                <div class="text-sm font-medium text-white">
                  {{ courseSummary.targetAudience || "Начинающие разработчики" }}
                </div>
              </div>
              <div class="p-3 bg-white/5 rounded-xl border border-white/10">
                <div class="text-xs text-gray-500 mb-1">Результаты обучения</div>
                <div class="text-sm font-medium text-white">
                  {{ courseSummary.learningOutcomes || "Понимание основ тестирования" }}
                </div>
              </div>
              <div class="p-3 bg-white/5 rounded-xl border border-white/10">
                <div class="text-xs text-gray-500 mb-1">Предварительные требования</div>
                <div class="text-sm font-medium text-white">
                  {{ courseSummary.prerequisites || "Базовые знания программирования" }}
                </div>
              </div>
              <div class="p-3 bg-white/5 rounded-xl border border-white/10">
                <div class="text-xs text-gray-500 mb-1">Основной язык</div>
                <div class="text-sm font-medium text-white">
                  {{ courseSummary.primaryLanguage || "Английский" }}
                </div>
              </div>
              <div class="p-3 bg-white/5 rounded-xl border border-white/10">
                <div class="text-xs text-gray-500 mb-1">Модули</div>
                <div class="text-sm font-medium text-white">{{ courseSummary.modules || 3 }}</div>
              </div>
              <div class="p-3 bg-white/5 rounded-xl border border-white/10">
                <div class="text-xs text-gray-500 mb-1">Уроков в модуле</div>
                <div class="text-sm font-medium text-white">{{ courseSummary.lessonsPerModule || 3 }}</div>
              </div>
              <div class="p-3 bg-gradient-to-br from-[var(--brand-from)]/20 to-[var(--brand-to)]/20 rounded-xl border border-[var(--brand-from)]/30 md:col-span-2">
                <div class="text-xs text-gray-400 mb-1">Всего уроков</div>
                <div class="text-lg font-bold text-white">{{ courseSummary.totalLessons || 9 }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center">
                <CheckCircle class="w-5 h-5 text-white" />
              </div>
              <div>
                <div class="text-lg font-bold text-white">Обзор качества курса</div>
                <p class="text-xs text-gray-500 mt-1">Все поля обязательны для заполнения</p>
              </div>
            </div>
            <div class="space-y-3">
              <label
                v-for="(item, index) in qualityChecks"
                :key="index"
                class="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all bg-white/5 border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] has-[:checked]:border-[color-mix(in_srgb,var(--brand-from)_40%,transparent)] has-[:checked]:bg-[color-mix(in_srgb,var(--brand-from)_10%,transparent)]"
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
        </div>

        <div class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_5%,transparent)] border border-[color-mix(in_srgb,var(--brand-to)_30%,transparent)]">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-to)] to-[var(--brand-from)] flex items-center justify-center">
              <Layers class="w-5 h-5 text-white" />
            </div>
            <div class="text-lg font-bold text-[var(--brand-to)]">Сгенерированная структура курса</div>
          </div>

          <div class="space-y-4">
            <div
              v-for="(module, moduleIndex) in courseStructure"
              :key="moduleIndex"
              class="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all"
            >
              <div class="flex items-start gap-2 sm:gap-3 mb-3">
                <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center flex-shrink-0">
                  <span class="text-[10px] sm:text-xs font-bold text-white">{{ moduleIndex + 1 }}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-sm sm:text-base font-semibold text-white break-words">
                    Модуль {{ moduleIndex + 1 }}: {{ module.title }}
                  </div>
                  <div class="text-[11px] sm:text-xs text-gray-400 mt-1 break-words">{{ module.description }}</div>
                </div>
              </div>

              <div class="space-y-2 pl-8 sm:pl-11">
                <div
                  v-for="(lesson, lessonIndex) in module.lessons"
                  :key="lessonIndex"
                  class="flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 bg-white/5 rounded-lg"
                >
                  <div class="w-1.5 h-1.5 bg-[var(--brand-from)] rounded-full flex-shrink-0"></div>
                  <span class="text-[11px] sm:text-xs text-gray-300 flex-1 break-words">{{ lesson.title }}</span>
                  <div class="flex gap-1 flex-shrink-0">
                    <span
                      v-for="type in lesson.contentTypes"
                      :key="type"
                      class="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 bg-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] text-[var(--brand-from)] rounded"
                    >{{ type }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between flex-col sm:flex-row gap-3">
        <router-link
          to="/step-4"
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
        <button
          type="button"
          @click="startGeneration"
          class="group w-full sm:w-auto md:w-1/4 flex justify-center relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base md:text-lg overflow-hidden bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]"
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

    <div
      :class="[
        'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300',
        showGeneratingModal ? 'opacity-100 visible' : 'opacity-0 invisible',
      ]"
    >
          <div
            :class="[
              'bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-3 sm:p-4 md:p-6 max-w-md w-[95%] sm:w-[90%] max-h-[95vh] scrollbar-hide overflow-y-auto text-center shadow-2xl transition-transform duration-300',
          showGeneratingModal ? 'scale-100' : 'scale-90',
        ]"
      >
        <div
          class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] rounded-full flex items-center justify-center animate-pulse"
        >
          <svg
            class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
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
        <h3 class="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">
          Генерация вашего курса
        </h3>
        <p class="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 md:mb-8">
          Пожалуйста, подождите, пока мы создаем удивительный контент для вас
        </p>

        <div class="mb-3 sm:mb-4 md:mb-6">
          <div class="flex justify-between mb-1.5 sm:mb-2">
            <span class="text-xs sm:text-sm text-gray-400">Прогресс</span>
            <span class="text-xs sm:text-sm font-semibold text-[var(--brand-from)]"
              >{{ progressPercent }}%</span
            >
          </div>
          <div class="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-full transition-all duration-500"
              :style="{ width: progressPercent + '%' }"
            ></div>
          </div>
          <div class="text-[10px] sm:text-xs text-gray-500 text-right mt-0.5 sm:mt-1">
            {{ completedSteps }} из 4 шагов завершено
          </div>
        </div>

        <div
          class="bg-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] rounded-lg p-2.5 sm:p-3 md:p-4 mb-3 sm:mb-4 md:mb-6"
        >
          <div class="flex items-center gap-2 sm:gap-3">
            <div
              class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[var(--brand-from)] rounded-full flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4"
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
            <div class="text-left flex-1 min-w-0">
              <div class="text-[10px] sm:text-xs text-gray-500">Текущий шаг</div>
              <div class="text-xs sm:text-sm font-semibold text-white break-words">
                {{ currentStepName }}
              </div>
            </div>
          </div>
        </div>

        <div class="text-left mb-3 sm:mb-4 md:mb-6">
          <div class="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">
            Шаги генерации
          </div>
          <div class="space-y-1.5 sm:space-y-2">
            <div
              v-for="(step, index) in generationSteps"
              :key="index"
              :class="[
                'flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 md:p-3 rounded-lg',
                step.status === 'active'
                  ? 'bg-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)]'
                  : step.status === 'completed'
                  ? 'bg-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-to)_30%,transparent)]'
                  : 'bg-white/5 border border-white/10',
              ]"
            >
              <div
                :class="[
                  'w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-semibold flex-shrink-0',
                  step.status === 'active'
                    ? 'bg-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] text-[var(--brand-from)]'
                    : step.status === 'completed'
                    ? 'bg-[color-mix(in_srgb,var(--brand-to)_20%,transparent)] text-[var(--brand-to)]'
                    : 'bg-white/10 text-gray-500',
                ]"
              >
                <svg
                  v-if="step.status === 'completed'"
                  class="w-2.5 h-2.5 sm:w-3 sm:h-3"
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
                  'text-[10px] sm:text-xs flex-1 break-words',
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
                class="w-3 h-3 sm:w-4 sm:h-4 border-2 border-[var(--brand-from)] border-t-transparent rounded-full animate-spin flex-shrink-0"
              ></div>
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-500"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="w-3 h-3 sm:w-4 sm:h-4"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Оставшееся время: {{ timeRemaining }}с
        </div>
      </div>
    </div>
    
    <div
      :class="[
        'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300',
        showSuccessModal ? 'opacity-100 visible' : 'opacity-0 invisible',
      ]"
    >
          <div
            :class="[
              'bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-3 sm:p-4 md:p-6 max-w-md w-[95%] sm:w-[90%] max-h-[95vh] scrollbar-hide overflow-y-auto text-center shadow-2xl transition-transform duration-300',
          showSuccessModal ? 'scale-100' : 'scale-90',
        ]"
      >
        <div
          class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 bg-gradient-to-br from-[var(--brand-to)] to-[var(--brand-from)] rounded-full flex items-center justify-center"
        >
          <svg
            class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 class="text-base sm:text-lg md:text-xl font-bold text-[var(--brand-to)] mb-1 sm:mb-2">
          Курс успешно сгенерирован!
        </h3>
        <p class="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 md:mb-8">Ваш курс готов к изучению</p>

        <div class="mb-3 sm:mb-4 md:mb-6">
          <div class="flex justify-between mb-1.5 sm:mb-2">
            <span class="text-xs sm:text-sm text-gray-400">Прогресс</span>
            <span class="text-xs sm:text-sm font-semibold text-[var(--brand-to)]"
              >100%</span
            >
          </div>
          <div class="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-[var(--brand-to)] to-[var(--brand-from)] rounded-full w-full"
            ></div>
          </div>
          <div class="text-[10px] sm:text-xs text-gray-500 text-right mt-0.5 sm:mt-1">
            4 из 4 шагов завершено
          </div>
        </div>

        <div
          class="bg-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-to)_20%,transparent)] rounded-lg p-2.5 sm:p-3 md:p-4 mb-3 sm:mb-4 md:mb-6"
        >
          <div class="flex items-center gap-2 sm:gap-3">
            <div
              class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[var(--brand-to)] rounded-full flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div class="text-left flex-1 min-w-0">
              <div class="text-[10px] sm:text-xs text-gray-500">Текущий шаг</div>
              <div class="text-xs sm:text-sm font-semibold text-white break-words">
                Генерация курса успешно завершена!
              </div>
            </div>
          </div>
        </div>

        <div class="text-left mb-3 sm:mb-4 md:mb-6">
          <div class="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">
            Шаги генерации
          </div>
          <div class="space-y-1.5 sm:space-y-2">
            <div
              v-for="(step, index) in generationSteps"
              :key="index"
              class="flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 md:p-3 rounded-lg bg-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-to)_30%,transparent)]"
            >
              <div
                class="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-[color-mix(in_srgb,var(--brand-to)_20%,transparent)] text-[var(--brand-to)] flex-shrink-0"
              >
                <svg
                  class="w-2.5 h-2.5 sm:w-3 sm:h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span class="text-[10px] sm:text-xs text-[var(--brand-to)] flex-1 break-words">{{
                step.name
              }}</span>
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[var(--brand-to)] mb-3 sm:mb-4 md:mb-6"
        >
          <svg
            class="w-3 h-3 sm:w-4 sm:h-4"
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
          class="block w-full px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white hover:opacity-90 transition-opacity"
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
import { FileText, CheckCircle, Layers } from "lucide-vue-next";
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
