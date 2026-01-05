<template>
  <div
    class="flex items-center justify-center gap-0 py-4 md:py-6 mb-4 md:mb-8 bg-gradient-to-b from-gray-900 to-black border-b border-white/10 overflow-x-auto"
  >
    <div class="flex items-center gap-3">
      <div
        :class="[
          'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300',
          getStepClass(1) === 'completed'
            ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white'
            : getStepClass(1) === 'active'
            ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white'
            : 'bg-white/5 text-gray-500 border border-white/10',
        ]"
      >
        <Check v-if="currentStep >= 1" class="w-4 h-4" :stroke-width="3" />
        <span v-else>1</span>
      </div>

      <span
        :class="[
          'text-sm font-medium hidden md:block',
          getStepClass(1) === 'active'
            ? 'text-[color-mix(in_srgb,var(--brand-from)_80%,white)]'
            : getStepClass(1) === 'completed'
            ? 'text-[color-mix(in_srgb,var(--brand-to)_80%,white)]'
            : 'text-gray-500',
        ]"
      >
        Информация о курсе
      </span>
    </div>

    <div
      :class="[
        'w-12 md:w-20 h-0.5 mx-2 md:mx-4',
        currentStep > 1
          ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]'
          : 'bg-white/10',
      ]"
    ></div>

    <div class="flex items-center gap-3">
      <div
        :class="[
          'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300',
          getStepClass(2) === 'completed'
            ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white'
            : getStepClass(2) === 'active'
            ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white'
            : 'bg-white/5 text-gray-500 border border-white/10',
        ]"
      >
        <Check v-if="currentStep >= 2" class="w-4 h-4" :stroke-width="3" />
        <span v-else>2</span>
      </div>
      <span
        :class="[
          'text-sm font-medium hidden md:block',
          getStepClass(2) === 'active'
            ? 'text-[color-mix(in_srgb,var(--brand-from)_80%,white)]'
            : getStepClass(2) === 'completed'
            ? 'text-[color-mix(in_srgb,var(--brand-to)_80%,white)]'
            : 'text-gray-500',
        ]"
        >Ссылки</span
      >
    </div>
    <div
      :class="[
        'w-12 md:w-20 h-0.5 mx-2 md:mx-4',
        currentStep > 2
          ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]'
          : 'bg-white/10',
      ]"
    ></div>

    <div class="flex items-center gap-3">
      <div
        :class="[
          'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300',
          getStepClass(3) === 'completed'
            ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white'
            : getStepClass(3) === 'active'
            ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white'
            : 'bg-white/5 text-gray-500 border border-white/10',
        ]"
      >
        <Check v-if="currentStep >= 3" class="w-4 h-4" :stroke-width="3" />
        <span v-else>3</span>
      </div>
      <span
        :class="[
          'text-sm font-medium hidden md:block',
          getStepClass(3) === 'active'
            ? 'text-[color-mix(in_srgb,var(--brand-from)_80%,white)]'
            : getStepClass(3) === 'completed'
            ? 'text-[color-mix(in_srgb,var(--brand-to)_80%,white)]'
            : 'text-gray-500',
        ]"
        >Структура</span
      >
    </div>
    <div
      :class="[
        'w-12 md:w-20 h-0.5 mx-2 md:mx-4',
        currentStep > 3
          ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]'
          : 'bg-white/10',
      ]"
    ></div>

    <div class="flex items-center gap-3">
      <div
        :class="[
          'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300',
          getStepClass(4) === 'completed'
            ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white'
            : getStepClass(4) === 'active'
            ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white'
            : 'bg-white/5 text-gray-500 border border-white/10',
        ]"
      >
        <Check v-if="currentStep >= 4" class="w-4 h-4" :stroke-width="3" />
        <span v-else>4</span>
      </div>
      <span
        :class="[
          'text-sm font-medium hidden md:block',
          getStepClass(4) === 'active'
            ? 'text-[color-mix(in_srgb,var(--brand-from)_80%,white)]'
            : getStepClass(4) === 'completed'
            ? 'text-[color-mix(in_srgb,var(--brand-to)_80%,white)]'
            : 'text-gray-500',
        ]"
        >Редактирование</span
      >
    </div>
    <div
      :class="[
        'w-12 md:w-20 h-0.5 mx-2 md:mx-4',
        currentStep > 4
          ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]'
          : 'bg-white/10',
      ]"
    ></div>

    <div class="flex items-center gap-3">
      <div
        :class="[
          'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300',
          getStepClass(5) === 'completed'
            ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white'
            : getStepClass(5) === 'active'
            ? 'bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] text-white'
            : 'bg-white/5 text-gray-500 border border-white/10',
        ]"
      >
        <Check v-if="currentStep >= 5" class="w-4 h-4" :stroke-width="3" />
        <span v-else>5</span>
      </div>
      <span
        :class="[
          'text-sm font-medium hidden md:block',
          getStepClass(5) === 'active'
            ? 'text-[color-mix(in_srgb,var(--brand-from)_80%,white)]'
            : getStepClass(5) === 'completed'
            ? 'text-[color-mix(in_srgb,var(--brand-to)_80%,white)]'
            : 'text-gray-500',
        ]"
        >Обзор</span
      >
    </div>
  </div>
</template>

<script setup>
import { Check } from "lucide-vue-next";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const currentStep = computed(() => {
  const stepMap = {
    "/step-1": 1,
    "/step-2": 2,
    "/step-3": 3,
    "/step-4": 4,
    "/step-5": 5,
  };
  return stepMap[route.path] || 1;
});

const getStepClass = (step) => {
  if (currentStep.value > step) return "completed";
  if (currentStep.value === step) return "active";
  return "inactive";
};
</script>
