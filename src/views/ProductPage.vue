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
          <h1>{{ product.name }}</h1>
          <div class="product-rating">
            <span class="stars">★★★★☆</span>
            <span class="reviews">(128 评价)</span>
          </div>
          <div class="product-price">{{ product.price }}</div>
          <p class="product-description">
            {{ product.description }}
          </p>
          <div class="product-colors">
            <span class="color-label">颜色：</span>
            <div class="color-options">
              <div
                  v-for="color in product.colors"
                  :key="color.id"
                  class="color-option"
                  :class="[color.code, { active: color.id === selectedColor }]"
                  @click="selectedColor = color.id"
              ></div>
            </div>
          </div>
          <div class="product-actions">
            <button class="btn-primary" @click="addToCart">立即购买</button>
            <button class="btn-secondary" @click="addToCart">加入购物车</button>
          </div>
        </div>
      </div>

      <section class="product-details">
        <div class="tabs">
          <button
              v-for="tab in tabs"
              :key="tab.id"
              class="tab"
              :class="{ active: activeTab === tab.id }"
              @click="activeTab = tab.id"
          >
            {{ tab.name }}
          </button>
        </div>

        <div class="tab-content">
          <div v-if="activeTab === 'specs'" class="specs">
            <div v-for="(spec, index) in product.specs" :key="index" class="spec-item">
              <div class="spec-name">{{ spec.name }}</div>
              <div class="spec-value">{{ spec.value }}</div>
            </div>
          </div>

          <div v-else-if="activeTab === 'features'" class="features">
            <ul>
              <li v-for="(feature, index) in product.features" :key="index">
                {{ feature }}
              </li>
            </ul>
          </div>

          <div v-else-if="activeTab === 'reviews'" class="reviews">
            <p>用户评价功能即将上线...</p>
          </div>
        </div>
      </section>

      <section class="related-products">
        <h2>相关产品</h2>
        <div class="product-grid">
          <div
              v-for="relatedProduct in relatedProducts"
              :key="relatedProduct.id"
              class="product-card"
              @click="viewProduct(relatedProduct.id)"
          >
            <div class="product-card-image">产品图片</div>
            <h3>{{ relatedProduct.name }}</h3>
            <p class="price">{{ relatedProduct.price }}</p>
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

<script setup lang="ts">
import { ref, reactive, onMounted, watch, inject } from 'vue';

// 获取上下文更新方法
const updatePageContext = inject('updatePageContext') as Function;

// 产品数据
const product = reactive({
  id: 1,
  name: '超级智能手表 Pro',
  price: '¥1,999.00',
  description: '这款超级智能手表配备了先进的健康监测功能，包括心率监测、血氧监测和睡眠追踪。它还具有长达7天的电池续航时间，防水功能，以及多种运动模式。',
  colors: [
    { id: 1, name: '黑色', code: 'black' },
    { id: 2, name: '银色', code: 'silver' },
    { id: 3, name: '金色', code: 'gold' },
    { id: 4, name: '蓝色', code: 'blue' }
  ],
  specs: [
    { name: '屏幕', value: '1.78英寸 AMOLED 显示屏' },
    { name: '电池', value: '410mAh，最长7天续航' },
    { name: '防水等级', value: '5ATM' },
    { name: '连接', value: '蓝牙5.2，WiFi' },
    { name: '传感器', value: '心率，加速度计，陀螺仪，气压计' },
    { name: '尺寸', value: '46 x 46 x 10.7 mm' }
  ],
  features: [
    '24小时心率监测',
    '血氧饱和度监测',
    '睡眠质量分析',
    '50种运动模式',
    '来电和消息通知',
    '音乐控制',
    '天气预报',
    '防水5ATM'
  ]
});

// 相关产品
const relatedProducts = reactive([
  { id: 2, name: '智能手表 Lite', price: '¥899.00' },
  { id: 3, name: '智能手环 Mini', price: '¥399.00' },
  { id: 4, name: '运动手表 Ultra', price: '¥2,499.00' },
  { id: 5, name: '智能手表表带', price: '¥129.00' }
]);

// 选中的颜色
const selectedColor = ref(1);

// 标签页
const tabs = [
  { id: 'specs', name: '规格参数' },
  { id: 'features', name: '功能特点' },
  { id: 'reviews', name: '用户评价' }
];

// 当前活动标签
const activeTab = ref('specs');

// 添加到购物车
const addToCart = () => {
  const selectedColorObj = product.colors.find(c => c.id === selectedColor.value);
  alert(`已将 ${product.name} (${selectedColorObj?.name}) 添加到购物车！`);
};

// 查看产品
const viewProduct = (id: number) => {
  alert(`查看产品ID: ${id}`);
};

// 组件挂载时更新上下文
onMounted(() => {
  updatePageContext({
    pageType: 'product',
    pageTitle: product.name,
    keywords: ['智能手表', '健康监测', '可穿戴设备'],
    pageData: {
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        features: product.features
      }
    }
  });
});

// 监听选中颜色变化，更新上下文
watch(selectedColor, (newColor) => {
  const selectedColorObj = product.colors.find(c => c.id === newColor);
  if (selectedColorObj) {
    updatePageContext({
      pageData: {
        product: {
          ...product,
          selectedColor: selectedColorObj.name
        }
      }
    });
  }
});

// 监听活动标签变化，更新上下文
watch(activeTab, (newTab) => {
  updatePageContext({
    pageData: {
      product: {
        ...product,
        activeTab: newTab
      }
    }
  });
});
</script>

<style scoped>
/* 保留原有样式，但使用CSS变量 */
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

.product-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

.product-image {
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

.product-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-info h1 {
  font-size: 32px;
  color: var(--text-color);
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
  color: var(--muted-text);
}

.product-price {
  font-size: 28px;
  font-weight: 700;
  color: var(--primary-color);
}

.product-description {
  color: var(--muted-text);
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
  border: 2px solid var(--primary-color);
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
  background-color: var(--primary-color);
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
}

.btn-secondary {
  background-color: var(--card-bg);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn-secondary:hover {
  background-color: var(--secondary-bg);
}

.product-details {
  margin-bottom: 60px;
}

.tabs {
  display: flex;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 30px;
}

.tab {
  padding: 12px 24px;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: var(--muted-text);
  cursor: pointer;
  position: relative;
}

.tab.active {
  color: var(--primary-color);
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: var(--primary-color);
}

.specs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.spec-item {
  display: flex;
  padding: 15px;
  background-color: var(--secondary-bg);
  border-radius: 6px;
}

.spec-name {
  font-weight: 600;
  width: 100px;
  flex-shrink: 0;
}

.features ul {
  list-style-type: disc;
  padding-left: 20px;
  color: var(--text-color);
}

.features ul li {
  margin-bottom: 10px;
}

.related-products h2 {
  font-size: 24px;
  margin-bottom: 30px;
  color: var(--text-color);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.product-card {
  background-color: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.product-card-image {
  height: 200px;
  background-color: var(--secondary-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted-text);
}

.product-card h3 {
  padding: 15px 15px 5px;
  font-size: 16px;
  margin: 0;
  color: var(--text-color);
}

.product-card .price {
  padding: 0 15px 15px;
  color: var(--primary-color);
  font-weight: 600;
  margin: 0;
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