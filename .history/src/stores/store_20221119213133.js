import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

const useStore = defineStore({
  id: 'useStore',
  state: () => ({
    token: null,
    userId: null,
    role: null,
  }),
  actions: {
    autoLogin() {
      const role = localStorage.getItem('role');
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }

      this.role = role;
      this.userId = userId;
      this.token = token;

    },

    autoLogout({ dispatch }) {
      setTimeout(() => {
        dispatch('logout');
      }, 36000000);
    },

    async login({ dispatch }, response) {



      this.token = response.data.token,
        this.userId = response.data.userId,
        this.role = response.data.role,
        localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('role', response.data.role);



      dispatch('autoLogout');
      router.replace("/");
    },

    logout({ commit }) {
      commit('clearUser');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('plan');
      localStorage.removeItem('status');
      localStorage.removeItem('userId');
      localStorage.removeItem('groupId');
      localStorage.removeItem('username');
      router.replace('/login');
    },
  }
});

export default useStore;

