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
            Ссылки и дополнительная информация
          </h2>
          <p class="text-sm md:text-base text-gray-400">
            Предоставьте любые ссылки, ресурсы или дополнительную информацию,
            которые помогут создать лучший контент.
          </p>
        </div>

        <div class="mb-4 md:mb-8">
          <label
            class="block text-sm font-semibold text-gray-300 mb-2"
            for="references"
          >
            Ссылки и ресурсы
            <span class="text-gray-500 font-normal">(Необязательно)</span>
          </label>
          <textarea
            id="references"
            placeholder="Добавьте любые ссылки, веб-сайты, книги или ресурсы, которые следует учитывать при создании контента курса..."
            rows="6"
            class="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all resize-vertical text-sm md:text-base"
          ></textarea>
        </div>

        <div class="mt-4 md:mt-8">
          <label class="block text-sm font-semibold text-gray-300 mb-2">
            Загрузить файлы-ссылки
            <span class="text-gray-500 font-normal">(Необязательно)</span>
          </label>
          <p class="text-xs text-gray-500 mb-3 md:mb-4">
            Загрузите файлы PDF, DOC, DOCX, TXT или PPTX, чтобы предоставить дополнительный
            контекст для генерации курса. Максимум 5 МБ на файл, до 10 файлов
            всего.
          </p>

          <div
            :class="[
              'border-2 border-dashed rounded-xl p-6 md:p-12 text-center cursor-pointer transition-all',
              isDragging
                ? 'border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] bg-[color-mix(in_srgb,var(--brand-from)_10%,transparent)]'
                : 'border-white/20 bg-white/5 hover:border-[color-mix(in_srgb,var(--brand-from)_40%,transparent)] hover:bg-[color-mix(in_srgb,var(--brand-from)_5%,transparent)]',
            ]"
            @dragover.prevent="isDragging = true"
            @dragleave="isDragging = false"
            @drop.prevent="handleDrop"
            @click="$refs.fileInput.click()"
          >
            <input
              ref="fileInput"
              type="file"
              class="hidden"
              multiple
              accept=".pdf,.doc,.docx,.txt,.pptx"
              @change="handleFileSelect"
            />
            <div class="w-12 h-12 mx-auto mb-4 text-gray-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <button
              type="button"
              class="px-6 py-3 bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)] rounded-lg font-semibold mb-3 hover:opacity-90 transition-opacity"
            >
              Выбрать файлы
            </button>
            <p class="text-sm text-gray-400">или перетащите файлы сюда</p>
          </div>

          <div v-if="uploadedFiles.length > 0" class="mt-3 md:mt-4 space-y-2">
            <div
              v-for="(file, index) in uploadedFiles"
              :key="index"
              class="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white/5 border border-white/10 rounded-lg"
            >
              <div
                class="w-9 h-9 bg-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] rounded-lg flex items-center justify-center text-[var(--brand-from)]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                  />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div class="flex-1">
                <div class="text-sm font-medium text-gray-300">
                  {{ file.name }}
                </div>
                <div class="text-xs text-gray-500">
                  {{ formatFileSize(file.size) }}
                </div>
              </div>
              <button
                type="button"
                @click="removeFile(index)"
                class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </form>

      <div class="flex justify-between md:flex-row flex-col gap-3">
        <router-link
          to="/step-1"
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
        <router-link
          to="/step-3"
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
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProgressSteps from "../components/ProgressSteps.vue";
import StepHeader from "../components/StepHeader.vue";

const uploadedFiles = ref([]);
const isDragging = ref(false);

const handleFileSelect = (event) => {
  const files = Array.from(event.target.files);
  handleFiles(files);
};

const handleDrop = (event) => {
  isDragging.value = false;
  const files = Array.from(event.dataTransfer.files);
  handleFiles(files);
};

const handleFiles = (newFiles) => {
  for (let file of newFiles) {
    if (uploadedFiles.value.length >= 10) {
      alert("Максимум 10 файлов разрешено");
      break;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert(`Файл "${file.name}" превышает лимит 5 МБ`);
      continue;
    }
    uploadedFiles.value.push(file);
  }
};

const removeFile = (index) => {
  uploadedFiles.value.splice(index, 1);
};

const formatFileSize = (bytes) => {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
};
</script>
