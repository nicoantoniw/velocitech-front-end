<template>
    <div>
        <h3>Sign in to your account</h3>
        <div class="login-form">
            <q-input outlined v-model="text" label="Outlined" />
        </div>
    </div>
</template>

<script setup>
import { inject, ref, onMounted } from "vue";
import router from "../router/index";
import useStore from "../stores/store";
import axios from 'axios'
onMounted(() => {
  
});

const store = useStore();
const myEl = ref(null);
const smoothScroll = inject("smoothScroll");
const navbar = ref(true);
const navbarCheckbox = ref();
const scrollToMyEl = () => {
  smoothScroll({
    scrollTo: myEl.value,
    duration: 2000,
    offset: 500,
  });
};
const hideNavbar = () => {
  setTimeout(() => {
    navbar.value = false;
    navbarCheckbox.value = false;
  }, 700);
};
</script>