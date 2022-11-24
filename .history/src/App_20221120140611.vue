<template>
 <router-view v-slot="{ Component }">
  <!-- <div class="navbar">
    <q-btn color="dark" label="Logout"  />
  </div> -->
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
</template>

<script setup>
import { inject, ref, onMounted, useTransitionState } from "vue";
import { RouterLink, RouterView } from 'vue-router'

import useStore from "./stores/store";

const store = useStore()

onMounted(() => {
  store.autoLogin()
});
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  color: black;
  width: 100vw;
  height: 100vh;
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
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}
</style>
