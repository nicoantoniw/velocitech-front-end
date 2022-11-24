import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '*', redirect: '/' },
    {
      path: '/',
      name: 'home',
      component: Home
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
