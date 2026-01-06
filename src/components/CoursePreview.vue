<template>
  <section
    id="preview"
    class="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900"
  >
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <div
          class="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] mb-4"
        >
          <span
            class="text-sm font-mono text-[color-mix(in_srgb,var(--brand-from)_70%,white)] tracking-wider"
            >ИНТЕРФЕЙС ОБУЧЕНИЯ</span
          >
        </div>
        <h2 class="text-3xl md:text-5xl lg:text-7xl font-black mb-6">
          <span
            class="block text-transparent bg-clip-text bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_70%,white)] to-[color-mix(in_srgb,var(--brand-to)_70%,white)]"
            >ПОСМОТРИТЕ</span
          >
          <span class="block text-white">как это работает</span>
        </h2>
        <p
          class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light"
        >
          Интуитивная платформа для обучения, которая помогает студентам достигать своих целей быстрее и эффективнее.
        </p>
      </div>

      <div class="relative">
        <div class="mb-12">
          <div class="flex items-center justify-between mb-4">
            <div class="text-sm font-semibold text-gray-400">Прогресс обучения</div>
            <div class="text-sm font-bold text-[var(--brand-from)]">65% завершено</div>
          </div>
          <div class="h-3 bg-white/10 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-full transition-all duration-500" style="width: 65%"></div>
          </div>
          <div class="text-xs text-gray-500 mt-2">13 из 20 уроков пройдено</div>
        </div>

        <div class="mb-8 p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl">
          <h3 class="text-2xl font-bold text-white mb-2">Основы машинного обучения</h3>
          <p class="text-gray-400">Комплексный курс по основам искусственного интеллекта</p>
        </div>

        <div class="space-y-6">
          <div class="relative">
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Check class="w-8 h-8 text-white" />
                </div>
              </div>
              <div class="flex-1 pb-8 border-l-2 border-green-500/30 pl-6">
                <div class="mb-4">
                  <div class="flex items-center gap-3 mb-2">
                    <span class="text-xs font-bold text-green-400 uppercase tracking-wider">Завершено</span>
                    <span class="text-xs text-gray-500">• 4 урока</span>
                  </div>
                  <h4 class="text-xl font-bold text-white mb-2">Модуль 1: Введение в машинное обучение</h4>
                  <p class="text-sm text-gray-400 mb-4">Изучите фундаментальные концепции и принципы работы алгоритмов</p>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div class="flex items-center gap-2 mb-1">
                      <Check class="w-4 h-4 text-green-400" />
                      <span class="text-xs font-medium text-green-400">Что такое МО?</span>
                    </div>
                  </div>
                  <div class="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div class="flex items-center gap-2 mb-1">
                      <Check class="w-4 h-4 text-green-400" />
                      <span class="text-xs font-medium text-green-400">Типы систем</span>
                    </div>
                  </div>
                  <div class="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div class="flex items-center gap-2 mb-1">
                      <Check class="w-4 h-4 text-green-400" />
                      <span class="text-xs font-medium text-green-400">Настройка среды</span>
                    </div>
                  </div>
                  <div class="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div class="flex items-center gap-2 mb-1">
                      <Check class="w-4 h-4 text-green-400" />
                      <span class="text-xs font-medium text-green-400">Проверка знаний</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                  <Play class="w-8 h-8 text-white" />
                </div>
              </div>
              <div class="flex-1 pb-8 border-l-2 border-[var(--brand-from)]/30 pl-6">
                <div class="mb-4">
                  <div class="flex items-center gap-3 mb-2">
                    <span class="text-xs font-bold text-[var(--brand-from)] uppercase tracking-wider">В процессе</span>
                    <span class="text-xs text-gray-500">• 6 уроков</span>
                  </div>
                  <h4 class="text-xl font-bold text-white mb-2">Модуль 2: Обучение с учителем</h4>
                  <p class="text-sm text-gray-400 mb-4">Освойте алгоритмы классификации и регрессии для решения практических задач</p>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div class="flex items-center gap-2 mb-1">
                      <Check class="w-4 h-4 text-green-400" />
                      <span class="text-xs font-medium text-green-400">Линейная регрессия</span>
                    </div>
                  </div>
                  <div class="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div class="flex items-center gap-2 mb-1">
                      <Check class="w-4 h-4 text-green-400" />
                      <span class="text-xs font-medium text-green-400">Логистическая регрессия</span>
                    </div>
                  </div>
                  <div class="p-3 bg-[var(--brand-from)]/20 border border-[var(--brand-from)]/40 rounded-lg">
                    <div class="flex items-center gap-2 mb-1">
                      <Play class="w-4 h-4 text-[var(--brand-from)]" />
                      <span class="text-xs font-medium text-white">Деревья решений</span>
                    </div>
                  </div>
                  <div class="p-3 bg-white/5 border border-white/10 rounded-lg">
                    <div class="flex items-center gap-2 mb-1">
                      <Circle class="w-4 h-4 text-gray-500" />
                      <span class="text-xs font-medium text-gray-400">Случайные леса</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Circle class="w-8 h-8 text-gray-500" />
                </div>
              </div>
              <div class="flex-1">
                <div class="mb-4">
                  <div class="flex items-center gap-3 mb-2">
                    <span class="text-xs font-bold text-gray-500 uppercase tracking-wider">Не начато</span>
                    <span class="text-xs text-gray-500">• 5 уроков</span>
                  </div>
                  <h4 class="text-xl font-bold text-white mb-2">Модуль 3: Нейронные сети</h4>
                  <p class="text-sm text-gray-400">Погрузитесь в мир искусственных нейронных сетей и глубокого обучения</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 p-8 bg-gradient-to-br from-[var(--brand-from)]/20 to-[var(--brand-to)]/20 border border-[var(--brand-from)]/40 rounded-2xl">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] rounded-xl flex items-center justify-center">
              <Play class="w-6 h-6 text-white" />
            </div>
            <div>
              <div class="text-sm text-gray-400 mb-1">Текущий урок</div>
              <h5 class="text-xl font-bold text-white">Деревья решений: практическое применение</h5>
            </div>
          </div>
          <div class="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl mb-6 flex items-center justify-center border border-white/10 relative overflow-hidden">
            <button class="w-20 h-20 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform z-10">
              <Play class="w-10 h-10" />
            </button>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div class="space-y-3">
            <div class="text-sm font-semibold text-white mb-3">Что вы изучите:</div>
            <div class="grid grid-cols-2 gap-3">
              <div class="p-3 bg-white/5 rounded-lg border border-white/10">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 bg-[var(--brand-from)]/20 rounded-lg flex items-center justify-center">
                    <Check class="w-4 h-4 text-[var(--brand-from)]" />
                  </div>
                  <span class="text-sm text-gray-300">Основы алгоритма</span>
                </div>
              </div>
              <div class="p-3 bg-white/5 rounded-lg border border-white/10">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 bg-[var(--brand-from)]/20 rounded-lg flex items-center justify-center">
                    <Check class="w-4 h-4 text-[var(--brand-from)]" />
                  </div>
                  <span class="text-sm text-gray-300">Метрики качества</span>
                </div>
              </div>
              <div class="p-3 bg-white/5 rounded-lg border border-white/10">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 bg-[var(--brand-from)]/20 rounded-lg flex items-center justify-center">
                    <Check class="w-4 h-4 text-[var(--brand-from)]" />
                  </div>
                  <span class="text-sm text-gray-300">Визуализация данных</span>
                </div>
              </div>
              <div class="p-3 bg-white/5 rounded-lg border border-white/10">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 bg-[var(--brand-from)]/20 rounded-lg flex items-center justify-center">
                    <Check class="w-4 h-4 text-[var(--brand-from)]" />
                  </div>
                  <span class="text-sm text-gray-300">Техники оптимизации</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Check, Play, Circle } from "lucide-vue-next";
</script>
