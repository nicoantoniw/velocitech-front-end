<template>
 <router-view v-slot="{ Component }">
  <transition name="fade" mode="out-in">
    <div v-if="store.$state.userId" class="navbar">
      <q-btn class="btn" color="dark" label="Logout" @click="logout"  />
    </div>
  </transition>
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
</template>

<script setup>
import { inject, ref, onMounted, useTransitionState } from "vue";
import { RouterLink, RouterView, useRoute } from 'vue-router'

import useStore from "./stores/store";

const store = useStore()
const route = useRoute()

onMounted(() => {
  store.autoLogin()
});

const logout =() =>{
store.logout()
}

</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  color: black;
 width: 100vw;
  min-height: 100vh;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.navbar{
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: right;
  align-items: center;
}
</style>
