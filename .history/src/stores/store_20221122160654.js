import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import router from "../router/router";

const useStore = defineStore({
  id: 'useStore',
  state: () => ({
    token: null,
    userId: null,
    role: null,
    email: null,
  }),
  actions: {
    autoLogin() {
      const role = localStorage.getItem('role');
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      if (!token) {
        return;
      }
      this.role = role;
      this.userId = userId;
      this.token = token;
      this.email = email;
    },

    autoLogout() {
      setTimeout(() => {
        this.logout();
      }, 36000000);
    },

    async login(response) {
      this.token = response.data.token;
      this.userId = response.data.userId;
      this.role = response.data.role;
      this.email = response.data.email;
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('role', response.data.role);
      localStorage.setItem('email', response.data.email);
      this.autoLogout();
      if (response.data.role === 'admin') {
        window.location.reload();
        router.replace('/csvs');
      } else if (response.data.role === 'pcc') {
        router.replace("/csv");
      } else {
        router.replace("/certificate");
      }
    },

    logout() {
      this.token = null;
      this.userId = null;
      this.role = null;
      this.email = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('role');
      localStorage.removeItem('email');
      router.replace('/login');
    },
  }
});

export default useStore;

