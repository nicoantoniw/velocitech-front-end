import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import useStore from '../stores/store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '*', redirect: '/' },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        free: true
      }
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
      meta: {
        isUser: true,
        isSeller: true,
        isAdmin: true,
        isSuper: true
      }
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
      meta: {
        isUser: true,
        isSeller: true,
        isAdmin: true,
        isSuper: true
      }
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
      meta: {
        isUser: true,
        isSeller: true,
        isAdmin: true,
        isSuper: true
      }
    },
  ]
});

router.afterEach((to, from) => {
  const store = useStore();
  if (store.scroll == 0) {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }

});

export default router;
