<template>
  <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <div
      class="absolute -top-40 -right-40 w-80 h-80 bg-[color-mix(in_srgb,var(--brand-from)_10%,transparent)] rounded-full blur-3xl"
    ></div>
    <div
      class="absolute -bottom-40 -left-40 w-80 h-80 bg-[color-mix(in_srgb,var(--brand-to)_10%,transparent)] rounded-full blur-3xl"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_5%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_5%,transparent)] rounded-full blur-3xl"
    ></div>
  </div>
</template>
