<template>
  <section id="pricing" class="relative py-20 md:py-32 px-4 md:px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <div
          class="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] border border-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] mb-4"
        >
          <span
            class="text-sm font-mono text-[color-mix(in_srgb,var(--brand-from)_70%,white)] tracking-wider"
            >ЦЕНЫ</span
          >
        </div>
        <h2 class="text-3xl md:text-5xl lg:text-7xl font-black mb-6 uppercase">
          Простое,
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]"
            >прозрачное ценообразование</span
          >
        </h2>
        <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Выберите план, который подходит вашим потребностям. Все планы включают
          14-дневную бесплатную пробную версию.
        </p>
      </div>

      <div
        class="md:grid md:grid-cols-3 md:gap-8 flex gap-4 overflow-x-scroll py-8 scrollbar-hide max-w-6xl mx-auto"
      >
        <div
          v-for="(plan, index) in plans"
          :key="index"
          :class="[
            'min-w-80 md:min-w-full bg-white/5 backdrop-blur-sm border rounded-2xl p-8 relative transition-all',
            plan.popular
              ? 'border-[var(--brand-from)] scale-105 shadow-2xl shadow-[var(--brand-from)]/20'
              : 'border-white/10 hover:border-white/20',
          ]"
        >
          <div
            v-if="plan.popular"
            class="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-full text-xs text-center font-bold text-white uppercase"
          >
            Самый популярный
          </div>

          <div class="text-center mb-8">
            <div class="text-xl font-bold text-white mb-2">{{ plan.name }}</div>
            <p class="text-sm text-gray-400 mb-6">{{ plan.description }}</p>
            <div class="flex items-baseline justify-center gap-1">
              <span class="text-2xl font-bold text-white">$</span>
              <span class="text-5xl font-black text-white">{{
                plan.price
              }}</span>
              <span class="text-lg text-gray-400">/месяц</span>
            </div>
          </div>

          <div class="space-y-4 mb-8">
            <div
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-center gap-3"
            >
              <div
                class="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-xs"
              >
                ✓
              </div>
              <span class="text-sm text-gray-300">{{ feature }}</span>
            </div>
          </div>

          <router-link
            :to="plan.popular ? '/step-1' : '#'"
            :class="[
              'block w-full text-center px-6 py-4 rounded-xl font-bold transition-all',
              plan.popular
                ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white hover:shadow-lg hover:shadow-[var(--brand-from)]/30'
                : 'bg-white/10 border border-white/20 text-white hover:bg-white/20',
            ]"
          >
            {{ plan.buttonText }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    name: "Стартовый",
    description: "Идеально для индивидуальных создателей",
    price: 29,
    features: [
      "5 курсов",
      "100 студентов на курс",
      "Генерация контента ИИ",
      "Базовая аналитика",
      "Поддержка по email",
    ],
    buttonText: "Начать бесплатно",
    popular: false,
  },
  {
    name: "Профессиональный",
    description: "Для растущего бизнеса курсов",
    price: 79,
    features: [
      "Неограниченное количество курсов",
      "1,000 студентов на курс",
      "Продвинутые функции ИИ",
      "Детальная аналитика и отчеты",
      "Пользовательский брендинг",
      "Приоритетная поддержка",
    ],
    buttonText: "Начать бесплатно",
    popular: true,
  },
  {
    name: "Корпоративный",
    description: "Для крупных организаций",
    price: 199,
    features: [
      "Все из Профессионального",
      "Неограниченное количество студентов",
      "SSO и продвинутая безопасность",
      "Доступ к API",
      "Выделенный менеджер аккаунта",
    ],
    buttonText: "Связаться с продажами",
    popular: false,
  },
];
</script>
