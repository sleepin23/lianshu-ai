<template>
  <div class="app-root" :class="{ 'with-ai-panel': isAiPanelOpen, 'dark-theme': isDarkTheme }">
    <!-- 主容器 - 包含滚动内容 -->
    <div class="main-container">
      <!-- 主题切换按钮 -->
      <button class="theme-toggle" @click="toggleTheme">
        {{ isDarkTheme ? '☀️' : '🌙' }}
      </button>

      <!-- 路由视图 - 这里将显示当前路由对应的组件 -->
      <router-view></router-view>
    </div>

    <!-- AI助手组件 - 在所有页面中都可见 -->
    <AiPanel :is-open="isAiPanelOpen" @update:isOpen="isAiPanelOpen = $event" />
    <AiButton v-model="isAiPanelOpen" :class="{ 'hidden': isAiPanelOpen }" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, provide } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import AiButton from './components/AiButton.vue';
import AiPanel from './components/AiPanel.vue';
import { pageContext, updatePageContext, resetPageContext } from './services/contextService';

const isAiPanelOpen = ref(false);
const isDarkTheme = ref(false);
const router = useRouter();
const route = useRoute();

// 提供上下文和更新方法给所有子组件
provide('pageContext', pageContext);
provide('updatePageContext', updatePageContext);
provide('resetPageContext', resetPageContext);
provide('isAiPanelOpen', isAiPanelOpen);

// 监听路由变化，重置上下文
watch(() => route.path, (newPath) => {
  // 只更新路由信息，让具体页面组件更新其他上下文
  updatePageContext({ route: newPath });
});

// 初始化主题
onMounted(() => {
  // 检查本地存储中是否有保存的主题偏好
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDarkTheme.value = savedTheme === 'dark';
  } else {
    // 如果没有保存的偏好，则检查系统偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    isDarkTheme.value = prefersDark;
  }

  // 应用主题到body元素
  applyTheme();

  // 初始化上下文
  updatePageContext({ route: route.path });
});

// 监听主题变化
watch(isDarkTheme, () => {
  // 保存主题偏好到本地存储
  localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
  // 应用主题
  applyTheme();
});

// 切换主题
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
};

// 应用主题到body元素
const applyTheme = () => {
  if (isDarkTheme.value) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* 亮色主题变量 */
  --bg-color: #f8f9fa;
  --text-color: #333;
  --card-bg: #ffffff;
  --border-color: #eaeaea;
  --primary-color: #4a6cf7;
  --primary-hover: #3a5bd9;
  --secondary-bg: #f0f0f0;
  --muted-text: #666;
}

.dark-theme {
  /* 暗色主题变量 */
  --bg-color: #121212;
  --text-color: #e0e0e0;
  --card-bg: #1e1e1e;
  --border-color: #333;
  --primary-color: #5d7bf9;
  --primary-hover: #4a6cf7;
  --secondary-bg: #252525;
  --muted-text: #aaa;
}

html, body {
  height: 100%;
  width: 100%;
  overflow: hidden; /* 防止整个页面出现滚动条 */
}

body {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
  transition: background-color 0.3s, color 0.3s;
}

.app-root {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  transition: padding-right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.main-container {
  flex: 1;
  overflow-y: auto; /* 允许滚动 */
  overflow-x: hidden;
  height: 100%;
  padding-bottom: 80px; /* 为AI按钮留出空间 */

  /* 隐藏滚动条 - Webkit浏览器 (Chrome, Safari) */
  &::-webkit-scrollbar {
    display: none;
  }

  /* 隐藏滚动条 - Firefox */
  scrollbar-width: none;

  /* 隐藏滚动条 - IE和Edge */
  -ms-overflow-style: none;
}

.with-ai-panel {
  padding-right: 500px; /* 与AI面板宽度相同 */
}

.hidden {
  display: none;
}

.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  transition: background-color 0.3s, color 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.theme-toggle:hover {
  background-color: var(--primary-color);
  color: white;
}
</style>