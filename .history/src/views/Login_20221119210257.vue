<template>
    <div class="login-container">
        <h3>Sign in to your account</h3>
        <div class="login-form">
            <q-input outlined v-model="username" label="Username" />
            <q-input outlined v-model="password" label="Password" />
        </div>
    </div>
</template>

<script setup>
import { inject, ref, onMounted } from "vue";
import router from "../router/router";
import useStore from "../stores/store";
import axios from 'axios'
onMounted(() => {
  
});

const store = useStore();
const username = ref();
const password = ref();

</script>

<style lang="scss">
.login-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .login-form{
        width: 300px;
    }

}
</style>