<template>
    <div class="login-container">
        <h3>Sign in to your account</h3>
        <div class="login-form">
            <q-input outlined v-model="username" label="Username" />
            <q-input outlined v-model="password" label="Password" />
        </div>
        <q-btn color="primary" label="Login" @click="login" />
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

const login = async () => {
  const data = {
    username: username.value,
    password: password.value
  };
  try {
    await axios.post(`/auth/login`, data);
    username.value = ''
    password.value = ''
    store.login()
    router.push("/");
  } catch (err) {
    console.log(err);
  }
};

</script>

<style lang="scss">
.login-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    h3{
        margin-bottom: 2rem;
    }
    .login-form{
        width: 450px;
        margin-bottom: 2rem;
    }

}
</style>