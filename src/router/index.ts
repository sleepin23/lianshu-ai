import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductPage from '../views/ProductPage.vue';
import BlogPage from '../views/BlogPage.vue';
import DashboardPage from '../views/DashboardPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: '首页 - 智能助手'
    }
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductPage,
    meta: {
      title: '产品 - 智能助手'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
    meta: {
      title: '博客 - 智能助手'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    meta: {
      title: '仪表盘 - 智能助手'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 全局前置守卫，更新页面标题
router.beforeEach((to, _from, next) => {
  // 更新页面标题
  document.title = to.meta.title as string || '智能助手';
  next();
});

export default router;