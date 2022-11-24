<template>
    <div class="csvs-container">
        <q-table
      title="Files"
      :columns="columns"
      :data="csvs"
      row-key="name"
    />
    </div>
</template>

<script setup>
import { inject, ref, onMounted } from "vue";
import axios from 'axios'

onMounted(() => {
  getCsvs()
});

const columns = [
  { name: 'name',label: 'Name', field:'name', align: 'center' },
  { name: 'pcc',label: 'PCC', field:'user.username', align: 'center' },
]
let csvs


const getCsvs = async () => {
  try {
    const response = await axios.get(`csv/csv`);
    csvs = response.data.csvs
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