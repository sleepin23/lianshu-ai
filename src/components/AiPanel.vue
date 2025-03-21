<template>
  <div class="ai-panel" :class="{ 'open': isOpen }">
    <div class="panel-header">
      <h2>AI助手</h2>
      <button class="close-button" @click="closePanel">×</button>
    </div>
    <div class="panel-content">
      <div class="chat-container" ref="chatContainer">
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

          <!-- 上下文感知消息放在最后 -->
          <div v-if="contextMessage" class="message ai">
            <div class="message-content">
              <p>{{ contextMessage }}</p>
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
import { ref, defineProps, defineEmits, inject, watch, onMounted, nextTick, provide } from 'vue';
import type { PageContext } from '../services/contextService';

const props = defineProps<{
  isOpen: boolean
}>();

const emit = defineEmits<{
  'update:isOpen': [value: boolean]
}>();

const userInput = ref('');
const messages = ref<{ type: string, text: string }[]>([]);
const contextMessage = ref('');
const chatContainer = ref<HTMLElement | null>(null);

// 获取页面上下文
const pageContext = inject('pageContext') as PageContext;

// 关闭面板
const closePanel = () => {
  emit('update:isOpen', false);
};

// 发送消息
const sendMessage = () => {
  if (userInput.value.trim() === '') return;

  // 添加用户消息
  messages.value.push({
    type: 'user',
    text: userInput.value
  });

  // 滚动到底部
  scrollToBottom();

  // 模拟AI回复
  setTimeout(() => {
    // 根据上下文和用户输入生成回复
    const reply = generateContextAwareReply(userInput.value);

    messages.value.push({
      type: 'ai',
      text: reply
    });

    // 滚动到底部
    scrollToBottom();
  }, 1000);

  // 清空输入
  userInput.value = '';
};

// 根据上下文生成回复
const generateContextAwareReply = (userMessage: string) => {
  // 简单的关键词匹配
  const lowerCaseMessage = userMessage.toLowerCase();

  // 根据页面类型和用户输入生成回复
  if (pageContext.pageType === 'product') {
    if (lowerCaseMessage.includes('价格') || lowerCaseMessage.includes('多少钱')) {
      return `${pageContext.pageData?.product?.name}的价格是${pageContext.pageData?.product?.price}。`;
    } else if (lowerCaseMessage.includes('功能') || lowerCaseMessage.includes('特点')) {
      return `${pageContext.pageData?.product?.name}的主要功能包括：${pageContext.pageData?.product?.features?.slice(0, 3).join('、')}等。`;
    } else if (lowerCaseMessage.includes('颜色')) {
      return `${pageContext.pageData?.product?.name}有多种颜色可选，您当前选择的是${pageContext.pageData?.product?.selectedColor || '黑色'}。`;
    }
  } else if (pageContext.pageType === 'dashboard') {
    if (lowerCaseMessage.includes('数据') || lowerCaseMessage.includes('统计')) {
      return `根据仪表盘数据，您的总收入为¥128,430，比上月增长了12.5%。活跃用户数为8,642，增长了5.3%。`;
    }
  }

  // 默认回复
  return `我收到了您的消息："${userMessage}"。请问还有其他问题吗？`;
};

// 监听页面上下文变化，更新上下文消息
watch(() => pageContext.lastUpdated, () => {
  updateContextMessage();

  // 当上下文变化时，滚动到底部
  if (props.isOpen) {
    nextTick(() => {
      scrollToBottom();
    });
  }
}, { deep: true });

// 更新上下文消息
const updateContextMessage = () => {
  if (!pageContext.pageType) return;

  let message = '';

  switch (pageContext.pageType) {
    case 'home':
      message = `欢迎来到我们的网站！我可以帮您了解我们的产品和服务。`;
      break;
    case 'product':
      message = `我看到您正在浏览${pageContext.pageData?.product?.name}。这款产品售价${pageContext.pageData?.product?.price}，是我们的热门产品。有什么我可以帮您了解的吗？`;
      break;
    case 'blog':
      message = `您正在浏览博客内容。需要我为您推荐相关文章或解释某些概念吗？`;
      break;
    case 'dashboard':
      message = `您正在查看数据仪表盘。我可以帮您分析这些数据或解释某些指标。`;
      break;
    default:
      message = '';
  }

  contextMessage.value = message;
};

// 滚动到底部
const scrollToBottom = () => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
  });
};

// 组件挂载时初始化
onMounted(() => {
  // 初始化上下文消息
  updateContextMessage();

  // 提供isAiPanelOpen给其他组件，使用ref包装以确保它是响应式的
  const isAiPanelOpenRef = ref(props.isOpen);

  // 监听props.isOpen的变化，同步到isAiPanelOpenRef
  watch(() => props.isOpen, (newValue) => {
    isAiPanelOpenRef.value = newValue;

    // 当面板打开时，滚动到底部
    if (newValue) {
      nextTick(() => {
        scrollToBottom();
      });
    }
  });

  // 监听isAiPanelOpenRef的变化，同步到props.isOpen
  watch(isAiPanelOpenRef, (newValue) => {
    if (newValue !== props.isOpen) {
      emit('update:isOpen', newValue);
    }
  });

  provide('isAiPanelOpen', isAiPanelOpenRef);
});
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
  border-radius: 10px 0 0 10px; /* 添加左侧圆角 */
  overflow: hidden; /* 确保内容不会溢出圆角 */
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
  overflow: hidden; /* 确保内容不会溢出圆角 */
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

/* 移动设备响应式样式 */
@media (max-width: 768px) {
  .ai-panel {
    width: 100%;
    right: -100%;
    border-radius: 10px 0 0 10px; /* 保持左侧圆角 */
  }

  .ai-panel.open {
    right: 0;
  }

  .chat-container {
    padding: 15px;
  }

  .message-content {
    max-width: 85%;
    padding: 10px 14px;
    font-size: 14px;
  }

  .panel-header {
    padding: 12px 15px;
  }

  .input-container {
    padding: 10px;
  }

  .message-input {
    padding: 10px 12px;
    font-size: 14px;
  }

  .send-button {
    padding: 0 15px;
    font-size: 14px;
  }
}

/* 小屏幕设备额外调整 */
@media (max-width: 480px) {
  .ai-panel {
    border-radius: 15px 0 0 15px; /* 在小屏幕上增大左侧圆角 */
  }

  .chat-container {
    padding: 10px;
  }

  .message {
    margin-bottom: 8px;
  }

  .message-content {
    max-width: 90%;
    padding: 8px 12px;
    font-size: 14px;
    word-break: break-word;
  }

  .chat-messages {
    gap: 10px;
  }

  .panel-header {
    padding: 10px;
  }

  .panel-header h2 {
    font-size: 16px;
  }

  .input-container {
    padding: 8px;
  }

  .message-input {
    padding: 8px 10px;
    height: 40px;
  }

  .send-button {
    padding: 0 12px;
    font-size: 14px;
  }
}
</style>