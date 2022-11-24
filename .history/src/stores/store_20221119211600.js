import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

const useStore = defineStore({
  id: 'useStore',
  state: () => ({

  }),
  actions: {
    login() { }
  }
});

export default useStore;

