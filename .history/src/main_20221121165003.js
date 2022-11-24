import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';

import App from './App.vue';
import router from './router/router';
import './assets/main.css';
import 'quasar/src/css/index.sass';
import '@quasar/extras/material-icons/material-icons.css';

import axios from 'axios';

const app = createApp(App);
axios.defaults.baseURL = 'http://localhost:3000/api';
console.log(localstorage.getItem('token'));
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
axios.defaults.headers.common['Content-Type'] = `application/json`;

app.use(createPinia());
app.use(router);
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
});

app.mount('#app');
