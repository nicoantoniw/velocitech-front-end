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
  
});

const columns = [
  { name: 'name',label: 'Name',align: 'center' },
  { name: 'pcc',label: 'PCC',align: 'center' },
]
const rows = []
const file = ref();


const getCsvs = async () => {
  try {
    const csvs = await axios.get(`csv/csv`);
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
    height: 100%;
}
</style>