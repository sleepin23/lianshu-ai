<template>
  <div class="product-page">
    <header class="header">
      <div class="logo">
        <h1>TechStore</h1>
      </div>
      <nav>
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/product" class="nav-link active">产品</router-link>
        <router-link to="/blog" class="nav-link">博客</router-link>
        <router-link to="/dashboard" class="nav-link">仪表盘</router-link>
      </nav>
    </header>

    <main>
      <div class="product-hero">
        <div class="product-image">
          <div class="image-placeholder">产品图片</div>
        </div>
        <div class="product-info">
          <h1>超级智能手表 Pro</h1>
          <div class="product-rating">
            <span class="stars">★★★★☆</span>
            <span class="reviews">(128 评价)</span>
          </div>
          <div class="product-price">¥1,999.00</div>
          <p class="product-description">
            这款超级智能手表配备了先进的健康监测功能，包括心率监测、血氧监测和睡眠追踪。
            它还具有长达7天的电池续航时间，防水功能，以及多种运动模式。
          </p>
          <div class="product-colors">
            <span class="color-label">颜色：</span>
            <div class="color-options">
              <div class="color-option black active"></div>
              <div class="color-option silver"></div>
              <div class="color-option gold"></div>
              <div class="color-option blue"></div>
            </div>
          </div>
          <div class="product-actions">
            <button class="btn-primary">立即购买</button>
            <button class="btn-secondary">加入购物车</button>
          </div>
        </div>
      </div>

      <section class="product-details">
        <div class="tabs">
          <button class="tab active">规格参数</button>
          <button class="tab">功能特点</button>
          <button class="tab">用户评价</button>
        </div>

        <div class="tab-content">
          <div class="specs">
            <div class="spec-item">
              <div class="spec-name">屏幕</div>
              <div class="spec-value">1.78英寸 AMOLED 显示屏</div>
            </div>
            <div class="spec-item">
              <div class="spec-name">电池</div>
              <div class="spec-value">410mAh，最长7天续航</div>
            </div>
            <div class="spec-item">
              <div class="spec-name">防水等级</div>
              <div class="spec-value">5ATM</div>
            </div>
            <div class="spec-item">
              <div class="spec-name">连接</div>
              <div class="spec-value">蓝牙5.2，WiFi</div>
            </div>
            <div class="spec-item">
              <div class="spec-name">传感器</div>
              <div class="spec-value">心率，加速度计，陀螺仪，气压计</div>
            </div>
            <div class="spec-item">
              <div class="spec-name">尺寸</div>
              <div class="spec-value">46 x 46 x 10.7 mm</div>
            </div>
          </div>
        </div>
      </section>

      <section class="related-products">
        <h2>相关产品</h2>
        <div class="product-grid">
          <div class="product-card">
            <div class="product-card-image">产品图片</div>
            <h3>智能手表 Lite</h3>
            <p class="price">¥899.00</p>
          </div>
          <div class="product-card">
            <div class="product-card-image">产品图片</div>
            <h3>智能手环 Mini</h3>
            <p class="price">¥399.00</p>
          </div>
          <div class="product-card">
            <div class="product-card-image">产品图片</div>
            <h3>运动手表 Ultra</h3>
            <p class="price">¥2,499.00</p>
          </div>
          <div class="product-card">
            <div class="product-card-image">产品图片</div>
            <h3>智能手表表带</h3>
            <p class="price">¥129.00</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h3>客户服务</h3>
          <ul>
            <li><a href="#">联系我们</a></li>
            <li><a href="#">订单状态</a></li>
            <li><a href="#">配送信息</a></li>
            <li><a href="#">退换政策</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>关于我们</h3>
          <ul>
            <li><a href="#">公司简介</a></li>
            <li><a href="#">招贤纳士</a></li>
            <li><a href="#">新闻中心</a></li>
            <li><a href="#">隐私政策</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>关注我们</h3>
          <div class="social-links">
            <a href="#" class="social-link">微信</a>
            <a href="#" class="social-link">微博</a>
            <a href="#" class="social-link">抖音</a>
            <a href="#" class="social-link">小红书</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2025 TechStore. 保留所有权利.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.product-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  padding-bottom: 80px; /* 为AI按钮留出空间 */
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
  font-weight: 700;
  margin: 0;
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

.nav-link:hover, .nav-link.active {
  color: #4a6cf7;
}

main {
  padding: 40px 0;
}

.product-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

.product-image {
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
}

.image-placeholder {
  color: #999;
  font-size: 18px;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-info h1 {
  font-size: 32px;
  color: #333;
  margin: 0;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 10px;
}

.stars {
  color: #f9a825;
  font-size: 20px;
}

.reviews {
  color: #666;
}

.product-price {
  font-size: 28px;
  font-weight: 700;
  color: #4a6cf7;
}

.product-description {
  color: #666;
  line-height: 1.8;
  margin: 0;
}

.product-colors {
  display: flex;
  align-items: center;
  gap: 15px;
}

.color-label {
  font-weight: 500;
}

.color-options {
  display: flex;
  gap: 10px;
}

.color-option {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
}

.color-option.active::after {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 2px solid #4a6cf7;
  border-radius: 50%;
}

.color-option.black {
  background-color: #000;
}

.color-option.silver {
  background-color: #c0c0c0;
}

.color-option.gold {
  background-color: #d4af37;
}

.color-option.blue {
  background-color: #0066cc;
}

.product-actions {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.btn-primary, .btn-secondary {
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background-color: #4a6cf7;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #3a5bd9;
}

.btn-secondary {
  background-color: white;
  color: #4a6cf7;
  border: 1px solid #4a6cf7;
}

.btn-secondary:hover {
  background-color: #f0f4ff;
}

.product-details {
  margin-bottom: 60px;
}

.tabs {
  display: flex;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 30px;
}

.tab {
  padding: 12px 24px;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  position: relative;
}

.tab.active {
  color: #4a6cf7;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #4a6cf7;
}

.specs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.spec-item {
  display: flex;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 6px;
}

.spec-name {
  font-weight: 600;
  width: 100px;
  flex-shrink: 0;
}

.related-products h2 {
  font-size: 24px;
  margin-bottom: 30px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.product-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.product-card-image {
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}

.product-card h3 {
  padding: 15px 15px 5px;
  font-size: 16px;
  margin: 0;
}

.product-card .price {
  padding: 0 15px 15px;
  color: #4a6cf7;
  font-weight: 600;
  margin: 0;
}

footer {
  margin-top: 60px;
  background-color: #f8f9fa;
  border-top: 1px solid #eaeaea;
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
  color: #333;
  margin-top: 0;
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
  color: #666;
  transition: color 0.2s;
}

.footer-section ul li a:hover {
  color: #4a6cf7;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  text-decoration: none;
  color: #666;
  transition: color 0.2s;
}

.social-link:hover {
  color: #4a6cf7;
}

.copyright {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #eaeaea;
  color: #666;
}

/* 暗黑模式样式 */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #121212;
    color: #e0e0e0;
  }

  .header {
    border-bottom: 1px solid #333;
  }

  .logo h1 {
    color: #e0e0e0;
  }

  .nav-link {
    color: #e0e0e0;
  }

  .nav-link:hover, .nav-link.active {
    color: #5d7bf9;
  }

  .product-image {
    background-color: #1e1e1e;
  }

  .image-placeholder {
    color: #777;
  }

  .product-info h1 {
    color: #e0e0e0;
  }

  .reviews {
    color: #aaa;
  }

  .product-price {
    color: #5d7bf9;
  }

  .product-description {
    color: #aaa;
  }

  .btn-primary {
    background-color: #5d7bf9;
  }

  .btn-primary:hover {
    background-color: #4a6cf7;
  }

  .btn-secondary {
    background-color: #1e1e1e;
    color: #5d7bf9;
    border: 1px solid #5d7bf9;
  }

  .btn-secondary:hover {
    background-color: #252525;
  }

  .tabs {
    border-bottom: 1px solid #333;
  }

  .tab {
    color: #aaa;
  }

  .tab.active {
    color: #5d7bf9;
  }

  .tab.active::after {
    background-color: #5d7bf9;
  }

  .spec-item {
    background-color: #1e1e1e;
  }

  .product-card {
    background-color: #1e1e1e;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  .product-card:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  }

  .product-card-image {
    background-color: #252525;
    color: #777;
  }

  .product-card .price {
    color: #5d7bf9;
  }

  footer {
    background-color: #1a1a1a;
    border-top: 1px solid #333;
  }

  .footer-section h3 {
    color: #e0e0e0;
  }

  .footer-section ul li a {
    color: #aaa;
  }

  .footer-section ul li a:hover {
    color: #5d7bf9;
  }

  .social-link {
    color: #aaa;
  }

  .social-link:hover {
    color: #5d7bf9;
  }

  .copyright {
    border-top: 1px solid #333;
    color: #aaa;
  }
}
</style>