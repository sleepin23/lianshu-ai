<template>
  <div class="dashboard-page">
    <header class="header">
      <div class="logo">
        <h1>DataDash</h1>
      </div>
      <nav>
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/product" class="nav-link">产品</router-link>
        <router-link to="/blog" class="nav-link">博客</router-link>
        <router-link to="/dashboard" class="nav-link active">仪表盘</router-link>
      </nav>
    </header>

    <main class="dashboard-content">
      <h1 class="page-title">数据概览</h1>

      <div class="stats-cards">
        <div class="stat-card" @click="selectMetric('revenue')">
          <div class="stat-icon revenue">💰</div>
          <div class="stat-details">
            <h3 class="stat-title">总收入</h3>
            <div class="stat-value">¥128,430</div>
            <div class="stat-change positive">+12.5% 较上月</div>
          </div>
        </div>
        <div class="stat-card" @click="selectMetric('users')">
          <div class="stat-icon users">👥</div>
          <div class="stat-details">
            <h3 class="stat-title">活跃用户</h3>
            <div class="stat-value">8,642</div>
            <div class="stat-change positive">+5.3% 较上月</div>
          </div>
        </div>
        <div class="stat-card" @click="selectMetric('orders')">
          <div class="stat-icon orders">📦</div>
          <div class="stat-details">
            <h3 class="stat-title">订单数量</h3>
            <div class="stat-value">1,204</div>
            <div class="stat-change negative">-2.1% 较上月</div>
          </div>
        </div>
      </div>

      <div class="charts-section">
        <div class="chart-card large">
          <div class="chart-header">
            <h3 class="chart-title">{{ chartTitles[selectedMetric] || '收入趋势' }}</h3>
            <select class="chart-select" v-model="timeRange">
              <option value="7">最近7天</option>
              <option value="30">最近30天</option>
              <option value="90">最近90天</option>
            </select>
          </div>
          <div class="chart-placeholder">
            {{ chartTitles[selectedMetric] || '收入趋势' }}图表
          </div>
        </div>

        <div class="chart-row">
          <div class="chart-card">
            <div class="chart-header">
              <h3 class="chart-title">用户分布</h3>
            </div>
            <div class="chart-placeholder">
              用户分布图表
            </div>
          </div>
          <div class="chart-card">
            <div class="chart-header">
              <h3 class="chart-title">销售渠道</h3>
            </div>
            <div class="chart-placeholder">
              销售渠道图表
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <p>&copy; 2025 DataDash. 保留所有权利.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch, inject } from 'vue';

// 获取上下文更新方法
const updatePageContext = inject('updatePageContext') as Function;

// 选中的指标
const selectedMetric = ref('revenue');

// 时间范围
const timeRange = ref('30');

// 图表标题
const chartTitles = {
  revenue: '收入趋势',
  users: '用户增长',
  orders: '订单数量'
};

// 仪表盘数据
const dashboardData = reactive({
  metrics: {
    revenue: {
      value: '¥128,430',
      change: '+12.5%',
      trend: 'positive'
    },
    users: {
      value: '8,642',
      change: '+5.3%',
      trend: 'positive'
    },
    orders: {
      value: '1,204',
      change: '-2.1%',
      trend: 'negative'
    }
  },
  timeRange: '30'
});

// 选择指标
const selectMetric = (metric: string) => {
  selectedMetric.value = metric;
};

// 组件挂载时更新上下文
onMounted(() => {
  updatePageContext({
    pageType: 'dashboard',
    pageTitle: '数据仪表盘',
    keywords: ['数据分析', '仪表盘', '业务指标'],
    pageData: {
      dashboard: dashboardData,
      selectedMetric: selectedMetric.value,
      timeRange: timeRange.value
    }
  });
});

// 监听选中指标变化，更新上下文
watch(selectedMetric, (newMetric) => {
  updatePageContext({
    pageData: {
      dashboard: dashboardData,
      selectedMetric: newMetric,
      timeRange: timeRange.value
    }
  });
});

// 监听时间范围变化，更新上下文
watch(timeRange, (newRange) => {
  dashboardData.timeRange = newRange;
  updatePageContext({
    pageData: {
      dashboard: dashboardData,
      selectedMetric: selectedMetric.value,
      timeRange: newRange
    }
  });
});
</script>

<style scoped>
.dashboard-page {
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

.nav-link:hover, .nav-link.active, .router-link-active {
  color: var(--primary-color);
}

.dashboard-content {
  padding: 40px 0;
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 30px;
  margin-top: 0;
}

.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 15px;
}

.stat-icon.revenue {
  background-color: rgba(49, 130, 206, 0.1);
  color: #3182ce;
}

.stat-icon.users {
  background-color: rgba(43, 108, 176, 0.1);
  color: #2b6cb0;
}

.stat-icon.orders {
  background-color: rgba(128, 90, 213, 0.1);
  color: #805ad5;
}

.stat-details {
  flex: 1;
}

.stat-title {
  font-size: 14px;
  color: var(--muted-text);
  margin-bottom: 5px;
  margin-top: 0;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 5px;
}

.stat-change {
  font-size: 12px;
  display: flex;
  align-items: center;
}

.stat-change.positive {
  color: #38a169;
}

.stat-change.negative {
  color: #e53e3e;
}

.charts-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.chart-card {
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.chart-card.large {
  height: 350px;
}

.chart-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.chart-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
}

.chart-select {
  padding: 6px 10px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 14px;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.chart-placeholder {
  height: 250px;
  background-color: var(--secondary-bg);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted-text);
}

.footer {
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid var(--border-color);
  color: var(--muted-text);
  margin-top: 40px;
}
</style>