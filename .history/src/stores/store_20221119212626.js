import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

const useStore = defineStore({
  id: 'useStore',
  state: () => ({
    token: null,
    userId: null,
    role: null,
    username: null,
  }),
  actions: {
    autoLogin() {
      const username = localStorage.getItem('username');
      const role = localStorage.getItem('role');
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }


      this.username = username;
      this.role = role;
      this.userId = userId;
      this.token = token;

    }
    ,
    autoLogout({ dispatch, commit }) {
      setTimeout(() => {
        dispatch('logout');
      }, 36000000);
    },
    async login({ dispatch, commit }, data) {
      try {
        const response = await axios.post("/auth/login", data);
        commit('setUser', {
          token: response.data.token,
          userId: response.data.userId,
          groupId: response.data.groupId,
          role: response.data.role,
          plan: response.data.plan,
          status: response.data.status,
          username: data.username
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);
        localStorage.setItem('plan', response.data.plan);
        localStorage.setItem('status', response.data.status);
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('groupId', response.data.groupId);
        localStorage.setItem('username', data.username);

        dispatch('autoLogout');
        router.replace("/");
      } catch (err) {
        errorAlertHandler(err, 'Usuario no encontrado');
        return false;
      }
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

