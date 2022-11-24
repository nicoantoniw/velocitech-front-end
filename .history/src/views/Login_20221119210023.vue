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
import router from "../router/router";
import useStore from "../stores/store";
import axios from 'axios'
onMounted(() => {
  
});

const store = useStore();
const username = ref();
const password = ref();

</script>