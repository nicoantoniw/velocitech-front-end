<template>
    <div class="csvs-container">
        <q-table
      title="Files"
      :rows="rows"
      :columns="columns"
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
  { name: 'name',label: 'Name',field:'id' align: 'center' },
  { name: 'pcc',label: 'PCC',align: 'center' },
]
let rows


const getCsvs = async () => {
  try {
    const response = await axios.get(`csv/csv`);
    rows = response.data.csvs
    console.log(rows[0]);
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