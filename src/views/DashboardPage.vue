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
        <div class="stat-card">
          <div class="stat-icon revenue">💰</div>
          <div class="stat-details">
            <h3 class="stat-title">总收入</h3>
            <div class="stat-value">¥128,430</div>
            <div class="stat-change positive">+12.5% 较上月</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon users">👥</div>
          <div class="stat-details">
            <h3 class="stat-title">活跃用户</h3>
            <div class="stat-value">8,642</div>
            <div class="stat-change positive">+5.3% 较上月</div>
          </div>
        </div>
        <div class="stat-card">
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
            <h3 class="chart-title">收入趋势</h3>
            <select class="chart-select">
              <option>最近7天</option>
              <option>最近30天</option>
              <option>最近90天</option>
            </select>
          </div>
          <div class="chart-placeholder">
            收入趋势图表
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

.nav-link:hover, .nav-link.active, .router-link-active {
  color: #4a6cf7;
}

.dashboard-content {
  padding: 40px 0;
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a202c;
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
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
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
  background-color: #ebf8ff;
  color: #3182ce;
}

.stat-icon.users {
  background-color: #e9f5fe;
  color: #2b6cb0;
}

.stat-icon.orders {
  background-color: #faf5ff;
  color: #805ad5;
}

.stat-details {
  flex: 1;
}

.stat-title {
  font-size: 14px;
  color: #718096;
  margin-bottom: 5px;
  margin-top: 0;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
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
  background-color: white;
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
  color: #1a202c;
  margin: 0;
}

.chart-select {
  padding: 6px 10px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 14px;
}

.chart-placeholder {
  height: 250px;
  background-color: #f8f9fa;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a0aec0;
}

.footer {
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #eaeaea;
  color: #666;
  margin-top: 40px;
}

/* 暗黑模式样式 */
@media (prefers-color-scheme: dark) {
  .logo h1 {
    color: #e0e0e0;
  }

  .nav-link {
    color: #e0e0e0;
  }

  .nav-link:hover, .nav-link.active, .router-link-active {
    color: #5d7bf9;
  }

  .page-title {
    color: #e0e0e0;
  }

  .stat-card, .chart-card {
    background-color: #1e1e1e;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .stat-title {
    color: #a0aec0;
  }

  .stat-value {
    color: #e0e0e0;
  }

  .chart-title {
    color: #e0e0e0;
  }

  .chart-select {
    background-color: #252525;
    border-color: #333;
    color: #e0e0e0;
  }

  .chart-placeholder {
    background-color: #252525;
    color: #718096;
  }

  .footer {
    border-top: 1px solid #333;
    color: #aaa;
  }
}
</style>