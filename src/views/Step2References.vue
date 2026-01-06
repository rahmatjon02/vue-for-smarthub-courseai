<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
  >
    <StepHeader />
    <ProgressSteps />

    <main class="max-w-7xl mx-auto px-4 md:px-6 pb-12">
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">
          Ссылки и дополнительная информация
        </h2>
        <p class="text-sm md:text-base text-gray-400">
          Предоставьте любые ссылки, ресурсы или дополнительную информацию,
          которые помогут создать лучший контент.
        </p>
      </div>

      <div class="space-y-6 mb-8">
        <div class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center">
                <Link class="w-5 h-5 text-white" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-300" for="references">
                  Ссылки и ресурсы
                </label>
                <span class="text-xs text-gray-500 ml-2">(Необязательно)</span>
              </div>
            </div>
            <textarea
              id="references"
              placeholder="Добавьте любые ссылки, веб-сайты, книги или ресурсы, которые следует учитывать при создании контента курса..."
              rows="6"
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[color-mix(in_srgb,var(--brand-from)_50%,transparent)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-from)_20%,transparent)] transition-all resize-vertical"
            ></textarea>
          </div>
        </div>

        <div class="group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-from)_0%,transparent)] to-[color-mix(in_srgb,var(--brand-to)_0%,transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] flex items-center justify-center">
                <Upload class="w-5 h-5 text-white" />
              </div>
              <div>
                <div class="text-sm font-semibold text-gray-300">
                  Загрузить файлы-ссылки
                </div>
                <span class="text-xs text-gray-500">(Необязательно)</span>
              </div>
            </div>
            <p class="text-xs text-gray-500 mb-4">
              Загрузите файлы PDF, DOC, DOCX, TXT или PPTX, чтобы предоставить дополнительный
              контекст для генерации курса. Максимум 5 МБ на файл, до 10 файлов всего.
            </p>

            <div
              :class="[
                'border-2 border-dashed rounded-xl p-6 sm:p-8 md:p-12 text-center cursor-pointer transition-all relative overflow-hidden',
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
              <div class="relative z-10">
                <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] rounded-2xl flex items-center justify-center">
                  <Upload class="w-8 h-8 text-white" />
                </div>
                <button
                  type="button"
                  class="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold mb-3 hover:bg-white/20 transition-all text-white"
                >
                  Выбрать файлы
                </button>
                <p class="text-sm text-gray-400">или перетащите файлы сюда</p>
              </div>
            </div>

            <div v-if="uploadedFiles.length > 0" class="mt-4 space-y-2">
              <div
                v-for="(file, index) in uploadedFiles"
                :key="index"
                class="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[color-mix(in_srgb,var(--brand-from)_30%,transparent)] transition-all"
              >
                <div class="w-12 h-12 bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] rounded-xl flex items-center justify-center">
                  <FileText class="w-6 h-6 text-white" />
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
                  class="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                >
                  <X class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between flex-col sm:flex-row gap-3">
        <router-link
          to="/step-1"
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
        <router-link
          to="/step-3"
          class="group w-full sm:w-auto md:w-1/4 flex justify-center relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base md:text-lg overflow-hidden bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]"
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
import { Link, Upload, FileText, X } from "lucide-vue-next";
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
