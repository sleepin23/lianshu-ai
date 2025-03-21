import { reactive } from 'vue';

// 定义页面上下文类型
export interface PageContext {
    route: string;
    pageType: 'home' | 'product' | 'blog' | 'dashboard' | '';
    pageTitle: string;
    pageData: any;
    keywords: string[];
    lastUpdated: Date;
}

// 创建默认上下文
export const defaultContext: PageContext = {
    route: '',
    pageType: '',
    pageTitle: '',
    pageData: null,
    keywords: [],
    lastUpdated: new Date()
};

// 创建响应式上下文对象
export const pageContext = reactive<PageContext>({...defaultContext});

// 更新上下文的方法
export const updatePageContext = (context: Partial<PageContext>) => {
    Object.assign(pageContext, context, { lastUpdated: new Date() });
};

// 重置上下文的方法
export const resetPageContext = () => {
    Object.assign(pageContext, defaultContext, { lastUpdated: new Date() });
};