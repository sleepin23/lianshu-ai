<template>
  <div class="home-page">
    <header class="header">
      <div class="logo">
        <h1>我的网站</h1>
      </div>
      <nav>
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/product" class="nav-link">产品</router-link>
        <router-link to="/blog" class="nav-link">博客</router-link>
        <router-link to="/dashboard" class="nav-link">仪表盘</router-link>
      </nav>
    </header>

    <main>
      <section class="hero">
        <h2>欢迎来到我们的网站</h2>
        <p>这是一个示例内容，展示AI助手面板的集成效果。</p>
      </section>

      <section class="features">
        <div class="feature-card">
          <h3>功能一</h3>
          <p>这是功能一的描述内容，可以详细介绍产品或服务的特点。</p>
        </div>
        <div class="feature-card">
          <h3>功能二</h3>
          <p>这是功能二的描述内容，可以详细介绍产品或服务的特点。</p>
        </div>
        <div class="feature-card">
          <h3>功能三</h3>
          <p>这是功能三的描述内容，可以详细介绍产品或服务的特点。</p>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 我的网站. 保留所有权利.</p>
    </footer>
  </div>
</template>

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
  border-bottom: 1px solid #eaeaea;
}

.logo h1 {
  font-size: 24px;
  color: #333;
}

nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover, .router-link-active {
  color: #4a6cf7;
}

main {
  padding: 40px 0;
}

.hero {
  text-align: center;
  margin-bottom: 60px;
}

.hero h2 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
}

.hero p {
  font-size: 18px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.feature-card {
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
}

.feature-card p {
  color: #666;
}

footer {
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #eaeaea;
  color: #666;
}

/* 暗黑模式样式 */
@media (prefers-color-scheme: dark) {
  .header {
    border-bottom: 1px solid #333;
  }

  .logo h1 {
    color: #e0e0e0;
  }

  .nav-link {
    color: #e0e0e0;
  }

  .nav-link:hover, .router-link-active {
    color: #5d7bf9;
  }

  .hero h2 {
    color: #e0e0e0;
  }

  .hero p {
    color: #aaa;
  }

  .feature-card {
    background-color: #1e1e1e;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  .feature-card:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  }

  .feature-card h3 {
    color: #e0e0e0;
  }

  .feature-card p {
    color: #aaa;
  }

  footer {
    border-top: 1px solid #333;
    color: #aaa;
  }
}
</style>