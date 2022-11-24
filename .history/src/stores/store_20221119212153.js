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
    login() { }
  }
});

export default useStore;

