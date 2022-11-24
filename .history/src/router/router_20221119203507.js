import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Csv from '../views/Csv.vue';
import Csvs from '../views/Csvs.vue';
import Certificate from '../views/Certificate.vue';
import useStore from '../stores/store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // { path: '*', redirect: '/' },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        isAdmin: true,
        isCcp: true,
        isCyclist: true
      }
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
      path: '/csvs',
      name: 'csvs',
      component: Csvs,
      meta: {
        isAdmin: true,
      }
    },
    {
      path: '/csv',
      name: 'csv',
      component: Csv,
      meta: {
        isCcp: true,
      }
    },
    {
      path: '/certificate',
      name: 'certificate',
      component: Certificate,
      meta: {
        isCyclist: true
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
