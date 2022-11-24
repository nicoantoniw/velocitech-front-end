import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import './assets/main.css';

import axios from 'axios';

const app = createApp(App);
axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.headers.common['Content-Type'] = `application/json`;

app.use(createPinia());
app.use(router);

app.mount('#app');
