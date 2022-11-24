<template>
    <div class="csvs-container">
        <q-table
      title="Files"
      :columns="columns"
      row-key="name"
    />
    </div>
</template>

<script setup>
import { inject, ref, onMounted, onBeforeMount } from "vue";
import axios from 'axios'

onMounted(() => {
  getCsvs()
});

const columns = ref([
  { name: 'name',label: 'Name', field:'name', align: 'center' },
  { name: 'key',label: 'PCC', field:'key', align: 'center' },
])
let csvs = ref([])


const getCsvs = async () => {
  try {
    const response = await axios.get(`csv/csv`);
    csvs = response.data.csvs
    console.log(csvs);
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
    height: 100vh;
}
</style>