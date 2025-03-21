<template>
  <div class="home-page">
    <header class="header">
      <div class="logo">
        <h1>智能助手</h1>
      </div>
      <nav>
        <router-link to="/" class="nav-link active">首页</router-link>
        <router-link to="/product" class="nav-link">产品</router-link>
        <router-link to="/blog" class="nav-link">博客</router-link>
        <router-link to="/dashboard" class="nav-link">仪表盘</router-link>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>欢迎使用智能助手</h1>
          <p>我们的AI助手可以帮助您解决各种问题，提高工作效率。</p>
          <div class="hero-buttons">
            <router-link to="/product" class="btn-primary">查看产品</router-link>
            <a href="#features" class="btn-secondary">了解更多</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-placeholder">AI助手图片</div>
        </div>
      </section>

      <section id="features" class="features">
        <h2>主要功能</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>智能搜索</h3>
            <p>快速找到您需要的信息，节省时间。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💬</div>
            <h3>自然对话</h3>
            <p>像与真人交流一样，流畅自然的对话体验。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>数据分析</h3>
            <p>深入分析数据，提供有价值的见解。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>上下文感知</h3>
            <p>根据您的浏览内容提供相关帮助。</p>
          </div>
        </div>
      </section>

      <section class="cta">
        <h2>准备好开始使用了吗？</h2>
        <p>点击右下角的AI按钮，开始与智能助手对话。</p>
        <button class="btn-primary" @click="openAiPanel">打开AI助手</button>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 智能助手. 保留所有权利.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from 'vue';

// 获取上下文更新方法
const updatePageContext = inject('updatePageContext') as Function;

// 打开AI面板的方法
const openAiPanel = () => {
  // 修复这里的类型问题
  const isAiPanelOpen = inject('isAiPanelOpen', ref(false));
  if (isAiPanelOpen) {
    isAiPanelOpen.value = true;
  }
};

// 组件挂载时更新上下文
onMounted(() => {
  updatePageContext({
    pageType: 'home',
    pageTitle: '智能助手 - 首页',
    keywords: ['AI助手', '智能对话', '效率工具'],
    pageData: {
      features: ['智能搜索', '自然对话', '数据分析', '上下文感知']
    }
  });
});
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid var(--border-color);
}

.logo h1 {
  font-size: 24px;
  color: var(--text-color);
  font-weight: 700;
  margin: 0;
}

nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover, .nav-link.active {
  color: var(--primary-color);
}

main {
  padding: 40px 0;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;
}

.hero-content h1 {
  font-size: 48px;
  font-weight: 800;
  color: var(--text-color);
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-content p {
  font-size: 18px;
  color: var(--muted-text);
  margin-bottom: 30px;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 15px;
}

.btn-primary, .btn-secondary {
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
}

.btn-secondary {
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn-secondary:hover {
  background-color: rgba(74, 108, 247, 0.05);
}

.hero-image {
  background-color: var(--secondary-bg);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
}

.image-placeholder {
  color: var(--muted-text);
  font-size: 18px;
}

.features {
  margin-bottom: 60px;
}

.features h2 {
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: var(--text-color);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 36px;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: var(--text-color);
}

.feature-card p {
  color: var(--muted-text);
  line-height: 1.6;
}

.cta {
  text-align: center;
  padding: 60px 0;
  background-color: var(--secondary-bg);
  border-radius: 8px;
  margin-bottom: 60px;
}

.cta h2 {
  font-size: 36px;
  margin-bottom: 20px;
  color: var(--text-color);
}

.cta p {
  font-size: 18px;
  color: var(--muted-text);
  margin-bottom: 30px;
}

footer {
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid var(--border-color);
  color: var(--muted-text);
}
</style>