<template>
  <button
      class="ai-button"
      :class="{ 'active': modelValue }"
      @click="togglePanel"
      aria-label="打开AI助手"
  >
    <span class="ai-icon">AI</span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  modelValue: boolean
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>();

const togglePanel = () => {
  emit('update:modelValue', !props.modelValue);
};
</script>

<style scoped>
.ai-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, background-color 0.3s;
}

.ai-button:hover {
  transform: scale(1.05);
  background-color: var(--primary-hover);
}

.ai-button.active {
  background-color: var(--primary-hover);
}

.ai-icon {
  font-weight: bold;
  font-size: 20px;
}
</style>