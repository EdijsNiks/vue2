import { createRouter, createWebHistory } from 'vue-router';
import { store } from '@/store';

import LandingComponent from './components/LandingComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import AboutMeComponent from './components/AboutMeComponent.vue';

const routes = [
    {
        path: '/',
        name: 'landing',
        component: LandingComponent,
    },
    {
        path: '/home',
        name: 'home',
        component: HomeComponent,
        meta: { requiresAuth: true },
    },
    {
        path: '/about-me',
        name: 'aboutMe',
        component: AboutMeComponent,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const { requiresAuth } = to.meta;
    const { logged_in } = store.state.user;
    if (requiresAuth && !logged_in) {
        next({ name: 'landing' });
    } else {
        next();
    }
});

store.watch(
    ({ user: { logged_in } }) => logged_in,
    (newVal, oldVal) => {
        if (newVal && !oldVal) {
            router.push('/home');
        } else if (!newVal && oldVal) {
            router.push('/');
        }
    }
);

export default router;