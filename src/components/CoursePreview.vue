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
            >ПРЕДПРОСМОТР КУРСА</span
          >
        </div>
        <h2 class="text-3xl md:text-5xl lg:text-7xl font-black mb-6 uppercase">
          <span
            class="block mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_70%,white)] to-[color-mix(in_srgb,var(--brand-to)_70%,white)]"
            >ОЩУТИТЕ</span
          >
          <span class="block">интерфейс обучения</span>
        </h2>
        <p
          class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light"
        >
          Посмотрите, как ваши студенты будут изучать ваш курс с помощью нашей
          красивой, интуитивной обучающей платформы.
        </p>
      </div>

      <div class="md:grid md:grid-cols-[400px_1fr] gap-8 items-start">
        <!-- Sidebar -->
        <div
          class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden mb-6"
        >
          <div class="p-6 border-b border-white/10">
            <h4 class="text-base font-semibold text-white mb-1">
              Основы машинного обучения
            </h4>
            <p class="text-sm text-gray-400">Освойте основы МО</p>
          </div>

          <div
            class="p-6 bg-[var(--brand-to)]/10 border-b border-white/10 flex items-center gap-4"
          >
            <div
              class="relative w-14 h-14 border border-[5px] border-t-gray-400 border-blue-500 rotate-[-45deg] rounded-full"
            >
              <span
                class="absolute inset-0 flex items-center justify-center text-sm font-bold text-white rotate-[45deg]"
              >
                65%
              </span>
            </div>
            <div class="flex-1">
              <div class="text-sm font-semibold text-white mb-1">
                Прогресс курса
              </div>
              <div class="text-xs text-gray-400">13 из 20 уроков завершено</div>
            </div>
          </div>

          <!-- Module List -->
          <div class="p-4 space-y-2">
            <!-- Module 1 -->
            <div class="p-4 bg-white/5 border border-white/10 rounded-lg">
              <div class="flex items-center gap-3 mb-3">
                <div
                  class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 text-sm"
                >
                  ✓
                </div>
                <div class="flex-1">
                  <div class="text-sm font-semibold text-white">
                    Модуль 1: Введение
                  </div>
                  <div class="text-xs text-gray-400">4 урока • Завершено</div>
                </div>
              </div>
              <div class="pl-11 space-y-2">
                <div class="flex items-center gap-2 text-xs text-green-400">
                  <span>✓</span>
                  <span>Что такое машинное обучение?</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-green-400">
                  <span>✓</span>
                  <span>Типы систем МО</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-green-400">
                  <span>✓</span>
                  <span>Настройка окружения</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-green-400">
                  <span>✓</span>
                  <span>Викторина модуля</span>
                </div>
              </div>
            </div>

            <!-- Module 2 -->
            <div
              class="p-4 bg-[var(--brand-from)]/20 border border-[var(--brand-from)]/30 rounded-lg"
            >
              <div class="flex items-center gap-3 mb-3">
                <div
                  class="w-8 h-8 bg-[var(--brand-from)]/30 rounded-lg flex items-center justify-center text-[var(--brand-from)] text-sm"
                >
                  <Play class="w-4 h-4" />
                </div>
                <div class="flex-1">
                  <div class="text-sm font-semibold text-white">
                    Модуль 2: Обучение с учителем
                  </div>
                  <div class="text-xs text-gray-400">6 уроков • В процессе</div>
                </div>
              </div>
              <div class="pl-11 space-y-2">
                <div class="flex items-center gap-2 text-xs text-green-400">
                  <Check class="w-4 h-4" />
                  <span>Линейная регрессия</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-green-400">
                  <Check class="w-4 h-4" />
                  <span>Логистическая регрессия</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-white">
                  <Play class="w-4 h-4" />
                  <span>Деревья решений</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-gray-400">
                  <Circle class="w-4 h-4" />
                  <span>Случайные леса</span>
                </div>
              </div>
            </div>

            <!-- Module 3 -->
            <div class="p-4 bg-white/5 border border-white/10 rounded-lg">
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 text-sm"
                >
                  <Circle class="w-4 h-4" />
                </div>
                <div class="flex-1">
                  <div class="text-sm font-semibold text-white">
                    Модуль 3: Нейронные сети
                  </div>
                  <div class="text-xs text-gray-400">5 уроков • Не начато</div>
                </div>
              </div>
            </div>

            <!-- Module 4 -->
            <div class="p-4 bg-white/5 border border-white/10 rounded-lg">
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 text-sm"
                >
                  <Circle class="w-4 h-4" />
                </div>
                <div class="flex-1">
                  <div class="text-sm font-semibold text-white">
                    Модуль 4: Глубокое обучение
                  </div>
                  <div class="text-xs text-gray-400">5 уроков • Не начато</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div
          class="bg-white backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div
            class="px-4 md:px-8 py-4 md:py-6 border-b border-gray-200 flex items-center justify-between flex-wrap gap-4"
          >
            <h3 class="text-lg md:text-xl font-bold text-gray-900">
              Деревья решений
            </h3>
            <div class="flex gap-2 flex-wrap">
              <button
                class="px-3 md:px-4 py-2 bg-[var(--brand-from)] text-white rounded-lg text-xs md:text-sm font-medium"
              >
                Видео
              </button>
              <button
                class="px-3 md:px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-200"
              >
                Заметки
              </button>
              <button
                class="px-3 md:px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-200"
              >
                Ресурсы
              </button>
              <button
                class="px-3 md:px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-200"
              >
                Обсуждение
              </button>
            </div>
          </div>

          <div class="p-4 md:p-8">
            <div
              class="relative bg-gray-900 rounded-xl overflow-hidden aspect-video mb-6 flex items-center justify-center"
            >
              <button
                class="w-20 h-20 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-full flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform"
              >
                <Play class="w-10 h-10" />
              </button>
            </div>

            <div>
              <h4 class="text-lg font-bold text-gray-900 mb-3">О этом уроке</h4>
              <p class="text-gray-600 mb-6 leading-relaxed">
                В этом уроке вы узнаете, как работают деревья решений, когда их
                использовать и как реализовать их в Python с помощью
                scikit-learn.
              </p>

              <div class="space-y-3">
                <div class="flex gap-3">
                  <div
                    class="w-6 h-6 min-w-[24px] bg-[var(--brand-from)]/10 rounded-full flex items-center justify-center text-[var(--brand-from)] text-xs mt-0.5"
                  >
                    ✓
                  </div>
                  <p class="text-gray-600">
                    Поймите интуицию, стоящую за алгоритмами деревьев решений
                  </p>
                </div>
                <div class="flex gap-3">
                  <div
                    class="w-6 h-6 min-w-[24px] bg-[var(--brand-from)]/10 rounded-full flex items-center justify-center text-[var(--brand-from)] text-xs mt-0.5"
                  >
                    ✓
                  </div>
                  <p class="text-gray-600">
                    Узнайте об информационном приросте и примеси Джини
                  </p>
                </div>
                <div class="flex gap-3">
                  <div
                    class="w-6 h-6 min-w-[24px] bg-[var(--brand-from)]/10 rounded-full flex items-center justify-center text-[var(--brand-from)] text-xs mt-0.5"
                  >
                    ✓
                  </div>
                  <p class="text-gray-600">
                    Создавайте и визуализируйте деревья решений с реальными
                    наборами данных
                  </p>
                </div>
                <div class="flex gap-3">
                  <div
                    class="w-6 h-6 min-w-[24px] bg-[var(--brand-from)]/10 rounded-full flex items-center justify-center text-[var(--brand-from)] text-xs mt-0.5"
                  >
                    ✓
                  </div>
                  <p class="text-gray-600">
                    Борьба с переобучением с помощью техник обрезки
                  </p>
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
