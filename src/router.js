import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import ContactWindow from "./components/ContactWindow.vue";

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage,
    },
    {
        path: '/contact',
        name: 'ContactWindow',
        component: ContactWindow,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
    console.log(`从 ${from.path} 导航到 ${to.path}`);
    // 可以在这里进行一些权限验证、登录检查等操作
    // 如果验证通过，调用 next() 继续导航
    // 如果验证不通过，可以调用 next(false) 阻止导航，或者重定向到其他页面，如 next('/login')
    next();
});

// 全局后置守卫
router.afterEach((to, from) => {
    console.log(`完成从 ${from.path} 到 ${to.path} 的导航`);
});

export default router;