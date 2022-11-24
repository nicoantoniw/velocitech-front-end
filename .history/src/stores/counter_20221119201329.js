import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

const useStore = defineStore({
  id: 'useStore',
  state: () => ({
    scroll: 0
  }),
  // getters: {
  // },
  actions: {
    changeScroll(value) {
      this.scroll = value;
    }
  }
});

export default useStore;

