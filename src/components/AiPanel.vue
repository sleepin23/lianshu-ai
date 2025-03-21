<template>
  <div class="ai-panel" :class="{ 'open': isOpen }">
    <div class="panel-header">
      <h2>AI助手</h2>
      <button class="close-button" @click="closePanel">×</button>
    </div>
    <div class="panel-content">
      <div class="chat-container">
        <div class="chat-messages">
          <div class="message system">
            <div class="message-content">
              <p>您好！我是您的AI助手，有什么可以帮助您的吗？</p>
            </div>
          </div>
          <div v-for="(message, index) in messages" :key="index" class="message" :class="message.type">
            <div class="message-content">
              <p>{{ message.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="input-container">
        <textarea
            v-model="userInput"
            placeholder="输入您的问题..."
            @keydown.enter.prevent="sendMessage"
            class="message-input"
        ></textarea>
        <button class="send-button" @click="sendMessage">发送</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps<{
  isOpen: boolean
}>();

const emit = defineEmits<{
  'update:isOpen': [value: boolean]
}>();

const userInput = ref('');
const messages = ref<{ type: string, text: string }[]>([]);

const closePanel = () => {
  emit('update:isOpen', false);
};

const sendMessage = () => {
  if (userInput.value.trim() === '') return;

  // 添加用户消息
  messages.value.push({
    type: 'user',
    text: userInput.value
  });

  // 模拟AI回复
  setTimeout(() => {
    messages.value.push({
      type: 'ai',
      text: `我收到了您的消息："${userInput.value}"。我是一个演示AI助手，目前只能回复这个固定消息。`
    });
  }, 1000);

  // 清空输入
  userInput.value = '';
};
</script>

<style scoped>
.ai-panel {
  position: fixed;
  top: 0;
  right: -500px;
  width: 500px;
  height: 100%;
  background-color: var(--card-bg);
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1000;
  border-left: 1px solid var(--border-color);
}

.ai-panel.open {
  right: 0;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid var(--border-color);
}

.panel-header h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--text-color);
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--muted-text);
  transition: color 0.2s;
}

.close-button:hover {
  color: var(--primary-color);
}

.panel-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-container {
  flex: 1;
  overflow-y: auto;
  padding: 20px;

  /* 隐藏滚动条 - Webkit浏览器 */
  &::-webkit-scrollbar {
    display: none;
  }

  /* 隐藏滚动条 - Firefox */
  scrollbar-width: none;

  /* 隐藏滚动条 - IE和Edge */
  -ms-overflow-style: none;
}

.chat-messages {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.message {
  display: flex;
  margin-bottom: 10px;
}

.message.user {
  justify-content: flex-end;
}

.message-content {
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.5;
}

.message.system .message-content {
  background-color: var(--secondary-bg);
  color: var(--muted-text);
  border-radius: 18px 18px 18px 0;
}

.message.user .message-content {
  background-color: var(--primary-color);
  color: white;
  border-radius: 18px 18px 0 18px;
}

.message.ai .message-content {
  background-color: var(--secondary-bg);
  color: var(--text-color);
  border-radius: 18px 18px 18px 0;
}

.message-content p {
  margin: 0;
}

.input-container {
  display: flex;
  padding: 15px;
  border-top: 1px solid var(--border-color);
  background-color: var(--card-bg);
}

.message-input {
  flex: 1;
  padding: 12px 15px;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  font-size: 14px;
  resize: none;
  height: 45px;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: border-color 0.3s;

  /* 隐藏滚动条 - Webkit浏览器 */
  &::-webkit-scrollbar {
    display: none;
  }

  /* 隐藏滚动条 - Firefox */
  scrollbar-width: none;

  /* 隐藏滚动条 - IE和Edge */
  -ms-overflow-style: none;
}

.message-input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.send-button {
  margin-left: 10px;
  padding: 0 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.send-button:hover {
  background-color: var(--primary-hover);
}
</style>