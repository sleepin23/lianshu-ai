<template>
  <div class="blog-page">
    <header class="header">
      <div class="logo">
        <h1>TechBlog</h1>
      </div>
      <nav>
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/product" class="nav-link">产品</router-link>
        <router-link to="/blog" class="nav-link active">博客</router-link>
        <router-link to="/dashboard" class="nav-link">仪表盘</router-link>
      </nav>
    </header>

    <main>
      <section class="blog-hero">
        <h1>技术博客</h1>
        <p>探索最新的技术趋势和创新解决方案</p>
        <div class="search-container">
          <input type="text" placeholder="搜索文章..." v-model="searchQuery" class="search-input" />
          <button class="search-button" @click="searchArticles">搜索</button>
        </div>
      </section>

      <section class="blog-categories">
        <h2>文章分类</h2>
        <div class="category-tags">
          <button
              v-for="category in categories"
              :key="category.id"
              class="category-tag"
              :class="{ active: selectedCategory === category.id }"
              @click="selectCategory(category.id)"
          >
            {{ category.name }}
          </button>
        </div>
      </section>

      <section class="featured-article" v-if="featuredArticle">
        <div class="article-image">
          <div class="image-placeholder">文章特色图片</div>
        </div>
        <div class="article-content">
          <div class="article-meta">
            <span class="article-category">{{ getCategoryName(featuredArticle.categoryId) }}</span>
            <span class="article-date">{{ featuredArticle.date }}</span>
          </div>
          <h2 class="article-title">{{ featuredArticle.title }}</h2>
          <p class="article-excerpt">{{ featuredArticle.excerpt }}</p>
          <button class="read-more" @click="readArticle(featuredArticle.id)">阅读全文</button>
        </div>
      </section>

      <section class="article-list">
        <h2>最新文章</h2>
        <div class="articles">
          <div
              v-for="article in filteredArticles"
              :key="article.id"
              class="article-card"
              @click="readArticle(article.id)"
          >
            <div class="article-card-image">
              <div class="image-placeholder">文章图片</div>
            </div>
            <div class="article-card-content">
              <div class="article-meta">
                <span class="article-category">{{ getCategoryName(article.categoryId) }}</span>
                <span class="article-date">{{ article.date }}</span>
              </div>
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-excerpt">{{ article.excerpt }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="newsletter">
        <h2>订阅我们的技术周刊</h2>
        <p>获取最新的技术资讯和教程，直接发送到您的邮箱。</p>
        <div class="newsletter-form">
          <input type="email" placeholder="您的邮箱地址" v-model="email" class="newsletter-input" />
          <button class="newsletter-button" @click="subscribe">订阅</button>
        </div>
      </section>
    </main>

    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h3>关于我们</h3>
          <p>TechBlog是一个分享最新技术趋势和教程的平台，致力于帮助开发者提升技能。</p>
        </div>
        <div class="footer-section">
          <h3>快速链接</h3>
          <ul>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">联系我们</a></li>
            <li><a href="#">隐私政策</a></li>
            <li><a href="#">使用条款</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>关注我们</h3>
          <div class="social-links">
            <a href="#" class="social-link">微信</a>
            <a href="#" class="social-link">微博</a>
            <a href="#" class="social-link">GitHub</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2025 TechBlog. 保留所有权利.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, inject } from 'vue';

// 获取上下文更新方法
const updatePageContext = inject('updatePageContext') as Function;

// 搜索查询
const searchQuery = ref('');

// 邮箱
const email = ref('');

// 选中的分类
const selectedCategory = ref(0); // 0表示全部

// 分类列表
const categories = [
  { id: 0, name: '全部' },
  { id: 1, name: '前端开发' },
  { id: 2, name: '后端开发' },
  { id: 3, name: '移动开发' },
  { id: 4, name: '人工智能' },
  { id: 5, name: '云计算' }
];

// 文章列表
const articles = [
  {
    id: 1,
    title: 'Vue 3 组合式API完全指南',
    excerpt: '本文详细介绍了Vue 3的组合式API，包括setup函数、响应式API以及生命周期钩子的使用方法。',
    date: '2025-03-15',
    categoryId: 1,
    content: '这是文章的完整内容...'
  },
  {
    id: 2,
    title: 'Node.js微服务架构实践',
    excerpt: '探索如何使用Node.js构建可扩展的微服务架构，包括服务发现、负载均衡和容错机制。',
    date: '2025-03-10',
    categoryId: 2,
    content: '这是文章的完整内容...'
  },
  {
    id: 3,
    title: 'Flutter状态管理最佳实践',
    excerpt: '比较Flutter中不同的状态管理方案，如Provider、Riverpod、Bloc和GetX，并提供最佳实践建议。',
    date: '2025-03-05',
    categoryId: 3,
    content: '这是文章的完整内容...'
  },
  {
    id: 4,
    title: '深度学习在自然语言处理中的应用',
    excerpt: '介绍深度学习模型如何应用于自然语言处理任务，包括文本分类、情感分析和机器翻译。',
    date: '2025-02-28',
    categoryId: 4,
    content: '这是文章的完整内容...'
  },
  {
    id: 5,
    title: 'AWS Lambda与无服务器架构',
    excerpt: '探讨AWS Lambda的优势和局限性，以及如何设计和部署无服务器应用程序。',
    date: '2025-02-20',
    categoryId: 5,
    content: '这是文章的完整内容...'
  },
  {
    id: 6,
    title: 'CSS Grid和Flexbox布局技巧',
    excerpt: '深入了解CSS Grid和Flexbox布局系统，以及如何结合使用它们创建复杂的响应式布局。',
    date: '2025-02-15',
    categoryId: 1,
    content: '这是文章的完整内容...'
  }
];

// 特色文章
const featuredArticle = computed(() => articles[0]);

// 根据分类和搜索过滤文章
const filteredArticles = computed(() => {
  return articles.filter(article => {
    // 如果不是特色文章
    if (article.id === featuredArticle.value.id) return false;

    // 分类过滤
    if (selectedCategory.value !== 0 && article.categoryId !== selectedCategory.value) return false;

    // 搜索过滤
    if (searchQuery.value && !article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
        !article.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())) return false;

    return true;
  });
});

// 获取分类名称
const getCategoryName = (categoryId: number) => {
  const category = categories.find(c => c.id === categoryId);
  return category ? category.name : '';
};

// 选择分类
const selectCategory = (categoryId: number) => {
  selectedCategory.value = categoryId;

  // 更新上下文
  updatePageContext({
    pageData: {
      blog: {
        selectedCategory: categoryId,
        categoryName: getCategoryName(categoryId)
      }
    }
  });
};

// 搜索文章
const searchArticles = () => {
  // 更新上下文
  updatePageContext({
    pageData: {
      blog: {
        searchQuery: searchQuery.value,
        selectedCategory: selectedCategory.value,
        categoryName: getCategoryName(selectedCategory.value)
      }
    }
  });
};

// 阅读文章
const readArticle = (articleId: number) => {
  const article = articles.find(a => a.id === articleId);
  if (article) {
    alert(`阅读文章: ${article.title}`);

    // 更新上下文
    updatePageContext({
      pageData: {
        blog: {
          currentArticle: article
        }
      }
    });
  }
};

// 订阅
const subscribe = () => {
  if (!email.value) {
    alert('请输入您的邮箱地址');
    return;
  }

  alert(`感谢订阅！确认邮件已发送到 ${email.value}`);
  email.value = '';
};

// 组件挂载时更新上下文
onMounted(() => {
  updatePageContext({
    pageType: 'blog',
    pageTitle: '技术博客',
    keywords: ['技术博客', '编程教程', '开发资源'],
    pageData: {
      blog: {
        featuredArticle: featuredArticle.value,
        categories: categories,
        selectedCategory: selectedCategory.value,
        categoryName: getCategoryName(selectedCategory.value)
      }
    }
  });
});

// 监听选中分类变化，更新上下文
watch(selectedCategory, (newCategory) => {
  updatePageContext({
    pageData: {
      blog: {
        selectedCategory: newCategory,
        categoryName: getCategoryName(newCategory)
      }
    }
  });
});
</script>

<style scoped>
.blog-page {
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

.blog-hero {
  text-align: center;
  margin-bottom: 60px;
}

.blog-hero h1 {
  font-size: 48px;
  font-weight: 800;
  color: var(--text-color);
  margin-bottom: 20px;
}

.blog-hero p {
  font-size: 18px;
  color: var(--muted-text);
  margin-bottom: 30px;
}

.search-container {
  display: flex;
  max-width: 600px;
  margin: 0 auto;
}

.search-input {
  flex: 1;
  padding: 12px 20px;
  border: 1px solid var(--border-color);
  border-radius: 30px 0 0 30px;
  font-size: 16px;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.search-button {
  padding: 12px 24px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0 30px 30px 0;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-button:hover {
  background-color: var(--primary-hover);
}

.blog-categories {
  margin-bottom: 40px;
}

.blog-categories h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--text-color);
  text-align: center;
}

.category-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.category-tag {
  padding: 8px 16px;
  background-color: var(--secondary-bg);
  color: var(--text-color);
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.category-tag:hover, .category-tag.active {
  background-color: var(--primary-color);
  color: white;
}

.featured-article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
  background-color: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.article-image {
  height: 400px;
  background-color: var(--secondary-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted-text);
}

.article-content {
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.article-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.article-category {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 14px;
}

.article-date {
  color: var(--muted-text);
  font-size: 14px;
}

.article-title {
  font-size: 28px;
  margin-bottom: 15px;
  color: var(--text-color);
}

.article-excerpt {
  color: var(--muted-text);
  line-height: 1.8;
  margin-bottom: 20px;
  flex: 1;
}

.read-more {
  align-self: flex-start;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.read-more:hover {
  background-color: var(--primary-hover);
}

.article-list {
  margin-bottom: 60px;
}

.article-list h2 {
  font-size: 24px;
  margin-bottom: 30px;
  color: var(--text-color);
}

.articles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.article-card {
  background-color: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.article-card-image {
  height: 200px;
  background-color: var(--secondary-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted-text);
}

.article-card-content {
  padding: 20px;
}

.article-card .article-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.article-card .article-excerpt {
  font-size: 14px;
  margin-bottom: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.newsletter {
  background-color: var(--secondary-bg);
  padding: 60px;
  border-radius: 8px;
  text-align: center;
}

.newsletter h2 {
  font-size: 28px;
  margin-bottom: 15px;
  color: var(--text-color);
}

.newsletter p {
  color: var(--muted-text);
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.newsletter-form {
  display: flex;
  max-width: 500px;
  margin: 0 auto;
}

.newsletter-input {
  flex: 1;
  padding: 12px 20px;
  border: 1px solid var(--border-color);
  border-radius: 30px 0 0 30px;
  font-size: 16px;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.newsletter-button {
  padding: 12px 24px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0 30px 30px 0;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.newsletter-button:hover {
  background-color: var(--primary-hover);
}

footer {
  margin-top: 60px;
  background-color: var(--secondary-bg);
  border-top: 1px solid var(--border-color);
  padding: 60px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 20px;
  color: var(--text-color);
  margin-top: 0;
}

.footer-section p {
  color: var(--muted-text);
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  text-decoration: none;
  color: var(--muted-text);
  transition: color 0.2s;
}

.footer-section ul li a:hover {
  color: var(--primary-color);
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  text-decoration: none;
  color: var(--muted-text);
  transition: color 0.2s;
}

.social-link:hover {
  color: var(--primary-color);
}

.copyright {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
  color: var(--muted-text);
}
</style>