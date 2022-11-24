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
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        isAdmin: true,
        isPcc: true,
        isCyclist: true
      }
    },
    { path: '/:catchAll(.*)', redirect: '/' },
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
        isPcc: true,
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

router.afterEach((to, from, next) => {
  const store = useStore();
  if (store.scroll == 0) {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }

  if (to.matched.some(record => record.meta.free) && localStorage.getItem('role') === null) {
    console.log('1');
    next();
  } else if (to.matched.some(record => record.meta.free) && localStorage.getItem('role') !== null) {
    console.log('2');
    next('/');
  }
  else if (localStorage.getItem('role') === 'admin') {
    if (to.matched.some(record => record.meta.isAdmin))
      console.log('3');
    next();
  } else if (localStorage.getItem('role') === 'pcc') {
    if (to.matched.some(record => record.meta.isPcc))
      console.log('4');
    next();
  } else if (localStorage.getItem('role') === 'cyclist') {
    if (to.matched.some(record => record.meta.isCyclist))
      console.log('5');
    next();
  } else {
    next('/login');
  }
});

export default router;
