<template>
  <section id="pricing" class="relative py-24 md:py-36 px-4 md:px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-20">
        <div
          class="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] mb-4"
        >
          <span
            class="text-sm font-mono text-[color-mix(in_srgb,var(--brand-from)_70%,white)] tracking-wider"
            >УРОВНИ ДОСТУПА</span
          >
        </div>

        <h2 class="text-4xl md:text-6xl lg:text-7xl font-black mb-6 uppercase">
          <span class="block text-white">Выберите свой</span>
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]"
          >
            идеальный план
          </span>
        </h2>

        <p
          class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light"
        >
          Гибкие планы для создателей, команд и компаний, которые работают с ИИ
          на реальных задачах.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          :class="[
            'relative rounded-3xl p-8 border backdrop-blur-xl transition-all duration-300 flex flex-col justify-between',
            plan.highlight
              ? 'bg-gradient-to-b from-white/10 to-white/5 border-[var(--brand-from)] shadow-[0_0_80px_rgba(var(--brand-from-rgb),0.25)] scale-[1.03]'
              : 'bg-white/5 border-white/10 hover:border-white/20',
          ]"
        >
          <div
            v-if="plan.highlight"
            class="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]"
          >
            Рекомендуемый выбор
          </div>

          <div>
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-white mb-2">
                {{ plan.name }}
              </h3>
              <p class="text-sm text-gray-400">
                {{ plan.subtitle }}
              </p>
            </div>

            <div class="flex items-end gap-2 mb-8">
              <span class="text-5xl font-black text-white">
                ${{ plan.price }}
              </span>
              <span class="text-gray-400 mb-1">/мес</span>
            </div>

            <ul class="space-y-4 mb-10">
              <li
                v-for="item in plan.features"
                :key="item"
                class="flex items-start gap-3 text-sm text-gray-300"
              >
                <span
                  class="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]"
                ></span>
                {{ item }}
              </li>
            </ul>
          </div>

          <router-link
            :to="plan.highlight ? '/step-1' : '#'"
            :class="[
              'block w-full text-center py-4 rounded-xl font-semibold transition-all',
              plan.highlight
                ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white hover:opacity-90'
                : 'border border-white/20 text-white hover:bg-white/10',
            ]"
          >
            {{ plan.action }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    name: "СТАРТОВЫЙ",
    subtitle: "Для индивидуальных авторов",
    price: 19,
    features: [
      "До 3 активных проектов",
      "ИИ-генерация структуры и контента",
      "Экспорт в PDF и Markdown",
      "Базовая статистика",
    ],
    action: "Получить доступ",
    highlight: false,
  },
  {
    name: "СТАНДАРТНЫЙ",
    subtitle: "Для команд и стартапов",
    price: 59,
    features: [
      "Неограниченные проекты",
      "Продвинутый AI-движок",
      "Кастомизация структуры",
      "Совместная работа",
      "Аналитика и история изменений",
    ],
    action: "Подключить Studio",
    highlight: true,
  },
  {
    name: "ПРОФЕССИОНАЛЬНЫЙ",
    subtitle: "Для компаний и платформ",
    price: 149,
    features: [
      "Все возможности Studio",
      "API-доступ",
      "SSO и контроль доступа",
      "Приоритетная поддержка",
      "Индивидуальные настройки",
    ],
    action: "Связаться с нами",
    highlight: false,
  },
];
</script>
