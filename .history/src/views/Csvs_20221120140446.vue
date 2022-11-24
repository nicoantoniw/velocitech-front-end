<template>
    <div class="csvs-container">
       
    </div>
</template>

<script setup>
import { inject, ref, onMounted } from "vue";
import axios from 'axios'

const file = ref();

const upload = async () => {
    const fd = new FormData();
      fd.append("file", file.value);
  try {
    const response = await axios.post(`csv/add`, fd);
    file.value = null
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss">
.csvs-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;

    
}
</style>