<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
 <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
</template>

<script></script>

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
</style>
