<template>
    <div class="csvs-container">
        <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
    </div>
</template>

<script setup>
import { inject, ref, onMounted } from "vue";
import axios from 'axios'

const file = ref();

const process = async () => {
    
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